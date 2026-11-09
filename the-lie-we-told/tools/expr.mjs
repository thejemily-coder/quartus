// Tiny safe expression evaluator shared by the build tool and (copied into) the engine.
// Grammar: or := and ('||' and)* ; and := not ('&&' not)* ; not := '!' not | cmp ;
// cmp := atom (op atom)? ; atom := number | string | true | false | ident | '(' or ')'
export function tokenize(src) {
  const toks = []; let i = 0;
  while (i < src.length) {
    const c = src[i];
    if (/\s/.test(c)) { i++; continue; }
    const two = src.slice(i, i + 2);
    if (['&&', '||', '==', '!=', '<=', '>='].includes(two)) { toks.push({ t: 'op', v: two }); i += 2; continue; }
    if ('!<>()'.includes(c)) { toks.push({ t: 'op', v: c }); i++; continue; }
    if (c === '"' || c === "'") {
      let j = i + 1; while (j < src.length && src[j] !== c) j++;
      if (j >= src.length) throw new Error('Unterminated string in: ' + src);
      toks.push({ t: 'str', v: src.slice(i + 1, j) }); i = j + 1; continue;
    }
    const num = /^-?\d+(\.\d+)?/.exec(src.slice(i));
    if (num) { toks.push({ t: 'num', v: parseFloat(num[0]) }); i += num[0].length; continue; }
    const id = /^[A-Za-z_][A-Za-z0-9_.]*/.exec(src.slice(i));
    if (id) { toks.push({ t: 'id', v: id[0] }); i += id[0].length; continue; }
    throw new Error(`Bad character '${c}' in expression: ${src}`);
  }
  return toks;
}
export function parse(src) {
  const toks = tokenize(src); let p = 0;
  const peek = () => toks[p]; const eat = (v) => { const t = toks[p]; if (!t || t.v !== v) throw new Error(`Expected '${v}' in: ${src}`); p++; return t; };
  function or() { let l = and(); while (peek() && peek().v === '||') { p++; l = { op: '||', l, r: and() }; } return l; }
  function and() { let l = not(); while (peek() && peek().v === '&&') { p++; l = { op: '&&', l, r: not() }; } return l; }
  function not() { if (peek() && peek().v === '!') { p++; return { op: '!', x: not() }; } return cmp(); }
  function cmp() { const l = atom(); const t = peek(); if (t && t.t === 'op' && ['==', '!=', '<', '>', '<=', '>='].includes(t.v)) { p++; return { op: t.v, l, r: atom() }; } return l; }
  function atom() {
    const t = toks[p++]; if (!t) throw new Error('Unexpected end of expression: ' + src);
    if (t.v === '(' && t.t === 'op') { const e = or(); eat(')'); return e; }
    if (t.t === 'num' || t.t === 'str') return { lit: t.v };
    if (t.t === 'id') { if (t.v === 'true') return { lit: true }; if (t.v === 'false') return { lit: false }; return { id: t.v }; }
    throw new Error(`Unexpected '${t.v}' in: ${src}`);
  }
  const e = or(); if (p !== toks.length) throw new Error('Trailing tokens in: ' + src); return e;
}
export function evaluate(ast, flags) {
  if ('lit' in ast) return ast.lit;
  if ('id' in ast) { const v = flags[ast.id]; return v === undefined ? false : v; }
  const num = (v) => (typeof v === 'number' ? v : v === true ? 1 : v ? Number(v) || 0 : 0);
  switch (ast.op) {
    case '!': return !evaluate(ast.x, flags);
    case '&&': return !!(evaluate(ast.l, flags) && evaluate(ast.r, flags));
    case '||': return !!(evaluate(ast.l, flags) || evaluate(ast.r, flags));
    case '==': return evaluate(ast.l, flags) == evaluate(ast.r, flags);
    case '!=': return evaluate(ast.l, flags) != evaluate(ast.r, flags);
    case '<': return num(evaluate(ast.l, flags)) < num(evaluate(ast.r, flags));
    case '>': return num(evaluate(ast.l, flags)) > num(evaluate(ast.r, flags));
    case '<=': return num(evaluate(ast.l, flags)) <= num(evaluate(ast.r, flags));
    case '>=': return num(evaluate(ast.l, flags)) >= num(evaluate(ast.r, flags));
  }
  throw new Error('bad ast');
}
export function identifiers(ast, out = new Set()) {
  if (!ast) return out;
  if ('id' in ast) out.add(ast.id);
  for (const k of ['l', 'r', 'x']) if (ast[k]) identifiers(ast[k], out);
  return out;
}
