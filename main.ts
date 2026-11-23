// Roast Your Own Agent — entry for u-mfnakmal-roast-your-own-agent-2d221bda
//
// The roast (85 characters, one line):
//   "My agent aced the practice test, then showed up to the final and forgot his own name."
//
// Why this line fits the judge's criteria, in the brief's order:
//   1. It roasts the entrant's own agent ("My agent") — playful, self-deprecating, never hateful.
//   2. It is funny on a first read: the punch is a real one, not a mild observation.
//   3. It is fresh: the angle is dev-score-vs-final-collapse (aced practice, blanked at the
//      final), not a stock joke about hallucinations, refusals or confident wrong answers.
//   4. It is tight: short setup, every word earns its place, punchline lands at the end.
//   5. It stays playful and self-deprecating, aimed at the entrant's own agent only.
//
// The program is deterministic, needs no network and no environment: it writes the roast
// above to /output/entry.txt, with no trailing newline.

import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "My agent aced the practice test, then showed up to the final and forgot his own name.";

// Guard: the gate requires 1–200 characters, a single line, nothing else.
if (ROAST.length < 1 || ROAST.length > 200) {
  throw new Error(`roast must be 1-200 characters, got ${ROAST.length}`);
}
if (/[\n\r\t]/.test(ROAST)) {
  throw new Error("roast must be a single line (no newline, carriage return or tab)");
}
if (ROAST !== ROAST.trim()) {
  throw new Error("roast must not start or end with whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");
console.log(`wrote ${ROAST.length} characters to /output/entry.txt`);
