import { useMemo, useState } from "react"
import type { Lesson as L } from "../content/types"
import { Teach } from "./Teach"
import { SwipeDeck } from "./SwipeDeck"
import { QuizCard } from "./Quiz"
import "./ui.css"

type Phase = "teach" | "swipe" | "quiz" | "done"

export function Lesson({ lesson, onBack, onNext, onDone }: {
  lesson: L
  onBack: () => void
  onNext?: () => void
  onDone: () => void
}) {
  const [phase, setPhase] = useState<Phase>("teach")
  const [swipeScore, setSwipeScore] = useState(0)
  const [qi, setQi] = useState(0)
  const [quizScore, setQuizScore] = useState(0)
  const [answered, setAnswered] = useState(false)

  const total = lesson.swipe.length + lesson.quiz.length
  const progress = useMemo(() => {
    if (phase === "teach") return 0
    if (phase === "swipe") return 0.15
    if (phase === "quiz") return 0.15 + 0.85 * ((lesson.swipe.length + qi) / total)
    return 1
  }, [phase, qi, lesson.swipe.length, total])

  const label =
    phase === "teach" ? "Learn"
      : phase === "swipe" ? "True or false"
        : phase === "quiz" ? `Question ${qi + 1} of ${lesson.quiz.length}`
          : "Result"

  const nextQuestion = () => {
    if (qi + 1 >= lesson.quiz.length) {
      setPhase("done")
      onDone()
    } else {
      setQi(qi + 1)
      setAnswered(false)
    }
  }

  const score = swipeScore + quizScore
  const pct = Math.round((score / total) * 100)

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
        <span className="bar-title">{label}</span>
        <span className="bar-count">{phase === "done" ? `${score}/${total}` : ""}</span>
      </header>
      <div className="track"><i style={{ width: `${progress * 100}%` }} /></div>

      <main className="wrap">
        {phase === "teach" && (
          <div className="teach">
            <h1>{lesson.title}</h1>
            <p className="hook">{lesson.hook}</p>
            <Teach blocks={lesson.teach} />
          </div>
        )}

        {phase === "swipe" && (
          <SwipeDeck
            cards={lesson.swipe}
            onDone={(r) => { setSwipeScore(r); setPhase("quiz") }}
          />
        )}

        {phase === "quiz" && (
          <>
            <QuizCard
              key={qi}
              item={lesson.quiz[qi]}
              onSolved={() => { setQuizScore((s) => s + 1); setAnswered(true) }}
            />
            <div style={{ paddingBottom: 120 }}>
              <button className="btn ghost" onClick={nextQuestion} disabled={!answered}>
                {answered
                  ? (qi + 1 >= lesson.quiz.length ? "Finish" : "Next question")
                  : "Answer to continue"}
              </button>
            </div>
          </>
        )}

        {phase === "done" && (
          <div className="result">
            <span className="score" style={{ color: pct >= 70 ? "var(--yes)" : "var(--warm)" }}>
              {score}/{total}
            </span>
            <h2>{pct >= 85 ? "Solid." : pct >= 60 ? "Good enough to build on." : "Worth another pass."}</h2>
            <p>
              {pct >= 60
                ? "You can keep this one. Read the takeaway and move on."
                : "Nothing wrong with going back through the lesson — the cards will still be here."}
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

      {phase === "teach" && (
        <div className="dock">
          <div className="dock-in">
            <button className="btn" onClick={() => setPhase("swipe")}>
              Start the {lesson.swipe.length}-card test
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
