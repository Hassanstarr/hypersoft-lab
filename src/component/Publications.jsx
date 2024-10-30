import React, { useRef } from 'react'
import Nigth from "../asset/nigth.jpg"
import '../style/Publications.css'


const Publications = () => {

    document.title = "Publications"


    const publications2024 = [
        {
            title: "Innovative Soft Cryptosystem for Encrypting and Decrypting Messages with IDEA",
            journal: "Sustainable Machine Intelligence Journal",
            volume: "9",
            issue: "_",
            doi: "https://doi.org/10.61356/smij.2024.9385",
            doiText: "Link to the Article"
        },
        {
            title: "A risk analysis based multi-attribute decision-making framework for supply chain management using hypersoft mappings",
            journal: "IEEE Access",
            volume: "_",
            issue: "_",
            doi: "https://doi.org/10.1109/access.2024.3441717",
            doiText: "Link to the Article"
        },
        {
            title: "Cubic Soft Ideals on B-algebra for Solving Complex Problems: Trend Analysis, Proofs, Improvements, and Applications",
            journal: "Neutrosophic Systems with Applications",
            volume: "20",
            issue: "_",
            doi: "https://doi.org/10.61356/j.nswa.2024.20347 ",
            doiText: "Link to the Article"
        },
        {
            title: "Some New Aggregation Operations of Intuitionistic Fuzzy Hypersoft Set",
            journal: "HyperSoft Set Methods in Engineering",
            volume: "2",
            issue: "_",
            doi: "https://doi.org/10.61356/j.hsse.2024.2337 ",
            doiText: "Link to the Article"
        },
        {
            title: "Renewable energy resource management using an integrated robust decision making model under entropy and similarity measures of fuzzy hypersoft set",
            journal: "Heliyon",
            volume: "10",
            issue: "13",
            doi: "https://doi.org/10.1016/j.heliyon.2024.e33464 ",
            doiText: "Link to the Article"
        },
        {
            title: "Applications of Spherical Fuzzy Hypersoft Sets in Decision Support Systems and Beyond",
            journal: "HyperSoft Set Methods in Engineering",
            volume: "2",
            issue: "_",
            doi: "https://doi.org/10.61356/j.hsse.2024.2312 ",
            doiText: "Link to the Article"
        },
        {
            title: "Extension of Double Frame Soft Set to Double Frame Hypersoft Set (DFSS to DFHSS)",
            journal: "HyperSoft Set Methods in Engineering",
            volume: "2",
            issue: "_",
            doi: "https://doi.org/10.61356/j.hsse.2024.2293",
            doiText: "Link to the Article"
        },
        {
            title: "Foundational Exploration and Key Properties of Refined Intuitionistic Q-fuzzy Set: A Comprehensive Study on Mathematical Framework and Set-Theoretic Operations",
            journal: "_",
            volume: "_",
            issue: "_",
            doi: "https://doi.org/10.22541/au.171601006.63158465/v1 ",
            doiText: "Link to the Article"
        },
        {
            title: "Fixed point theorems in orthogonal intuitionistic fuzzy b-metric spaces with an application to Fredholm Integral Equation",
            journal: "Transactions on Fuzzy Sets and Systems",
            volume: "500",
            issue: "1",
            doi: "",
            doiText: ""
        },
        {
            title: "Topological numbers of fuzzy soft graphs and their application",
            journal: "Information Sciences",
            volume: "667",
            issue: "120468",
            doi: "https://doi.org/10.1016/j.ins.2024.120468",
            doiText: "Link to the Article"
        },
        {
            title: "Cosine and cotangent similarity measures for intuitionistic fuzzy hypersoft sets with application in MADM problem",
            journal: "Heliyon",
            volume: "10",
            issue: "7",
            doi: "https://doi.org/10.1016/j.heliyon.2024.e27886",
            doiText: "Link to the Article"
        },
        {
            title: "Development of an Investment Sector Selector Using a TOPSIS Method Based on Novel Distances and Similarity Measures for Picture Fuzzy Hypersoft Sets",
            journal: "IEEE Access",
            volume: "_",
            issue: "_",
            doi: "https://doi.org/10.1109/access.2024.3380025",
            doiText: "Link to the Article"
        },
        {
            title: "Modeling uncertainties associated with multi-attribute decision-making based evaluation of cooling system using interval-valued complex intuitionistic fuzzy hypersoft settings",
            journal: "AIMS Mathematics",
            volume: "9",
            issue: "5",
            doi: "https://doi.org/10.3934/math.2024559",
            doiText: "Link to the Article"
        },
        {
            title: "A robust framework for the selection of optimal COVID-19 mask based on aggregations of interval-valued multi-fuzzy hypersoft sets",
            journal: "Expert systems with applications",
            volume: "238",
            issue: "_",
            doi: "https://doi.org/10.1016/j.eswa.2023.121944",
            doiText: "Link to the Article"
        },
        {
            title: "Linear diophantine fuzzy clustering algorithm based on correlation coefficient and analysis on logistic efficiency of food products",
            journal: "IEEE Access",
            volume: "_",
            issue: "_",
            doi: "https://doi.org/10.1109/access.2024.3371986",
            doiText: "Link to the Article"
        },
        {
            title: "Development of Pythagorean Neutrosophic Hypersoft Set with Application in Work Life Balance Problem",
            journal: "HyperSoft Set Methods in Engineering",
            volume: "1",
            issue: "_",
            doi: "https://doi.org/10.61356/j.hsse.2024.18550",
            doiText: "Link to the Article"
        },
        {
            title: "Unveiling Efficiency: Investigating Distance Measures in Wastewater Treatment Using Interval-Valued Neutrosophic Fuzzy Soft Set",
            journal: "Neutrosophic Systems with Applications",
            volume: "15",
            issue: "_",
            doi: "https://doi.org/10.61356/j.nswa.2024.1512356",
            doiText: "Link to the Article"
        },
        {
            title: "Relation on Fermatean Neutrosophic Soft Set with Application to Sustainable Agriculture",
            journal: "HyperSoft Set Methods in Engineering",
            volume: "1",
            issue: "_",
            doi: "https://doi.org/10.61356/j.hsse.2024.18250",
            doiText: "Link to the Article"
        },
        {
            title: "From ambiguity to clarity: unraveling the power of similarity measures in multi-polar interval-valued intuitionistic fuzzy soft sets",
            journal: "Decision Making Advances",
            volume: "2",
            issue: "1",
            doi: "https://doi.org/10.31181/dma21202421",
            doiText: "Link to the Article"
        },
        {
            title: "The Development of a Hybrid Model for Dam Site Selection Using a Fuzzy Hypersoft Set and a Plithogenic Multipolar Fuzzy Hypersoft Set",
            journal: "Foundations",
            volume: "4",
            issue: "2",
            doi: "https://doi.org/10.3390/foundations4010004",
            doiText: "Link to the Article"
        },
        {
            title: "A hybrid entropy-based economic evaluation of hydrogen generation techniques using Multi-Criteria Decision Making",
            journal: "International Journal of Hydrogen Energy",
            volume: "49",
            issue: "_",
            doi: "https://doi.org/10.1016/j.ijhydene.2023.10.324",
            doiText: "Link to the Article"
        },
        {
            title: "Soft algebraic structures embedded with soft members and soft elements: an abstract approach",
            journal: "journal of mathematics and computer science",
            volume: "_",
            issue: "_",
            doi: "https://doi.org/10.22436/jmcs.033.03.04",
            doiText: "Link to the Article"
        },
        {
            title: "An intuitionistic fuzzy hypersoft expert set-based robust decision-support framework for human resource management integrated with modified TOPSIS and correlation coefficient",
            journal: "Neural Computing and Applications",
            volume: "36",
            issue: "3",
            doi: "https://doi.org/10.1007/s00521-023-09085-9",
            doiText: "Link to the Article"
        }
    ]

    const publications2023 = [
        {
            title: "An algorithmic multiple attribute decision-making method for heart problem analysis under neutrosophic hypersoft expert set with fuzzy parameterized degree-based setting",
            journal: "PeerJ Computer Science",
            volume: "9",
            issue: "_",
            doi: "https://doi.org/10.7717/peerj-cs.1607",
            doiText: "Link to the Article"
        },
        {
            title: "A hybrid entropy-based economic evaluation of hydrogen generation techniques using Multi-Criteria Decision Making",
            journal: "International Journal of Hydrogen Energy",
            volume: "49",
            issue: "Part D",
            doi: "https://doi.org/10.1016/j.ijhydene.2023.10.324",
            doiText: "Link to the Article"
        },
        {
            title: "A robust algorithmic framework for the evaluation of international cricket batters in ODI format based on q-rung linguistic neutrosophic quantification",
            journal: "Heliyon",
            volume: "9",
            issue: "_",
            doi: "https://doi.org/10.1016/j.heliyon.2023.e21429",
            doiText: "Link to the Article"
        },
        {
            title: "An intuitionistic fuzzy hypersoft expert set-based robust decision-support framework for human resource management integrated with modified TOPSIS and correlation coefficient",
            journal: "Neural Computing and Applications",
            volume: "_",
            issue: "_",
            doi: "https://doi.org/10.1007/s00521-023-09085-9",
            doiText: "Link to the Article"
        },
        {
            title: "Detecting Patterns of Infection-Induced Fertility Using Fermatean Neutrosophic Set with Similarity Analysis",
            journal: "IEEE Access",
            volume: "11",
            issue: "_",
            doi: "https://doi.org/10.1109/ACCESS.2023.3323024",
            doiText: "Link to the Article"
        },
        {
            title: "Human Intuitionistic Data-Based Employee Performance Evaluation with Similarity Measure Using Lattice Ordered Picture Fuzzy Hypersoft Sets",
            journal: "IEEE Access",
            volume: "11",
            issue: "_",
            doi: "https://doi.org/10.1109/ACCESS.2023.3318599",
            doiText: "Link to the Article"
        },
        {
            title: "Development of hamming and hausdorff distance metrics for cubic intuitionistic fuzzy hypersoft set in cement storage quality control: Development and evaluation",
            journal: "Plos one",
            volume: "18",
            issue: "9",
            doi: "https://doi.org/10.1371/journal.pone.0291817",
            doiText: "Link to the Article"
        },
        {
            title: "Bipolar picture fuzzy hypersoft set-based performance analysis of abrasive textiles for enhanced quality control",
            journal: "Heliyon",
            volume: "9",
            issue: "9",
            doi: "https://doi.org/10.1016/j.heliyon.2023.e19821",
            doiText: "Link to the Article"
        },
        {
            title: "An innovative approach to passport quality assessment based on the possibility q-rung ortho-pair fuzzy hypersoft set",
            journal: "Heliyon",
            volume: "9",
            issue: "9",
            doi: "https://doi.org/10.1016/j.heliyon.2023.e19379",
            doiText: "Link to the Article"
        },
        {
            title: "A customized TOPSISmethod to rank the best airlines to fly during COVID-19 pandemic with q-rung orthopairmulti-fuzzy soft information",
            journal: "Soft Computing",
            volume: "27",
            issue: "20",
            doi: "https://doi.org/10.1007/s00500-023-08976-2",
            doiText: "Link to the Article"
        },
        {
            title: "New Fixed Point Results in Neutrosophic b-Metric Spaces With Application",
            journal: "International Journal of Analysis and Applications",
            volume: "21",
            issue: "_",
            doi: "https://doi.org/10.28924/2291-8639-21-2023-73",
            doiText: "Link to the Article"
        },
        {
            title: "An innovative decision-making framework for supplier selection based on ahybrid interval-valued neutrosophic soft expert set",
            journal: "AIMS Mathematics",
            volume: "8",
            issue: "9",
            doi: "http://dx.doi.org/10.3934/math.20231128",
            doiText: "Link to the Article"
        },
        {
            title: "An innovative mathematical approach to the evaluation of susceptibility in liver disorder based on fuzzy parameterized complex fuzzy hypersoft set",
            journal: "Biomedical Signal Processing and Control",
            volume: "88",
            issue: "2023",
            doi: "https://doi.org/10.1016/j.bspc.2023.105204",
            doiText: "Link to the Article"
        },
        {
            title: "A robust algorithmic cum integrated approach of interval-valued fuzzy hypersoft set and OOPCS for real estate pursuit",
            journal: "PeerJ Computer Science",
            volume: "9",
            issue: "_",
            doi: "https://doi.org/10.7717/peerj-cs.1423",
            doiText: "Link to the Article"
        },
        {
            title: "Fppsv-NHSS: Fuzzy parameterized possibility single valued neutrosophic hypersoft set to site selection for solid waste management",
            journal: "Applied Soft Computing",
            volume: "140",
            issue: "_",
            doi: "https://doi.org/10.1016/j.asoc.2023.110273",
            doiText: "Link to the Article"
        },
        {
            title: "A robust MADM-approach to recruitment-based pattern recognition by using similarity measures of interval-valued fuzzy hypersoft set",
            journal: "AIMS Mathematics",
            volume: "8",
            issue: "5",
            doi: "http://dx.doi.org/10.3934/math.2023620",
            doiText: "Link to the Article"
        },
        {
            title: "An intelligent multiple-criteria decision-making approach based on sv-neutrosophic hypersoft set with possibility degree setting for investment selection",
            journal: "Management Decision",
            volume: "61",
            issue: "2",
            doi: "https://doi.org/10.1108/MD-04-2022-0462",
            doiText: "Link to the Article"
        },
        {
            title: "Generalized plithogenic whole hypersoft set, PFHSS-Matrix, operators and applications as COVID-19 data structures",
            journal: "Journal of Intelligent & Fuzzy Systems",
            volume: "_",
            issue: "_",
            doi: "https://doi.org/10.3233/JIFS-202792",
            doiText: "Link to the Article"
        },
        {
            title: "Theoretical framework for a decision support system for micro-enterprise supermarket investment risk assessment using novel picture fuzzy hypersoft graph",
            journal: "PLOS ONE",
            volume: "18",
            issue: "3",
            doi: "https://doi.org/10.1371/journal.pone.0273642",
            doiText: "Link to the Article"
        },
        {
            title: "An algebraic approach to the variants of convexity for soft expert approximate function with intuitionistic fuzzy setting",
            journal: "Journal of Taibah University for Science",
            volume: "17",
            issue: "1",
            doi: "https://doi.org/10.1080/16583655.2023.2182144",
            doiText: "Link to the Article"
        },
        {
            title: "An algebraic modeling for tuberculosis disease prognosis and proposed potential treatment methods using fuzzy hypersoft mappings",
            journal: "Biomedical Signal Processing and Control",
            volume: "80",
            issue: "_",
            doi: "https://doi.org/10.1016/j.bspc.2022.104267",
            doiText: "Link to the Article"
        },
        {
            title: "Development of complex linear diophantine fuzzy soft set in determining a suitable agri-drone for spraying fertilizers and pesticides",
            journal: "IEEE Access",
            volume: "11",
            issue: "_",
            doi: "https://doi.org/10.1109/ACCESS.2023.3239675",
            doiText: "Link to the Article"
        },
        {
            title: "A Framework for Susceptibility Analysis of Brain Tumours Based on Uncertain Analytical Cum Algorithmic Modeling",
            journal: "Bioengineering",
            volume: "10",
            issue: "2",
            doi: "https://doi.org/10.3390/bioengineering10020147",
            doiText: "Link to the Article"
        },
        {
            title: "Development of Some New Hybrid Structures of Hypersoft Set with Possibility-degree Settings",
            journal: "_",
            volume: "_",
            issue: "_",
            doi: "https://doi.org/10.2139/ssrn.4651987 ",
            doiText: "Link to the Article"
        },
        {
            title: "An Abstract Context to Lattice-Based Ideals (Filters) with Multi-Fuzzy Soft Settings",
            journal: "New Mathematics and Natural Computation",
            volume: "0",
            issue: "0",
            doi: "https://doi.org/10.1142/S1793005725500024",
            doiText: "Link to the Article"
        },
        {
            title: "Interval complex single-valued neutrosophic hypersoft set with Application in Decision Making",
            journal: "Neutrosophic Sets and Systems",
            volume: "60",
            issue: "_",
            doi: "https://doi.org/10.5281/zenodo.10224224",
            doiText: "Link to the Article"
        },
        {
            title: "Interpretation of Neutrosophic Soft cubic T-ideal in the Environment of PS-Algebra",
            journal: "Neutrosophic Sets and Systems",
            volume: "58",
            issue: "_",
            doi: "https://doi.org/10.2139/ssrn.4649400",
            doiText: "Link to the Article"
        },
        {
            title: "Toward Multi-Objective Optimization Approach for Solving Cooperative Continuous Static Games under Fuzzy Environment",
            journal: "International Journal of Fuzzy Logic and Intelligent Systems",
            volume: "23",
            issue: "3",
            doi: "https://doi.org/10.5391/IJFIS.2023.23.3.365",
            doiText: "Link to the Article"
        },
        {
            title: "Certain Fixed-Point Results via DS-Weak Commutativity Condition in Neutrosophic Metric Spaces With Application to Non-linear Fractional Differential Equations",
            journal: "International Journal of Analysis and Applications",
            volume: "21",
            issue: "2023",
            doi: "https://doi.org/10.28924/2291-8639-21-2023-74",
            doiText: "Link to the Article"
        },
        {
            title: "Optimizing Hard Disk Selection via a Fuzzy Parameterized Single-Valued Neutrosophic Soft Set Approach",
            journal: "International Journal of Analysis and Applications",
            volume: "1",
            issue: "2",
            doi: "https://doi.org/10.56578/josa010203",
            doiText: "Link to the Article"
        },
        {
            title: "REPRESENTATION OF FUZZY HYPERSOFT SET IN GRAPHS",
            journal: "Palestine Journal of Mathematics",
            volume: "12",
            issue: "1",
            doi: "https://pjm.ppu.edu/sites/default/files/papers/PJM_Feb_2023_836_to_847.pdf",
            doiText: "Link to the Article"
        },
        {
            title: "An inclusive study on the fundamentals of interval-valued fuzzy hypersoft set",
            journal: "International Journal of Neutrosophic Science",
            volume: "20",
            issue: "2",
            doi: "https://doi.org/10.54216/IJNS.200209",
            doiText: "Link to the Article"
        },
        {
            title: "Fundamentals of Picture Fuzzy Hypersoft Set with Application",
            journal: "Neutrosophic Sets and Systems",
            volume: "53",
            issue: "2023",
            doi: "https://digitalrepository.unm.edu/nss_journal/vol53/iss1/24",
            doiText: "Link to the Article"
        },
        {
            title: "An abstract approach to convex and concave sets under refined neutrosophic set environment",
            journal: "Neutrosophic Sets and Systems",
            volume: "53",
            issue: "2023",
            doi: "https://digitalrepository.unm.edu/nss_journal/vol53/iss1/17",
            doiText: "Link to the Article"
        },
        {
            title: "An intelligent fuzzy parameterized MADM-approach to optimal selection of electronic appliances based on neutrosophic hypersoft expert set",
            journal: "Neutrosophic Sets and Systems",
            volume: "53",
            issue: "2023",
            doi: "https://digitalrepository.unm.edu/nss_journal/vol53/iss1/28",
            doiText: "Link to the Article"
        },
        {
            title: "Refined Fuzzy Soft Sets: Properties, Set-Theoretic Operations and Axiomatic Results",
            journal: "Journal of Computational and Cognitive Engineering",
            volume: "_",
            issue: "_",
            doi: "https://doi.org/10.47852/bonviewJCCE3202847",
            doiText: "Link to the Article"
        }
    ];

    const publications2022 = [
        {
            title: "A Theoretical Development of Cubic Pythagorean Fuzzy Soft Set with Its Application in Multi-Attribute Decision Making",
            journal: "Symmetry",
            year: 2022,
            volume: "_",
            issue: "_",
            doi: "https://doi.org/10.3390/sym14122639",
            doiText: "Link to the Article"
        },
        {
            title: "An innovative fuzzy parameterized MADM approach to site selection for dam construction based on sv-complex neutrosophic hypersoft set",
            journal: "AIMS Mathematics",
            year: 8,
            volume: 2,
            issue: "_",
            doi: "https://doi.org/10.3934/math.2023245",
            doiText: "Link to the Article"
        },
        {
            title: "An MADM-based fuzzy parameterized framework for solar panelsevaluation in a fuzzy hypersoft expert set environment",
            journal: "AIMS Mathematics",
            year: 8,
            volume: 2,
            issue: "_",
            doi: "https://doi.org/10.3934/math.2023175",
            doiText: "Link to the Article"
        },
        {
            title: "The Assessment of Medication Effects in Omicron Patients through MADM Approach Based on Distance Measures of Interval-Valued Fuzzy Hypersoft Set",
            journal: "bioengineering",
            year: 2022,
            volume: 9,
            issue: "_",
            doi: "https://doi.org/10.3390/bioengineering9110706",
            doiText: "Link to the Article"
        },
        {
            title: "Time-Leveled Hypersoft Matrix, Level Cuts, Operators, and COVID-19 Collective Patient Health State Ranking Model",
            journal: "Applied Computational Intelligence and Soft Computing",
            year: 2022,
            volume: "_",
            issue: "_",
            doi: "https://doi.org/10.1155/2022/2388284",
            doiText: "Link to the Article"
        },
        {
            title: "An innovative decisive framework for optimized agri-automobile evaluation and HRM pattern recognition via possibility fuzzy hypersoft setting",
            journal: "Advances in Mechanical Engineering",
            year: 14,
            volume: 10,
            issue: "_",
            doi: "https://doi.org/10.1177/16878132221132146",
            doiText: "Link to the Article"
        },
        {
            title: "Reich-Type and (α, F)-Contractions in Partially Ordered Double-Controlled Metric-Type Spaces with Applications to Non-Linear Fractional Differential Equations and Monotonic Iterative Method",
            journal: "axioms",
            year: 2022,
            volume: 11,
            issue: "_",
            doi: "https://doi.org/10.3390/axioms11100573",
            doiText: "Link to the Article"
        },
        {
            title: "Decision making application based on parameterization of fuzzy hypersoft set with fuzzy setting",
            journal: "Italian Journal of Pure and Applied Mathematics",
            year: 48,
            volume: "_",
            issue: "_",
            doi: "",
            doiText: ""
        },
        {
            title: "Theory of Hypersoft Sets: Axiomatic Properties, Aggregation Operations, Relations, Functions and Matrices",
            journal: "Neutrosophic Sets and Systems",
            year: 51,
            volume: 2022,
            issue: "_",
            doi: "https://doi.org/10.5281/zenodo.7135413",
            doiText: "Link to the Article"
        },
        {
            title: "An Application of Pentagonal Neutrosophic Linear Programming for Stock Portfolio Optimization",
            journal: "Neutrosophic Sets and Systems",
            year: 51,
            volume: 2022,
            issue: "_",
            doi: "https://doi.org/10.5281/zenodo.7135397",
            doiText: "Link to the Article"
        },
        {
            title: "PCTLHS-Matrix, Time-based Level Cuts, Operators, and unified time-layer health state Model",
            journal: "Neutrosophic Sets and Systems",
            year: 51,
            volume: 2022,
            issue: "_",
            doi: "https://doi.org/10.5281/zenodo.7135347",
            doiText: "Link to the Article"
        },
        {
            title: "LGU-Combined-Consciousness State Model",
            journal: "Neutrosophic Sets and Systems",
            year: 51,
            volume: 2022,
            issue: "_",
            doi: "https://doi.org/10.5281/zenodo.7135250",
            doiText: "Link to the Article"
        },
        {
            title: "Development of Hybrid Model for Donations to Deserving Donees Using Multi-Polar Interval-Valued Neutrosophic Soft Set",
            journal: "Punjab University Journal of Mathematics",
            year: 54,
            volume: 9,
            issue: "_",
            doi: "https://doi.org/10.52280/pujm.2022.540903",
            doiText: "Link to the Article"
        },
        {
            title: "Graphical Exploration of Generalized Picture Fuzzy Hypersoft Information with Application in Human Resource Management Multiattribute Decision-Making",
            journal: "Mathematical Problems in Engineering",
            year: 2022,
            volume: "_",
            issue: "_",
            doi: "https://doi.org/10.1155/2022/6435368",
            doiText: "Link to the Article"
        },
        {
            title: "A Contribution to the Theory of Soft Sets via Generalized Relaxed Operations",
            journal: "mathematics",
            year: 10,
            volume: 15,
            issue: "_",
            doi: "https://doi.org/10.3390/math10152636",
            doiText: "Link to the Article"
        },
        {
            title: "An intelligent fuzzy parameterized multi-criteria decision-support system based on intuitionistic fuzzy hypersoft expert set for automobile evaluation",
            journal: "Advances in Mechanical Engineering",
            year: 14,
            volume: 7,
            issue: "_",
            doi: "https://doi.org/10.1177/16878132221110005",
            doiText: "Link to the Article"
        },
        {
            title: "An Optimized Decision Support Model for COVID-19 Diagnostics Based on Complex Fuzzy Hypersoft Mapping",
            journal: "Mathematics",
            year: 2022,
            volume: "_",
            issue: "_",
            doi: "https://doi.org/10.3390/math10142472",
            doiText: "Link to the Article"
        },
        {
            title: "Weighted Ostrowski type inequalities via Montgomery identity involving double integrals on time scales",
            journal: "AIMS Mathematics",
            year: 7,
            volume: 9,
            issue: "_",
            doi: "https://doi.org/10.3934/math.2022913",
            doiText: "Link to the Article"
        },
        {
            title: "An optimized complex fuzzy hypersoft set system based approach for the evaluation of strategic procurement techniques for fuel cell and hydrogen components",
            journal: "IEEE Access",
            year: 10,
            volume: "_",
            issue: "_",
            doi: "https://doi.org/10.1109/ACCESS.2022.3188293",
            doiText: "Link to the Article"
        },
        {
            title: "Supplier Selection through Multicriteria Decision-Making Algorithmic Approach Based on Rough Approximation of Fuzzy Hypersoft Sets for Construction Project",
            journal: "Buildings",
            year: 12,
            volume: 7,
            issue: "_",
            doi: "https://doi.org/10.3390/buildings12070940",
            doiText: "Link to the Article"
        },
        {
            title: "A Novel Intelligent Multi-Attributes Decision-Making Approach Based on Generalized Neutrosophic Vague Hybrid Computing",
            journal: "Neutrosophic Sets and Systems",
            year: 50,
            volume: "_",
            issue: "_",
            doi: "https://doi.org/10.5281/zenodo.6774920",
            doiText: "Link to the Article"
        },
        {
            title: "Neutrosophic Hypersoft Expert Set: Theory and Applications",
            journal: "Neutrosophic Sets and Systems",
            volume: "50",
            issue: "_",
            doi: "https://doi.org/10.5281/zenodo.6774883",
            doiText: "Link to the Article"
          },
          {
            title: "Multi-attribute decision-making based on aggregations and similarity measures of neutrosophic hypersoft sets with possibility setting",
            journal: "Journal of Experimental & Theoretical Artificial Intelligence",
            volume: "_",
            issue: "_",
            doi: "https://doi.org/10.1080/0952813X.2022.2080869",
            doiText: "Link to the Article"
          },
          {
            title: "An intelligent sv-neutrosophic parameterized MCDM approach to risk evaluation based on complex fuzzy hypersoft set for real estate investments",
            journal: "Management Decision",
            volume: "_",
            issue: "_",
            doi: "https://doi.org/10.1108/MD-05-2022-0605",
            doiText: "Link to the Article"
          },
          {
            title: "Matrix Theory for Neutrosophic Hypersoft Set and Applications in Multiattributive Multicriteria Decision-Making Problems",
            journal: "Journal of Mathematics",
            volume: "_",
            issue: "_",
            doi: "https://doi.org/10.1155/2021/6666408",
            doiText: "Link to the Article"
          },
          {
            title: "A Novel Fuzzy Parameterized Fuzzy Hypersoft Set and Riesz Summability Approach Based Decision Support System for Diagnosis of Heart Diseases",
            journal: "diagnostic",
            volume: "12",
            issue: "7",
            doi: "https://doi.org/10.3390/diagnostics12071546",
            doiText: "Link to the Article"
          },
          {
            title: "An Inclusive Study on Fundamentals of Hypersoft Expert Set with Application",
            journal: "Punjab University Journal of Mathematics",
            volume: "54",
            issue: "5",
            doi: "https://doi.org/10.52280/pujm.2022.540503",
            doiText: "Link to the Article"
          },
          {
            title: "An Integrated Algorithmic MADM Approach for Heart Diseases’ Diagnosis Based on Neutrosophic Hypersoft Set with Possibility Degree-Based Setting",
            journal: "Life",
            volume: "12",
            issue: "5",
            doi: "https://doi.org/10.3390/life12050729",
            doiText: "Link to the Article"
          },
          {
            title: "An Algebraic Approach to Modular Inequalities Based on Interval-Valued Fuzzy Hypersoft Sets via Hypersoft Set-Inclusions",
            journal: "Journal of Function Spaces",
            volume: "2022",
            issue: "_",
            doi: "https://doi.org/10.1155/2022/1384541",
            doiText: "Link to the Article"
          },
          {
            title: "Entropy and Correlation Coefficients of Neutrosophic and Interval-Valued Neutrosophic Hypersoft Set with application of Multi-Attributive Problems",
            journal: "Neutrosophic Sets and System",
            volume: "49",
            issue: "2022",
            doi: "https://doi.org/10.5281/zenodo.6426421",
            doiText: "Link to the Article"
          },
          {
            title: "Product evaluation through multi-criteria decision making based on fuzzy parameterized Pythagorean fuzzy hypersoft expert set",
            journal: "AIMS Mathematics",
            volume: "7",
            issue: "6",
            doi: "http://dx.doi.org/%2010.3934/math.2022616",
            doiText: "Link to the Article"
          },
          {
            title: "Comparative Analysis of Subdivided Hex-Derived Networks Using Structural Descriptors",
            journal: "Journal of Chemistry",
            volume: "2022",
            issue: "_",
            doi: "https://doi.org/10.1155/2022/6502473",
            doiText: "Link to the Article"
          },
          {
            title: "An Intelligent Multiattribute Decision-Support Framework Based on Parameterization of Neutrosophic Hypersoft Set",
            journal: "Computational Intelligence and Neuroscience",
            volume: "2022",
            issue: "_",
            doi: "https://doi.org/10.1155/2022/6229947",
            doiText: "Link to the Article"
          },
          {
            title: "Set-Theoretic Inequalities Based on Convex Multi-Argument Approximate Functions via Set Inclusion",
            journal: "Journal of Function Spaces",
            volume: "2022",
            issue: "_",
            doi: "https://doi.org/10.1155/2022/6998104",
            doiText: "Link to the Article"
          },
          {
            title: "A theoretical and analytical approach to the conceptual framework of convexity cum concavity on fuzzy hypersoft sets with somegeneralized properties",
            journal: "Soft Computing",
            volume: "26",
            issue: "9",
            doi: "https://doi.org/10.1007/s00500-022-06857-8",
            doiText: "Link to the Article"
          },
          {
            title: "An Abstract Approach to W-Structures Based on Hypersoft Set with Properties",
            journal: "Neutrosophic Sets and Systems",
            volume: "48",
            issue: "2022",
            doi: "https://doi.org/10.5281/zenodo.6041593",
            doiText: "Link to the Article"
          },
          {
            title: "Distance and Similarity Measures Using Max-Min Operators of Neutrosophic Hypersoft Sets With Application in Site Selection for Solid Waste Management Systems",
            journal: "IEEE Access",
            volume: "10",
            issue: "_",
            doi: "https://doi.org/10.1109/ACCESS.2022.3144306",
            doiText: "Link to the Article"
          },
          {
            title: "Multi-Attribute Decision Support Model Based on Bijective Hypersoft Expert Set",
            journal: "Punjab University Journal of Mathematics",
            volume: "54",
            issue: "1",
            doi: "https://doi.org/10.52280/pujm.2021.540105",
            doiText: "Link to the Article"
          },
          {
            title: "Refined Pythagorean Fuzzy Sets: Properties, Set-Theoretic Operations and Axiomatic Results",
            journal: "Journal of Computational and Cognitive Engineering",
            volume: "1",
            issue: "2",
            doi: "https://doi.org/10.47852/bonviewJCCE2023512225",
            doiText: "Link to the Article"
          },
          {
            title: "The Prognosis of Allergy-Based Diseases Using Pythagorean Fuzzy Hypersoft Mapping Structures and Recommending Medication",
            journal: "IEEE access",
            volume: "10",
            issue: "_",
            doi: "https://doi.org/10.1109/ACCESS.2022.3141092",
            doiText: "Link to the Article"
          },
          {
            title: "Set-Theoretic Inequalities Based on Convex Multi-Argument Approximate Functions via Set Inclusion",
            journal: "Journal of Function Spaces",
            volume: "2022",
            issue: "_",
            doi: "https://doi.org/10.1155/2022/6998104",
            doiText: "Link to the Article"
          },
          {
            title: "A Study on cooperative continuous static games without differentiability under fuzzy environment",
            journal: "International Journal of Fuzzy System Applications (IJFSA)",
            volume: "11",
            issue: "1",
            doi: "https://doi.org/10.4018/IJFSA.292462",
            doiText: "Link to the Article"
          }
    ];

    const publications2021 = [
        {
            title: "Multi-Attribute Decision-Support System Based on Aggregations of Interval-Valued Complex Neutrosophic Hypersoft Set",
            journal: "Applied Computational Intelligence and Soft Computing",
            year: 2021,
            volume: "_",
            issue: "_",
            doi: "https://doi.org/10.1155/2021/4368770",
            doiText: "Link to the Article"
        },
        {
            title: "Optimal Supplier Selection Via Decision-Making Algorithmic Technique Based on Single-Valued Neutrosophic Fuzzy Hypersoft Set",
            journal: "Neutrosophic Sets and Systems",
            year: 47,
            volume: "_",
            issue: "_",
            doi: "https://digitalrepository.unm.edu/nss_journal/vol47/iss1/30?utm_source=digitalrepository.unm.edu%2Fnss_journal%2Fvol47%2Fiss1%2F30&utm_medium=PDF&utm_campaign=PDFCoverPages",
            doiText: "Link to the Article"
        },
        {
            title: "Single Valued Neutrosophic Hypersoft Expert Set with Application in Decision Making",
            journal: "Neutrosophic Sets and Systems",
            year: 47,
            volume: "_",
            issue: "_",
            doi: "https://digitalrepository.unm.edu/nss_journal/vol47/iss1/29?utm_source=digitalrepository.unm.edu%2Fnss_journal%2Fvol47%2Fiss1%2F29&utm_medium=PDF&utm_campaign=PDFCoverPages",
            doiText: "Link to the Article"
        },
        {
            title: "Decision making algorithmic techniques based on aggregation operationsand similarity measures of possibility intuitionistic fuzzy hypersoft sets",
            journal: "AIMS Math",
            year: 7,
            volume: 3,
            issue: "_",
            doi: "https://doi.org/10.3934/math.2022214",
            doiText: "Link to the Article"
        },
        {
            title: "Assessment of Solid Waste Management Strategies Using an Efficient Complex Fuzzy Hypersoft Set Algorithm Based on Entropy and Similarity Measures",
            journal: "IEEE Access",
            year: 9,
            volume: 2021,
            issue: "_",
            doi: "https://doi.org/10.1109/ACCESS.2021.3125727",
            doiText: "Link to the Article"
        },
        {
            title: "Infectious Diseases Diagnosis and Treatment Suggestions Using Complex Neutrosophic Hypersoft Mapping",
            journal: "IEEE Access",
            year: 9,
            volume: "_",
            issue: "_",
            doi: "https://doi.org/10.1109/ACCESS.2021.3123659",
            doiText: "Link to the Article"
        },
        {
            title: "Multipolar Interval-Valued Fuzzy Set with Application of Similarity Measures and multi-person TOPSIS technique",
            journal: "Punjab University Journal of Mathematics",
            year: 53,
            volume: 10,
            issue: "_",
            doi: "https://doi.org/10.52280/pujm.2021.531001",
            doiText: "Link to the Article"
        },
        {
            title: "A Rudimentary Approach to Develop Context for Convexity cum Concavity on Soft Expert Set with Some Generalized Results",
            journal: "Punjab University Journal of Mathematics",
            year: 53,
            volume: 9,
            issue: "_",
            doi: "https://doi.org/10.52280/pujm.2021.530902",
            doiText: "Link to the Article"
        },
        {
            title: "Trigonometric Similarity Measures for Neutrosophic Hypersoft Sets With Application to Renewable Energy Source Selection",
            journal: "IEEE Access",
            year: 9,
            volume: "_",
            issue: "_",
            doi: "https://doi.org/10.1109/ACCESS.2021.3112721",
            doiText: "Link to the Article"
        },
        {
            title: "Convexity-Cum-Concavity on Fuzzy Soft Expert Set with Certain Properties",
            journal: "International Journal of Fuzzy Logic and Intelligent Systems",
            year: 21,
            volume: 3,
            issue: "_",
            doi: "https://doi.org/10.5391/IJFIS.2021.21.3.233",
            doiText: "Link to the Article"
        },
        {
            title: "A Theoretical and Analytical Approach for Fundamental Framework of Composite mappings on Fuzzy Hypersoft Classes",
            journal: "Neutrosophic Sets and Systems",
            year: 45,
            volume: 1,
            issue: "_",
            doi: "https://digitalrepository.unm.edu/cgi/viewcontent.cgi?article=1919&context=nss_journal",
            doiText: "Link to the Article"
        },
        {
            title: "Molecular Descriptor Analysis of Certain Isomeric Natural Polymers",
            journal: "Journal of Chemistry",
            year: 2021,
            volume: "_",
            issue: "_",
            doi: "https://doi.org/10.1155/2021/9283246",
            doiText: "Link to the Article"
        },
        {
            title: "(m; n)-Convexity-cum-Concavity on fuzzy soft set with applications in first and second sense",
            journal: "Punjab University Journal of Mathematics",
            year: 53,
            volume: 1,
            issue: "_",
            doi: "http://pu.edu.pk/images/journal/maths/PDF/Paper_2_53_1_2021.pdf",
            doiText: "Link to the Article"
        },
        {
            title: "A study on some operations and products of neutrosophic hypersoft graphs",
            journal: "Journal of Applied Mathematics and Computing",
            year: 68,
            volume: 4,
            issue: "_",
            doi: "https://doi.org/10.1007/s12190-021-01614-w",
            doiText: "Link to the Article"
        },
        {
            title: "A Conceptual Framework of Convex and Concave Sets under Refined Intuitionistic Fuzzy Set Environment",
            journal: "Journal of Prime Research in Mathematics",
            year: 17,
            volume: 2,
            issue: "_",
            doi: "https://doi.org/10.5281/zenodo.6656141",
            doiText: "Link to the Article"
        },
        {
            title: "The Study of HIV Diagnosis Using Complex Fuzzy Hypersoft Mapping and Proposing Appropriate Treatment",
            journal: "IEEE Access",
            year: 9,
            volume: "_",
            issue: "_",
            doi: "https://doi.org/10.1109/ACCESS.2021.3099335",
            doiText: "Link to the Article"
        },
        {
            title: "Theory of Bijective Hypersoft Set with Application in Decision Making",
            journal: "Punjab University Journal of Mathematics",
            year: 53,
            volume: 7,
            issue: "_",
            doi: "https://doi.org/10.52280/pujm.2021.530705",
            doiText: "Link to the Article"
        },
        {
            title: "Decision Making Algorithmic Approaches Based on Parameterization of Neutrosophic Set under Hypersoft Set Environment with Fuzzy, Intuitionistic Fuzzy and Neutrosophic Settings",
            journal: "Computer Modeling in Engineering and Sciences",
            year: 128,
            volume: 2,
            issue: "_",
            doi: "https://doi.org/10.32604/cmes.2021.016736",
            doiText: "Link to the Article"
        },
        {
            title: "On Some Properties of Plithogenic Neutrosophic Hypersoft Almost Topological Group",
            journal: "Neutrosophic Sets and Systems",
            year: 43,
            volume: "_",
            issue: "_",
            doi: "https://doi.org/10.5281/zenodo.4914847",
            doiText: "Link to the Article"
        },
        {
            title: "An application of neutrosophic hypersoft mapping to diagnose brain tumor and propose appropriate treatment",
            journal: "Journal of Intelligent and Fuzzy Systems",
            year: 41,
            volume: 1,
            issue: "_",
            doi: "https://doi.org/10.3233/JIFS-210482",
            doiText: "Link to the Article"
        },
        {
            title: "An extension of TOPSIS based on linguistic terms in triangular intuitionistic fuzzy structure",
            journal: "Punjab University Journal of Mathematics",
            year: 2021,
            volume: "53",
            issue: "6",
            doi: "https://doi.org/10.52280/pujm.2021.530604",
            doiText: "Link to the Article"
        },
        {
            title: "An Application of Neutrosophic Hypersoft Mapping to Diagnose Hepatitis and Propose Appropriate Treatment",
            journal: "IEEE Access",
            year: 2021,
            volume: "9",
            issue: "_",
            doi: "https://doi.org/10.1109/ACCESS.2021.3077867",
            doiText: "Link to the Article"
        },
        {
            title: "Fuzzy Hypersoft Expert Set with Application in Decision Making for the Best Selection of Product",
            journal: "Neutrosophic Sets and Systems",
            year: 2021,
            volume: "46",
            issue: "_",
            doi: "https://doi.org/10.5281/zenodo.5553534",
            doiText: "Link to the Article"
        },
        {
            title: "Decision-Making Application Based on Aggregations of Complex Fuzzy Hypersoft Set and Development of Interval-Valued Complex Fuzzy Hypersoft Set",
            journal: "Neutrosophic Sets and Systems",
            year: 2021,
            volume: "46",
            issue: "_",
            doi: "https://doi.org/10.5281/zenodo.5553532",
            doiText: "Link to the Article"
        },
        {
            title: "A Novel Approach to Neutrosophic Hypersoft Graphs with Properties",
            journal: "Neutrosophic Sets and Systems",
            year: 2021,
            volume: "46",
            issue: "_",
            doi: "https://doi.org/10.5281/zenodo.5553538",
            doiText: "Link to the Article"
        },
        {
            title: "Application in Decision Making Based on Fuzzy Parameterized Hypersoft Set Theory",
            journal: "Asia Mathematika",
            year: 2021,
            volume: "5",
            issue: "1",
            doi: "https://doi.org/10.5281/zenodo.7477708",
            doiText: "Link to the Article"
        },
        {
            title: "Hypersoft Expert Set With Application in Decision Making for Recruitment Process",
            journal: "Neutrosophic Sets and Systems",
            year: 2021,
            volume: "42",
            issue: "1",
            doi: "https://doi.org/10.5281/zenodo.4711524",
            doiText: "Link to the Article"
        },
        {
            title: "Decision Making Application Based on Neutrosophic Parameterized Hypersoft Set Theory",
            journal: "Neutrosophic Sets and Systems",
            year: 2021,
            volume: "41",
            issue: "_",
            doi: "https://doi.org/10.5281/zenodo.4625665",
            doiText: "Link to the Article"
        },
        {
            title: "APPLICATION OF SIMILARITY MEASURE IN PATTERN RECOGNITION OF COVID-19 SPREAD AND ITS EFFECTS IN PAKISTAN",
            journal: "Appl. Comput. Math.",
            year: 2021,
            volume: "20",
            issue: "1",
            doi: "https://search.bvsalud.org/global-literature-on-novel-coronavirus-2019-ncov/resource/en/covidwho-1220300",
            doiText: "Link to the Article"
        },
        {
            title: "Evolutionary simplex adaptive Hooke-Jeeves algorithm for economic load dispatch problem considering valve point loading effects",
            journal: "Ain Shams Engineering Journal",
            year: 2021,
            volume: "12",
            issue: "1",
            doi: "https://doi.org/10.1016/j.asej.2020.04.006",
            doiText: "Link to the Article"
        },
        {
            title: "Some Fundamental Operations on Interval Valued Neutrosophic Hypersoft Set with Their Properties",
            journal: "Neutrosophic Sets and Systems",
            year: 2021,
            volume: "40",
            issue: "_",
            doi: "https://digitalrepository.unm.edu/nss_journal/vol40/iss1/8",
            doiText: "Link to the Article"
        },
        {
            title: "Comparative Study of Certain Synthetic Polymers via Bond-Additive Invariants",
            journal: "IEEE Access",
            year: 2021,
            volume: "9",
            issue: "2021",
            doi: "https://doi.org/10.1109/ACCESS.2021.3051932",
            doiText: "Link to the Article"
        },
        {
            title: "Solution of chemical dynamic optimization systems using novel differential gradient evolution algorithm",
            journal: "Physica Scripta",
            year: 2021,
            volume: "96",
            issue: "3",
            doi: "https://doi.org/10.1088/1402-4896/abd440",
            doiText: "Link to the Article"
        },
        {
            title: "Extension of TOPSIS method under intuitionistic fuzzy hypersoft environment based on correlation coefficient and aggregation operators to solve decision making problem",
            journal: "AIMS Mathematics",
            year: 2021,
            volume: "6",
            issue: "3",
            doi: "https://doi.org/10.3934/math.2021153",
            doiText: "Link to the Article"
        },
        {
            title: "Aggregate, Arithmetic, and Geometric Operators of Octagonal Neutrosophic Numbers and Its Application in Multi-Criteria Decision-Making Problems",
            journal: "Neutrosophic Operational Research: Methods and Applications",
            year: 2021,
            volume: "_",
            issue: "_",
            doi: "https://doi.org/10.1007/978-3-030-57197-9_23",
            doiText: "Link to the Article"
        },
        {
            title: "Aggregation operators of fuzzy hypersoft sets",
            journal: "Turkish Journal of Fuzzy Systems",
            year: 2021,
            volume: "11",
            issue: "1",
            doi: "https://www.researchgate.net/publication/354638815_Aggregation_Operators_of_Fuzzy_Hypersoft_Sets",
            doiText: "Link to the Article"
        },
        {
            title: "Neutrosophic Hypersoft Matrix Theory: Its Definition, Operators, and Application in Decision-Making of Personnel Selection Problem",
            journal: "Neutrosophic Operational Research: Methods and Applications",
            year: 2021,
            volume: "_",
            issue: "_",
            doi: "https://doi.org/10.1007/978-3-030-57197-9_21",
            doiText: "Link to the Article"
        },
        {
            title: "On Fej ́er Sort Inequalities for Products Two Harmonically-Convex Functions via Fractional Integrals",
            journal: "Filomat",
            year: 2021,
            volume: "35",
            issue: "9",
            doi: "https://doi.org/10.2298/FIL2109883B",
            doiText: "Link to the Article"
        },
        {
            title: "A Development of Complex Multi-Fuzzy Hypersoft Set With Application in MCDM Based on Entropy and Similarity Measure",
            journal: "IEEE Access",
            year: 2021,
            volume: "9",
            issue: "_",
            doi: "https://doi.org/10.1109/ACCESS.2021.3073206",
            doiText: "Link to the Article"
        },
        {
            title: "Fuzzy logic controller for aviation parking with 5G communication technology",
            journal: "_",
            year: "_",
            volume: "_",
            issue: "_",
            doi: "",
            doiText: ""
        }
    ];

    
    const rowRefs2024 = useRef([]);
    const rowRefs2023 = useRef([]);
    const rowRefs2022 = useRef([]);
    const rowRefs2021 = useRef([]);
    

    return (
        <>

            <div className="title">
                <img src={Nigth} alt="" loading="lazy" />
                <h1 className='title-h1'>Publications</h1>
                <button className='btn btn-lg btn-outline-primary btn-publications'><a href="https://www.researchgate.net/" target='blank'>Research Gate</a></button>
                <button className='btn btn-lg btn-outline-primary btn-publications'><a href="https://scholar.google.com/" target="blank">Google Scholar</a></button>
            </div>

            <div className='head'>
                Books
            </div>

            <div className="pub-book">

                <h3>Theory and Application of Hypersot Set</h3>

                <p><b>Authors:</b> &nbsp; &nbsp; Prof. Dr. Florentin Smarandache, &nbsp; Prof. Dr. Muhammad Saeed, &nbsp; Muhammad Saqlain, &nbsp; Dr. Mohamed Abdel-Baset </p>


                <p><b>ISBN No:</b> &nbsp; 978-1-59973-699-0</p>

                <p><b>Publisher:</b> &nbsp; Pons Publishing House Brussels, 2021</p>

                <p><b>Book Link:</b> &nbsp; <a href="https://fs.unm.edu/HyperSoftSet-book.pdf" target={'_blank'} rel="noopener noreferrer">Link</a></p>

                <p><b>Ains asd scopes:</b></p>
                <p style={{ textAlign: "justify" }}>Florentin Smarandache generalize the soft set to the hypersoft set by transforming the function 𝐹 into a multi-argument function. This extension reveals that the hypersoft set with neutrosophic, intuitionistic, and fuzzy set theory will be very helpful to construct a connection between alternatives and attributes. Also, the hypersoft set will reduce the complexity of the case study. The Book “Theory and Application of Hypersoft Set” focuses on theories, methods, algorithms for decision making and also applications involving neutrosophic, intuitionistic, and fuzzy information. Our goal is to develop a strong relationship with the MCDM solving techniques and to reduce the complexion in the methodologies. It is interesting that the hypersoft theory can be applied on any decision-making problem without the limitations of the selection of the values by the decision-makers. Some topics having applications in the area: Multi-criteria decision making (MCDM), Multi-criteria group decision making (MCGDM), shortest path selection, employee selection, e-learning, graph theory, medical diagnosis, probability theory, topology, and some more.</p>

            </div>


            <div className='head'>
                Research Papers
            </div>


            <div class="accordion" id="accordionPanelsStayOpenExample">
                <div class="accordion-item">
                    <div className="accordion-border">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                                2024
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse">
                            <div class="accordion-body">

                                <table>
                                    <thead>
                                        <tr>
                                            <th style={{ width: "2%" }}>Sr. No</th>
                                            <th className='title-pub' style={{ width: "35%" }}>Article Title</th>
                                            <th style={{ width: "15%" }}>Journal</th>
                                            <th style={{ width: "5%" }}>Volume</th>
                                            <th style={{ width: "5%" }}>Issue</th>
                                            <th style={{ width: "10%" }}>DOI</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {publications2024.map((pub, index) => (
                                            <tr 
                                                ref={(el) => (rowRefs2024.current[index] = el)}
                                                key={index}
                                            >
                                                <td style={{ width: "2%" }}>{index + 1}</td>
                                                <td className='title-pub' style={{ width: "35%" }}>{pub.title}</td>
                                                <td style={{ width: "15%" }}>{pub.journal}</td>
                                                <td style={{ width: "5%" }}>{pub.volume}</td>
                                                <td style={{ width: "5%" }}>{pub.issue}</td>
                                                <td style={{ width: "10%" }}>
                                                {pub.doi ? <a className='doi-copy' href={pub.doi} target={'_blank'} rel="noopener noreferrer">
                                                                {pub.doiText}
                                                            </a> : "_"}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <div className="accordion-border">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                2023
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
                            <div class="accordion-body">
                                <table>
                                    <thead>
                                        <tr>
                                            <th style={{ width: "2%" }}>Sr. No</th>
                                            <th className='title-pub' style={{ width: "35%" }}>Article Title</th>
                                            <th style={{ width: "15%" }}>Journal</th>
                                            <th style={{ width: "5%" }}>Volume</th>
                                            <th style={{ width: "5%" }}>Issue</th>
                                            <th style={{ width: "10%" }}>DOI</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {publications2023.map((pub, index) => (
                                            <tr 
                                            ref={(el) => (rowRefs2023.current[index] = el)}
                                            key={index}
                                        >
                                                <td style={{ width: "2%" }}>{index + 1}</td>
                                                <td className='title-pub' style={{ width: "35%" }}>{pub.title}</td>
                                                <td style={{ width: "15%" }}>{pub.journal}</td>
                                                <td style={{ width: "5%" }}>{pub.volume}</td>
                                                <td style={{ width: "5%" }}>{pub.issue}</td>
                                                <td style={{ width: "10%" }}>
                                                    {pub.doi ? <a className='doi-copy' href={pub.doi} target={'_blank'} rel="noopener noreferrer">
                                                                {pub.doiText}
                                                            </a> : "_"}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>


                <div class="accordion-item">
                    <div className="accordion-border">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                2022
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
                            <div class="accordion-body">
                                <table>
                                    <thead>
                                        <tr>
                                            <th style={{ width: "2%" }}>Sr. No</th>
                                            <th className='title-pub' style={{ width: "35%" }}>Article Title</th>
                                            <th style={{ width: "15%" }}>Journal</th>
                                            <th style={{ width: "5%" }}>Volume</th>
                                            <th style={{ width: "5%" }}>Issue</th>
                                            <th style={{ width: "10%" }}>DOI</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {publications2022.map((pub, index) => (
                                            <tr 
                                            ref={(el) => (rowRefs2022.current[index] = el)}
                                            key={index}
                                        >
                                                <td style={{ width: "2%" }}>{index + 1}</td>
                                                <td className='title-pub' style={{ width: "35%" }}>{pub.title}</td>
                                                <td style={{ width: "15%" }}>{pub.journal}</td>
                                                <td style={{ width: "5%" }}>{pub.volume}</td>
                                                <td style={{ width: "5%" }}>{pub.issue}</td>
                                                <td style={{ width: "10%" }}>
                                                {pub.doi ? <a className='doi-copy' href={pub.doi} target={'_blank'} rel="noopener noreferrer">
                                                                {pub.doiText}
                                                            </a> : "_"}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>


                <div class="accordion-item">
                    <div className="accordion-border">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                                2021
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse">
                            <div class="accordion-body">


                            <table>
                                    <thead>
                                        <tr>
                                            <th style={{ width: "2%" }}>Sr. No</th>
                                            <th className='title-pub' style={{ width: "35%" }}>Article Title</th>
                                            <th style={{ width: "15%" }}>Journal</th>
                                            <th style={{ width: "5%" }}>Volume</th>
                                            <th style={{ width: "5%" }}>Issue</th>
                                            <th style={{ width: "10%" }}>DOI</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {publications2021.map((pub, index) => (
                                            <tr 
                                            ref={(el) => (rowRefs2021.current[index] = el)}
                                            key={index}
                                        >
                                                <td style={{ width: "2%" }}>{index + 1}</td>
                                                <td className='title-pub' style={{ width: "35%" }}>{pub.title}</td>
                                                <td style={{ width: "15%" }}>{pub.journal}</td>
                                                <td style={{ width: "5%" }}>{pub.volume}</td>
                                                <td style={{ width: "5%" }}>{pub.issue}</td>
                                                <td style={{ width: "10%" }}>
                                                {pub.doi ? <a className='doi-copy' href={pub.doi} target={'_blank'} rel="noopener noreferrer">
                                                                {pub.doiText}
                                                            </a> : "_"}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>


                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Publications
