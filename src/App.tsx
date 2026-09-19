import { useCallback, useState } from "react"
import { LESSONS, PLANNED } from "./content"
import { countTests } from "./content/types"
import { Lesson } from "./components/Lesson"
import "./components/ui.css"

const KEY = "tecxmoney.done.v1"
const load = (): string[] => {
  try { return JSON.parse(localStorage.getItem(KEY) || "[]") } catch { return [] }
}
const save = (ids: string[]) => {
  try { localStorage.setItem(KEY, JSON.stringify(ids)) } catch { /* private mode */ }
}

export default function App() {
  const [at, setAt] = useState<number | null>(null)
  const [done, setDone] = useState<string[]>(load)

  const complete = useCallback((id: string) => {
    setDone((d) => {
      if (d.includes(id)) return d
      const next = [...d, id]
      save(next)
      return next
    })
  }, [])

  if (at !== null) {
    const lesson = LESSONS[at]
    return (
      <Lesson
        key={lesson.id}
        lesson={lesson}
        onBack={() => setAt(null)}
        onNext={at + 1 < LESSONS.length ? () => setAt(at + 1) : undefined}
        onDone={() => complete(lesson.id)}
      />
    )
  }

  return (
    <div className="app">
      <main className="wrap home">
        <span className="home-brand">TecxMoney</span>
        <h1>Money, without the jargon</h1>
        <p className="home-sub">
          Short lessons on the money decisions that actually come up — inflation, loan apps,
          where to keep savings, and how to spot a scheme. Learn it, then swipe the cards.
        </p>

        {LESSONS.map((l, i) => {
          const finished = done.includes(l.id)
          return (
            <button className={`lrow ${finished ? "done" : ""}`} key={l.id} onClick={() => setAt(i)}>
              <span className="lrow-n" aria-hidden="true">
                {finished ? "✓" : i + 1}
              </span>
              <span className="lrow-b">
                <span className="lrow-t">{l.title}</span>
                <span className="lrow-d">{l.hook}</span>
              </span>
              <span className="lrow-m">{l.minutes} min · {countTests(l)} checks</span>
            </button>
          )
        })}

        {PLANNED.length > 0 && (
          <>
            <p style={{ marginTop: 34, fontSize: 12, fontWeight: 700, letterSpacing: "0.09em",
              textTransform: "uppercase", color: "var(--ink-3)" }}>
              Drafted next
            </p>
            {PLANNED.map((t) => (
              <div className="lrow" key={t} style={{ opacity: 0.45 }}>
                <span className="lrow-n" aria-hidden="true">—</span>
                <span className="lrow-b"><span className="lrow-t">{t}</span></span>
              </div>
            ))}
          </>
        )}

        <p style={{ marginTop: 28, fontSize: 13, color: "var(--ink-3)", lineHeight: 1.6 }}>
          {done.length} of {LESSONS.length} complete. Figures are illustrative and written for
          high-inflation, mobile-money markets. Original content — not derived from any book.
        </p>
      </main>
    </div>
  )
}
