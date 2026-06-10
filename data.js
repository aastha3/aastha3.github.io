/* ============================================================
   data.js — ALL site content lives here.
   Edit this file to update text, links, jobs, projects, etc.
   ============================================================ */

const SITE = {

  /* ── Personal info ── */
  name:  "Aastha Bondre",
  title: "Senior Data Scientist · ML & Machine Learning",
  bio:   `I build ML systems that move the needle — not just on benchmarks, but on the bottom line.
          With a full-ride M.S. from <strong>USC</strong>, a dual degree from <strong>IIT Delhi</strong>
          (top 0.01% nationally), and a decade of experience spanning retail, fintech, logistics, and XR,
          I specialize in taking messy, high-stakes problems and turning them into deployed models
          with real impact. Most recently at <strong>Meta Reality Labs</strong>, where I worked on
          the identity and access layer powering millions of Quest headsets.`,

  links: {
    linkedin:  "https://www.linkedin.com/in/aastha-bondre/",
    scholar:   "https://scholar.google.com/citations?user=q41s0NAAAAAJ&hl=en",
    portfolio: "/portfolio.html",
  },

  /* ── Work experience ── */
  experience: [
    {
      company: "Meta — Reality Labs",
      role:    "Senior Data Scientist · Horizon OS, Access Product · Sunnyvale, CA",
      dates:   "May 2025 – May 2026",
      current: false,
      detail:  `Worked on the data science team supporting login and identity for Quest headsets
                within the Horizon OS platform. Focused on the access product — the authentication
                and account experience for millions of Quest users.`,
      stack:   "",
    },
    {
      company: "Target Corporation",
      role:    "Senior Data Scientist · ML for Product Availability · Sunnyvale, CA",
      dates:   "Aug 2022 – May 2025",
      current: false,
      detail:  `Deployed tree-based and neural network models to correct systemic inventory errors
                and prevent out-of-stock events. Projected $20M annual sales impact. Built
                post-deployment tuning pipeline generating an additional $10M in a single quarter.`,
      stack:   "PySpark · Python · TensorFlow · XGBoost · LightGBM · MLFlow · Trino",
    },
    {
      company: "JP Morgan Chase & Co.",
      role:    "Data Scientist Intern · Investment Banking · New York, NY",
      dates:   "Jun 2020 – Jul 2020",
      current: false,
      detail:  `Built time-series and time-to-event models on trade settlement data, avoiding ~$2M
                in regulatory fines. Designed distributed GPU training pipelines. Received full-time offer.`,
      stack:   "Spark · MLlib · TensorFlow · SQL · LSTM · GRU",
    },
    {
      company: "Grab",
      role:    "Product Analytics Manager · Grab Logistics · Singapore",
      dates:   "Jan 2018 – Jul 2018",
      current: false,
      detail:  `Owned analytics for Grab Logistics across SE Asia. Designed A/B tests across Indonesia,
                Vietnam, and the Philippines; built anomaly detection models for fraud; led cross-functional
                dashboards tracking revenue and retention.`,
      stack:   "",
    },
    {
      company: "Flipkart",
      role:    "Senior Business Analyst · Trust & Safety · Bangalore, India",
      dates:   "Jun 2016 – Jan 2018",
      current: false,
      detail:  `Deployed a real-time rule-based engine to detect fraudulent reviews. Designed business
                rules that cut customer return fraud from 1.8M to 0.3M/month. Hackathon finalist for
                NLP-based return categorization.`,
      stack:   "",
    },
    {
      company: "Capital One",
      role:    "Senior Business Analyst · Digital Marketing Analytics · Bangalore, India",
      dates:   "Jun 2014 – Jun 2016",
      current: false,
      detail:  `Built a cross-business data-sharing framework that saved $0.5M/month in operational costs.
                Managed Tableau infrastructure for the analytics org. Received Spot Award for exceptional performance.`,
      stack:   "",
    },
  ],

  /* ── Education ── */
  education: [
    {
      school: "University of Southern California",
      degree: "M.S. Computer Science — Machine Learning & Data Science",
      years:  "2018 – 2022",
      note:   "GPA 3.81 · Full-Ride Scholarship · 6 publications · 280+ citations · TA for ML · Vice-Chair, Women in Engineering",
    },
    {
      school: "Indian Institute of Technology Delhi",
      degree: "B.Tech + M.Tech in Electrical Engineering",
      years:  "2009 – 2014",
      note:   "GPA 8.52/10 · Class Rank 2/22 · IIT JEE AIR 815 (Top 0.05%) · Director's Academic Excellence Award",
    },
  ],

  /* ── Skills ── */
  skills: [
    { category: "Languages",    tags: ["Python", "SQL", "Shell Scripting"] },
    { category: "ML Frameworks", tags: ["TensorFlow", "PyTorch", "XGBoost", "LightGBM", "Scikit-learn"] },
    { category: "MLOps",        tags: ["Vertex AI", "TF Serving", "Docker", "Kubernetes", "CI/CD", "MLFlow"] },
    { category: "Cloud & Data", tags: ["GCP", "AWS", "Azure", "PySpark", "Trino", "Airflow", "Pandas"] },
    { category: "Modelling",    tags: ["Time Series", "Ensemble Methods", "Neural Networks", "Transfer Learning", "A/B Testing"] },
  ],

  /* ── Research / publications ── */
  research: {
    summary: "280+ citations across 6 publications in leading ML and medical informatics venues including AMIA. Representative work: <em>DeepCompete: A deep learning approach to competing risks in continuous time domain</em> (AMIA 2020).",
    link:    "https://tinyurl.com/publications-aastha-bondre",
  },

  /* ── Portfolio projects ── */
  projects: [
    {
      id:          "radinfer",          // used to pick the SVG illustration — keep as-is or change to a URL string for a custom image
      title:       "RadInfer — Radiology Inference Platform",
      status:      "In Progress",       // badge text, e.g. "In Progress" | "Published" | "Open Source" | ""
      tags:        ["Radiology AI", "FastAPI", "React", "LLM Inference", "GCP"],
      description: `A full-stack web application for AI-assisted radiology inference. Built on a
                    production-grade foundation with FastAPI (Python) on Google Cloud Run, a React +
                    Tailwind frontend on Cloudflare Pages, Clerk authentication, and Neon Postgres.
                    The platform is designed to accept clinical inputs and return model-driven diagnostic
                    inferences, with the LLM integration layer currently under development.
                    Entire stack runs on free-tier cloud services (~$0/month).`,
      links: [
        { label: "Live Site", url: "https://radinfer.com",                          style: "primary",   icon: "external" },
        { label: "GitHub",    url: "https://github.com/TejasBondre/radinfer",       style: "secondary", icon: "github"   },
      ],
      meta: "Python · React · Cloud Run",
    },
    {
      id:          "deepcompete",
      title:       "DeepCompete — Deep Learning for Competing Risks",
      status:      "Published",
      tags:        ["Deep Learning", "Survival Analysis", "Clinical ML", "AMIA 2020"],
      description: `A novel deep learning framework for modeling competing risks in continuous time —
                    the challenge of predicting which of multiple possible events (e.g. disease progression
                    vs. death from another cause) will occur first for a patient. Built on top of recurrent
                    architectures to handle irregular time-series clinical data, DeepCompete outperforms
                    classical survival models on multi-morbidity cohorts. Published in the
                    <em>AMIA Annual Symposium Proceedings</em> (2020) and cited 280+ times.`,
      links: [
        { label: "Read Paper",        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8075516/",                   style: "primary",   icon: "external" },
        { label: "All Publications",  url: "https://scholar.google.com/citations?user=q41s0NAAAAAJ&hl=en",        style: "secondary", icon: "scholar"  },
      ],
      meta: "AMIA 2020 · 280+ citations",
    },
  ],

};
