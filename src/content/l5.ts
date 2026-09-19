import type { Lesson } from "./types"

export const l5: Lesson = {
  id: "irregular-income",
  title: "Budgeting when every week is different",
  hook: "Most budgeting advice assumes a salary. Here is the version for income that moves.",
  minutes: 5,
  segments: [
    {
      teach: [
        { kind: "p", text: "Almost every budgeting method you will read was written for someone paid the same amount on the same day each month. If you trade, drive, farm, contract or run a stall, that person is not you — and their method fails on your first bad week." },
        { kind: "h", text: "Budget on your floor, not your average" },
        { kind: "p", text: "The instinct is to add up a few months and divide. The problem is that an average is a number you fall below roughly half the time. Build your fixed commitments on a **bad but normal week** instead — not the worst ever, the one that happens often enough to plan for." },
      ],
      cards: [
        { claim: "With irregular income, you should budget on your average month.", answer: false,
      why: "You fall below the average about half the time. Commitments belong on your floor — a bad but normal week." },
      ],
    },
    {
      teach: [
        { kind: "compare", title: "Six weeks of earnings", heads: ["Approach", "Result"], rows: [
      { label: "Average (18,000)", a: "Commit to 18,000", b: "Short in 3 of 6 weeks" },
      { label: "Floor (11,000)", a: "Commit to 11,000", b: "Covered every week" },
    ] },
        { kind: "callout", text: "Anything above the floor is not spare money. It is the thing that makes the whole system work.", tone: "warm" },
      ],
      cards: [
        { claim: "A week where you earn far above your floor means you can raise your fixed commitments.", answer: false,
      why: "One good week is not a new floor. Raise commitments only when the bad weeks have risen too." },
      ],
      quiz: { q: "Your last six weeks: 22k, 9k, 25k, 11k, 30k, 12k. What should your fixed weekly commitments be built on?",
      options: ["18,000 — the average", "About 11,000 — the level you clear even in thin weeks", "30,000 — what you can achieve", "9,000 — the single worst week"],
      correct: 1,
      why: [
        "You earned below 18k in three of six weeks. Half your weeks would fail.",
        "Correct. 11k is cleared in every week here, so commitments at that level always hold and the surplus fills your buffer.",
        "Building on your best week guarantees failure in five weeks out of six.",
        "Defensible but too cautious — 9k happened once. Planning to the rarest case leaves money idle and needlessly squeezes living standards.",
      ] },
    },
    {
      teach: [
        { kind: "h", text: "Pay yourself a wage" },
        { kind: "p", text: "Send everything you earn into one holding pot. Once a week, move a **fixed amount** out of it and into spending. That fixed amount is your wage. Good weeks fill the pot, thin weeks drain it, and your household never feels the difference." },
        { kind: "p", text: "The first goal is not saving. It is getting **four wages** sitting in the pot. At that point a bad month stops being an emergency and becomes an inconvenience." },
      ],
      cards: [
        { claim: "Paying yourself a fixed weekly wage from a buffer is a way to fake a salary.", answer: true,
      why: "That is exactly the point. The buffer absorbs the swings so your household sees a steady number." },
        { claim: "The first savings goal should be a long-term investment.", answer: false,
      why: "First build a few weeks of wages in the buffer. Without it, one thin month forces you to sell or borrow at the worst moment." },
      ],
      quiz: { q: "What is the main job of the buffer pot?",
      options: ["Earn the highest return available", "Turn uneven income into a steady wage", "Keep money away from family requests", "Replace the need for an emergency fund"],
      correct: 1,
      why: [
        "The buffer is spent and refilled constantly. Return is not what it is for.",
        "Correct. It absorbs the swing between good and thin weeks so your household sees one number.",
        "That may be a side effect, but it is not the financial function.",
        "Different jobs. The buffer smooths normal variation; an emergency fund covers a shock like illness or theft.",
      ] },
    },
    {
      teach: [
        { kind: "h", text: "Percentages, not amounts" },
        { kind: "p", text: "Fixed amounts break when income moves. Split every payment the moment it arrives instead — for example **50% living, 30% wage buffer, 10% business restock, 10% long term**. The numbers change every week; the shares do not." },
      ],
      cards: [
        { claim: "Splitting income by percentage works better than fixed amounts when earnings move.", answer: true,
      why: "A fixed amount breaks the week you earn less. A share of whatever arrived always works." },
      ],
    },
    {
      teach: [
        { kind: "h", text: "The mistake that sinks small traders" },
        { kind: "p", text: "One pot for business money and household money. When stock money and food money live together, stock money always loses. **Separate accounts, even two mobile wallets**, is the single highest-return change most small traders can make — and it costs nothing." },
      ],
      cards: [
        { claim: "Keeping business money and household money in one account is fine if you track it carefully.", answer: false,
      why: "Tracking is not the issue — pressure is. When both live together, restock money gets spent on today's needs and the business shrinks quietly." },
      ],
      quiz: { q: "A trader keeps stock money and household money in one wallet. What usually happens?",
      options: [
        "Nothing, as long as records are kept",
        "The business slowly shrinks because restock money gets spent",
        "The household overspends but the business is fine",
        "Tax becomes simpler",
      ],
      correct: 1,
      why: [
        "The failure is not a record-keeping failure. It is that today's need always outranks next week's stock.",
        "Correct. Stock money is the flexible pile in the moment, so it is the one that gets used — and the business quietly gets smaller each cycle.",
        "It is the business that suffers, because household needs feel more urgent.",
        "Mixing the two makes tax and any future loan application harder, not simpler.",
      ] },
    },
  ],
  takeaway: "Commit at your floor, pay yourself a fixed wage from a buffer, split by percentage, and never let stock money share a wallet with food money.",
}
