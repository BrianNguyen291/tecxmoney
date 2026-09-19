import type { Lesson } from "./types"

export const l1: Lesson = {
  id: "inflation",
  title: "Money sitting still is money leaking",
  hook: "Why the safest-feeling place for your cash is quietly the most expensive.",
  minutes: 5,
  segments: [
    {
      teach: [
        { kind: "p", text: "Keeping cash in a wallet, under a mattress, or in a mobile money account feels safe. Nothing can be lost, nobody can take it. But safe from theft is not the same as safe from **inflation**." },
        { kind: "p", text: "Inflation means the same money buys less next year than it does today. You are not charged anything. The number in your account does not move. What moves is everything you want to buy with it." },
      ],
      cards: [
        { claim: "If your account balance is the same as last year, you have lost nothing.", answer: false,
          why: "The number held still but prices did not. Same balance plus any inflation means less buying power than you started with." },
      ],
    },
    {
      teach: [
        { kind: "h", text: "Put a number on it" },
        { kind: "stat", value: "20%", label: "If prices rise 20% in a year, **100,000 left in a wallet buys what 83,000 buys today**. You lost 17,000 without spending a shilling.", tone: "no" },
      ],
      cards: [
        { claim: "If inflation is 25% a year, prices roughly double in under four years.", answer: true,
          why: "At 25% a year, prices double in about three years. Money you will need in five years cannot sit still." },
      ],
    },
    {
      teach: [
        { kind: "h", text: "Mobile wallets are not savings" },
        { kind: "p", text: "Most mobile money wallets pay **0% interest**. They are built to move money, not to grow it. That is a fine job for the money you will spend this week, and a bad job for the money you will need in three years." },
      ],
      cards: [
        { claim: "Mobile money wallets usually pay no interest on the balance you keep in them.", answer: true,
          why: "They are payment rails, not savings products. Excellent for moving money this week, poor for holding money for three years." },
      ],
      quiz: {
        q: "Your friend says: 'I don't invest, so inflation doesn't affect me.' What is wrong with this?",
        options: [
          "Nothing, inflation only affects share prices",
          "Inflation affects everyone who holds money — not investing just removes any defence",
          "Inflation only matters if you have a loan",
          "Inflation only applies to imported goods",
        ],
        correct: 1,
        why: [
          "Inflation is about the price of everything you buy — food, rent, transport — not share prices.",
          "Correct. Holding money is the exposure. Refusing to invest does not opt you out, it just removes the only defence.",
          "Loans are actually the one thing inflation can help with, since you repay in weaker money.",
          "Imported goods move fastest, but inflation shows up across the whole basket.",
        ],
      },
    },
    {
      teach: [
        { kind: "h", text: "The only number that matters is the gap" },
        { kind: "p", text: "A savings account paying 6% sounds like a gain. If inflation is 15%, it is a **9% loss** every year. This is called the real return: what you earn minus what prices rose." },
      ],
      cards: [
        { claim: "A savings account paying 6% loses you money when inflation is 15%.", answer: true,
          why: "Your real return is 6% minus 15%, so about minus 9%. The balance grows while the buying power shrinks." },
      ],
      quiz: {
        q: "Inflation is 12%. Which option is the only one that keeps its buying power?",
        options: ["Cash at home, 0%", "Current account, 2%", "Fixed deposit, 9%", "Money market fund, 14%"],
        correct: 3,
        why: [
          "Cash at 0% loses the full 12%. It only feels safe because the number does not move.",
          "2% against 12% inflation is still a 10% loss in real terms.",
          "Close, and far better than cash — but 9% against 12% is still a 3% loss each year.",
          "Correct. 14% beats 12%, so buying power grows slightly. Beating inflation is the bar, not beating zero.",
        ],
      },
    },
    {
      teach: [
        { kind: "compare", title: "The same 100,000, after one year at 15% inflation", heads: ["You have", "It buys"], rows: [
          { label: "Cash / mobile wallet (0%)", a: "100,000", b: "87,000 worth" },
          { label: "Savings account (6%)", a: "106,000", b: "92,000 worth" },
          { label: "Money market fund (16%)", a: "116,000", b: "101,000 worth" },
        ] },
        { kind: "callout", text: "Only the third one actually kept its value. The first two lost money while the balance went up or stayed flat.", tone: "warm" },
      ],
      cards: [
        { claim: "Inflation is only a problem for people who invest.", answer: false,
          why: "It is the opposite. Investors have a chance of keeping up. The person holding pure cash is guaranteed to fall behind." },
      ],
    },
    {
      teach: [
        { kind: "h", text: "What this does not mean" },
        { kind: "p", text: "It does not mean move everything out of cash. You need money you can reach today, and that money should sit somewhere boring and instant. It means **know which pile is which**, and stop letting long-term money sit in a short-term place." },
      ],
      cards: [
        { claim: "Keeping some money in instant cash is a mistake.", answer: false,
          why: "Money you may need this week belongs somewhere instant, even at 0%. The mistake is leaving money there for years." },
      ],
      quiz: {
        q: "Which money genuinely belongs in a 0% mobile wallet?",
        options: ["School fees due in two years", "Rent due at the end of this month", "A house deposit you are building over five years", "Retirement savings"],
        correct: 1,
        why: [
          "Two years is long enough for inflation to take a real bite. This belongs somewhere earning.",
          "Correct. Money you spend within weeks should be instant and boring. Returns are irrelevant over 30 days.",
          "Five years in a 0% account could lose half its buying power in a high-inflation market.",
          "The longest horizon you have is the worst possible fit for a 0% account.",
        ],
      },
    },
  ],
  takeaway: "The question is never 'is my money safe'. It is 'is my money beating inflation, and does this pile need to?'",
}
