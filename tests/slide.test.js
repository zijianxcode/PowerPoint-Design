// @vitest-environment jsdom
import { describe, expect, it } from "vitest";
import { deckSlides } from "../src/slides.js";
import { renderSlideDeck } from "../src/slide.js";

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
      "AI 没削弱设计，重排了设计师价值",
      "先看这份判断来自谁",
      "价值正在从出稿转向判断与验证",
      "角色边界正在融合",
      "能力优先级重新排序",
      "工作流正在被AI改写",
      "招聘时重点看四个判断",
      "学生常见短板与亮点",
      "学生最该先做的是大量用AI",
    ]);
  });

  it("exposes the page types needed for the interview deck", () => {
    expect(deckSlides).toHaveLength(9);
    expect(deckSlides.map((slide) => slide.type)).toEqual([
      "cover",
      "context",
      "thesis",
      "relationship",
      "ranking",
      "stages",
      "questions",
      "compare",
      "steps",
    ]);
  });

  it("renders the context slide as a source anchor with stats", () => {
    const host = document.createElement("div");
    host.innerHTML = renderSlideDeck();

    const contextSlide = host.querySelector(".slide-page--context");
    const stats = contextSlide?.querySelectorAll(".context-grid__stat");

    expect(stats).toHaveLength(3);
    expect(contextSlide?.querySelector(".context-grid__statement")?.textContent).toContain("设计管理者");
  });

  it("renders the thesis slide as a transition from old to new value", () => {
    const host = document.createElement("div");
    host.innerHTML = renderSlideDeck();

    const thesisSlide = host.querySelector(".slide-page--thesis");
    const shiftLabels = thesisSlide?.querySelectorAll(".thesis-shift__label");

    expect(shiftLabels).toHaveLength(2);
    expect(shiftLabels?.[0]?.textContent).toContain("过去更看重");
    expect(shiftLabels?.[1]?.textContent).toContain("现在更看重");
    expect(thesisSlide?.querySelector(".thesis-shift__bridge")?.textContent).toContain("执行门槛");
  });

  it("renders the relationship slide as three role cards with a shared overlap", () => {
    const host = document.createElement("div");
    host.innerHTML = renderSlideDeck();

    const relationshipSlide = host.querySelector(".slide-page--relationship");
    const roleCards = relationshipSlide?.querySelectorAll(".relationship-map__card");

    expect(roleCards).toHaveLength(3);
    expect(relationshipSlide?.querySelector(".relationship-map__center")?.textContent).toContain("共同前置");
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

  it("renders the stages slide as four workflow stages", () => {
    const host = document.createElement("div");
    host.innerHTML = renderSlideDeck();

    const stageSlide = host.querySelector(".slide-page--stages");
    const stages = stageSlide?.querySelectorAll(".stage-map__item");
    const activeStage = stageSlide?.querySelector(".stage-map__item--active");

    expect(stages).toHaveLength(4);
    expect(stages?.[2]?.querySelector(".stage-map__title")?.textContent).toContain("协作落地");
    expect(activeStage).toBeNull();
  });

  it("renders the hiring slide as a highlighted judgment list", () => {
    const host = document.createElement("div");
    host.innerHTML = renderSlideDeck();

    const questionSlide = host.querySelector(".slide-page--questions");
    const accent = questionSlide?.querySelector(".slide-page__title-accent");
    const activeItem = questionSlide?.querySelector(".question-list__item--active");

    expect(accent?.textContent).toBe("四个判断");
    expect(activeItem?.querySelector(".question-list__title")?.textContent).toBe("你怎么把业务目标变成设计目标?");
  });

  it("renders the compare slide as shortfalls versus potential", () => {
    const host = document.createElement("div");
    host.innerHTML = renderSlideDeck();

    const compareSlide = host.querySelector(".slide-page--compare");
    const columns = compareSlide?.querySelectorAll(".compare-grid__column");

    expect(columns).toHaveLength(2);
    expect(columns?.[0]?.querySelector("h3")?.textContent).toContain("常见短板");
    expect(columns?.[1]?.querySelector("h3")?.textContent).toContain("潜在亮点");
  });

  it("renders the action slide with one clear first step", () => {
    const host = document.createElement("div");
    host.innerHTML = renderSlideDeck();

    const starterSlide = host.querySelector(".slide-page--steps");
    const activeStep = starterSlide?.querySelector(".step-row__item--active");
    const mutedSteps = starterSlide?.querySelectorAll(".step-row__item--muted");

    expect(activeStep?.querySelector("h3")?.textContent).toBe("大量用AI");
    expect(mutedSteps).toHaveLength(4);
  });
});
