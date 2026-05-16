export type BlogSection = {
  heading: string;
  paragraphs: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  metaTitle: string;
  metaDescription: string;
  image?: string;
  author?: string;
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "uk-business-setting-up-in-uae",
    title: "UK Business Setting Up in the UAE: What to Sort Before You Trade",
    excerpt:
      "A practical guide for UK founders planning a UAE company, bank account, tax registration and first-year finance setup.",
    date: "2026-02-04",
    readTime: "7 min read",
    category: "Company Formation",
    metaTitle: "UK Business Setting Up in UAE | Practical Guide | Countify",
    metaDescription:
      "A practical guide for UK businesses setting up in the UAE, covering company structure, banking, tax registration and first-year accounting.",
    sections: [
      {
        heading: "Start with the reason for being in the UAE",
        paragraphs: [
          "The best UAE setup is not always the cheapest licence or the fastest free zone. It depends on what the business will actually do: sell locally, invoice overseas clients, hire staff, hold stock, or build a regional base. A UK consultancy with remote clients needs a different structure from a trading company importing goods into Dubai.",
          "Before choosing a licence, write down where your customers are, where contracts will be signed, whether you need office space, and whether staff will need visas. Those answers usually narrow the options quickly and help avoid paying for amendments later.",
        ],
      },
      {
        heading: "Free zone or mainland is a commercial decision",
        paragraphs: [
          "Free zones are popular because the setup is organised, ownership is straightforward and packages often include visas and workspace. Mainland companies can be better where the business needs broad UAE market access, government tenders or certain regulated activities.",
          "The tax position also needs attention. A free zone company is not automatically tax-free in every situation. The 0% corporate tax rate depends on qualifying income and meeting the relevant conditions. If the company will deal with mainland customers or connected parties, get advice before assuming the outcome.",
        ],
      },
      {
        heading: "Banking takes preparation",
        paragraphs: [
          "UAE banks will normally ask for a clear business model, shareholder documents, proof of address, contracts or pipeline evidence, and sometimes UK accounts. New companies with no trading history can still open accounts, but weak documentation slows the process.",
          "Prepare a simple pack before applying: licence, incorporation documents, passport and Emirates ID where available, expected customer countries, expected monthly turnover and sample invoices or contracts. It feels basic, but it reduces back-and-forth.",
        ],
      },
      {
        heading: "Keep the UK side clean",
        paragraphs: [
          "A UK owner may still have UK tax filing obligations, and an existing UK company may need to consider transfer pricing, management recharges, residency and where decisions are made. The UAE entity should not be treated as a loose side project with mixed bank accounts and informal invoices.",
          "Set up accounting from month one. That means a chart of accounts, invoice numbering, expense policy, cloud bookkeeping and a simple month-end routine. It is much easier to build good records early than to rebuild a year of transactions when a bank, auditor or tax authority asks questions.",
        ],
      },
    ],
  },
  {
    slug: "uae-corporate-tax-guide-2026",
    title: "UAE Corporate Tax in 2026: A Plain-English Guide for SMEs",
    excerpt:
      "What UAE businesses should know about registration, taxable income, free zone rules, filing deadlines and record keeping.",
    date: "2026-02-11",
    readTime: "8 min read",
    category: "Corporate Tax",
    metaTitle: "UAE Corporate Tax Guide 2026 | SME Tax Basics | Countify",
    metaDescription:
      "Plain-English UAE corporate tax guide for SMEs covering registration, taxable income, free zone rules, deadlines and records.",
    sections: [
      {
        heading: "Corporate tax is now part of normal UAE business life",
        paragraphs: [
          "UAE corporate tax is no longer something businesses can leave until year end. The rules affect how you price services, document related-party transactions, review free zone income and close monthly accounts.",
          "For many SMEs, the biggest risk is not the tax rate itself. It is poor records. If revenue, expenses, owner withdrawals and intercompany balances are not clear, the tax return becomes slower, more expensive and more exposed to mistakes.",
        ],
      },
      {
        heading: "Registration and filing need a calendar",
        paragraphs: [
          "Businesses should track their corporate tax registration obligations and filing deadlines based on their licence and financial year. Missing a deadline can create penalties even where the final tax liability is small.",
          "A simple compliance calendar should include bookkeeping cut-off dates, VAT quarters, payroll dates, corporate tax registration, return preparation and expected payment dates. Treat it like an operating rhythm, not an annual scramble.",
        ],
      },
      {
        heading: "Taxable income starts with good accounts",
        paragraphs: [
          "Corporate tax calculations normally begin with accounting profit, then adjust for tax rules. That makes accurate bookkeeping essential. Revenue should be recognised consistently, costs should be supported by invoices, and personal expenses should not be mixed into the company ledger.",
          "If a business has related-party transactions, management fees, owner loans or cross-border payments, those items need extra care. The commercial reason for each transaction should be visible from the paperwork.",
        ],
      },
      {
        heading: "Free zone companies need a real review",
        paragraphs: [
          "Free zone companies may qualify for a 0% rate on qualifying income, but the conditions matter. Activities, customers, mainland dealings, substance and documentation all influence the position.",
          "Do not rely on the phrase 'free zone' as a tax plan. Review the licence activity, income streams and contracts before the year closes, while there is still time to correct processes and documents.",
        ],
      },
    ],
  },
  {
    slug: "freezone-vs-mainland-uae",
    title: "Free Zone vs Mainland UAE: How to Choose the Right Setup",
    excerpt:
      "A practical comparison of free zone and mainland companies for UAE founders, consultants, traders and overseas owners.",
    date: "2026-02-18",
    readTime: "6 min read",
    category: "Company Formation",
    metaTitle: "Free Zone vs Mainland UAE | Business Setup Guide | Countify",
    metaDescription:
      "Compare UAE free zone and mainland company setup options, including licences, customers, visas, costs, banking and tax considerations.",
    sections: [
      {
        heading: "There is no universal best option",
        paragraphs: [
          "Free zone and mainland setups both work well when they match the business model. Problems usually appear when a company chooses a package before thinking through customers, activities, staff and banking.",
          "A solo consultant billing international clients may value a simple free zone package. A company selling directly across the UAE may need mainland flexibility. A trading business may care more about warehousing, customs and bank comfort than the licence headline price.",
        ],
      },
      {
        heading: "Think about customers and contracts",
        paragraphs: [
          "If your customers are mainly outside the UAE, a free zone can be efficient. If your customers are UAE mainland businesses or government entities, mainland may be more suitable depending on the activity and contract requirements.",
          "Also check whether your activity is regulated. Some professional, financial, medical, education or technical activities may need approvals beyond the standard licence.",
        ],
      },
      {
        heading: "Visas, office space and banking matter",
        paragraphs: [
          "Founders often compare setup costs but forget practical details. How many visas are needed? Is a physical office required? Will the bank understand the activity? Can the licence support future hiring or new services?",
          "The cheapest option can become expensive if it needs to be changed six months later. A slightly better-fitting structure usually saves time, stress and amendment fees.",
        ],
      },
      {
        heading: "Tax should be reviewed before incorporation",
        paragraphs: [
          "Corporate tax and VAT do not disappear because a company is newly formed. The setup decision can affect qualifying free zone income, VAT registration timing, invoicing, transfer pricing and record keeping.",
          "Before incorporating, map the first year: expected revenue, customers, suppliers, staff, owner payments and accounting software. That map makes the setup decision much clearer.",
        ],
      },
    ],
  },
  {
    slug: "uae-rd-tax-incentives-guide",
    title: "UAE R&D Tax Incentives: How to Spot Qualifying Projects",
    excerpt:
      "A grounded guide to identifying research and development activity, costs and documentation for UAE corporate tax purposes.",
    date: "2026-02-25",
    readTime: "7 min read",
    category: "R&D Advisory",
    metaTitle: "UAE R&D Tax Incentives Guide | Qualifying Projects | Countify",
    metaDescription:
      "Guide to UAE R&D tax incentives, qualifying projects, eligible costs, technical evidence and documentation for stronger claims.",
    sections: [
      {
        heading: "R&D is not only for laboratories",
        paragraphs: [
          "Many businesses hear R&D and think of scientists in white coats. In practice, qualifying work can appear in software, engineering, manufacturing, product development, process improvement and technical problem solving.",
          "The important question is whether the team tried to resolve technical uncertainty. If the answer was obvious to a competent professional at the start, it is less likely to qualify. If the team had to test, iterate and learn, it may be worth reviewing.",
        ],
      },
      {
        heading: "Look for uncertainty, not just novelty",
        paragraphs: [
          "A project can be new to your business without being R&D. Buying a standard system and configuring it is usually not enough. Building a custom workflow because existing tools cannot meet a technical requirement may be different.",
          "Good R&D reviews ask what the technical goal was, why normal methods were not enough, what alternatives were tested, what failed, and what knowledge was gained by the end.",
        ],
      },
      {
        heading: "Documentation should be created as work happens",
        paragraphs: [
          "The strongest claims are supported by project notes, timesheets, technical discussions, design records, testing logs, cost schedules and management sign-off. Rebuilding evidence long after the project ends is harder and less convincing.",
          "Finance and technical teams should talk early. The technical team explains the uncertainty; finance captures payroll, contractor, material and other relevant costs in a way that can be reviewed later.",
        ],
      },
      {
        heading: "A careful claim is better than an aggressive one",
        paragraphs: [
          "R&D incentives can be valuable, but the claim should be realistic. Overstating costs or including routine work creates risk if the position is challenged.",
          "A measured approach usually works best: identify qualifying projects, separate routine delivery from technical work, document assumptions and keep a clear file for each claim period.",
        ],
      },
    ],
  },
  {
    slug: "vat-registration-uae-guide",
    title: "VAT Registration in the UAE: When to Register and What to Prepare",
    excerpt:
      "A clear guide to UAE VAT registration thresholds, timing, documents and first return preparation for growing businesses.",
    date: "2026-03-03",
    readTime: "6 min read",
    category: "VAT",
    metaTitle: "VAT Registration UAE Guide | Countify",
    metaDescription:
      "UAE VAT registration guide covering thresholds, timing, required documents, common mistakes and first return preparation.",
    sections: [
      {
        heading: "Do not wait until the threshold is already behind you",
        paragraphs: [
          "VAT registration is often left too late because founders focus on sales first and paperwork second. That is understandable, but it can create penalties, rushed filings and messy invoice corrections.",
          "Track taxable supplies every month. If revenue is approaching the mandatory registration threshold, prepare early so the application, tax invoice format and bookkeeping are ready before the first VAT period begins.",
        ],
      },
      {
        heading: "Get the documents in order",
        paragraphs: [
          "A VAT application usually needs trade licence details, passport and Emirates ID where relevant, contact information, bank details, turnover evidence and business activity information. The exact pack depends on the business.",
          "Turnover evidence should be clear. Contracts, invoices, bank statements and management reports should tell the same story. If they do not, fix the records before filing the application.",
        ],
      },
      {
        heading: "VAT changes how invoices and expenses are handled",
        paragraphs: [
          "Once registered, invoices must include the right tax details and VAT treatment. Expenses also need proper tax invoices if input VAT is to be recovered.",
          "This is where small habits matter. Save supplier invoices, separate personal spending, reconcile bank accounts and review VAT codes monthly. A clean first return sets the tone for later compliance.",
        ],
      },
      {
        heading: "The first return should not be a surprise",
        paragraphs: [
          "Before the first VAT return is due, review sales, purchases, reverse charge entries, imports, exempt income and any unusual transactions. Do not wait until the filing day to understand the numbers.",
          "A short month-end VAT review can catch most issues early. It also gives owners a clearer view of cash flow, because VAT collected is not business profit.",
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
