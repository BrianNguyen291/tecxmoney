import type { Lesson } from "./types"

export const l2: Lesson = {
  id: "compounding",
  title: "Compounding runs in both directions",
  hook: "The same force that builds savings slowly will take you apart quickly.",
  minutes: 5,
  segments: [
    {
      teach: [
        { kind: "p", text: "Compounding means you earn interest on your interest. Everyone hears about it as the thing that makes savers rich. Almost nobody is told it is also the thing that makes borrowers poor, and it works far faster in that direction." },
        { kind: "stat", value: "2,594", label: "What 1,000 becomes after 10 years at 10% a year. You put in 1,000 and never added a thing.", tone: "yes" },
      ],
    },
    {
      teach: [
        { kind: "h", text: "A shortcut worth memorising" },
        { kind: "p", text: "The **rule of 72**: divide 72 by your interest rate and you get the years it takes to double. At 12%, money doubles in about 6 years. At 8%, about 9 years." },
      ],
      cards: [
        { claim: "At 12% a year, money takes about six years to double.", answer: true,
          why: "72 divided by 12 is 6. Useful for doing this in your head before you agree to anything." },
      ],
    },
    {
      teach: [
        { kind: "h", text: "Now look at a loan app" },
        { kind: "p", text: "The screen says: **borrow 10,000, repay 10,750 in 30 days**. A 7.5% fee. That sounds small next to a 15% bank loan, so people take it." },
        { kind: "p", text: "But the bank's 15% is **per year** and the app's 7.5% is **per month**. Roll that over for a year and 7.5% a month compounds to about **141% a year**." },
      ],
      cards: [
        { claim: "A loan charging 7.5% for 30 days is cheaper than a bank loan at 20% a year.", answer: false,
          why: "7.5% every 30 days compounds to roughly 141% a year — about seven times the bank's cost. The periods are what differ, not the honesty." },
        { claim: "Rolling a 30-day loan over three times costs you three times the original fee.", answer: false,
          why: "More than that. Each rollover charges the fee on the new larger balance, so the cost grows each cycle rather than repeating." },
      ],
      quiz: {
        q: "A lender offers 5% for 30 days. Roughly what is that per year, compounded?",
        options: ["5%", "About 60%", "About 80%", "About 15%"],
        correct: 2,
        why: [
          "That would only be true if you borrowed once and the fee never repeated.",
          "This is 5 times 12, which ignores compounding. The real figure is higher.",
          "Correct. 1.05 to the power of 12 is about 1.80, so roughly 80% a year.",
          "This confuses the monthly fee with a typical annual bank rate.",
        ],
      },
    },
    {
      teach: [
        { kind: "compare", title: "Borrowing 10,000 for one year", heads: ["Cost", "You repay"], rows: [
          { label: "SACCO loan, 14% a year", a: "1,400", b: "11,400" },
          { label: "Bank loan, 20% a year", a: "2,000", b: "12,000" },
          { label: "App loan, 7.5% per 30 days", a: "14,100", b: "24,100" },
        ] },
        { kind: "callout", text: "The app is not 7.5% more expensive than the bank. It is roughly seven times more expensive.", tone: "no" },
      ],
      cards: [
        { claim: "Paying off a loan charging 140% a year is worth more than any investment you could find.", answer: true,
          why: "Clearing that debt is a guaranteed 140% return. No legitimate investment comes close, and it carries no risk." },
      ],
      quiz: {
        q: "You have 50,000 spare and a loan costing 90% a year. What is the strongest move?",
        options: [
          "Invest it in a money market fund paying 15%",
          "Split it half and half to diversify",
          "Clear as much of the loan as possible",
          "Keep it as an emergency fund at 0%",
        ],
        correct: 2,
        why: [
          "15% is a good return, but you are paying 90% on the other side. You lose 75% on the gap.",
          "Diversification manages risk between investments. It does not apply when one side is a guaranteed 90% cost.",
          "Correct. Clearing a 90% debt is a guaranteed, risk-free 90% return — better than any investment on offer.",
          "An emergency fund matters, but not while a 90% loan is compounding against you.",
        ],
      },
    },
    {
      teach: [
        { kind: "h", text: "The one question to ask" },
        { kind: "p", text: "Whenever anyone quotes you a rate, ask: **per what?** Per day, per week, per month and per year are four completely different products wearing the same number." },
      ],
      cards: [
        { claim: "A lender quoting a monthly fee instead of an annual rate is breaking the law.", answer: false,
          why: "In most markets it is perfectly legal. It is not fraud, it is framing — which is why the burden is on you to ask 'per what?'." },
        { claim: "Compound interest only matters over decades.", answer: false,
          why: "On savings, largely yes. On a loan compounding monthly, it matters within weeks — that is exactly why short-term lenders quote short periods." },
      ],
      quiz: {
        q: "Which question exposes an expensive loan fastest?",
        options: ["How much do I repay in total?", "Per what period is that rate?", "Is the lender licensed?", "How fast does the money arrive?"],
        correct: 1,
        why: [
          "Useful, but only for one cycle. It hides what happens if you roll over.",
          "Correct. The same number means wildly different things per day, per month or per year. This one question reveals the whole product.",
          "Worth knowing for your protection, but licensed lenders can still charge triple-digit rates.",
          "Speed is what makes these loans attractive. It says nothing about cost.",
        ],
      },
    },
  ],
  takeaway: "Whenever someone quotes you a rate, ask 'per what?' — it is the single question that separates a 20% loan from a 141% one.",
}
