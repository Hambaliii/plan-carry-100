// Writes one short money-plan text to entry.txt in the output directory.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT = "Day 1: spend $30 on a domain and page selling 'AI demo-video edits in 24h' at $49; list it on Fiverr, Upwork, and X replies to founders. Days 2-7: do 3 jobs, bank $147, spend $40 on ads. Days 8-30: charge $79, one job a day. Expected $1,200-1,800; worst case $300.";

const count = [...TEXT].length;
if (count < 1 || count > 280 || TEXT.trim().length === 0) {
  throw new Error("TEXT must be 1-280 Unicode code points and not only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ? process.env.MAKEFUN_OUTPUT_DIR : "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
