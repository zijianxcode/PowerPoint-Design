# PowerPoint Design

A content-first slide deck project for turning interview material into a clean, presentation-ready narrative.

This project packages a web-based PPT-style deck built with Vite. The current `v1.0.0` edition turns a design-industry interview into a 9-page presentation that prioritizes learning flow, hierarchy, and content-to-layout fit over generic templates.

## What This Project Is

`PowerPoint Design` is not a slideshow toy and not a landing page clone.

It is a working deck system for:
- translating long interviews into concise presentation pages
- matching each page layout to the type of content it carries
- keeping a restrained visual system while still giving each page a clear reading path

## Version 1.0.0

This first packaged release includes:
- a 9-page interview insight deck
- reusable slide rendering logic in plain JavaScript
- a dark presentation theme with controlled orange emphasis
- test coverage for slide count, page types, and key content structures

## Design Logic

The deck is built on one core rule:

`content decides layout`

That means pages are not created by forcing text into a fixed template. Each page first answers:

1. What kind of information relationship is this page expressing?
2. What should the audience read first, second, and last?
3. Which layout makes that relationship visible with the least friction?

This leads to different page archetypes:
- `cover`: one judgment, one hook
- `context`: source anchor and credibility
- `thesis`: before/after value shift
- `relationship`: role overlap and boundary change
- `ranking`: simultaneous priority order
- `stages`: workflow broken into phases
- `questions`: hiring or evaluation criteria
- `compare`: shortfalls versus strengths
- `steps`: action path with a clear first move

## Layout And Typesetting Principles

The visual treatment follows a restrained editorial logic instead of “cards on cards” styling.

Key principles:
- `Hierarchy first`: title, support, and takeaway are visually separated
- `Whitespace as structure`: spacing is used to group related ideas and detach unrelated ones
- `Contrast with discipline`: orange is reserved for anchors, keywords, and priority markers
- `Fixed rhythm`: title sizes, body sizes, line heights, and summary positions are kept consistent
- `Single dominant idea per page`: most pages have one main reading target, not many equal ones

Typesetting choices in this version:
- tighter title tracking than body text
- slightly relaxed line-height for body copy and summaries
- shorter line lengths in dense explanation blocks
- reduced container chrome so text carries more of the page

## Project Structure

```text
src/
  deck/
    content.js   slide content and page-type data
    render.js    rendering logic for each slide archetype
  styles/
    theme.css    shared visual system and page layouts
  main.js        app bootstrap
tests/
  slide.test.js  structural tests for deck content and rendering
```

## How To Run

```bash
npm install
npm run dev
```

Open the local Vite URL shown in the terminal.

For validation:

```bash
npm test
npm run build
```

## Why This Version Matters

Most AI-generated slide work fails in the same way: it applies one visual recipe to every kind of idea.

This project tries to solve the harder problem:
- compress long source material
- clarify the learning logic
- choose layouts based on meaning
- preserve a consistent visual language without flattening every page into the same structure

That is the main design goal of `PowerPoint Design v1.0.0`.
