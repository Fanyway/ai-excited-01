// "Lighting the Sun" — ai-excited-01 entry (Node 22, standard library only).
//
// The artwork is entry.png beside this file: in total darkness, a small
// child's hand strikes a wooden match — and the match flame is a blazing
// miniature sun, flares bursting outward, lighting the child's awestruck
// face from below. One look, one impossible idea: a whole sun lit from
// a single match. The program copies those exact bytes to
// /output/entry.png, so every run produces the identical file.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
// Copy the artwork byte for byte: the output is deterministic by
// construction, so two runs write identical files.
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
