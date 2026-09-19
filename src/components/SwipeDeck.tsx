import { useRef, useState } from "react"
import type { SwipeCard } from "../content/types"

const THRESHOLD = 88

/**
 * True/false deck. Swipe right for true, left for false — but the same two
 * buttons are always on screen, and arrow keys work, so the gesture is never
 * the only way through.
 */
export function SwipeDeck({ cards, onDone }: { cards: SwipeCard[]; onDone: (right: number) => void }) {
  const [i, setI] = useState(0)
  const [dx, setDx] = useState(0)
  const [verdict, setVerdict] = useState<null | { given: boolean; ok: boolean }>(null)
  const right = useRef(0)
  const dragging = useRef(false)

  const card = cards[i]
  if (!card) return null

  const answer = (given: boolean) => {
    if (verdict) return
    const ok = given === card.answer
    if (ok) right.current += 1
    setDx(given ? 320 : -320)
    setVerdict({ given, ok })
  }

  const next = () => {
    setDx(0)
    setVerdict(null)
    if (i + 1 >= cards.length) onDone(right.current)
    else setI(i + 1)
  }

  const onPointerDown = (e: React.PointerEvent) => {
    if (verdict) return
    dragging.current = true
    const startX = e.clientX
    e.currentTarget.setPointerCapture(e.pointerId)
    const move = (ev: PointerEvent) => dragging.current && setDx(ev.clientX - startX)
    const up = (ev: PointerEvent) => {
      dragging.current = false
      window.removeEventListener("pointermove", move)
      window.removeEventListener("pointerup", up)
      const d = ev.clientX - startX
      if (Math.abs(d) > THRESHOLD) answer(d > 0)
      else setDx(0)
    }
    window.addEventListener("pointermove", move)
    window.addEventListener("pointerup", up)
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (verdict) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); next() }
      return
    }
    if (e.key === "ArrowRight") { e.preventDefault(); answer(true) }
    if (e.key === "ArrowLeft") { e.preventDefault(); answer(false) }
  }

  const lean = Math.max(-1, Math.min(1, dx / THRESHOLD))

  return (
    <div className="deck-wrap" onKeyDown={onKeyDown}>
      <p className="deck-hint">
        Swipe right for <b style={{ color: "var(--yes)" }}>true</b>, left for{" "}
        <b style={{ color: "var(--no)" }}>false</b>. Arrow keys work too.
      </p>

      <div className="deck">
        {cards[i + 2] && <div className="card under2" aria-hidden="true" />}
        {cards[i + 1] && <div className="card under" aria-hidden="true" />}
        <div
          className="card card-drag"
          role="group"
          tabIndex={0}
          aria-label={`Card ${i + 1} of ${cards.length}. ${card.claim}. Right arrow for true, left arrow for false.`}
          onPointerDown={onPointerDown}
          style={{
            transform: `translateX(${dx}px) rotate(${dx * 0.045}deg)`,
            transition: dragging.current ? "none" : "transform 0.32s var(--ease)",
            opacity: verdict ? 0 : 1,
          }}
        >
          <span className="card-k">True or false</span>
          <p className="card-claim">{card.claim}</p>
          <span className="stamp t" style={{ opacity: Math.max(0, lean) }}>TRUE</span>
          <span className="stamp f" style={{ opacity: Math.max(0, -lean) }}>FALSE</span>
        </div>
      </div>

      {verdict ? (
        <>
          <div className={`verdict ${verdict.ok ? "ok" : "no"}`}>
            <b>
              {verdict.ok ? "Correct" : "Not quite"} — it's {card.answer ? "true" : "false"}
            </b>
            <p>{card.why}</p>
          </div>
          <button className="btn" onClick={next} autoFocus>
            {i + 1 >= cards.length ? "See score" : "Next card"}
          </button>
        </>
      ) : (
        <div className="tf">
          <button className="f" onClick={() => answer(false)}>False</button>
          <button className="t" onClick={() => answer(true)}>True</button>
        </div>
      )}
    </div>
  )
}
