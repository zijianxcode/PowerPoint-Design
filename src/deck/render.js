import { deckSlides } from "./content.js";

/**
 * Escape HTML special characters to prevent XSS when injecting
 * slide content strings into innerHTML.
 */
function esc(str) {
  return String(str ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * Zero-pad a number to at least 2 digits (e.g. 1 → "01", 10 → "10").
 */
function pad2(n) {
  return String(n).padStart(2, "0");
}

function renderCompositeTitle(slide) {
  if (slide.titleLead || slide.titleAccent || slide.titleTail) {
    return `${esc(slide.titleLead ?? "")}${slide.titleAccent ? `<span class="slide-page__title-accent">${esc(slide.titleAccent)}</span>` : ""}${esc(slide.titleTail ?? "")}`;
  }

  return esc(slide.title);
}

function renderHeader(slide) {
  return `
    <header class="slide-page__header">
      <span class="slide-page__section">${esc(slide.section)}</span>
      <h2 class="slide-page__title">${renderCompositeTitle(slide)}</h2>
    </header>
  `;
}

function renderSummary(text, centered = false) {
  return `<p class="slide-page__summary${centered ? " slide-page__summary--center" : ""}">${esc(text)}</p>`;
}

function renderCover(slide) {
  return `
    <header class="slide-page__header">
      <span class="slide-page__section">${esc(slide.section)}</span>
      <span class="slide-page__eyebrow">${esc(slide.eyebrow)}</span>
    </header>
    <div class="slide-page__hero">
      <h1 class="slide-page__title slide-page__title--cover">${esc(slide.title)}</h1>
      <p class="slide-page__subtitle">${esc(slide.subtitle)}</p>
      <p class="slide-page__note">${esc(slide.note)}</p>
    </div>
  `;
}

function renderContext(slide) {
  return `
    ${renderHeader(slide)}
    <div class="context-grid">
      <div class="context-grid__facts">
        ${slide.stats
          .map(
            ([label, value]) => `
              <div class="context-grid__fact">
                <span class="context-grid__label">${esc(label)}</span>
                <strong class="context-grid__value">${esc(value)}</strong>
              </div>
            `,
          )
          .join("")}
      </div>
      <div class="context-grid__main">
        <p class="context-grid__statement">${esc(slide.statement)}</p>
        <div class="context-grid__notes">
          ${slide.notes.map((item) => `<p>${esc(item)}</p>`).join("")}
        </div>
      </div>
    </div>
    ${renderSummary(slide.summary)}
  `;
}

function renderThesis(slide) {
  return `
    ${renderHeader(slide)}
    <div class="thesis-shift">
      <article class="thesis-shift__panel">
        <p class="thesis-shift__label">${esc(slide.leftLabel)}</p>
        <h3 class="thesis-shift__title">${esc(slide.leftTitle)}</h3>
        <div class="thesis-shift__points">
          ${slide.leftPoints.map((item) => `<p>${esc(item)}</p>`).join("")}
        </div>
      </article>
      <div class="thesis-shift__bridge">${esc(slide.bridge)}</div>
      <article class="thesis-shift__panel thesis-shift__panel--active">
        <p class="thesis-shift__label">${esc(slide.rightLabel)}</p>
        <h3 class="thesis-shift__title">${esc(slide.rightTitle)}</h3>
        <div class="thesis-shift__points">
          ${slide.rightPoints.map((item) => `<p>${esc(item)}</p>`).join("")}
        </div>
      </article>
    </div>
    ${renderSummary(slide.summary)}
  `;
}

function renderRelationship(slide) {
  return `
    ${renderHeader(slide)}
    <div class="relationship-map">
      ${slide.cards
        .map(
          ([title, text]) => `
            <article class="relationship-map__card">
              <h3>${esc(title)}</h3>
              <p>${esc(text)}</p>
            </article>
          `,
        )
        .join("")}
      <div class="relationship-map__center">${esc(slide.center)}</div>
    </div>
    <div class="relationship-map__notes">
      ${slide.notes.map((item) => `<p>${esc(item)}</p>`).join("")}
    </div>
    ${renderSummary(slide.summary)}
  `;
}

function renderRanking(slide) {
  return `
    ${renderHeader(slide)}
    <div class="ranking-list">
      ${slide.items
        .map(
          ([title, text], index) => `
            <article class="ranking-list__item${index < 2 ? " ranking-list__item--featured" : " ranking-list__item--supporting"}${index === 0 ? " ranking-list__item--active" : ""}">
              <span class="ranking-list__rank">${pad2(index + 1)}</span>
              <div class="ranking-list__body">
                <h3 class="ranking-list__title">${esc(title)}</h3>
                <p>${esc(text)}</p>
              </div>
            </article>
          `,
        )
        .join("")}
    </div>
    ${renderSummary(slide.summary)}
  `;
}

function renderStages(slide) {
  return `
    ${renderHeader(slide)}
    <div class="stage-map">
      ${slide.stages
        .map(
          ([title, text], index) => `
            <article class="stage-map__item${index < 2 ? " stage-map__item--early" : " stage-map__item--later"}">
              <span class="stage-map__index">${pad2(index + 1)}</span>
              <h3 class="stage-map__title">${esc(title)}</h3>
              <p>${esc(text)}</p>
            </article>
          `,
        )
        .join("")}
    </div>
    ${renderSummary(slide.summary)}
  `;
}

function renderQuestions(slide) {
  return `
    ${renderHeader(slide)}
    <div class="slide-page__columns slide-page__columns--questions">
      <div class="question-visual">
        <div class="question-visual__frame">${esc(slide.visualLabel)}</div>
      </div>
      <div class="question-list">
        ${slide.questions
          .map(
            ([title, detail], index) => `
              <div class="question-list__item${index === slide.highlightedQuestion ? " question-list__item--active" : ""}">
                <span class="question-list__index">${pad2(index + 1)}</span>
                <div class="question-list__content">
                  <h3 class="question-list__title">${esc(title)}</h3>
                  <p>${esc(detail)}</p>
                </div>
              </div>
            `,
          )
          .join("")}
      </div>
    </div>
    ${renderSummary(slide.summary)}
  `;
}

function renderCompare(slide) {
  return `
    ${renderHeader(slide)}
    <div class="compare-grid">
      ${slide.columns
        .map(
          (column, index) => `
            <article class="compare-grid__column${index === 1 ? " compare-grid__column--accent" : ""}">
              <h3>${esc(column.title)}</h3>
              <div class="compare-grid__items">
                ${column.items.map((item) => `<p>${esc(item)}</p>`).join("")}
              </div>
            </article>
          `,
        )
        .join("")}
    </div>
    ${renderSummary(slide.summary)}
  `;
}

function renderClosing(slide) {
  return `
    ${renderHeader(slide)}
    <div class="closing-frame">
      <h3 class="closing-frame__title">${esc(slide.statement)}</h3>
      <div class="closing-frame__points">
        ${slide.points.map((item) => `<p class="closing-frame__point">${esc(item)}</p>`).join("")}
      </div>
    </div>
    ${renderSummary(slide.summary, true)}
  `;
}

const contentByType = {
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

function renderSlidePage(slide) {
  const renderContent = contentByType[slide.type];

  if (!renderContent) {
    throw new Error(`Unknown slide type: ${slide.type}`);
  }

  return `
    <section class="slide-page slide-page--${slide.type}" aria-label="${esc(slide.title)}">
      ${renderContent(slide)}
    </section>
  `;
}

export function renderSlideDeck() {
  return `
    <div class="deck">
      <div class="deck__track">
        ${deckSlides.map(renderSlidePage).join("")}
      </div>
    </div>
  `;
}
