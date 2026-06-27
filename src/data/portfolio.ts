export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  challenge: string;
  approach: string[];
  impact: string[];
  stack: string[];
};

export const profile = {
  name: "Yuzhang Liu",
  initials: "YL",
  role: "Data Scientist & Applied AI Engineer",
  headline:
    "I build practical AI and data systems that connect machine learning, enterprise software, and real business workflows.",
  about:
    "Incoming M.S.E. student in Data Science at the University of Pennsylvania with a B.S. in Data Science and a minor in Actuarial Science from the University of Florida. My experience spans enterprise software engineering, anomaly detection, LLM-assisted applications, semiconductor analytics, database systems, geospatial products, and workflow automation.",
  availability:
    "Open to 2027 data science, applied AI, machine learning, and AI engineering opportunities.",
  email: "liuyuz@engineering.upenn.edu",
  linkedin: "https://www.linkedin.com/in/yuzhang-liu-x09051420r",
  github: "https://github.com/yuzliu1222",
};

export const metrics = [
  { value: "150K+", label: "Technical tags generated" },
  { value: "200%", label: "Testing efficiency improvement" },
  { value: "300K+", label: "Enterprise records processed" },
  { value: "3.95", label: "Undergraduate GPA / 4.0" },
];

export const experiences = [
  {
    organization: "University of Pennsylvania",
    role: "M.S.E. Student in Data Science",
    period: "Aug. 2026 — Dec. 2027",
    details:
      "Pursuing graduate study in data science with an emphasis on machine learning, large-scale data systems, and applied AI engineering.",
  },
  {
    organization: "Caterpillar Wujiang · Strategy & Lean Department",
    role: "Digital Software Engineering Intern",
    period: "May 2026 — Aug. 2026",
    details:
      "Developed a project lifecycle management platform using Power Apps, Power Automate, and SharePoint; implemented role-based access control, approval automation, notifications, project monitoring, and administrative workflows. Also supported multimedia and cross-functional coordination for the company’s 15th Anniversary Celebration.",
  },
  {
    organization: "Wintech Nano Technology · Research & Development",
    role: "Data Analyst Intern",
    period: "May 2025 — Aug. 2025",
    details:
      "Built semiconductor analytics workflows spanning anti-scraping web collection, Gaussian spectral peak fitting, LLM-assisted technical tagging, and micron-level chip anomaly localization with GDS-layer mapping and automated reporting.",
  },
  {
    organization: "Duke Kunshan University",
    role: "Teaching Assistant · Computation and Problem Solving",
    period: "Oct. 2024 — Mar. 2025",
    details:
      "Led office hours on Python, data structures, optimization, and debugging; developed an interactive course website and guided a final project analyzing artist relationships and evolution using large-scale cultural data.",
  },
  {
    organization: "AdventHealth",
    role: "Data Analyst · Technology Department",
    period: "Oct. 2024 — May 2025",
    details:
      "Developed anomaly detection models using Isolation Forest and Nelson’s Rules, then integrated a real-time monitoring framework with LLM-powered alert generation for automated risk interpretation and notification.",
  },
  {
    organization: "Xunfan Technology · Creative Data Department",
    role: "Data Analyst Intern",
    period: "May 2024 — Jul. 2024",
    details:
      "Extracted and standardized more than 300,000 records from MySQL and Oracle, engineered 20+ features, developed LSTM and Prophet forecasting models, and built a K-Means supplier evaluation framework.",
  },
  {
    organization: "Soochow University · Big Data Lab",
    role: "Research Assistant",
    period: "Sep. 2022 — Aug. 2023",
    details:
      "Studied Netflix movie ratings and improved a MATLAB probabilistic matrix factorization recommendation system, achieving 73.4% recommendation accuracy.",
  },
];

