import type { Lesson } from "./types"

export const l4: Lesson = {
  id: "spotting-a-scam",
  title: "How an investment scam is built",
  hook: "They are not clever. They are the same five moves, every time.",
  minutes: 5,
  segments: [
    {
      teach: [
        { kind: "p", text: "Investment scams do not survive because they are sophisticated. They survive because the early payouts are real, and a real payout is more persuasive than any warning." },
        { kind: "p", text: "In a Ponzi scheme, nothing is invested. Your withdrawal is paid out of the deposits of whoever joined after you. It works while deposits grow, and fails the instant they slow — which is not a risk of the model, it is **arithmetic**." },
      ],
      cards: [
        { claim: "A Ponzi scheme can keep running as long as new deposits keep growing.", answer: true,
          why: "That is precisely the mechanism, and precisely why it must end. Growth cannot continue forever, so collapse is scheduled, not possible." },
      ],
    },
    {
      teach: [
        { kind: "stat", value: "Everyone after", label: "The people who lose are always the ones who joined last. Early members are paid, and their genuine profits are the advertising.", tone: "no" },
        { kind: "callout", text: "The most dangerous version comes from someone you trust — a colleague, a church member, a relative — who is genuinely making money and genuinely believes in it. They are not lying to you. They are earlier in the queue.", tone: "no" },
      ],
      cards: [
        { claim: "If your friend has genuinely withdrawn real profit, the scheme must be legitimate.", answer: false,
          why: "Early payouts are exactly how it recruits. Your friend is not lying — they simply joined before the money ran out." },
      ],
      quiz: {
        q: "A scheme has paid you three small withdrawals on time. What has that proved?",
        options: [
          "That the scheme is solvent",
          "That your money is safe",
          "Almost nothing — small payouts are the cheapest way to buy your trust",
          "That larger withdrawals will also work",
        ],
        correct: 2,
        why: [
          "It proves they had enough incoming deposits that week. That is not solvency.",
          "Paying small amounts is the cheapest part of running the scheme. It says nothing about safety.",
          "Correct. Early small payouts are a marketing cost. They are the mechanism, not evidence against it.",
          "This is the exact assumption the structure is designed to produce, and the point where people put in their savings.",
        ],
      },
    },
    {
      teach: [
        { kind: "h", text: "Tells one and two" },
        { kind: "p", text: "**1. A guaranteed return.** Real investments state what could go wrong. Nobody who actually manages money promises a number." },
        { kind: "p", text: "**2. You are paid to recruit.** A legitimate fund pays people to manage money. A scheme pays people to bring in deposits, because deposits are the only income." },
      ],
      cards: [
        { claim: "A guaranteed monthly return is a warning sign, not a selling point.", answer: true,
          why: "Real returns vary, and regulated products are required to say so. A guarantee means someone is absorbing all the risk, and nobody does that for free." },
        { claim: "Being paid a bonus for recruiting others is a normal feature of investment funds.", answer: false,
          why: "Funds pay for managing money. Paying for deposits means deposits are the business — which is the definition of the problem." },
      ],
      quiz: {
        q: "Which of these is the single strongest signal that something is a Ponzi scheme?",
        options: [
          "The returns are higher than a bank",
          "You earn a bonus for every person you bring in",
          "It is run online",
          "It involves crypto",
        ],
        correct: 1,
        why: [
          "Plenty of legitimate investments beat a bank. On its own this tells you little.",
          "Correct. Paying for recruitment means new deposits are the revenue. That is the engine of the scheme.",
          "Almost everything is run online now, including every legitimate fund.",
          "Crypto is used by both real businesses and scams. The asset is not the tell — the payout structure is.",
        ],
      },
    },
    {
      teach: [
        { kind: "h", text: "Tells three, four and five" },
        { kind: "p", text: "**3. The strategy is a vibe.** 'AI forex arbitrage', 'crypto mining pools'. If they cannot explain where the profit comes from in one plain sentence, it is because there is no profit." },
        { kind: "p", text: "**4. Urgency.** Closing soon, limited slots. Pressure exists to stop you asking questions." },
        { kind: "p", text: "**5. Withdrawals work — until they are big.** Small ones build trust. Then large ones need 'verification', a fee, or an upgrade." },
      ],
      cards: [
        { claim: "Being told to decide before Friday is a reason to slow down, not speed up.", answer: true,
          why: "Urgency is a tool to stop you checking. A real opportunity survives you taking a week to look into it." },
        { claim: "If a platform is registered as a company, your money is protected.", answer: false,
          why: "Company registration is paperwork anyone can file. What matters is licensing by the financial regulator, and that is a different register." },
      ],
    },
    {
      teach: [
        { kind: "h", text: "One test that costs nothing" },
        { kind: "p", text: "Ask: **where does the profit come from, who pays it, and why would they?** Write the answer in one sentence. If you cannot, you have your answer — and you have not spent anything to get it." },
      ],
      quiz: {
        q: "What is the one question that exposes most schemes fastest?",
        options: [
          "What is the expected return?",
          "Where does the profit come from, and who pays it?",
          "How long have you been operating?",
          "Can I start with a small amount?",
        ],
        correct: 1,
        why: [
          "They have a rehearsed and attractive answer to this one.",
          "Correct. Every real investment has a plain answer — rent, interest, profit from selling something. A scheme cannot answer it in one sentence.",
          "Schemes run for years before collapsing, so a long track record is not protection.",
          "Starting small is how almost everyone gets in. It limits your first loss, not your eventual one.",
        ],
      },
    },
  ],
  takeaway: "Ask where the profit comes from and who pays it. If the answer takes more than one sentence, the answer is that it comes from you.",
}
