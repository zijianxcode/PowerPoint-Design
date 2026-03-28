---
name: ppt-insight-deck
description: Use when turning interviews, notes, transcripts, or draft materials into a concise insight deck with content-first slide structure, flatter presentation design, and editable PPTX export.
---

# PPT Insight Deck

Use this skill when the task is to turn source material into a presentation, especially when the user wants:
- a clearer reporting structure
- stronger content-to-layout matching
- less template-driven slide design
- editable `.pptx` output

## What This Skill Does

This skill helps convert raw material into a usable deck by following one workflow:

1. Read the source
2. Extract the real throughline
3. Reduce repetition and low-signal phrasing
4. Rebuild the material as an insight report instead of a transcript
5. Match each page to the information relationship it needs to express
6. Refine the presentation toward flatter, more editorial composition
7. Export an editable `.pptx`

## Core Rule

Content determines form.

Never start from a fixed slide template.

For each page, answer:
1. What is the one key idea?
2. What relationship is being expressed?
3. What should the audience notice first, understand next, and remember last?

Only then choose the page structure.

## Slide Logic

Prefer reporting logic over source order.

Common sequence:
- opening judgment
- why the change matters now
- how value is shifting
- how roles or workflows are changing
- how priorities are being reordered
- how organizations evaluate or decide
- appendix or supporting contrast
- closing takeaway

Do not force a fixed slide count. Merge or split only when clarity improves.

## Writing Rules

- Write titles as judgments, not topics
- Keep body copy concise and deliberate
- Remove transcript filler, repeated phrasing, and generic AI summary language
- Keep one main idea per page
- Treat the listener as the user

## Design Rules

- Containers may exist, but they must stay secondary
- Use type, spacing, and alignment as the primary organizational tools
- Reduce repeated card energy
- Use accent color only for anchors, emphasis, or ranking
- Make appendix pages quieter than the main narrative

## In This Project

Primary files:
- `src/deck/content.js`
- `src/deck/render.js`
- `src/styles/theme.css`
- `src/pptx/export.js`
- `src/pptx/slides.js`
- `scripts/export-pptx.mjs`

Main commands:

```bash
npm test
npm run build
npm run export:pptx
```

Default PPTX output:

```text
exports/byte-interview-industry-insight-v1.0.2.pptx
```

## Deliverables

When using this skill, aim to produce:
- a cleaned content structure
- a refined presentation deck
- an editable `.pptx` file when requested

## Avoid

- transcript-order slide summaries
- generic “AI-style” abstract conclusions
- equal-weight card grids for every page
- designing pages before understanding the content relationship
- screenshot-only PowerPoint exports when editable output is required