export const projects: Project[] = [
  {
    slug: "healthcare-risk-monitoring",
    title: "Healthcare Financial Risk Monitoring",
    eyebrow: "Applied ML · LLM alerts",
    summary:
      "A real-time anomaly monitoring workflow that detects unusual financial transactions and explains risks to operational teams.",
    challenge:
      "Large healthcare datasets contained complex operational patterns, while rule-only monitoring generated excessive noise and required manual interpretation.",
    approach: [
      "Combined Isolation Forest with Nelson’s Rules to capture both multivariate anomalies and process-control violations.",
      "Designed a real-time risk monitoring pipeline for scoring, interpretation, and notification.",
      "Integrated an LLM layer to convert model signals into concise, business-readable alerts.",
    ],
    impact: [
      "Reduced false positives by approximately 20%.",
      "Improved the speed and clarity of anomaly triage.",
      "Connected model outputs to an operational notification workflow.",
    ],
    stack: ["Python", "Scikit-learn", "Isolation Forest", "LLM", "Data Monitoring"],
  },
  {
    slug: "semiconductor-intelligence",
    title: "Semiconductor Intelligence Pipeline",
    eyebrow: "LLM · Spectral analytics · Computer vision",
    summary:
      "A collection of semiconductor data products for knowledge extraction, spectral analysis, and precise defect localization.",
    challenge:
      "Engineering teams needed to process fragmented industry information, label large volumes of testing cases, and locate chip anomalies with high precision.",
    approach: [
      "Built a crawler that collected more than 10,000 industry records and technical articles.",
      "Applied Gaussian peak fitting against a 50M+ reference library for spectral analysis.",
      "Used LLM-assisted generation and machine learning to create and validate structured tags.",
      "Integrated multi-source imaging and coordinate transformation to map physical anomalies to GDS layers.",
    ],
    impact: [
      "Generated more than 150,000 tags from 30,000 cases.",
      "Reached 82.7% tagging accuracy and improved testing efficiency by 200%.",
      "Enabled micron-level localization and standardized coordinate-based reports.",
    ],
    stack: ["Python", "LLM", "Gaussian Fitting", "Computer Vision", "GDS"],
  },
  {
    slug: "project-lifecycle-platform",
    title: "Project Lifecycle Management Platform",
    eyebrow: "Enterprise automation · Low-code engineering",
    summary:
      "An enterprise platform supporting project registration, approval, evaluation, status tracking, and administrative governance.",
    challenge:
      "Project information and approvals were distributed across manual processes, creating inconsistent status tracking and limited visibility.",
    approach: [
      "Developed role-based interfaces for employees, supervisors, and administrators.",
      "Implemented project registration, approval, evaluation, email notification, and status-tracking workflows.",
      "Created administrative modules for review, maintenance, monitoring, and permission configuration.",
    ],
    impact: [
      "Centralized the project lifecycle in a single operational system.",
      "Reduced manual administrative effort through automated approvals and notifications.",
      "Improved governance and visibility with structured statuses, permissions, and monitoring.",
    ],
    stack: ["Power Apps", "Power Automate", "SharePoint", "RBAC", "Workflow Design"],
  },
  {
    slug: "lifeline-healthcare-app",
    title: "LifeLine Healthcare Assistance App",
    eyebrow: "Mobile · Geospatial recommendation",
    summary:
      "An accessible mobile experience that helps elderly users locate nearby healthcare facilities using real-time location data.",
    challenge:
      "Older adults needed a simple way to understand their location and identify nearby medical resources without navigating complex interfaces.",
    approach: [
      "Designed and developed elderly-friendly interfaces for a healthcare assistance platform.",
      "Integrated Google Maps and geospatial data for real-time location tracking.",
      "Built a nearest-facility recommendation module using geographic distance calculations.",
    ],
    impact: [
      "Connected real-time location data with practical healthcare recommendations.",
      "Improved usability through accessibility-focused interaction design.",
      "Created a clear foundation for future emergency and caregiver features.",
    ],
    stack: ["Android", "Google Maps API", "Geospatial Data", "Java", "UX"],
  },
  {
    slug: "rental-database-system",
    title: "Large-Scale Rental Database System",
    eyebrow: "Database systems · Backend logic",
    summary:
      "A MariaDB and Python system supporting rental, return, waitlist, and inventory workflows at multi-million-row scale.",
    challenge:
      "The system needed to maintain consistent rental states and support operational queries across a large relational dataset.",
    approach: [
      "Designed relational schemas using TPC-DS-inspired tables.",
      "Implemented rental, return, waitlist, and inventory functions in Python and SQL.",
      "Tested workflows against 2.68 million rental-history records.",
    ],
    impact: [
      "Demonstrated reliable relational modeling at scale.",
      "Connected application logic with transactional database operations.",
      "Strengthened experience in SQL, indexing, and query-oriented system design.",
    ],
    stack: ["MariaDB", "SQL", "Python", "Relational Modeling", "TPC-DS"],
  },
];

export const skillGroups = [
  {
    title: "Machine Learning",
    items: [
      "Isolation Forest",
      "Transfer Learning",
      "LSTM",
      "Prophet",
      "SVM",
      "PCA",
      "Lasso / Ridge",
      "K-Means",
    ],
  },
  {
    title: "Engineering",
    items: ["Python", "SQL", "Java", "C++", "MATLAB", "Git", "APIs", "Power Platform"],
  },
  {
    title: "Data Systems",
    items: ["MariaDB", "MySQL", "Oracle", "ETL", "Relational Modeling", "SharePoint"],
  },
  {
    title: "Applied AI",
    items: ["LLM Applications", "Prompt Design", "Anomaly Detection", "Computer Vision", "Geospatial Analytics"],
  },
];

export const education = [
  {
    school: "University of Pennsylvania",
    degree: "Master of Science in Engineering (M.S.E.) in Data Science",
    period: "Aug. 2026 — Dec. 2027",
    note: "School of Engineering and Applied Science",
  },
  {
    school: "University of Florida",
    degree: "B.S. in Data Science · Minor in Actuarial Science",
    period: "Aug. 2023 — May 2026",
    note: "GPA: 3.95/4.0 · Honors Program · Dean’s List every semester",
  },
];
