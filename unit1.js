// Lab 01 Data Module: Scope & Solvency
unitDatabase["unit1"] = {
    id: "unit1",
    title: "Lab 01: Financial Accounting & Enterprise Solvency",
    subheading: "Financial Reporting Boundaries, ASM vs. RSM Solvency Ratios, and Statutory Record Maintenance",
    bites: [
        { tag: "Concept 01", title: "Financial Accounting Mechanics", desc: "Financial accounting provides structured identification, measurement, recording, and communication of economic transactions.", rule: "Rule: Every transaction is an economic event, but non-monetary events cannot be recognized." },
        { tag: "Concept 02", title: "Performance vs. Financial Position", desc: "Operational performance is measured via Revenue Accounts and P&L. Financial position is presented in the Balance Sheet.", rule: "Insurance statements follow statutory Form Accounts." },
        { tag: "Concept 03", title: "Enterprise Solvency: ASM vs. RSM", desc: "Available Solvency Margin represents net admissible equity. Required Solvency Margin is the mandated buffer.", rule: "Solvency Control: Minimum Solvency Ratio is 1.50x (150%)." },
        { tag: "Concept 04", title: "Inherent Boundaries & Limitations", desc: "Accounting permits alternative methods and relies on subjective loss estimations like IBNR calculations.", rule: "Objectivity is subject to estimation margins." },
        { tag: "Concept 05", title: "Statutory Record Preservation (Section 128)", desc: "Corporate entities must maintain books on accrual and double-entry basis for not less than 8 financial years.", rule: "Mandatory statutory compliance under penalty of law." },
        { tag: "Concept 06", title: "Operational Branch Ledgers", desc: "Field offices maintain control registers to eliminate premium and claims leakage across registers and books.", rule: "Field registers integrate periodically into consolidated corporate general ledgers." }
    ],
    sandbox: {
        initialState: { cash: 0, liabilities: 0, equity: 0, revenue: 0, expenses: 0, currentStage: 1, score: 0 },
        stages: [
            { stage: 1, scenario: "Apex Shield receives an initial equity capital infusion of ₹1,00,00,000.", question: "How must this capitalization event be recorded?", options: [{ id: "A", text: "Debit Bank Account ₹1,00,00,000 | Credit Share Capital ₹1,00,00,000", isCorrect: true, financialImpact: { cash: 10000000, equity: 10000000 }, feedback: "Correct." }] }
        ]
    },
    exam: [
        { id: "u1_q1", question: "1. Corporate legislation (Section 128) mandates preserving books for a minimum period of:", options: [{ id: "A", text: "5 Financial Years", isCorrect: false, misc: "MIS_SEC128_UNDER" }, { id: "B", text: "8 Financial Years immediately preceding the current year", isCorrect: true }], explanation: "Section 128(5) requires 8 financial years." },
        { id: "u1_q2", question: "2. The minimum required Solvency Ratio (ASM/RSM) for general insurers is:", options: [{ id: "A", text: "1.50x (150%)", isCorrect: true }, { id: "B", text: "1.00x (100%)", isCorrect: false, misc: "MIS_SOLV_1" }], explanation: "Insurers must maintain a minimum ratio of 1.50x." },
        { id: "u1_q3", question: "3. Available Solvency Margin (ASM) is calculated as:", options: [{ id: "A", text: "Admissible Assets minus Admissible Liabilities", isCorrect: true }, { id: "B", text: "Total Gross Revenue minus Operating Expenses", isCorrect: false, misc: "MIS_ASM_REV" }], explanation: "ASM represents net admissible equity resources." },
        { id: "u1_q4", question: "4. Non-monetary events in business are:", options: [{ id: "A", text: "Excluded from accounting ledgers under money measurement", isCorrect: true }, { id: "B", text: "Capitalized as real assets", isCorrect: false, misc: "MIS_NON_MON" }], explanation: "Only measurable economic transactions enter books." },
        { id: "u1_q5", question: "5. Branch control registers include:", options: [{ id: "A", text: "Cover Note Control Registers and Collection Registers", isCorrect: true }, { id: "B", text: "Director personal tax files", isCorrect: false, misc: "MIS_REG_DIR" }], explanation: "Branch registers track operational risks." },
        { id: "u1_q6", question: "6. Financial position snapshot is provided by the:", options: [{ id: "A", text: "Balance Sheet", isCorrect: true }, { id: "B", text: "Revenue Account", isCorrect: false, misc: "MIS_POS_REV" }], explanation: "Balance Sheet reflects assets, liabilities, and equity." },
        { id: "u1_q7", question: "7. Required Solvency Margin (RSM) depends on:", options: [{ id: "A", text: "Underwriting exposures and claim liabilities", isCorrect: true }, { id: "B", text: "Shareholder personal income", isCorrect: false, misc: "MIS_RSM_PER" }], explanation: "RSM is mathematically mandated by risk exposure." },
        { id: "u1_q8", question: "8. Accounting records must be kept on which basis?", options: [{ id: "A", text: "Accrual and double-entry basis", isCorrect: true }, { id: "B", text: "Cash receipt only", isCorrect: false, misc: "MIS_ACC_CASH" }], explanation: "Accrual and double-entry are statutory mandates." },
        { id: "u1_q9", question: "9. Financial accounting primarily serves:", options: [{ id: "A", text: "Both internal and external stakeholders", isCorrect: true }, { id: "B", text: "Only tax auditors exclusively", isCorrect: false, misc: "MIS_ACC_TAX" }], explanation: "It communicates financial results to all stakeholders." },
        { id: "u1_q10", question: "10. Inherent limitations of accounting include:", options: [{ id: "A", text: "Reliance on subjective loss estimations and historical cost", isCorrect: true }, { id: "B", text: "Absolute mathematical liquidation values", isCorrect: false, misc: "MIS_LIM_ABS" }], explanation: "Estimates and historical costs introduce limitations." }
    ]
};