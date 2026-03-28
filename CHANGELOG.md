# Changelog

All notable changes to this project will be documented in this file.

## v1.0.2 - 2026-03-28

### Updated

- Refined the deck into a more editorial, flatter presentation style with less web-card feeling.
- Reworked slide hierarchy so key pages rely more on type, spacing, and sequential emphasis.
- Added native editable `.pptx` export powered by `PptxGenJS`.
- Added a reusable project skill for turning source material into an insight deck and exporting it to PowerPoint.

### Added

- `npm run export:pptx`
- `src/pptx/` export pipeline
- `scripts/export-pptx.mjs`
- project skill: `.codex/skills/ppt-insight-deck/SKILL.md`

### Verified

- `npm test`
- `npm run build`
- `npm run export:pptx`

## v1.0.1 - 2026-03-28

### Updated

- Reframed the Byte interview deck from a transcript-style summary into an industry-insight presentation.
- Rewrote the slide copy to be more concise, deliberate, and presentation-ready, reducing the generic AI-written tone.
- Tightened the layout language so the deck feels closer to a presentation artifact and less like a web page.
- Added a dedicated closing slide to make the core takeaway clearer at the end of the presentation.

### Verified

- `npm test`
- `npm run build`

## v1.0.0 - 2026-03-28

### Initial release

- Published the first public version of the PPT-style deck project.
- Added bilingual project documentation in `README.md`.
- Documented design logic, content-first layout principles, and typography guidance.
