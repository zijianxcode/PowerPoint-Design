import { deckSlides } from "../deck/content.js";
import { PPTX_COLORS, PPTX_FONTS } from "./theme.js";

function addSection(slide, section) {
  slide.addText(section, {
    x: 0.78,
    y: 0.44,
    w: 0.62,
    h: 0.4,
    margin: 0,
    fontFace: PPTX_FONTS.display,
    fontSize: 28,
    bold: true,
    color: PPTX_COLORS.accent,
    fit: "shrink",
  });
}

function buildTitleRuns(data) {
  if (!data.titleLead && !data.titleAccent && !data.titleTail) {
    return data.title;
  }

  const runs = [];
  if (data.titleLead) {
    runs.push({ text: data.titleLead });
  }
  if (data.titleAccent) {
    runs.push({ text: data.titleAccent, options: { color: PPTX_COLORS.accent } });
  }
  if (data.titleTail) {
    runs.push({ text: data.titleTail });
  }
  return runs;
}

function addTitle(slide, data, y = 0.5, h = 0.7, size = 28) {
  slide.addText(buildTitleRuns(data), {
    x: 1.5,
    y,
    w: 10.7,
    h,
    margin: 0,
    fontFace: PPTX_FONTS.display,
    fontSize: size,
    bold: true,
    color: PPTX_COLORS.text,
    fit: "shrink",
    breakLine: false,
  });
}

function addSummary(slide, text, centered = false) {
  slide.addShape("line", {
    x: 0.8,
    y: 6.62,
    w: 6.5,
    h: 0,
    line: { color: PPTX_COLORS.lineSoft, width: 1 },
  });
  slide.addText(text, {
    x: 0.8,
    y: 6.72,
    w: centered ? 11.7 : 6.6,
    h: 0.4,
    margin: 0,
    fontFace: PPTX_FONTS.body,
    fontSize: centered ? 16 : 15,
    color: centered ? PPTX_COLORS.text : PPTX_COLORS.muted,
    align: centered ? "center" : "left",
    fit: "shrink",
  });
}

function addPanel(slide, x, y, w, h, options = {}) {
  slide.addShape("rect", {
    x,
    y,
    w,
    h,
    rectRadius: options.radius ?? 0.08,
    line: {
      color: options.lineColor ?? PPTX_COLORS.line,
      width: options.lineWidth ?? 1,
    },
    fill: { color: options.fillColor ?? PPTX_COLORS.panel },
  });
}

function renderCover(slide, data) {
  addSection(slide, data.section);
  slide.addText(data.eyebrow, {
    x: 1.52,
    y: 0.48,
    w: 3.8,
    h: 0.22,
    margin: 0,
    fontFace: PPTX_FONTS.body,
    fontSize: 10,
    color: PPTX_COLORS.muted,
    charSpacing: 1.5,
  });
  slide.addText(data.title, {
    x: 0.82,
    y: 1.82,
    w: 8.9,
    h: 1.4,
    margin: 0,
    fontFace: PPTX_FONTS.display,
    fontSize: 38,
    bold: true,
    color: PPTX_COLORS.text,
    fit: "shrink",
  });
  slide.addText(data.subtitle, {
    x: 0.84,
    y: 3.18,
    w: 6.8,
    h: 1.1,
    margin: 0,
    fontFace: PPTX_FONTS.body,
    fontSize: 17,
    color: PPTX_COLORS.muted,
    fit: "shrink",
  });
  slide.addText(data.note, {
    x: 0.84,
    y: 4.58,
    w: 6.3,
    h: 0.28,
    margin: 0,
    fontFace: PPTX_FONTS.body,
    fontSize: 10,
    color: PPTX_COLORS.muted,
  });
}

function renderContext(slide, data) {
  addSection(slide, data.section);
  addTitle(slide, data, 0.48, 0.7, 29);

  data.stats.forEach(([label, value], index) => {
    const x = 0.84 + index * 2.22;
    slide.addShape("line", {
      x,
      y: 1.56,
      w: 1.76,
      h: 0,
      line: { color: PPTX_COLORS.accent, width: 1 },
    });
    slide.addText(label, {
      x,
      y: 1.66,
      w: 1.76,
      h: 0.22,
      margin: 0,
      fontFace: PPTX_FONTS.body,
      fontSize: 10,
      bold: true,
      color: PPTX_COLORS.accent,
    });
    slide.addText(value, {
      x,
      y: 1.92,
      w: 1.76,
      h: 0.42,
      margin: 0,
      fontFace: PPTX_FONTS.display,
      fontSize: 24,
      bold: true,
      color: PPTX_COLORS.text,
      fit: "shrink",
    });
  });

  slide.addText(data.statement, {
    x: 0.84,
    y: 2.7,
    w: 8.6,
    h: 1.3,
    margin: 0,
    fontFace: PPTX_FONTS.display,
    fontSize: 22,
    color: PPTX_COLORS.text,
    fit: "shrink",
  });

  data.notes.forEach((note, index) => {
    slide.addText(note, {
      x: 0.88,
      y: 4.32 + index * 0.42,
      w: 5.5,
      h: 0.24,
      margin: 0,
      fontFace: PPTX_FONTS.body,
      fontSize: 13,
      color: PPTX_COLORS.muted,
      bullet: { indent: 8 },
    });
  });

  addSummary(slide, data.summary);
}

