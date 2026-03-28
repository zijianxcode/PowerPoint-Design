// @vitest-environment jsdom
import { describe, expect, it } from "vitest";
import { deckSlides } from "../src/deck/content.js";
import { renderSlideDeck } from "../src/deck/render.js";

describe("renderSlideDeck", () => {
  it("renders a nine-slide deck with consistent slide containers", () => {
    const host = document.createElement("div");
    host.innerHTML = renderSlideDeck();

    expect(host.querySelector(".deck")).not.toBeNull();
    expect(host.querySelectorAll(".slide-page")).toHaveLength(9);
    expect(host.querySelector(".deck__track")).not.toBeNull();
  });

  it("renders the expected slide titles in order", () => {
    const host = document.createElement("div");
    host.innerHTML = renderSlideDeck();

    const titles = [...host.querySelectorAll(".slide-page__title")].map((node) =>
      node.textContent?.replace(/\s+/g, " ").trim(),
    );

    expect(titles).toEqual([
      "AI 时代，设计师的价值正在前移",
      "最先改变的，是方案生产的成本",
      "更稀缺的，变成判断与验证",
      "设计开始进入更前端的决策环节",
      "AI 优先改写的是探索环节",
      "能力排序也在随之变化",
      "企业最终仍通过判断力识别设计师",
      "学生问题，更像供给侧的滞后",
      "这一轮变化，核心在价值位置的变化",
    ]);
  });

  it("exposes the page types needed for the industry insight deck", () => {
    expect(deckSlides).toHaveLength(9);
    expect(deckSlides.map((slide) => slide.type)).toEqual([
      "cover",
      "context",
      "thesis",
      "relationship",
      "stages",
      "ranking",
      "questions",
      "compare",
      "closing",
    ]);
  });

  it("renders the context slide as the explanation for why the shift is happening now", () => {
    const host = document.createElement("div");
    host.innerHTML = renderSlideDeck();

    const contextSlide = host.querySelector(".slide-page--context");
    const stats = contextSlide?.querySelectorAll(".context-grid__stat");

    expect(stats).toHaveLength(3);
    expect(contextSlide?.querySelector(".context-grid__statement")?.textContent).toContain("执行层");
  });

  it("renders the thesis slide as a transition from execution to judgment", () => {
    const host = document.createElement("div");
    host.innerHTML = renderSlideDeck();

    const thesisSlide = host.querySelector(".slide-page--thesis");
    const shiftLabels = thesisSlide?.querySelectorAll(".thesis-shift__label");

    expect(shiftLabels).toHaveLength(2);
    expect(shiftLabels?.[0]?.textContent).toContain("更容易被完成");
    expect(shiftLabels?.[1]?.textContent).toContain("更能拉开差距");
    expect(thesisSlide?.querySelector(".thesis-shift__bridge")?.textContent).toContain("执行");
  });

  it("renders the relationship slide as a role-overlap map", () => {
    const host = document.createElement("div");
    host.innerHTML = renderSlideDeck();

    const relationshipSlide = host.querySelector(".slide-page--relationship");
    const roleCards = relationshipSlide?.querySelectorAll(".relationship-map__card");

    expect(roleCards).toHaveLength(3);
    expect(relationshipSlide?.querySelector(".relationship-map__center")?.textContent).toContain("共同定义");
  });

  it("renders the stages slide as a four-part workflow view", () => {
    const host = document.createElement("div");
    host.innerHTML = renderSlideDeck();

    const stageSlide = host.querySelector(".slide-page--stages");
    const stages = stageSlide?.querySelectorAll(".stage-map__item");
    const activeStage = stageSlide?.querySelector(".stage-map__item--active");

    expect(stages).toHaveLength(4);
    expect(stages?.[0]?.querySelector(".stage-map__title")?.textContent).toContain("前期研究");
    expect(activeStage).toBeNull();
  });

  it("renders the ranking slide with all priorities visible at once", () => {
    const host = document.createElement("div");
    host.innerHTML = renderSlideDeck();

    const rankingSlide = host.querySelector(".slide-page--ranking");
    const rows = rankingSlide?.querySelectorAll(".ranking-list__item");

    expect(rows).toHaveLength(5);
    expect(rows?.[0]?.querySelector(".ranking-list__rank")?.textContent).toBe("01");
    expect(rows?.[0]?.querySelector(".ranking-list__title")?.textContent).toContain("AI 素养");
  });

  it("renders the hiring slide as a highlighted judgment list", () => {
    const host = document.createElement("div");
    host.innerHTML = renderSlideDeck();

    const questionSlide = host.querySelector(".slide-page--questions");
    const activeItem = questionSlide?.querySelector(".question-list__item--active");

    expect(activeItem?.querySelector(".question-list__title")?.textContent).toBe("你怎么把业务目标推导成设计目标?");
  });

  it("keeps student content as a supporting appendix rather than the main throughline", () => {
    const host = document.createElement("div");
    host.innerHTML = renderSlideDeck();

    const compareSlide = host.querySelector(".slide-page--compare");
    const columns = compareSlide?.querySelectorAll(".compare-grid__column");

    expect(columns).toHaveLength(2);
    expect(columns?.[0]?.querySelector("h3")?.textContent).toContain("常见短板");
    expect(columns?.[1]?.querySelector("h3")?.textContent).toContain("潜在亮点");
    expect(compareSlide?.querySelector(".slide-page__summary")?.textContent).toContain("补充");
  });

  it("renders a dedicated closing takeaway slide", () => {
    const host = document.createElement("div");
    host.innerHTML = renderSlideDeck();

    const closingSlide = host.querySelector(".slide-page--closing");

    expect(closingSlide?.querySelector(".closing-frame")).not.toBeNull();
    expect(closingSlide?.querySelector(".closing-frame__title")?.textContent).toContain("执行的稀缺性");
    expect(closingSlide?.querySelectorAll(".closing-frame__point")).toHaveLength(3);
  });
});
