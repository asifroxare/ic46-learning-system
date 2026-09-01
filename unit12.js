// Add this unit configuration object into your master unitDatabase array as "unit12"
"unit12": {
    id: "unit12",
    title: "Lab 12: IRDAI Investment Regulations & Accounting",
    subheading: "IRDAI Investment Regulations 2016, Approved vs Other Investment ceilings, YTM amortization, and Fair Value Change Account",
    bites: [
        { tag: "Concept 01", title: "Regulatory Objectives", desc: "Safeguarding policyholder trust funds through strict asset safety, security, and liquidity mandates.", rule: "Rule: Security and solvency override speculative return chasing." },
        { tag: "Concept 02", title: "Approved vs Other Investments", desc: "Strict statutory ceilings govern exposure to sovereign/approved securities versus non-approved categories.", rule: "Rule: Minimum quotas must be maintained in Central/State Government securities." },
        { tag: "Concept 03", title: "Infrastructure Mandate", desc: "Insurers must channel a mandated minimum percentage of investment assets into infrastructure and housing.", rule: "Rule: Statutory floors support national core development." },
        { tag: "Concept 04", title: "Debt Valuation (YTM)", desc: "Fixed-income securities held to maturity are carried at amortized cost using Yield-to-Maturity.", rule: "Rule: Amortization insulates statements from short-term market interest rate swings." },
        { tag: "Concept 05", title: "Fair Value Change Account", desc: "Unrealized equity gains are parked in a balance sheet reserve rather than flowing into operating P&L.", rule: "Rule: Protects solvency by preventing premature distribution of unrealized gains." },
        { tag: "Concept 06", title: "Encumbrance Prohibition", desc: "General insurers cannot create unauthorized liens or encumbrances over statutory investment portfolios.", rule: "Rule: Policyholder reserves must remain unencumbered and liquid." }
    ],
    sandbox: {
        initialState: { cash: 50000000, liabilities: 20000000, equity: 30000000, revenue: 0, expenses: 0, currentStage: 1, score: 0 },
        stages: [
            {
                stage: 1,
                scenario: "Apex General Insurance deploys ₹10,00,00,000 into a portfolio of Central Government sovereign securities and infrastructure bonds.",
                question: "Under IRDAI Investment Regulations, how must these sovereign debt securities be classified and monitored?",
                options: [
                    { id: "A", text: "Classify as Approved Investments complying with statutory sovereign investment minimum quotas", isCorrect: true, financialImpact: { cash: -10000000 }, feedback: "Correct. Sovereign and infrastructure bonds qualify as Approved Investments supporting policy liabilities." },
                    { id: "B", text: "Classify as speculative other investments subject to strict 100% write-down", isCorrect: false, misc: "MIS_SOV_CLASS", feedback: "Incorrect. Government securities form the bedrock of approved statutory investments." }
                ]
            },
            {
                stage: 2,
                scenario: "Apex General Insurance holds listed equity shares purchased for ₹2,00,00,000. At year-end, their market value appreciates to ₹2,50,00,000.",
                question: "How must the ₹50,00,000 unrealized fair value gain be accounted for under insurance investment rules?",
                options: [
                    { id: "A", text: "Credit the ₹50,00,000 gain to the Balance Sheet Fair Value Change Account reserve", isCorrect: true, financialImpact: { equity: 5000000 }, feedback: "Correct. Unrealized equity gains bypass P&L and are parked in the Fair Value Change Account reserve to protect solvency." },
                    { id: "B", text: "Distribute the ₹50,00,000 immediately as cash dividends to directors", isCorrect: false, misc: "MIS_DIV_DIST", feedback: "Incorrect. Unrealized gains cannot be distributed or booked as realized operating income." }
                ]
            },
            {
                stage: 3,
                scenario: "Apex General Insurance holds fixed-income corporate debentures intended to be retained until final maturity.",
                question: "What valuation method applies to debt securities held to maturity under statutory investment accounting?",
                options: [
                    { id: "A", text: "Valued at historical amortized cost using the Yield-to-Maturity (YTM) method", isCorrect: true, financialImpact: {}, feedback: "Correct. Held-to-maturity debt is carried at amortized cost, shielding accounts from market volatility." },
                    { id: "B", text: "Marked to speculative daily stock exchange trading floors", isCorrect: false, misc: "MIS_MARKET_DEBT", feedback: "Incorrect. Held-to-maturity debt avoids daily market-to-market P&L volatility." }
                ]
            }
        ]
    },
    exam: [
        {
            id: "u12_q1",
            question: "1. The primary objective of IRDAI Investment Regulations is to ensure:",
            options: [
                { id: "A", text: "Safety, security, liquidity, and reasonable returns backing policy liabilities", isCorrect: true },
                { id: "B", text: "Maximum speculative trading profits on cryptocurrency", isCorrect: false, misc: "MIS_CRYPTO" },
                { id: "C", text: "Complete elimination of all corporate bank accounts", isCorrect: false, misc: "MIS_ELIM" },
                { id: "D", text: "Unlimited unsecured loans to company directors", isCorrect: false, misc: "MIS_LOANS" }
            ],
            explanation: "Regulations prioritize the safety and security of policyholder trust funds."
        },
        {
            id: "u12_q2",
            question: "2. Assets under IRDAI norms are bifurcated primarily into:",
            options: [
                { id: "A", text: "Approved Investments and Other Investments", isCorrect: true },
                { id: "B", text: "Paper cash and digital gold only", isCorrect: false, misc: "MIS_GOLD" },
                { id: "C", text: "Domestic currency and foreign barter goods", isCorrect: false, misc: "MIS_BARTER" },
                { id: "D", text: "Short-term staff loans and petty cash floats", isCorrect: false, misc: "MIS_PETTY" }
            ],
            explanation: "Investments are strictly classified into Approved and Other categories."
        },
        {
            id: "u12_q3",
            question: "3. Investments in Central Government securities and infrastructure bonds are classified as:",
            options: [
                { id: "A", text: "Approved Investments", isCorrect: true },
                { id: "B", text: "Prohibited Fictitious Assets", isCorrect: false, misc: "MIS_FICT" },
                { id: "C", text: "Personal Director Holdings", isCorrect: false, misc: "MIS_DIR" },
                { id: "D", text: "Unearned Premium Liabilities", isCorrect: false, misc: "MIS_URR" }
            ],
            explanation: "Sovereign debt and infrastructure instruments qualify as Approved Investments."
        },
        {
            id: "u12_q4",
            question: "4. Fixed-income debt securities intended to be held until maturity are valued at:",
            options: [
                { id: "A", text: "Historical amortized cost using YTM", isCorrect: true },
                { id: "B", text: "Daily speculative stock exchange trading prices", isCorrect: false, misc: "MIS_DAILY" },
                { id: "C", text: "Liquidation distress scrap value", isCorrect: false, misc: "MIS_SCRAP" },
                { id: "D", text: "Zero value on date of purchase", isCorrect: false, misc: "MIS_ZERO" }
            ],
            explanation: "Held-to-maturity debt securities are valued at amortized cost via YTM."
        },
        {
            id: "u12_q5",
            question: "5. Unrealized fair value gains on listed equity investments held by insurers are credited to:",
            options: [
                { id: "A", text: "The Fair Value Change Account (Balance Sheet Reserve)", isCorrect: true },
                { id: "B", text: "The current year operating Profit & Loss Account", isCorrect: false, misc: "MIS_PL" },
                { id: "C", text: "The managing director's personal bonus pool", isCorrect: false, misc: "MIS_BONUS" },
                { id: "D", text: "The petty cash disbursement register", isCorrect: false, misc: "MIS_PETTY" }
            ],
            explanation: "Unrealized equity gains are parked in the Fair Value Change Account reserve to protect solvency."
        },
        {
            id: "u12_q6",
            question: "6. General insurers are mandated to maintain minimum investment quotas in:",
            options: [
                { id: "A", text: "Infrastructure and housing projects", isCorrect: true },
                { id: "B", text: "Overseas luxury real estate speculation", isCorrect: false, misc: "MIS_LUX" },
                { id: "C", text: "Private high-risk venture capital startups", isCorrect: false, misc: "MIS_VENTURE" },
                { id: "D", text: "Unrated foreign currency derivatives", isCorrect: false, misc: "MIS_DERIV" }
            ],
            explanation: "Regulations compel minimum investment floors in core infrastructure and housing."
        },
        {
            id: "u12_q7",
            question: "7. Why are unrealized equity gains excluded from the general insurance Profit & Loss Account?",
            options: [
                { id: "A", text: "To prevent premature profit distribution and protect policyholder solvency margins", isCorrect: true },
                { id: "B", text: "Because tax authorities forbid tracking stock prices", isCorrect: false, misc: "MIS_TAX" }, { id: "C", text: "Because software systems cannot calculate percentages", isCorrect: false, misc: "MIS_SW" }, { id: "D", text: "To eliminate all balance sheet assets", isCorrect: false, misc: "MIS_ELIM" }
            ],
            explanation: "Excluding unrealized gains from P&L prevents artificial profit inflation and protects solvency."
        },
        {
            id: "u12_q8",
            question: "8. General insurance companies are restricted from granting:",
            options: [
                { id: "A", text: "Unauthorized loans against policies or encumbrances over statutory trust funds", isCorrect: true },
                { id: "B", text: "Standard monthly salaries to administrative staff", isCorrect: false, misc: "MIS_SAL" }, { id: "C", text: "Routine office utility payments", isCorrect: false, misc: "MIS_UTIL" }, { id: "D", text: "Required regulatory filing fees", isCorrect: false, misc: "MIS_FEE" }
            ],
            explanation: "Statutory trust funds must remain unencumbered and protected."
        },
        {
            id: "u12_q9",
            question: "9. The YTM valuation method for debt securities helps shield financial statements from:",
            options: [
                { id: "A", text: "Short-term market interest rate volatility", isCorrect: true },
                { id: "B", text: "Long-term contractual claim obligations", isCorrect: false, misc: "MIS_OBLIG" }, { id: "C", text: "Statutory audit inspections", isCorrect: false, misc: "MIS_AUDIT" }, { id: "D", text: "Corporate income tax assessments", isCorrect: false, misc: "MIS_ASSS" }
            ],
            explanation: "Amortized cost insulates the balance sheet from interim interest rate fluctuations."
        },
        {
            id: "u12_q10",
            question: "10. Compliance with IRDAI Investment Regulations is verified primarily by:",
            options: [
                { id: "A", text: "Statutory auditors and regulatory investment return filings", isCorrect: true },
                { id: "B", text: "Local municipal traffic police patrols", isCorrect: false, misc: "MIS_TRAFFIC" }, { id: "C", text: "Weather forecasting stations", isCorrect: false, misc: "MIS_WEATH" }, { id: "D", text: "Commercial courier delivery drivers", isCorrect: false, misc: "MIS_COURIER" }
            ],
            explanation: "Statutory auditors and regulatory filings verify adherence to investment ceilings and quotas."
        }
    ]
}