/* QUARTUS — save storage.
   Cloud mode (inside a claude.ai artifact): saves and preferences live in the player's private
   db subtree (data/users/<id>/...), so they follow the player's account across browsers and devices.
   Local mode (standalone page, signed-out viewer, or no write access): localStorage only.
   localStorage is always kept as a mirror, so a cloud outage never loses progress. */
(function () {
  'use strict';
  var Q = window.Q;
  var LS = 'quartus.';
  var St = Q.Store = { mode: 'local', reason: '', uid: null, db: null, ready: null };

  function lsGet(k) { try { return localStorage.getItem(LS + k); } catch (e) { return null; } }
  function lsSet(k, v) { try { localStorage.setItem(LS + k, v); return true; } catch (e) { return false; } }
  function parse(s) { try { return JSON.parse(s); } catch (e) { return null; } }
  function within(p, ms) { return Promise.race([p, new Promise(function (r) { setTimeout(function () { r(null); }, ms); })]); }

  /* ---------- connect ---------- */
  St.init = function () {
    if (St.ready) return St.ready;
    St.ready = (async function () {
      try {
        if (!window.claude || !window.claude.use) { St.reason = 'standalone'; return St.mode; }
        var user = await within(window.claude.use('user'), 12000);
        var db = await within(window.claude.use('db'), 12000);
        if (!user || !db) { St.reason = 'signed-out'; return St.mode; }
        var id = await user.id();
        if (!id) { St.reason = 'signed-out'; return St.mode; }
        St.uid = id; St.db = db; St.mode = 'cloud'; St.reason = '';
        // Probe the private subtree. A viewer who cannot write there falls back to local mode.
        await ref('prefs').get();
      } catch (e) { St.mode = 'local'; St.reason = 'unavailable'; }
      return St.mode;
    })();
    return St.ready;
  };

  function ref(key) { return St.db.doc('data/users/' + St.uid + '/' + key); }
  function cloudFailed(e) { St.mode = 'local'; St.reason = (e && e.code === 'invalid_argument') ? 'read-only' : 'unavailable'; if (St.onChange) St.onChange(); }

  /* ---------- records: {t, label, state} ---------- */
  function cloudGet(key) {
    return ref(key).get().then(function (snap) {
      if (!snap.exists) return null;
      var d = snap.data() || {};
      var state = typeof d.json === 'string' ? parse(d.json) : null;
      return state === null ? null : { t: d.t || 0, label: d.label || '', state: state };
    });
  }

  var chains = {};   // one write at a time per document
  function cloudSet(key, rec) {
    var run = function () { return ref(key).set({ t: rec.t, label: rec.label || '', json: JSON.stringify(rec.state) }); };
    chains[key] = (chains[key] || Promise.resolve()).then(run, run).catch(function (e) { cloudFailed(e); });
    return chains[key];
  }

  St.get = async function (key) {
    await St.init();
    var local = parse(lsGet('save.' + key));
    if (St.mode !== 'cloud') return local;
    var cloud = null;
    try { cloud = await cloudGet(key); } catch (e) { cloudFailed(e); return local; }
    if (local && (!cloud || local.t > cloud.t)) { cloudSet(key, local); return local; }   // local is newer: push it up
    if (cloud) lsSet('save.' + key, JSON.stringify(cloud));                                // cloud is newer: refresh the mirror
    return cloud || local;
  };

  St.put = async function (key, rec) {
    lsSet('save.' + key, JSON.stringify(rec));
    await St.init();
    if (St.mode === 'cloud') await cloudSet(key, rec);
  };

  /* Autosave: coalesce bursts, write the latest state once per pause. */
  var autoTimer = null, autoRec = null;
  St.queueAuto = function (S, label) {
    autoRec = { t: Date.now(), label: label, state: JSON.parse(JSON.stringify(S)) };
    lsSet('save.auto', JSON.stringify(autoRec));           // local mirror is immediate
    clearTimeout(autoTimer);
    autoTimer = setTimeout(St.flush, 700);
  };
  St.flush = function () {
    clearTimeout(autoTimer); autoTimer = null;
    if (!autoRec) return Promise.resolve();
    var rec = autoRec; autoRec = null;
    return St.init().then(function () { if (St.mode === 'cloud') return cloudSet('auto', rec); });
  };
  document.addEventListener('visibilitychange', function () { if (document.visibilityState === 'hidden') St.flush(); });
  window.addEventListener('pagehide', function () { St.flush(); });

  /* ---------- preferences (text size, theme, motion, age gate) ---------- */
  St.localPrefs = function () { return parse(lsGet('prefs')) || {}; };
  St.getPrefs = async function () {
    await St.init();
    var local = St.localPrefs();
    if (St.mode !== 'cloud') return local;
    try {
      var cloud = await cloudGet('prefs');
      var c = cloud && cloud.state || {};
      if (cloud && (cloud.t >= (local._t || 0))) { c._t = cloud.t; lsSet('prefs', JSON.stringify(c)); return c; }
    } catch (e) { cloudFailed(e); }
    return local;
  };
  var prefTimer = null;
  St.putPrefs = function (prefs) {
    prefs._t = Date.now();
    lsSet('prefs', JSON.stringify(prefs));
    clearTimeout(prefTimer);
    prefTimer = setTimeout(function () {
      St.init().then(function () { if (St.mode === 'cloud') cloudSet('prefs', { t: prefs._t, label: 'prefs', state: prefs }); });
    }, 600);
  };

  St.describe = function () {
    if (St.mode === 'cloud') return { cloud: true, text: 'Synced to your Claude account — your saves follow you to any browser or device where you open this page.' };
    var why = {
      'standalone': 'Saved in this browser only. Use a save code to move a game to another device.',
      'signed-out': 'Saved in this browser only. Sign in to claude.ai to sync saves across devices, or use a save code.',
      'read-only': 'Your access level cannot store cloud saves, so saves stay in this browser. Use a save code to move a game.',
      'unavailable': 'Cloud saves are unavailable right now, so saves stay in this browser. Use a save code to move a game.'
    };
    return { cloud: false, text: why[St.reason] || why.unavailable };
  };
})();
