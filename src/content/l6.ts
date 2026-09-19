import type { Lesson } from "./types"

export const l6: Lesson = {
  id: "sacco",
  title: "What a SACCO actually does with your money",
  hook: "You are not a customer. You are part owner — which cuts both ways.",
  minutes: 5,
  segments: [
    {
      teach: [
        { kind: "p", text: "A SACCO, credit union or savings co-operative is not a small bank. It is a **members' club that lends its own members money**. You are not a customer of it, you are part owner of it, and that changes both what you get and what you carry." },
        { kind: "h", text: "The loop" },
        { kind: "p", text: "Members deposit. The SACCO lends those deposits to other members. Borrowers pay interest. After costs, that interest comes back to members as a **dividend** on their savings. There is no outside shareholder taking a cut, which is why rates on both sides are often better than a bank's." },
      ],
      cards: [
        { claim: "In a SACCO, your savings mainly fund loans to other members.", answer: true,
      why: "That is the whole mechanism. Member deposits become member loans, and the interest returns to members as dividends." },
      ],
    },
    {
      teach: [
        { kind: "stat", value: "3× to 5×", label: "Typical borrowing limit as a multiple of your own savings. Your deposits are not just savings, they are the thing that unlocks credit.", tone: "yes" },
      ],
      cards: [
        { claim: "Your borrowing limit is usually tied to how much you have saved.", answer: true,
      why: "Commonly three to five times your deposits. Your savings history is the credit assessment." },
      ],
    },
    {
      teach: [
        { kind: "h", text: "What you actually gain" },
        { kind: "p", text: "Loans at rates a bank will not offer someone with no formal payslip, judged on your savings record instead of a credit score. A dividend that often beats a savings account. And a guarantor system that works on people who know you." },
      ],
      quiz: { q: "Why can a SACCO often lend to someone a bank would refuse?",
      options: [
        "It is not required to check anything",
        "It judges you on your savings record and guarantors who know you, not a payslip",
        "It charges much higher interest to compensate",
        "Government covers the losses",
      ],
      correct: 1,
      why: [
        "A well-run SACCO checks carefully. The difference is what it checks, not whether it checks.",
        "Correct. A visible savings history and members willing to guarantee you replace the formal payslip a bank demands.",
        "SACCO rates are usually lower than a bank's, not higher. That is part of the appeal.",
        "There is generally no state guarantee. That is precisely why you assess it yourself.",
      ] },
    },
    {
      teach: [
        { kind: "h", text: "What you actually carry" },
        { kind: "p", text: "Ownership means you share the losses. If members default in large numbers, the dividend falls and in a bad year your savings can be at risk. A bank absorbs that with shareholder capital; a SACCO absorbs it with **your** capital." },
        { kind: "callout", text: "The most common failure is not fraud. It is insider lending — large loans to people close to the board, poorly secured, which quietly eat the members' money. Ask who the biggest borrowers are.", tone: "no" },
      ],
      cards: [
        { claim: "If many members default, that is the SACCO's problem, not yours.", answer: false,
      why: "You are an owner, not a customer. Member losses are absorbed by member capital — which is your savings." },
        { claim: "Insider lending to board members is a bigger practical risk than outright theft.", answer: true,
      why: "It is far more common and much harder to see — large, poorly secured loans to connected people, approved by the people they benefit." },
        { claim: "A SACCO dividend is guaranteed because it is not a stock market investment.", answer: false,
      why: "It depends on how much interest was collected and how many loans went bad. A poor year can mean a small dividend or none." },
      ],
      quiz: { q: "Your SACCO pays no dividend this year. What is the most likely explanation?",
      options: [
        "It is reinvesting for growth",
        "More loans went bad, so there was less interest income to share out",
        "It is illegal to pay dividends two years running",
        "Members withdrew too much",
      ],
      correct: 1,
      why: [
        "Possible, and a sound SACCO would say so in writing. Treat an unexplained zero as a warning.",
        "Correct. The dividend is what is left after defaults and costs. A missing dividend usually means the loan book is struggling.",
        "There is no such rule anywhere.",
        "Withdrawals affect liquidity, not the interest earned. The dividend comes from lending income.",
      ] },
    },
    {
      teach: [
        { kind: "h", text: "Four things to check before joining" },
        { kind: "p", text: "**1.** Is it registered and supervised by the national regulator, or only registered as a co-operative? **2.** Are audited accounts given to members every year? **3.** What proportion of loans are in arrears? **4.** Has the dividend been paid, in cash, every year for the last five?" },
        { kind: "p", text: "A SACCO that answers all four plainly is usually sound. One that treats the questions as rude has told you the answer." },
      ],
      cards: [
        { claim: "Being registered as a co-operative is the same as being supervised by the financial regulator.", answer: false,
      why: "Two different registers. Co-operative registration is administrative; prudential supervision is what actually checks the books." },
      ],
      quiz: { q: "Which question would tell you most about a SACCO's health?",
      options: [
        "How many members does it have?",
        "What proportion of its loans are in arrears?",
        "How long has it existed?",
        "How modern is its app?",
      ],
      correct: 1,
      why: [
        "Size says nothing about quality. A large SACCO with a bad loan book is a large problem.",
        "Correct. Arrears show whether the lending is sound — the single number that predicts whether dividends and deposits survive.",
        "Age helps, but plenty of long-established institutions have failed from weak lending.",
        "A good app is convenience. It tells you nothing about the loan book.",
      ] },
    },
  ],
  takeaway: "A SACCO pays you better because you are the shareholder — which also means the members' bad loans come out of your savings. Ask about arrears before you ask about dividends.",
}