function renderThesis(slide, data) {
  addSection(slide, data.section);
  addTitle(slide, data, 0.48, 0.7, 29);

  addPanel(slide, 0.84, 1.72, 3.55, 3.58);
  addPanel(slide, 8.92, 1.72, 3.55, 3.58, {
    lineColor: PPTX_COLORS.accent,
    lineWidth: 1.5,
    fillColor: "1A1713",
  });
  slide.addText(data.leftLabel, {
    x: 1.08, y: 1.98, w: 1.5, h: 0.2, margin: 0, fontSize: 10, bold: true, color: PPTX_COLORS.accent,
  });
  slide.addText(data.leftTitle, {
    x: 1.08, y: 2.24, w: 2.8, h: 0.42, margin: 0, fontSize: 24, bold: true, color: PPTX_COLORS.text, fit: "shrink",
  });
  data.leftPoints.forEach((point, index) => {
    slide.addText(point, {
      x: 1.12, y: 2.9 + index * 0.52, w: 2.7, h: 0.3, margin: 0, fontSize: 13, color: PPTX_COLORS.muted, bullet: { indent: 8 },
    });
  });

  slide.addShape("line", {
    x: 4.9, y: 3.54, w: 3.02, h: 0, line: { color: PPTX_COLORS.accent, width: 1 },
  });
  slide.addText(data.bridge, {
    x: 4.98, y: 2.85, w: 2.86, h: 1.4, margin: 0, fontSize: 14, color: PPTX_COLORS.text, align: "center", valign: "mid", fit: "shrink",
  });

  slide.addText(data.rightLabel, {
    x: 9.18, y: 1.98, w: 1.5, h: 0.2, margin: 0, fontSize: 10, bold: true, color: PPTX_COLORS.accent,
  });
  slide.addText(data.rightTitle, {
    x: 9.18, y: 2.24, w: 2.9, h: 0.46, margin: 0, fontSize: 22, bold: true, color: PPTX_COLORS.text, fit: "shrink",
  });
  data.rightPoints.forEach((point, index) => {
    slide.addText(point, {
      x: 9.22, y: 2.92 + index * 0.52, w: 2.72, h: 0.3, margin: 0, fontSize: 13, color: PPTX_COLORS.muted, bullet: { indent: 8 },
    });
  });

  addSummary(slide, data.summary);
}

function renderRelationship(slide, data) {
  addSection(slide, data.section);
  addTitle(slide, data, 0.48, 0.7, 29);

  const positions = [
    { x: 0.84, w: 4.15, highlight: true },
    { x: 5.24, w: 3.1, highlight: false },
    { x: 8.92, w: 3.1, highlight: false },
  ];

  data.cards.forEach(([title, text], index) => {
    const pos = positions[index];
    addPanel(slide, pos.x, 1.86, pos.w, 2.66, {
      lineColor: pos.highlight ? "5E4227" : PPTX_COLORS.line,
      fillColor: pos.highlight ? "171410" : "111111",
    });
    slide.addText(title, {
      x: pos.x + 0.22, y: 2.1, w: pos.w - 0.44, h: 0.3, margin: 0, fontSize: 20, bold: true, color: PPTX_COLORS.text,
    });
    slide.addText(text, {
      x: pos.x + 0.22, y: 2.6, w: pos.w - 0.44, h: 1.1, margin: 0, fontSize: 13, color: PPTX_COLORS.muted, fit: "shrink",
    });
  });

  addPanel(slide, 5.62, 4.26, 1.95, 0.46, {
    lineColor: "6E4A26",
    fillColor: "17130E",
  });
  slide.addText(data.center, {
    x: 5.74, y: 4.4, w: 1.7, h: 0.12, margin: 0, fontSize: 11, bold: true, color: PPTX_COLORS.accent, align: "center",
  });

  data.notes.forEach((note, index) => {
    slide.addShape("line", {
      x: 0.88 + index * 4.02,
      y: 5.16,
      w: 3.32,
      h: 0,
      line: { color: PPTX_COLORS.lineSoft, width: 1 },
    });
    slide.addText(note, {
      x: 0.88 + index * 4.02,
      y: 5.28,
      w: 3.32,
      h: 0.5,
      margin: 0,
      fontSize: 12.5,
      color: PPTX_COLORS.muted,
      fit: "shrink",
    });
  });

  addSummary(slide, data.summary);
}

