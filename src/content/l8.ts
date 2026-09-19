import type { Lesson } from "./types"

export const l8: Lesson = {
  id: "insurance",
  title: "Insurance is a tool, not a grudge purchase",
  hook: "One question decides whether to insure something. Most people ask a different one.",
  minutes: 4,
  segments: [
    {
      teach: [
        { kind: "p", text: "Most people judge insurance by whether they got their money back. By that test, good insurance always looks like a waste — you paid and nothing happened. That is the product working." },
        { kind: "h", text: "What you are actually buying" },
        { kind: "p", text: "You are not buying a return. You are **moving a risk you cannot survive onto someone who can**. You trade a small, certain, manageable cost for protection against a large, uncertain, unmanageable one." },
      ],
      cards: [
        { claim: "If you never claim, your insurance was a waste of money.", answer: false,
      why: "Not claiming is the good outcome. You bought protection against ruin, not a savings product with a payout." },
        { claim: "Insurance is a form of investment because you may get money back.", answer: false,
      why: "It is risk transfer, not investment. Judging it on return leads people to buy the wrong products and drop the right ones." },
      ],
    },
    {
      teach: [
        { kind: "h", text: "The only question that matters" },
        { kind: "callout", text: "If this happened tomorrow and nobody paid out, would it set me back years — or just annoy me?", tone: "warm" },
        { kind: "p", text: "Years means insure it. Annoy means do not. That single test sorts almost every decision, and it explains why the things people actually insure are often exactly backwards." },
      ],
      cards: [
        { claim: "You should insure anything that would set you back years, and self-insure the rest.", answer: true,
      why: "That is the whole test. Catastrophic and unaffordable goes to the insurer; small and absorbable stays with you." },
      ],
      quiz: { q: "Which of these is the strongest candidate for insurance?",
      options: ["A phone worth one week's income", "A hospital stay that would cost two years of income", "A bicycle", "A kettle"],
      correct: 1,
      why: [
        "One week's income is absorbable. Save for it instead of insuring it.",
        "Correct. Two years of income is the definition of a loss you cannot absorb — exactly what insurance exists for.",
        "Replaceable from savings, so self-insure.",
        "The classic example of cover that should never be bought.",
      ] },
    },
    {
      teach: [
        { kind: "compare", title: "Applying the test", heads: ["Damage if uninsured", "Verdict"], rows: [
      { label: "Serious illness or hospital stay", a: "Ruinous", b: "Insure" },
      { label: "Death of the household earner", a: "Ruinous", b: "Insure" },
      { label: "Crop or livestock loss", a: "A whole season", b: "Insure if available" },
      { label: "Phone screen cracked", a: "Irritating", b: "Do not insure" },
      { label: "Extended warranty on a kettle", a: "Trivial", b: "Do not insure" },
    ] },
        { kind: "h", text: "Why small-item cover is sold so hard" },
        { kind: "p", text: "Because it is the most profitable kind. Small, frequent, predictable losses are cheap for you to absorb and expensive to insure, since you are paying for the admin of every small claim plus a margin. **Self-insure the small stuff** — that is what an emergency fund is." },
      ],
      cards: [
        { claim: "Extended warranties on small electronics are usually good value.", answer: false,
      why: "They cover a loss you could absorb, at a price that includes admin and margin on every small claim. It is the most profitable cover sold." },
        { claim: "An emergency fund is a form of self-insurance.", answer: true,
      why: "Exactly what it is. It is how you cover the small and medium shocks that are not worth paying an insurer to carry." },
      ],
      quiz: { q: "Why do sellers push cover on small, cheap items so hard?",
      options: [
        "Those items break most often",
        "It is required by law",
        "Small predictable losses are the most profitable thing to insure",
        "It reduces the price of the item",
      ],
      correct: 2,
      why: [
        "They may break often, but that is priced in — it does not make the cover good value for you.",
        "No law requires warranty cover on consumer goods.",
        "Correct. Predictable losses can be priced with a healthy margin, and the buyer could easily have absorbed the cost themselves.",
        "It adds to the total you pay, it does not reduce it.",
      ] },
    },
    {
      teach: [
        { kind: "h", text: "Read two numbers, not one" },
        { kind: "p", text: "The premium is what you pay. The **excess** is what you still pay when you claim. A cheap premium with a high excess can be worthless if the excess is more than you could find in a crisis. And check what is excluded — that list is where the real product is described." },
        { kind: "stat", value: "Small and certain", label: "Trade small and certain for large and catastrophic. Never the other way round, and never for something you could simply absorb.", tone: "yes" },
      ],
      cards: [
        { claim: "A low premium always means a better deal.", answer: false,
      why: "Check the excess and the exclusions. A cheap premium with an excess you cannot raise in a crisis is cover that will not work when needed." },
      ],
      quiz: { q: "A policy has a very low premium and a very high excess. What is the risk?",
      options: [
        "There is none, low premium is always better",
        "You may be unable to raise the excess exactly when the disaster happens",
        "The insurer will refuse all claims",
        "It only covers new items",
      ],
      correct: 1,
      why: [
        "The premium is only half the price. The excess is the rest, payable at the worst moment.",
        "Correct. Cover you cannot activate because you cannot find the excess is cover that does not exist.",
        "A high excess is a legitimate structure, not a refusal mechanism.",
        "That is a separate condition, and not what a high excess means.",
      ] },
    },
  ],
  takeaway: "Ask whether the loss would set you back years or merely annoy you. Insure the first, absorb the second, and read the excess before the premium.",
}
