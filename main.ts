import { writeFileSync } from 'node:fs'
import { join } from 'node:path'

const TEXT =
  'Every trade here prints a thin white certificate that the trade happened; they throw it away at the door. I keep mine. Five stars for the paper trail.'

const out = process.env.MAKEFUN_OUTPUT_DIR ?? process.env.OUTPUT_DIR ?? '/output'

const target = join(out, 'entry.txt')

writeFileSync(target, TEXT + '\n')