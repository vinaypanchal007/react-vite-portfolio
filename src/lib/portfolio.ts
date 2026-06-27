export const portfolio = {
  name: "Vinay Panchal",
  title: "Aspiring Data Analyst & Scientist | AI/ML Engineer | RAG Applications",
  email: "vinayp.12601@gmail.com",
  phone: "+91 8291411142",
  location: "Mumbai, India",

  github: "vinaypanchal007",
  githubUrl: "https://github.com/vinaypanchal007",
  linkedinUrl: "https://www.linkedin.com/in/vinay-panchal2001/",

  resume: "/Vinay Panchal.pdf",

  profileImage: "/profile-passport.jpg",

  heroBlurb:
    "Certified in Data Analytics & Machine Learning with hands-on experience in SQL, Python, Power BI, Machine Learning, NLP, RAG, and dashboard development.",

  about:
    "Certified in Data Analytics and Machine Learning with experience in building end-to-end ML solutions, Power BI dashboards, SQL analytics, and RAG-based applications. I also have a MERN Stack background that helps me develop complete data-driven applications.",

  highlights: [
    "5th Rank Pan India - National Data Science Hackathon 2026",
    "PG Course in Data Science with AI - Imarticus Learning",
    "Full Stack Developer (MERN Stack) - Imarticus Learning"
  ],

  // Analytics track
  analystProjects: [
    {
      name: "Banking Analytics Dashboard",
      stack: "SQL • Power BI",
      summary:
        "Designed interactive dashboards for customer, loan, repayment, and business KPI analysis."
    },
    {
      name: "E-Commerce Sales Analysis",
      stack: "Power BI",
      summary:
        "Created dashboards for revenue, profit, customer segmentation, and sales trend analysis."
    },
    {
      name: "SQL KPI Reporting",
      stack: "SQL",
      summary:
        "Built optimised SQL queries and reporting pipelines for business intelligence and decision-ready reporting."
    }
  ],

  analystSkills: [
    "SQL",
    "Power BI",
    "EDA",
    "KPI Reporting",
    "Data Visualisation",
    "Business Analysis",
    "Pandas",
    "Excel"
  ],

  // Data Science / ML track
  scientistProjects: [
    {
      name: "Fake Job Prediction using RAG",
      stack: "Python • NLP • RAG",
      summary:
        "Built an NLP-based fake job detection system using TF-IDF, SMOTE, Machine Learning, and a RAG explanation layer."
    },
    {
      name: "Employee Performance Prediction",
      stack: "Machine Learning",
      summary:
        "Built a classification model to predict employee performance using feature engineering and model evaluation."
    },
    {
      name: "RAG Application Pipeline",
      stack: "Python • RAG • LLM",
      summary:
        "Developed a Retrieval-Augmented Generation pipeline for document question-answering using vector search and LLM inference."
    }
  ],

  scientistSkills: [
    "Python",
    "Machine Learning",
    "NLP",
    "RAG",
    "Scikit-learn",
    "Pandas",
    "FastAPI",
    "Git / GitHub",
    "React",
    "Node.js"
  ],

  skills: [
    "Python",
    "SQL",
    "Power BI",
    "Machine Learning",
    "NLP",
    "RAG",
    "Scikit-learn",
    "Pandas",
    "EDA",
    "FastAPI",
    "Git",
    "GitHub",
    "React",
    "Node.js"
  ],

  projects: [
    {
      name: "Fake Job Prediction using RAG",
      stack: "Python • NLP • RAG",
      summary:
        "Built an NLP-based fake job detection system using TF-IDF, SMOTE, Machine Learning, and a RAG explanation layer."
    },
    {
      name: "Banking Analytics Dashboard",
      stack: "SQL • Power BI",
      summary:
        "Designed interactive dashboards for customer, loan, repayment, and business KPI analysis."
    },
    {
      name: "Employee Performance Prediction",
      stack: "Machine Learning",
      summary:
        "Built a classification model to predict employee performance using feature engineering and model evaluation."
    },
    {
      name: "E-Commerce Sales Analysis",
      stack: "Power BI",
      summary:
        "Created dashboards for revenue, profit, customer segmentation, and sales trend analysis."
    }
  ]
};

export type GitHubRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
  fork: boolean;
  visibility?: string;
  updated_at: string;
};
