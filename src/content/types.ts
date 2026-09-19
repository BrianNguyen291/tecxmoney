/** A block on the teaching screen. Content is data, so lessons are authored not coded. */
export type Block =
  | { kind: "p"; text: string }
  | { kind: "h"; text: string }
  | { kind: "stat"; value: string; label: string; tone?: "yes" | "no" | "warm" }
  | { kind: "callout"; text: string; tone?: "yes" | "no" | "warm" }
  | { kind: "compare"; title: string; rows: { label: string; a: string; b: string }[]; heads: [string, string] }

/** Swiped right for true, left for false. */
export type SwipeCard = {
  claim: string
  answer: boolean
  why: string
}

export type Quiz = {
  q: string
  options: string[]
  correct: number
  /** One response per option, naming the specific misconception. */
  why: string[]
}

/**
 * One idea, then the test for that idea. Keep `teach` to two or three blocks —
 * a segment is one screen, and anything longer gets skipped.
 */
export type Segment = {
  teach: Block[]
  /** Tested immediately, on exactly what was just taught. */
  cards?: SwipeCard[]
  quiz?: Quiz
}

export type Lesson = {
  id: string
  title: string
  hook: string
  minutes: number
  segments: Segment[]
  takeaway: string
}

export const countTests = (l: Lesson) =>
  l.segments.reduce((n, s) => n + (s.cards?.length ?? 0) + (s.quiz ? 1 : 0), 0)
