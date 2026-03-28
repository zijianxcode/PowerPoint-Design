import PptxGenJS from "pptxgenjs";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { deckSlides } from "../deck/content.js";
import { addAllDeckSlides } from "./slides.js";
import { PPTX_EXPORT_FILENAME, PPTX_LAYOUT, PPTX_META, PPTX_THEME } from "./theme.js";

export function getPptxExportFilename() {
  return PPTX_EXPORT_FILENAME;
}

export function createPresentation() {
  const pptx = new PptxGenJS();
  pptx.layout = PPTX_LAYOUT;
  pptx.author = PPTX_META.author;
  pptx.company = PPTX_META.company;
  pptx.subject = PPTX_META.subject;
  pptx.title = PPTX_META.title;
  pptx.lang = PPTX_THEME.lang;
  pptx.theme = PPTX_THEME;
  return pptx;
}

export function buildPresentation() {
  const pptx = createPresentation();
  addAllDeckSlides(pptx, deckSlides);
  return pptx;
}

export async function exportDeckToPptx(options = {}) {
  const outDir = options.outDir ?? "exports";
  const outPath = path.resolve(outDir, getPptxExportFilename());
  await mkdir(path.dirname(outPath), { recursive: true });
  const pptx = buildPresentation();
  await pptx.writeFile({ fileName: outPath });
  return outPath;
}
