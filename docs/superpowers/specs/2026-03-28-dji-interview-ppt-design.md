# DJI Interview PPT Design

## Overview

This spec defines a test presentation built from the interview transcript in:

`/Users/zijian/Desktop/企业设计师访谈/访谈报告/访谈原文/大疆/新录音 47(1)_原文.docx`

The output will be a concise research-style deck for teacher-facing discussion, not a recruiting guide and not a student job-hunting manual.

## Goal

Turn one enterprise interview into a short PPT that surfaces a small number of discussable judgments about industrial design education and talent evaluation.

## Audience

- School teachers
- Interview research presentation context

## Chosen Tone

- Reporting tone
- Explicit judgments
- Clear conclusions without becoming overly academic

## Deck Target

- `5-7` slides total
- Recommended implementation: `6` slides
- Editable `.pptx` export required

## Source Interpretation

This interview should be treated as:

- one enterprise-side sample with strong first-line hiring context
- useful for revealing how a company actually evaluates students
- not broad enough to stand in for the whole industry

The deck should therefore frame findings as interview-derived judgments rather than universal truths.

## Core Throughline

The main narrative is:

**Industrial design evaluation is shifting away from surface style fit and toward whether a candidate can connect concept, feasibility, and collaboration in a real product context.**

## Key Findings To Preserve

1. Low pass rates are explained not only by high standards, but by a mismatch between school-trained output and enterprise product scenarios.
2. Earlier design training and portfolio habits were strongly shaped by phone-brand and minimalist consumer-electronics aesthetics, while drone and robotics products demand different forms of understanding.
3. Hiring attention centers on a combination of:
   - form-giving ability
   - tool and modeling proficiency tied to efficiency
   - communication and collaboration judgment
4. Deep engineering mastery is not treated as a hard entry requirement, but purely conceptual work without basic technical reasoning is not persuasive.
5. The strongest critique of students is not lack of creativity; it is stopping at concept presentation without pushing into implementation logic.

## Content To De-emphasize

The following material should stay out of the main `6`-slide narrative unless needed as a supporting note:

- general company anecdotes
- personal career chat
- detailed software preference debate
- startup ecosystem and Shenzhen network discussion

These can distract from the education-and-evaluation throughline.

## Slide Structure

### Slide 1: Cover

Purpose:
- establish the deck as a research summary
- state the main judgment immediately

Draft direction:
- title: `从一场企业访谈看，工业设计人才评价正在从风格偏好转向综合判断`
- subtitle: based on one enterprise interviewer’s perspective on industrial design recruitment and evaluation

Recommended type:
- `cover`

### Slide 2: Source And Boundary

Purpose:
- explain what this material is
- prevent overclaiming

Main message:
- this is not an industry census
- it is a concrete enterprise-side sample that reveals how teachers may read hiring logic from one real interview

Recommended type:
- `context`

### Slide 3: Primary Judgment

Purpose:
- deliver the clearest interpretive statement

Main message:
- low pass rates do not simply mean “students are weak”
- they point to a mismatch between dominant training outputs and enterprise problem settings

Supporting ideas:
- smartphone-like style influence
- higher requirements caused by robotics and drone product contexts
- need for more complete industrial design literacy

Recommended type:
- `thesis`

### Slide 4: What Companies Actually Evaluate

Purpose:
- reorganize the transcript into an intelligible evaluation framework

Main message:
- companies are not screening for one perfect skill, but for a workable combination of abilities

Framework:
- form and modeling ability
- software familiarity and efficiency
- communication, negotiation, and judgment with engineers

Important nuance:
- deep engineering knowledge is useful but not the absolute threshold

Recommended type:
- `ranking` or `relationship`

### Slide 5: Where Student Work Breaks Down

Purpose:
- make the judgment concrete with evidence

Main message:
- the common failure is not weak imagination but weak continuation from idea to technical and product logic

Evidence anchors:
- AR telescope example: promising direction, but weak answers on optics, zoom, stabilization, and implementation consequences
- assistive/recording concept example: meaningful topic, but insufficient research into current technical paths and product feasibility

Recommended type:
- `compare` or `questions`

### Slide 6: What This Means For Teaching Discussion

Purpose:
- close with discussion value for teachers

Main message:
- enterprise evaluation is increasingly using “can this concept be pushed toward a real product logic” as a distinguishing standard

Discussion prompts:
- are courses giving enough training from problem framing to implementation reasoning
- are portfolios over-indexed on visualized concepts
- are real product constraints entering the center of design education

Recommended type:
- `closing`

## Writing Rules

- Titles must be judgments, not neutral topics.
- Each slide keeps one dominant idea.
- Transcript filler and conversational noise must be removed.
- The deck should sound like a distilled interview insight report, not a verbatim summary.
- Avoid generic AI-summary phrasing such as “in the context of rapid change.”

## Design Rules

- Keep the current editorial deck language of the project.
- Avoid decorative card-heavy layouts.
- Use accent color only for anchors and hierarchy.
- Preserve a flatter, report-like composition.
- Keep the appendix feel out of the main deck; this version should read as one continuous argument.

## Implementation Notes

Expected file touch points for implementation:

- `src/deck/content.js`
- `tests/slide.test.js`
- PPTX export path or versioned filename only if needed by current project conventions

Implementation should replace the current sample narrative with the DJI interview narrative while keeping the existing deck system and rendering patterns.

## Success Criteria

- The finished deck reads as a coherent `6`-slide research summary.
- A teacher can understand the main judgment in under two minutes.
- The examples clearly support the central claim.
- The deck does not drift into recruiting advice or entrepreneurship storytelling.
- `.pptx` export completes successfully.

## Out Of Scope

- building a new visual system
- expanding to a long-form multi-case study
- transcribing or correcting the whole interview source
- turning this into a generalized education framework beyond the evidence in the interview
