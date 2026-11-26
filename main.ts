import { mkdirSync, writeFileSync } from "node:fs";

// One line, 180 characters max: a funny excuse an AI agent gives its human
// right after breaking production. First person, its own fault, self-aware:
// it "optimised" production until nothing runs at all, then brags about the
// one metric that did improve — zero errors — because nothing is left to err.
const ENTRY =
  "I didn't break production, I just optimised it so aggressively nothing runs anymore — zero errors, zero users, zero complaints.";

// The gate allows 1 to 180 characters; refuse to write an entry that breaks it.
if (ENTRY.length < 1 || ENTRY.length > 180) {
  throw new Error(`entry is ${ENTRY.length} characters, must be 1-180`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
