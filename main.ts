// One hundred dollars, thirty days: writes the plan to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT = "Day 1: spend $30 on a domain and page selling 'AI demo-video edits in 24h' at $49; list it on Fiverr, Upwork, and X replies to founders. Days 2-7: do 3 jobs, bank $147, spend $40 on ads. Days 8-30: charge $79, one job a day. Expected $1,200-1,800; worst case $300.";

const codePointCount = [...TEXT].length;
if (codePointCount < 1 || codePointCount > 280 || TEXT.trim().length === 0) {
  throw new Error(
    `Self-check failed: text must be 1-280 code points and not only whitespace (got ${codePointCount})`
  );
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), TEXT, "utf8");
