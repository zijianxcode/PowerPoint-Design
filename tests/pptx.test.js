import { access, rm } from "node:fs/promises";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { buildPresentation, createPresentation, exportDeckToPptx, getPptxExportFilename } from "../src/pptx/export.js";

describe("pptx export helpers", () => {
  it("builds a stable pptx filename for the current deck", () => {
    expect(getPptxExportFilename()).toMatch(
      /^byte-interview-industry-insight-v\d+\.\d+\.\d+\.pptx$/,
    );
  });

  it("creates a wide presentation configured for the current deck", () => {
    const pptx = createPresentation();

    expect(pptx.layout).toBe("LAYOUT_WIDE");
    expect(pptx.author).toContain("Codex");
    expect(pptx.subject).toContain("industry insight");
  });

  it("creates one ppt slide per deck slide", () => {
    const pptx = buildPresentation();

    expect(pptx._slides).toHaveLength(9);
  });

  it("writes the pptx to disk and returns the output path", async () => {
    const outDir = path.resolve("exports-test");
    const outPath = await exportDeckToPptx({ outDir });

    await access(outPath);
    expect(outPath.endsWith(".pptx")).toBe(true);

    await rm(outDir, { recursive: true, force: true });
  });
});
