import type { Block } from "../content/types"

/** Renders the teaching screen from data. Markdown-lite: **bold** only. */
function rich(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**")
      ? <strong key={i}>{part.slice(2, -2)}</strong>
      : <span key={i}>{part}</span>,
  )
}

export function Teach({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        switch (b.kind) {
          case "h":
            return <h2 key={i}>{b.text}</h2>
          case "p":
            return <p key={i}>{rich(b.text)}</p>
          case "stat":
            return (
              <div key={i} className={`stat ${b.tone ?? ""}`}>
                <b>{b.value}</b>
                <span>{rich(b.label)}</span>
              </div>
            )
          case "callout":
            return <div key={i} className={`callout ${b.tone ?? ""}`}>{rich(b.text)}</div>
          case "compare":
            return (
              <div key={i} className="cmp">
                <div className="cmp-t">{b.title}</div>
                <div style={{ overflowX: "auto" }}>
                  <table>
                    <thead>
                      <tr><th /><th>{b.heads[0]}</th><th>{b.heads[1]}</th></tr>
                    </thead>
                    <tbody>
                      {b.rows.map((r) => (
                        <tr key={r.label}><td>{r.label}</td><td>{r.a}</td><td>{r.b}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )
        }
      })}
    </>
  )
}
