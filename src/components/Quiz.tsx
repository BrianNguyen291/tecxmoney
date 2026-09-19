import { useState } from "react"
import type { Quiz as Q } from "../content/types"

const Tick = () => (
  <svg className="opt-i" viewBox="0 0 22 22" fill="none" aria-hidden="true">
    <circle cx="11" cy="11" r="10" fill="var(--yes)" />
    <path d="M6 11.4l3.4 3.4L16 8" stroke="var(--bg)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
const Cross = () => (
  <svg className="opt-i" viewBox="0 0 22 22" fill="none" aria-hidden="true">
    <circle cx="11" cy="11" r="10" fill="var(--no)" />
    <path d="M7 7l8 8M15 7l-8 8" stroke="var(--bg)" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
)

export function QuizCard({ item, onSolved }: { item: Q; onSolved: () => void }) {
  const [picked, setPicked] = useState<number | null>(null)
  const solved = picked !== null && picked === item.correct

  const pick = (n: number) => {
    if (solved) return
    setPicked(n)
    if (n === item.correct) onSolved()
  }

  return (
    <div className="quiz">
      <p className="quiz-q">{item.q}</p>
      {item.options.map((o, n) => {
        const on = picked === n
        const ok = n === item.correct
        return (
          <button
            key={o}
            className={`opt ${on ? (ok ? "right" : "wrong") : ""}`}
            onClick={() => pick(n)}
            disabled={solved}
          >
            {on ? (ok ? <Tick /> : <Cross />) : <span className="opt-i" />}
            <span>{o}</span>
          </button>
        )
      })}
      <p role="status" aria-live="polite" className={picked !== null ? "verdict" : ""}
        style={picked !== null
          ? { padding: "16px 18px", background: solved ? "var(--yes-wash)" : "var(--no-wash)",
              color: "var(--ink-2)", fontSize: 16, lineHeight: 1.55, marginTop: 6 }
          : { height: 0, overflow: "hidden", margin: 0 }}>
        {picked !== null && item.why[picked]}
      </p>
    </div>
  )
}
