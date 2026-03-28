import { access, rm } from "node:fs/promises";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { buildPresentation, createPresentation, exportDeckToPptx, getPptxExportFilename } from "../src/pptx/export.js";
import { PPTX_FONTS, PPTX_THEME } from "../src/pptx/theme.js";

describe("pptx export helpers", () => {
  it("builds a stable pptx filename for the current deck", () => {
    expect(getPptxExportFilename()).toMatch(
      /^dji-industrial-design-interview-v\d+\.\d+\.\d+\.pptx$/,
    );
  });

  it("creates a wide presentation configured for the current deck", () => {
    const pptx = createPresentation();

    expect(pptx.layout).toBe("LAYOUT_WIDE");
    expect(pptx.author).toContain("Codex");
    expect(pptx.subject).toContain("DJI industrial design interview");
  });

  it("creates one ppt slide per deck slide", () => {
    const pptx = buildPresentation();

    expect(pptx._slides).toHaveLength(6);
  });

  it("uses Helvetica Neue as the default editable pptx font family", () => {
    expect(PPTX_FONTS.body).toBe("Helvetica Neue");
    expect(PPTX_FONTS.display).toBe("Helvetica Neue");
    expect(PPTX_THEME.headFontFace).toBe("Helvetica Neue");
    expect(PPTX_THEME.bodyFontFace).toBe("Helvetica Neue");
  });

  it("writes the pptx to disk and returns the output path", async () => {
    const outDir = path.resolve("exports-test");
    const outPath = await exportDeckToPptx({ outDir });

    await access(outPath);
    expect(outPath.endsWith(".pptx")).toBe(true);

    await rm(outDir, { recursive: true, force: true });
  });
});