function renderStages(slide, data) {
  addSection(slide, data.section);
  addTitle(slide, data, 0.48, 0.62, 29);

  const positions = [
    { x: 0.84, y: 1.94, w: 2.86, h: 3.0, early: true },
    { x: 3.98, y: 1.94, w: 2.86, h: 3.0, early: true },
    { x: 7.72, y: 2.72, w: 2.1, h: 2.22, early: false },
    { x: 10.04, y: 2.72, w: 2.1, h: 2.22, early: false },
  ];

  data.stages.forEach(([title, text], index) => {
    const pos = positions[index];
    slide.addShape("line", {
      x: pos.x,
      y: pos.y,
      w: pos.w,
      h: 0,
      line: { color: pos.early ? "6E4A26" : PPTX_COLORS.lineSoft, width: 1 },
    });
    slide.addText(String(index + 1).padStart(2, "0"), {
      x: pos.x,
      y: pos.y + 0.08,
      w: 0.4,
      h: 0.18,
      margin: 0,
      fontSize: 10,
      bold: true,
      color: PPTX_COLORS.accent,
    });
    slide.addText(title, {
      x: pos.x,
      y: pos.y + 0.34,
      w: pos.w,
      h: 0.34,
      margin: 0,
      fontSize: pos.early ? 20 : 17,
      bold: true,
      color: PPTX_COLORS.text,
      fit: "shrink",
    });
    slide.addText(text, {
      x: pos.x,
      y: pos.y + 0.9,
      w: pos.w,
      h: pos.early ? 1.45 : 1.0,
      margin: 0,
      fontSize: 12.5,
      color: PPTX_COLORS.muted,
      fit: "shrink",
    });
  });

  addSummary(slide, data.summary);
}

function renderRanking(slide, data) {
  addSection(slide, data.section);
  addTitle(slide, data, 0.48, 0.62, 29);

  const featured = data.items.slice(0, 2);
  const supporting = data.items.slice(2);

  featured.forEach(([title, text], index) => {
    const y = 1.82 + index * 1.22;
    slide.addShape("line", {
      x: 0.86,
      y,
      w: 7.5,
      h: 0,
      line: { color: index === 0 ? PPTX_COLORS.accent : PPTX_COLORS.lineSoft, width: 1 },
    });
    slide.addText(String(index + 1).padStart(2, "0"), {
      x: 0.88, y: y + 0.08, w: 0.5, h: 0.24, margin: 0, fontSize: 24, bold: true, color: PPTX_COLORS.accent,
    });
    slide.addText(title, {
      x: 1.62, y: y + 0.08, w: 2.6, h: 0.26, margin: 0, fontSize: 21, bold: true, color: PPTX_COLORS.text,
    });
    slide.addText(text, {
      x: 1.62, y: y + 0.48, w: 5.7, h: 0.4, margin: 0, fontSize: 12.5, color: PPTX_COLORS.muted, fit: "shrink",
    });
  });

  supporting.forEach(([title, text], offset) => {
    const index = offset + 2;
    const y = 4.42 + offset * 0.68;
    slide.addShape("line", {
      x: 6.48,
      y,
      w: 5.68,
      h: 0,
      line: { color: PPTX_COLORS.lineSoft, width: 1 },
    });
    slide.addText(String(index + 1).padStart(2, "0"), {
      x: 6.5, y: y + 0.06, w: 0.4, h: 0.2, margin: 0, fontSize: 16, bold: true, color: PPTX_COLORS.accent,
    });
    slide.addText(title, {
      x: 7.05, y: y + 0.06, w: 1.76, h: 0.22, margin: 0, fontSize: 14.5, bold: true, color: PPTX_COLORS.text,
    });
    slide.addText(text, {
      x: 8.92, y: y + 0.06, w: 3.2, h: 0.28, margin: 0, fontSize: 11.5, color: PPTX_COLORS.muted, fit: "shrink",
    });
  });

  addSummary(slide, data.summary);
}

