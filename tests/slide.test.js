// @vitest-environment jsdom
import { describe, expect, it } from "vitest";
import { deckSlides } from "../src/deck/content.js";
import { renderSlideDeck } from "../src/deck/render.js";

describe("renderSlideDeck", () => {
  it("renders a six-slide deck with consistent slide containers", () => {
    const host = document.createElement("div");
    host.innerHTML = renderSlideDeck();

    expect(host.querySelector(".deck")).not.toBeNull();
    expect(host.querySelectorAll(".slide-page")).toHaveLength(6);
    expect(host.querySelector(".deck__track")).not.toBeNull();
  });

  it("renders the expected slide titles in order", () => {
    const host = document.createElement("div");
    host.innerHTML = renderSlideDeck();

    const titles = [...host.querySelectorAll(".slide-page__title")].map((node) =>
      node.textContent?.replace(/\s+/g, " ").trim(),
    );

    expect(titles).toEqual([
      "工业设计人才评价，正在从风格偏好转向综合判断",
      "这份材料更适合作为企业样本，而不是行业普查",
      "通过率偏低，暴露的是训练输出与企业场景的错位",
      "企业真正筛选的，是一组组合能力",
      "学生最容易停住的，不是创意，而是往下推进",
      "教学讨论的关键，不是多做概念，而是多推一步",
    ]);
  });

  it("exposes the page types needed for the DJI research deck", () => {
    expect(deckSlides).toHaveLength(6);
    expect(deckSlides.map((slide) => slide.type)).toEqual([
      "cover",
      "context",
      "thesis",
      "ranking",
      "questions",
      "closing",
    ]);
  });

  it("renders the context slide as a source-boundary explanation", () => {
    const host = document.createElement("div");
    host.innerHTML = renderSlideDeck();

    const contextSlide = host.querySelector(".slide-page--context");
    const facts = contextSlide?.querySelectorAll(".context-grid__fact");

    expect(contextSlide?.querySelector(".context-grid__facts")).not.toBeNull();
    expect(facts).toHaveLength(3);
    expect(contextSlide?.querySelector(".context-grid__statement")?.textContent).toContain("一线面试样本");
  });

  it("renders the thesis slide as a mismatch between training output and enterprise context", () => {
    const host = document.createElement("div");
    host.innerHTML = renderSlideDeck();

    const thesisSlide = host.querySelector(".slide-page--thesis");
    const shiftLabels = thesisSlide?.querySelectorAll(".thesis-shift__label");

    expect(shiftLabels).toHaveLength(2);
    expect(shiftLabels?.[0]?.textContent).toContain("学生常见输出");
    expect(shiftLabels?.[1]?.textContent).toContain("企业实际判断");
    expect(thesisSlide?.querySelector(".thesis-shift__bridge")?.textContent).toContain("错位");
  });

  it("renders the ranking slide as a combined evaluation framework", () => {
    const host = document.createElement("div");
    host.innerHTML = renderSlideDeck();

    const rankingSlide = host.querySelector(".slide-page--ranking");
    const rows = rankingSlide?.querySelectorAll(".ranking-list__item");
    const featured = rankingSlide?.querySelectorAll(".ranking-list__item--featured");
    const supporting = rankingSlide?.querySelectorAll(".ranking-list__item--supporting");

    expect(rows).toHaveLength(5);
    expect(rows?.[0]?.querySelector(".ranking-list__rank")?.textContent).toBe("01");
    expect(rows?.[0]?.querySelector(".ranking-list__title")?.textContent).toContain("造型能力");
    expect(featured).toHaveLength(2);
    expect(supporting).toHaveLength(3);
  });

  it("renders the questions slide as an evidence-based review path", () => {
    const host = document.createElement("div");
    host.innerHTML = renderSlideDeck();

    const questionSlide = host.querySelector(".slide-page--questions");
    const activeItem = questionSlide?.querySelector(".question-list__item--active");

    expect(questionSlide?.querySelectorAll(".question-list__item")).toHaveLength(4);
    expect(activeItem?.querySelector(".question-list__title")?.textContent).toBe("这个方向为什么成立?");
  });

  it("renders a dedicated closing takeaway slide", () => {
    const host = document.createElement("div");
    host.innerHTML = renderSlideDeck();

    const closingSlide = host.querySelector(".slide-page--closing");

    expect(closingSlide?.querySelector(".closing-frame")).not.toBeNull();
    expect(closingSlide?.querySelector(".closing-frame__title")?.textContent).toContain("真实产品逻辑");
    expect(closingSlide?.querySelectorAll(".closing-frame__point")).toHaveLength(3);
  });
});
