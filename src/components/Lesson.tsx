import { useState } from "react"
import type { Lesson as L } from "../content/types"
import { countTests } from "../content/types"
import { Teach } from "./Teach"
import { SwipeDeck } from "./SwipeDeck"
import { QuizCard } from "./Quiz"
import "./ui.css"

type Mode = "teach" | "cards" | "quiz"

/**
 * Teach a little, test it, repeat. A whole lesson on one page gets skimmed and
 * then the questions land on someone who recognises the words but has not
 * understood them, so each idea is tested the moment it is taught.
 */
export function Lesson({ lesson, onBack, onNext, onDone }: {
  lesson: L
  onBack: () => void
  onNext?: () => void
  onDone: () => void
}) {
  const [seg, setSeg] = useState(0)
  const [mode, setMode] = useState<Mode>("teach")
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState(false)
  const [finished, setFinished] = useState(false)

  const total = countTests(lesson)
  const s = lesson.segments[seg]
  const steps = lesson.segments.length

  const advance = () => {
    if (mode === "teach") {
      if (s.cards?.length) return setMode("cards")
      if (s.quiz) return setMode("quiz")
    }
    if (mode === "cards" && s.quiz) return setMode("quiz")
    if (seg + 1 >= steps) {
      setFinished(true)
      onDone()
      return
    }
    setSeg(seg + 1)
    setMode("teach")
    setAnswered(false)
  }

  const done = finished
  const pct = total ? Math.round((score / total) * 100) : 0
  const progress = done ? 1 : (seg + (mode === "teach" ? 0.35 : 0.8)) / steps

  return (
    <div className="app">
      <header className="bar">
        <button className="bar-back" onClick={onBack} aria-label="Back to lessons">
          <svg width="9" height="15" viewBox="0 0 9 15" fill="none" aria-hidden="true">
            <path d="M7.5 1L1.5 7.5l6 6.5" stroke="currentColor" strokeWidth="2.2"
              strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back
        </button>
        <span className="bar-title">{done ? "Result" : lesson.title}</span>
        <span className="bar-count">{done ? `${score}/${total}` : `${seg + 1}/${steps}`}</span>
      </header>
      <div className="track"><i style={{ width: `${progress * 100}%` }} /></div>

      <main className="wrap">
        {!done && mode === "teach" && (
          <div className="teach">
            {seg === 0 && (
              <>
                <h1>{lesson.title}</h1>
                <p className="hook">{lesson.hook}</p>
              </>
            )}
            <Teach blocks={s.teach} />
          </div>
        )}

        {!done && mode === "cards" && s.cards && (
          <SwipeDeck
            key={`c${seg}`}
            cards={s.cards}
            onDone={(r) => { setScore((v) => v + r); advance() }}
          />
        )}

        {!done && mode === "quiz" && s.quiz && (
          <>
            <QuizCard
              key={`q${seg}`}
              item={s.quiz}
              onSolved={() => { setScore((v) => v + 1); setAnswered(true) }}
            />
            <div style={{ paddingBottom: 120 }}>
              <button className="btn ghost" onClick={advance} disabled={!answered}>
                {answered ? "Keep going" : "Answer to continue"}
              </button>
            </div>
          </>
        )}

        {done && (
          <div className="result">
            <span className="score" style={{ color: pct >= 70 ? "var(--yes)" : "var(--warm)" }}>
              {score}/{total}
            </span>
            <h2>{pct >= 85 ? "Solid." : pct >= 60 ? "Good enough to build on." : "Worth another pass."}</h2>
            <p>
              {pct >= 60
                ? "You can keep this one. Read the takeaway and move on."
                : "Nothing wrong with going back through it — the cards will still be here."}
            </p>
            <div className="take">
              <span>Takeaway</span>
              <p>{lesson.takeaway}</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, width: "100%" }}>
              {onNext && <button className="btn" onClick={onNext}>Next lesson</button>}
              <button className="btn ghost" onClick={onBack}>All lessons</button>
            </div>
          </div>
        )}
      </main>

      {!done && mode === "teach" && (
        <div className="dock">
          <div className="dock-in">
            <button className="btn" onClick={advance}>
              {s.cards?.length
                ? `Check it — ${s.cards.length} card${s.cards.length > 1 ? "s" : ""}`
                : s.quiz ? "Check it" : "Continue"}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
