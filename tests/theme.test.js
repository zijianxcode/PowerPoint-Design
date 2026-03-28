import { readFile } from "node:fs/promises";
import path from "node:path";
import { describe, expect, it } from "vitest";

describe("theme.css", () => {
  it("uses Helvetica Neue first in the web preview font stack", async () => {
    const cssPath = path.resolve("src/styles/theme.css");
    const css = await readFile(cssPath, "utf8");

    expect(css).toContain('font-family: "Helvetica Neue", "PingFang SC", "Microsoft YaHei", sans-serif;');
  });
});
