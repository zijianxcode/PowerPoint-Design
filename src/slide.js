import { deckSlides } from "./slides.js";

function renderCompositeTitle(slide) {
  if (slide.titleLead || slide.titleAccent || slide.titleTail) {
    return `${slide.titleLead ?? ""}${slide.titleAccent ? `<span class="slide-page__title-accent">${slide.titleAccent}</span>` : ""}${slide.titleTail ?? ""}`;
  }

  return slide.title;
}

function renderHeader(slide) {
  return `
    <header class="slide-page__header">
      <span class="slide-page__section">${slide.section}</span>
      <h2 class="slide-page__title">${renderCompositeTitle(slide)}</h2>
    </header>
  `;
}

function renderSummary(text, centered = false) {
  return `<p class="slide-page__summary${centered ? " slide-page__summary--center" : ""}">${text}</p>`;
}

function renderCover(slide) {
  return `
    <header class="slide-page__header">
      <span class="slide-page__section">${slide.section}</span>
      <span class="slide-page__eyebrow">${slide.eyebrow}</span>
    </header>
    <div class="slide-page__hero">
      <h1 class="slide-page__title slide-page__title--cover">${slide.title}</h1>
      <p class="slide-page__subtitle">${slide.subtitle}</p>
      <p class="slide-page__note">${slide.note}</p>
    </div>
  `;
}

function renderContext(slide) {
  return `
    ${renderHeader(slide)}
    <div class="context-grid">
      <div class="context-grid__stats">
        ${slide.stats
          .map(
            ([label, value]) => `
              <article class="context-grid__stat">
                <span class="context-grid__label">${label}</span>
                <strong class="context-grid__value">${value}</strong>
              </article>
            `,
          )
          .join("")}
      </div>
      <div class="context-grid__main">
        <p class="context-grid__statement">${slide.statement}</p>
        <div class="context-grid__notes">
          ${slide.notes.map((item) => `<p>${item}</p>`).join("")}
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
        <p class="thesis-shift__label">${slide.leftLabel}</p>
        <h3 class="thesis-shift__title">${slide.leftTitle}</h3>
        <div class="thesis-shift__points">
          ${slide.leftPoints.map((item) => `<p>${item}</p>`).join("")}
        </div>
      </article>
      <div class="thesis-shift__bridge">${slide.bridge}</div>
      <article class="thesis-shift__panel thesis-shift__panel--active">
        <p class="thesis-shift__label">${slide.rightLabel}</p>
        <h3 class="thesis-shift__title">${slide.rightTitle}</h3>
        <div class="thesis-shift__points">
          ${slide.rightPoints.map((item) => `<p>${item}</p>`).join("")}
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
              <h3>${title}</h3>
              <p>${text}</p>
            </article>
          `,
        )
        .join("")}
      <div class="relationship-map__center">${slide.center}</div>
    </div>
    <div class="relationship-map__notes">
      ${slide.notes.map((item) => `<p>${item}</p>`).join("")}
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
            <article class="ranking-list__item${index === 0 ? " ranking-list__item--active" : ""}">
              <span class="ranking-list__rank">0${index + 1}</span>
              <div class="ranking-list__body">
                <h3 class="ranking-list__title">${title}</h3>
                <p>${text}</p>
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
            <article class="stage-map__item">
              <span class="stage-map__index">0${index + 1}</span>
              <h3 class="stage-map__title">${title}</h3>
              <p>${text}</p>
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
        <div class="question-visual__frame">${slide.visualLabel}</div>
      </div>
      <div class="question-list">
        ${slide.questions
          .map(
            ([title, detail], index) => `
              <div class="question-list__item${index === slide.highlightedQuestion ? " question-list__item--active" : ""}">
                <span class="question-list__index">0${index + 1}</span>
                <div class="question-list__content">
                  <h3 class="question-list__title">${title}</h3>
                  <p>${detail}</p>
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
              <h3>${column.title}</h3>
              <div class="compare-grid__items">
                ${column.items.map((item) => `<p>${item}</p>`).join("")}
              </div>
            </article>
          `,
        )
        .join("")}
    </div>
    ${renderSummary(slide.summary)}
  `;
}

function renderSteps(slide) {
  return `
    ${renderHeader(slide)}
    <div class="step-row">
      ${slide.steps
        .map(
          ([name, text], index) => `
            <article class="step-row__item${index === slide.activeStep ? " step-row__item--active" : " step-row__item--muted"}">
              <h3>${name}</h3>
              <p>${text}</p>
            </article>
          `,
        )
        .join("")}
    </div>
    ${renderSummary(slide.summary)}
  `;
}

function renderSlidePage(slide) {
  const contentByType = {
    compare: renderCompare,
    context: renderContext,
    cover: renderCover,
    questions: renderQuestions,
    ranking: renderRanking,
    relationship: renderRelationship,
    stages: renderStages,
    steps: renderSteps,
    thesis: renderThesis,
  };

  const renderContent = contentByType[slide.type];

  if (!renderContent) {
    throw new Error(`Unknown slide type: ${slide.type}`);
  }

  return `
    <section class="slide-page slide-page--${slide.type}" aria-label="${slide.title}">
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
