import type { Lesson } from "./types"
import { l1 } from "./l1"
import { l2 } from "./l2"
import { l3 } from "./l3"
import { l4 } from "./l4"

export const LESSONS: Lesson[] = [l1, l2, l3, l4]

/** Drafted but not written — shown on the home screen so scope is visible. */
export const PLANNED = [
  "Budgeting on an income that changes every week",
  "What a SACCO actually does with your money",
  "Currency: why your savings can shrink overnight",
  "Insurance as a financial tool, not a grudge purchase",
  "Borrowing to build vs borrowing to consume",
]
