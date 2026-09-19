import type { Lesson } from "./types"

export const l7: Lesson = {
  id: "currency",
  title: "Why your savings can shrink overnight",
  hook: "Inflation works slowly. A devaluation does not.",
  minutes: 5,
  segments: [
    {
      teach: [
        { kind: "p", text: "Inflation is prices drifting up over a year. A **devaluation** is your currency losing value against other currencies, sometimes in a single week. They are related, and in an import-dependent economy the second causes the first." },
        { kind: "h", text: "Why it reaches you even if you never touch dollars" },
        { kind: "p", text: "Fuel, medicine, fertiliser, phones, cooking oil, building materials — these are bought abroad in hard currency. When your currency weakens, importers pay more, and that lands on the shelf within weeks. You never traded a dollar and your cost of living still rose." },
      ],
      cards: [
        { claim: "A devaluation only affects people who buy imported goods directly.", answer: false,
      why: "Import costs feed into fuel, transport and food processing, so the price shows up across the whole basket." },
      ],
    },
    {
      teach: [
        { kind: "stat", value: "−40%", label: "If the currency loses 40% against the dollar, imported goods cost roughly **67% more** in local money. A 40% fall is not a 40% price rise — it is larger.", tone: "no" },
        { kind: "p", text: "That arithmetic surprises people. Falling 40% means 100 becomes 60. To buy the same dollar's worth you now need 100/60, which is **1.67×** — a 67% rise." },
      ],
      cards: [
        { claim: "If a currency falls 40%, imported prices rise by about 40%.", answer: false,
      why: "They rise about 67%. Going from 100 to 60 means you need 100/60 to buy the same thing — the maths is not symmetric." },
      ],
      quiz: { q: "The local currency falls from 100 to 50 per dollar. What happens to the price of an imported item?",
      options: ["It rises about 50%", "It roughly doubles", "It stays the same", "It falls by half"],
      correct: 1,
      why: [
        "This mixes up the fall with the rise. Halving the currency does not mean a 50% price rise.",
        "Correct. You now need twice as much local money for the same dollar, so the local price roughly doubles.",
        "Only if the seller absorbs the whole change, which does not last.",
        "This is backwards — a weaker currency makes imports dearer, not cheaper.",
      ] },
    },
    {
      teach: [
        { kind: "h", text: "What actually protects you" },
        { kind: "compare", title: "How different holdings respond to a devaluation", heads: ["Protects?", "Why"], rows: [
      { label: "Local cash", a: "No", b: "Full hit, immediately" },
      { label: "Local savings account", a: "Barely", b: "Interest rarely keeps up" },
      { label: "Things that reprice", a: "Partly", b: "Land, shares, stock in a shop adjust upward over time" },
      { label: "Hard-currency savings", a: "Yes", b: "But watch access rules, spreads and fees" },
      { label: "A foreign-currency loan", a: "Opposite", b: "Your debt grows in local terms — dangerous" },
    ] },
        { kind: "callout", text: "The most damaging mistake is borrowing in a currency you do not earn in. Your income stays local, your debt reprices upward, and the gap can double the real size of the loan without you missing a payment.", tone: "no" },
      ],
      cards: [
        { claim: "Assets that reprice — land, shares, shop stock — offer partial protection from devaluation.", answer: true,
      why: "Their prices adjust upward over time, unlike cash. Partial and slow, but real protection." },
        { claim: "Borrowing in a foreign currency while earning in local currency is riskier than it looks.", answer: true,
      why: "Your income does not reprice but your debt does. A devaluation can enlarge the real loan sharply while you keep paying on time." },
      ],
      quiz: { q: "Who is hurt most by a sharp devaluation?",
      options: [
        "Someone holding local cash savings",
        "Someone who owns a shop full of stock",
        "Someone with a local-currency loan at a fixed rate",
        "Someone who owns land",
      ],
      correct: 0,
      why: [
        "Correct. Cash cannot reprice. It takes the full hit at once with nothing to offset it.",
        "Stock reprices upward, so a shop owner is partly protected — the goods are worth more in local money.",
        "This person may actually benefit: the debt is fixed while money weakens, so it is repaid in cheaper currency.",
        "Land tends to reprice over time, which makes it a partial hedge rather than a victim.",
      ] },
    },
    {
      teach: [
        { kind: "h", text: "Protection is not speculation" },
        { kind: "p", text: "Holding some savings in a stable currency because your costs are import-linked is **protection**. Moving money back and forth trying to catch the rate is **speculation**, and the spread you pay each way usually exceeds anything you gain. Pick a share and leave it alone." },
        { kind: "p", text: "Check the rules where you are, too. Some markets restrict foreign-currency accounts or make withdrawal difficult, and a protection you cannot access when you need it is not protection." },
      ],
      cards: [
        { claim: "Moving savings in and out of hard currency to catch the rate is a reliable way to protect yourself.", answer: false,
      why: "That is speculation, and you pay a spread every direction. Protection means picking a share and leaving it." },
        { claim: "A foreign-currency account you cannot withdraw from quickly still protects you fully.", answer: false,
      why: "Protection you cannot reach when you need it is not protection. Access rules matter as much as the currency." },
      ],
      quiz: { q: "What is the difference between protecting yourself and speculating?",
      options: [
        "There is none, both involve foreign currency",
        "Protection means holding a steady share for a reason; speculation means trading the rate for gain",
        "Protection is legal, speculation is not",
        "Speculation is only about crypto",
      ],
      correct: 1,
      why: [
        "The action can look similar, but the intent and the outcome are very different.",
        "Correct. A fixed share matched to your import-linked costs is insurance. Timing the rate is a bet, and the spread makes it a losing one.",
        "Both are usually legal, though some markets restrict foreign-currency holdings.",
        "Speculation is about trying to profit from price movement in anything, not a specific asset.",
      ] },
    },
  ],
  takeaway: "A 40% fall means a 67% price rise, not 40%. Hold a steady share in something that reprices, and never borrow in a currency you do not earn.",
}
