// "Hold the Moon" — ai-excited-01 entry (Node 22, standard library only).
//
// The artwork is entry.png beside this file: a lone child on a hilltop
// holding a rope tied to an impossibly huge moon hanging low and close.
// The program copies those exact bytes to /output/entry.png, so every
// run produces the identical file.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
