import { exportDeckToPptx } from "../src/pptx/export.js";

const outPath = await exportDeckToPptx();
console.log(outPath);
