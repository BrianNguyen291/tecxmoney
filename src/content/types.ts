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

export type Lesson = {
  id: string
  title: string
  hook: string
  minutes: number
  teach: Block[]
  swipe: SwipeCard[]
  quiz: Quiz[]
  takeaway: string
}
