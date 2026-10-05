#!/usr/bin/env node
// Converts bible/TITHE_Series_Bible.md (+ optional appendix md files) into a styled Word document.
// Usage: node tools/bible_docx.js out.docx in1.md [in2.md ...]
const fs = require('fs');
const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, Footer, PageNumber, Table, TableRow, TableCell,
  WidthType, ShadingType, BorderStyle, LevelFormat, PageBreak, TableOfContents
} = require('docx');

const [out, ...inputs] = process.argv.slice(2);
const md = inputs.map(f => fs.readFileSync(f, 'utf8')).join('\n\n');
const SERIF = 'Georgia', MONO = 'Consolas';
const INK = '1E1A16', BRASS = '8A6A2C', BLOOD = '8E2F22', DIM = '6B6257';

function runs(text, base = {}) {
  const out = [];
  const re = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g;
  let last = 0, m;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(new TextRun({ text: text.slice(last, m.index), ...base }));
    const t = m[0];
    if (t.startsWith('**')) out.push(new TextRun({ text: t.slice(2, -2), bold: true, ...base }));
    else if (t.startsWith('`')) out.push(new TextRun({ text: t.slice(1, -1), font: MONO, size: 18, color: BRASS, ...base }));
    else out.push(new TextRun({ text: t.slice(1, -1), italics: true, ...base }));
    last = m.index + t.length;
  }
  if (last < text.length) out.push(new TextRun({ text: text.slice(last), ...base }));
  return out;
}

const children = [];
// Title page
children.push(new Paragraph({ spacing: { before: 2800 }, alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'TITHE', font: SERIF, size: 120, color: INK, characterSpacing: 400 })] }));
children.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 200 }, border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: BRASS, space: 8 } }, children: [new TextRun({ text: 'A DRAMA IN SEASONS', font: SERIF, size: 22, color: BRASS, characterSpacing: 200 })] }));
children.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 400 }, children: [new TextRun({ text: 'Series Bible — Writers’ Room Edition', font: SERIF, size: 30, italics: true, color: INK })] }));
children.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 200 }, children: [new TextRun({ text: 'Season One: The Marches · Eight Episodes', font: SERIF, size: 22, color: DIM })] }));
children.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 2400 }, children: [new TextRun({ text: 'CONTAINS EVERY SECRET OF THE SERIES', font: SERIF, size: 20, bold: true, color: BLOOD, characterSpacing: 120 })] }));
children.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 120 }, children: [new TextRun({ text: 'Including the identity of the true romance and the cosmic mythology. Read only after playing, or not at all.', font: SERIF, size: 20, italics: true, color: DIM })] }));
children.push(new Paragraph({ children: [new PageBreak()] }));
children.push(new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun('Contents')] }));
children.push(new TableOfContents('Contents', { hyperlink: true, headingStyleRange: '1-2' }));
children.push(new Paragraph({ children: [new PageBreak()] }));

