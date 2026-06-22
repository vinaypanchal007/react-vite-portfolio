export const portfolio = {
  name: "Vinay Panchal",
  title: "Data Analyst • Data Scientist • ML / NLP Enthusiast",
  email: "vinayp.12601@gmail.com",
  phone: "+91 8291411142",
  location: "Mumbai, India",
  github: "vinaypanchal007",
  githubUrl: "https://github.com/vinaypanchal007",
  linkedinUrl: "https://www.linkedin.com/in/vinay-panchal2001/",
  analystResume: "/VinayPanchal_Data_Analyst.pdf",
  scientistResume: "/VinayPanchal_Data_Scientist.pdf",
  profileImage: "/profile-passport.jpg",
  heroBlurb:
    "Data Analytics and AI fresher with hands-on experience in SQL, Power BI, Python, Machine Learning, NLP, and RAG-based projects. I enjoy building dashboards, uncovering business insights, and developing ML solutions that turn raw data into decisions.",
  about:
    "Certified in Data Analytics and Machine Learning with hands-on work across SQL, Power BI, Python, predictive modeling, NLP and RAG-based systems. I also have a MERN stack background, which helps me turn analysis and ML work into usable products and interfaces.",
  highlights: [
    "5th Rank Pan India – National Data Science Hackathon 2026",
    "PG Course in Data Science with AI – Imarticus Learning",
    "Full Stack Developer (MERN Stack) – Imarticus Learning"
  ],
  analystSkills: ["SQL","Power BI","Excel","Pandas","EDA","Dashboard Design","DAX","KPI Analysis","Data Cleaning","Business Insights"],
  scientistSkills: ["Python","Scikit-learn","Regression","Classification","Clustering","NLP","TF-IDF","Feature Engineering","Model Evaluation","RAG Systems"],
  analystProjects: [
    {name:"Banking Analytics Dashboard",stack:"SQL + Power BI",summary:"Analyzed banking customer, loan and repayment data to identify risk patterns, customer behavior, repayment trends and business KPIs."},
    {name:"E-Commerce Sales Analysis",stack:"Power BI",summary:"Built interactive dashboards for revenue, profit, order volume, customer segments and product-region trend analysis."},
    {name:"Employee Performance Prediction",stack:"ML for HR Analytics",summary:"A bridge project that also supports analyst applications because it turns workforce data into decision-ready performance insights."}
  ],
  scientistProjects: [
    {name:"Fake Job Prediction using RAG",stack:"NLP + ML + RAG",summary:"Built a fake job classifier using TF-IDF and machine learning, handled imbalance with SMOTE, and added a RAG-based explanation layer."},
    {name:"Employee Performance Prediction",stack:"Machine Learning",summary:"Built a classification model for employee performance prediction with preprocessing, feature engineering and evaluation metrics."},
    {name:"Analytics + ML Pipeline Work",stack:"Python + ML",summary:"Worked on end-to-end ML workflows including preprocessing, training, evaluation and presenting results through dashboards and apps."}
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