function renderQuestions(slide, data) {
  addSection(slide, data.section);
  addTitle(slide, data, 0.48, 0.7, 29);

  addPanel(slide, 0.9, 1.84, 3.18, 3.18, {
    lineColor: "5F5B56",
    fillColor: PPTX_COLORS.light,
  });
  slide.addText(data.visualLabel, {
    x: 1.76,
    y: 3.08,
    w: 1.45,
    h: 0.48,
    margin: 0,
    fontSize: 28,
    bold: true,
    color: PPTX_COLORS.darkText,
    align: "center",
  });

  data.questions.forEach(([title, detail], index) => {
    const active = index === data.highlightedQuestion;
    const y = active ? 1.64 : 3.68 + (index - 1) * 0.82;
    const h = active ? 1.14 : 0.56;
    addPanel(slide, 5.02, y, 7.1, h, {
      lineColor: active ? PPTX_COLORS.accent : PPTX_COLORS.line,
      lineWidth: active ? 1.5 : 1,
      fillColor: active ? "17130E" : PPTX_COLORS.panel,
    });
    slide.addText(String(index + 1).padStart(2, "0"), {
      x: 5.26, y: y + 0.16, w: 0.42, h: 0.2, margin: 0, fontSize: active ? 18 : 13, bold: true, color: PPTX_COLORS.accent,
    });
    slide.addText(title, {
      x: 5.82, y: y + 0.12, w: 5.9, h: active ? 0.3 : 0.18, margin: 0, fontSize: active ? 19 : 14, bold: true, color: active ? PPTX_COLORS.text : "C4BCB1",
      fit: "shrink",
    });
    if (active) {
      slide.addText(detail, {
        x: 5.82, y: y + 0.48, w: 5.9, h: 0.24, margin: 0, fontSize: 12.5, color: PPTX_COLORS.muted,
      });
    }
  });

  addSummary(slide, data.summary);
}

function renderCompare(slide, data) {
  addSection(slide, data.section);
  addTitle(slide, data, 0.48, 0.7, 29);

  data.columns.forEach((column, index) => {
    const x = index === 0 ? 0.88 : 6.6;
    addPanel(slide, x, 1.82, 5.64, 3.88, {
      lineColor: index === 1 ? "6E4A26" : PPTX_COLORS.line,
      fillColor: index === 1 ? "171410" : PPTX_COLORS.panel,
    });
    slide.addText(column.title, {
      x: x + 0.26, y: 2.08, w: 2.4, h: 0.24, margin: 0, fontSize: 18, bold: true, color: PPTX_COLORS.text,
    });
    column.items.forEach((item, row) => {
      slide.addText(item, {
        x: x + 0.34,
        y: 2.62 + row * 0.58,
        w: 4.9,
        h: 0.26,
        margin: 0,
        fontSize: 13,
        color: PPTX_COLORS.muted,
        bullet: { indent: 10 },
      });
    });
  });

  addSummary(slide, data.summary);
}

function renderClosing(slide, data) {
  addSection(slide, data.section);
  addTitle(slide, data, 0.48, 0.7, 29);

  slide.addShape("line", {
    x: 0.84,
    y: 1.9,
    w: 10.9,
    h: 0,
    line: { color: "6E4A26", width: 1 },
  });
  slide.addText(data.statement, {
    x: 0.86,
    y: 2.18,
    w: 10.8,
    h: 0.92,
    margin: 0,
    fontSize: 23,
    color: PPTX_COLORS.text,
    fit: "shrink",
  });

  data.points.forEach((point, index) => {
    const x = 0.88 + index * 4.06;
    slide.addShape("line", {
      x,
      y: 3.62,
      w: 3.32,
      h: 0,
      line: { color: PPTX_COLORS.lineSoft, width: 1 },
    });
    slide.addText(point, {
      x,
      y: 3.82,
      w: 3.32,
      h: 1.0,
      margin: 0,
      fontSize: 14,
      color: PPTX_COLORS.muted,
      fit: "shrink",
    });
  });

  addSummary(slide, data.summary, true);
}

function applyBaseSlide(pptx, data) {
  const slide = pptx.addSlide();
  slide.background = { color: PPTX_COLORS.bg };
  slide.color = PPTX_COLORS.text;
  return slide;
}

const renderers = {
  closing: renderClosing,
  compare: renderCompare,
  context: renderContext,
  cover: renderCover,
  questions: renderQuestions,
  ranking: renderRanking,
  relationship: renderRelationship,
  stages: renderStages,
  thesis: renderThesis,
};

export function addDeckSlide(pptx, data) {
  const slide = applyBaseSlide(pptx, data);
  const render = renderers[data.type];

  if (!render) {
    throw new Error(`Unsupported pptx slide type: ${data.type}`);
  }

  render(slide, data);
  return slide;
}

export function addAllDeckSlides(pptx) {
  deckSlides.forEach((slide) => addDeckSlide(pptx, slide));
  return pptx;
}