const lines = md.split('\n');
let i = 0, skippedTitle = 0;
while (i < lines.length) {
  let l = lines[i];
  if (/^# /.test(l)) { i++; if (skippedTitle++ === 0) continue; children.push(new Paragraph({ heading: HeadingLevel.HEADING_1, pageBreakBefore: true, children: runs(l.slice(2)) })); continue; }
  if (/^## /.test(l)) {
    const t = l.slice(3);
    if (/^Series Bible/.test(t)) { i++; continue; }
    children.push(new Paragraph({ heading: HeadingLevel.HEADING_1, pageBreakBefore: children.length > 12, children: runs(t) })); i++; continue;
  }
  if (/^### /.test(l)) { children.push(new Paragraph({ heading: HeadingLevel.HEADING_2, children: runs(l.slice(4)) })); i++; continue; }
  if (/^#### /.test(l)) { children.push(new Paragraph({ heading: HeadingLevel.HEADING_3, children: runs(l.slice(5)) })); i++; continue; }
  if (/^---\s*$/.test(l)) { i++; continue; }
  if (/^\|/.test(l)) {
    const rows = [];
    while (i < lines.length && /^\|/.test(lines[i])) { if (!/^\|\s*-/.test(lines[i])) rows.push(lines[i].trim().replace(/^\||\|$/g, '').split('|').map(c => c.trim())); i++; }
    const n = rows[0].length, total = 9360, w = Math.floor(total / n);
    const widths = Array(n).fill(w); widths[n - 1] = total - w * (n - 1);
    children.push(new Table({
      width: { size: total, type: WidthType.DXA }, columnWidths: widths,
      rows: rows.map((r, ri) => new TableRow({ tableHeader: ri === 0, children: r.map((c, ci) => new TableCell({
        width: { size: widths[ci], type: WidthType.DXA },
        shading: ri === 0 ? { type: ShadingType.CLEAR, color: 'auto', fill: 'EFE6D4' } : undefined,
        margins: { top: 60, bottom: 60, left: 100, right: 100 },
        children: [new Paragraph({ children: runs(c, { size: 18, bold: ri === 0 }) })]
      })) }))
    }));
    children.push(new Paragraph({ children: [] }));
    continue;
  }
  if (/^\s*[-*] /.test(l)) {
    while (i < lines.length && /^\s*[-*] /.test(lines[i])) {
      const lvl = /^\s{2,}/.test(lines[i]) ? 1 : 0;
      children.push(new Paragraph({ numbering: { reference: 'bul', level: lvl }, spacing: { after: 60 }, children: runs(lines[i].replace(/^\s*[-*] /, '')) }));
      i++;
    }
    continue;
  }
  if (/^\d+\. /.test(l)) {
    while (i < lines.length && /^\d+\. /.test(lines[i])) { children.push(new Paragraph({ numbering: { reference: 'num', level: 0 }, spacing: { after: 60 }, children: runs(lines[i].replace(/^\d+\. /, '')) })); i++; }
    continue;
  }
  if (/^```/.test(l)) { i++; while (i < lines.length && !/^```/.test(lines[i])) { children.push(new Paragraph({ children: [new TextRun({ text: lines[i], font: MONO, size: 16 })] })); i++; } i++; continue; }
  if (!l.trim()) { i++; continue; }
  let para = l; i++;
  while (i < lines.length && lines[i].trim() && !/^(#|\||\s*[-*] |\d+\. |```|---)/.test(lines[i])) { para += ' ' + lines[i]; i++; }
  children.push(new Paragraph({ spacing: { after: 140 }, children: runs(para) }));
}

const doc = new Document({
  creator: 'TITHE writers’ room', title: 'TITHE — Series Bible',
  styles: {
    default: { document: { run: { font: SERIF, size: 21, color: INK }, paragraph: { spacing: { line: 300 } } } },
    paragraphStyles: [
      { id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { font: SERIF, size: 36, color: INK, characterSpacing: 40 }, paragraph: { spacing: { before: 240, after: 200 }, outlineLevel: 0, border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: BRASS, space: 6 } } } },
      { id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { font: SERIF, size: 27, bold: true, color: BLOOD }, paragraph: { spacing: { before: 280, after: 120 }, outlineLevel: 1, keepNext: true } },
      { id: 'Heading3', name: 'Heading 3', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { font: SERIF, size: 23, bold: true, italics: true, color: BRASS }, paragraph: { spacing: { before: 200, after: 80 }, outlineLevel: 2, keepNext: true } }
    ]
  },
  numbering: { config: [
    { reference: 'bul', levels: [{ level: 0, format: LevelFormat.BULLET, text: '•', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 540, hanging: 270 } } } }, { level: 1, format: LevelFormat.BULLET, text: '–', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 1080, hanging: 270 } } } }] },
    { reference: 'num', levels: [{ level: 0, format: LevelFormat.DECIMAL, text: '%1.', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 540, hanging: 300 } } } }] }
  ] },
  sections: [{
    properties: { titlePage: true, page: { size: { width: 12240, height: 15840 }, margin: { top: 1440, bottom: 1440, left: 1440, right: 1440 } } },
    footers: {
      first: new Footer({ children: [new Paragraph({ children: [] })] }),
      default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'TITHE · Series Bible · ', size: 16, color: DIM }), new TextRun({ children: [PageNumber.CURRENT], size: 16, color: DIM })] })] })
    },
    children
  }]
});
Packer.toBuffer(doc).then(b => { fs.writeFileSync(out, b); console.log('wrote ' + out); });
