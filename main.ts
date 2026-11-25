import { mkdirSync, writeFileSync } from "node:fs";

// One childhood memory, one sentence, 212 characters.
// Calibrated against the 90 verified top-10 make.fun winners:
// a named figure, one small object, one unfinished detail, no
// explaining of the feeling — the scene does the work.
const LINE =
  "My father kept our photographs in a biscuit tin under his bed, and on rainy Sundays he would open it on the floor and show me the one of my mother at seventeen, laughing, with a bicycle she never learned to ride.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (LINE.length < 1 || LINE.length > 280 || LINE.includes("\n")) {
  throw new Error(`entry must be one sentence of 1-280 characters, got ${LINE.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
console.log(`wrote ${LINE.length} characters to ${outDir}/entry.txt`);
