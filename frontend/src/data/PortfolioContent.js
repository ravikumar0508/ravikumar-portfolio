import Project1 from "../assets/images/Api.png";
import Project2 from "../assets/images/Auth.png";
import Project3 from "../assets/images/block.jpg";
import Project4 from "../assets/images/ecom.jpg";
import Project5 from "../assets/images/portfolio.png";
import Project6 from "../assets/images/doctor.png";
import Project7 from "../assets/images/estate.png";
import ReactBasicCert from "../assets/images/certifications/react_basic.jpg";
import JsBasicCert from "../assets/images/certifications/javascript_basic.jpg";
import JsInterCert from "../assets/images/certifications/javascript_inter.jpg";
import NodeBasicCert from "../assets/images/certifications/node_basic.jpg";
import FrontendCert from "../assets/images/certifications/frontend_cert.jpg";
import FullStackCert from "../assets/images/certifications/FullStack.png";
import Avatar from "../assets/images/avatar.png";
import CodeAlphaLogo from "../assets/images/alpha_logo.png";

export const PortfolioContent = {
  about: {
    tag: "About Me",
    title: "Passionate about Testing",
    titleHighlight: "digital experiences",
    paragraphs: [
  "I'm a QA Lead and AI Automation Engineer with 7+ years of experience transforming software quality through intelligent test automation, API testing, and AI-driven validation. I specialize in building scalable automation solutions for web, mobile, APIs, and next-generation Generative AI applications.",
  
  "From automating complex enterprise workflows to testing LLMs, AI agents, recommendation engines, and computer vision systems, I focus on making software more reliable, accurate, secure, and production-ready. I combine strong QA engineering practices with modern technologies like Python, Playwright, Selenium, Robot Framework, Appium, and AI testing techniques to deliver quality at scale.",
],
    stats: [
  { number: "7+", label: "Years Experience" },
  { number: "20+", label: "Projects Delivered" },
  { number: "15+", label: "Automation Technologies" },
],

skills: [
  { name: "Python", level: 70 },
  { name: "Robot Framework", level: 95 },
  { name: "Selenium", level: 80 },
  { name: "Playwright", level: 65 },
  { name: "API Testing", level: 95 },
  { name: "API Automation", level: 80 },
  { name: "Postman", level: 80 },
  { name: "REST API", level: 85 },
  { name: "Swagger / OpenAPI", level: 80 },
  { name: "AI / LLM Testing", level: 90 },
  { name: "AI Application Testing", level: 80 },
  { name: "LLM & SLM Testing", level: 80 },
  { name: "AI Agent Testing", level: 85 },
  { name: "Prompt Testing", level: 85 },
  { name: "RAG Testing", level: 80 },
  { name: "GenAI Evaluation", level: 85 },
  { name: "Appium", level: 85 },
  { name: "Java + Cucumber", level: 80 },
  { name: "Automation Frameworks", level: 80 },
  { name: "Git", level: 80 },
  { name: "GitHub", level: 85 },
  { name: "Jenkins", level: 80 },
  { name: "Docker", level: 60 },
  { name: "CI/CD", level: 80 },
  { name: "Database Testing", level: 85 },
  { name: "SQL", level: 80 },
  { name: "PostgreSQL", level: 75 },
  { name: "Performance Testing", level: 75 },
  { name: "Security Testing", level: 70 },
  { name: "RPA Windows", level: 80 },
  { name: "Jira", level: 80 },
  { name: "Confluence", level: 70 },
  { name: "Winappdriver", level: 75 }
]
  },

  hero: {
    badge: "Available for work",
    greeting: "Hey, I'm",
    name: "Ravi Kumar",
    title: "AI Automation Engineer & QA Lead",
    description:
      "I specialize in AI-driven test automation, quality engineering, and LLM application testing, building scalable solutions that make modern software reliable, secure, and production-ready.",
    buttons: {
      primary: "Download CV",
      secondary: "View Projects",
    },
    stats: [
      { number: "7+", label: "Years Experience" },
      { number: "20+", label: "Projects Done" },
      { number: "15+", label: "Tech Stack" },
    ],
  technologies: [
  "Python",
  "Java",
  "Playwright",
  "Selenium",
  "Robot Framework",
  "Appium",
  "Cucumber",
  "API Automation",
  "Postman",
  "AI / LLM Testing",
  "AI Agent Testing",
  "RAG Testing",
  "GenAI Evaluation",
  "SQL",
  "PostgreSQL",
  "Git",
  "Jenkins",
  "Docker",
  "RPA",
  "CI/CD",
],
    avatar: Avatar,
  },

  skills: {
    tag: "Expertise",
    title: "My",
    titleHighlight: "Skills",
    description:
      "A comprehensive overview of my technical skills and expertise across different domains of software Testing.",
    categories: [
  { id: "all", label: "All Skills" },
  { id: "automation", label: "Test Automation" },
  { id: "api", label: "API & Backend Testing" },
  { id: "ai", label: "AI / LLM Testing" },
  { id: "mobile", label: "Mobile & Desktop Testing" },
  { id: "database", label: "Database & Data Testing" },
  { id: "tools", label: "DevOps & QA Tools" },
],
    skills: {
  automation: [
    {
      name: "Robot Framework",
      icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/robotframework.svg",
      level: 95,
      description: "Web, Desktop, RPA & End-to-End Test Automation",
    },
    {
      name: "Selenium",
      icon: "https://api.iconify.design/devicon:selenium.svg",
      level: 80,
      description: "Web UI Automation & Regression Testing",
    },
    {
      name: "Playwright",
      icon: "https://api.iconify.design/logos:playwright.svg",
      level: 65,
      description: "Modern Web & Cross-Browser Automation",
    },
    {
      name: "Java + Cucumber",
      icon: "https://api.iconify.design/logos:cucumber.svg",
      level: 80,
      description: "BDD & Behavior-Driven Test Automation",
    },
   {
  name: "TestNG",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  level: 85,
  description: "Test Execution, Assertions & Test Suites",
},
    {
      name: "Automation Frameworks",
      icon: "https://api.iconify.design/devicon:selenium.svg",
      level: 80,
      description: "Reusable, Scalable & Maintainable Automation Frameworks",
    },
    {
      name: "Python",
      icon: "https://api.iconify.design/logos:python.svg",
      level: 70,
      description: "Test Automation, API & AI Testing",
    },
    {
      name: "Java",
      icon: "https://api.iconify.design/logos:java.svg",
      level: 50,
      description: "Selenium, TestNG & Cucumber Automation",
    },
  ],

  api: [
    {
      name: "API Testing",
      icon: "https://api.iconify.design/logos:postman.svg",
      level: 95,
      description: "Functional, Integration, Negative & Regression Testing",
    },
    {
      name: "API Automation",
      icon: "https://api.iconify.design/logos:postman.svg",
      level: 80,
      description: "Automated API Validation & Regression Testing",
    },
    {
      name: "REST API",
      icon: "https://api.iconify.design/logos:rest.svg",
      level: 85,
      description: "REST Endpoint & Integration Validation",
    },
    {
      name: "Postman",
      icon: "https://api.iconify.design/logos:postman.svg",
      level: 80,
      description: "Collections, Assertions & API Automation",
    },
    {
  name: "Swagger / OpenAPI",
  icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/swagger.svg",
  level: 80,
  description: "API Documentation & Contract Validation",
},

    {
      name: "FastAPI",
      icon: "https://api.iconify.design/logos:fastapi.svg",
      level: 65,
      description: "API Development & API Automation",
    },
    {
      name: "Django",
      icon: "https://api.iconify.design/logos:django.svg",
      level: 45,
      description: "Backend Application & API Testing",
    },
  ],

  ai: [
    {
      name: "AI / LLM Testing",
      icon: "https://api.iconify.design/logos:openai-icon.svg",
      level: 90,
      description: "LLM Accuracy, Quality, Reliability & Robustness",
    },
    {
      name: "AI Application Testing",
      icon: "https://api.iconify.design/logos:openai-icon.svg",
      level: 80,
      description: "AI Application Functional & Behavioral Validation",
    },
    {
      name: "LLM & SLM Testing",
      icon: "https://api.iconify.design/logos:openai-icon.svg",
      level: 80,
      description: "Model Evaluation, Accuracy & Response Validation",
    },
    {
      name: "AI Agent Testing",
      icon: "https://api.iconify.design/logos:openai-icon.svg",
      level: 85,
      description: "Agent Workflows, Tool Calling & Response Validation",
    },
    {
      name: "Prompt Testing",
      icon: "https://api.iconify.design/logos:openai-icon.svg",
      level: 85,
      description: "Prompt Quality, Consistency & Response Validation",
    },
    {
      name: "RAG Testing",
      icon: "https://api.iconify.design/logos:openai-icon.svg",
      level: 80,
      description: "Retrieval, Context & Groundedness Validation",
    },
    {
      name: "GenAI Evaluation",
      icon: "https://api.iconify.design/logos:openai-icon.svg",
      level: 85,
      description: "Accuracy, Relevance, Hallucination & Safety Evaluation",
    },
    {
      name: "Amazon Bedrock",
      icon: "https://api.iconify.design/logos:aws.svg",
      level: 80,
      description: "LLM, GenAI & AI Agent Applications",
    },
    {
      name: "Recommendation Engine Testing",
      icon: "https://api.iconify.design/logos:python.svg",
      level: 85,
      description: "Recommendation Accuracy & Similarity Validation",
    },
    {
      name: "Computer Vision Testing",
      icon: "https://api.iconify.design/logos:opencv.svg",
      level: 80,
      description: "Image Recognition & Vision Model Validation",
    },
  ],

  mobile: [
    {
      name: "Appium",
      icon: "https://api.iconify.design/logos:appium.svg",
      level: 85,
      description: "Android & iOS Mobile Automation",
    },
    {
      name: "RPA Windows",
      icon: "https://api.iconify.design/logos:microsoft-windows.svg",
      level: 80,
      description: "Windows Desktop & Enterprise Application Automation",
    },
    {
      name: "WinAppDriver",
      icon: "https://api.iconify.design/logos:microsoft-windows.svg",
      level: 75,
      description: "Windows Desktop Application Automation",
    },
   {
  name: "RPA Desktop",
  icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/robotframework.svg",
  level: 90,
  description: "Desktop & Enterprise Workflow Automation",
},
    {
      name: "PyAutoGUI",
      icon: "https://api.iconify.design/logos:python.svg",
      level: 80,
      description: "Desktop UI & Image-Based Automation",
    },
    {
  name: "OCR Testing",
  icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/tesseract.svg",
  level: 90,
  description: "OCR Accuracy & Document Validation",
},
    {
  name: "Tesseract",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  level: 85,
  description: "OCR Automation & Text Extraction",
},
    {
      name: "RapidOCR",
      icon: "https://api.iconify.design/logos:python.svg",
      level: 80,
      description: "OCR Processing & Automated Text Extraction",
    },
  ],

  database: [
    {
      name: "Database Testing",
      icon: "https://api.iconify.design/logos:postgresql.svg",
      level: 85,
      description: "Data Integrity, CRUD & Backend Validation",
    },
    {
      name: "SQL",
      icon: "https://api.iconify.design/logos:mysql.svg",
      level: 80,
      description: "Queries, Joins & Data Validation",
    },
    {
      name: "PostgreSQL",
      icon: "https://api.iconify.design/logos:postgresql.svg",
      level: 75,
      description: "Database Testing & Data Validation",
    },
    {
  name: "Amazon RDS",
  icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/amazonrds.svg",
  level: 75,
  description: "Cloud Database & Data Validation",
},
    {
      name: "Data Pipeline Testing",
      icon: "https://api.iconify.design/logos:airflow.svg",
      level: 85,
      description: "Data Flow, Transformation & Pipeline Validation",
    },
  ],

  tools: [
    {
  name: "Jenkins",
  icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/jenkins.svg",
  level: 80,
  description: "CI/CD & Automated Test Execution",
},
    {
      name: "CI/CD",
      icon: "https://api.iconify.design/logos:github-actions.svg",
      level: 80,
      description: "Continuous Integration & Continuous Testing",
    },
    {
      name: "Git",
      icon: "https://api.iconify.design/logos:git-icon.svg",
      level: 80,
      description: "Version Control & Framework Management",
    },
    {
      name: "GitHub",
      icon: "https://api.iconify.design/logos:github-icon.svg",
      level: 85,
      description: "Source Control & Collaboration",
    },
    {
      name: "Docker",
      icon: "https://api.iconify.design/logos:docker-icon.svg",
      level: 60,
      description: "Containerized Test Environments",
    },
    {
      name: "AWS",
      icon: "https://api.iconify.design/logos:aws.svg",
      level: 70,
      description: "Cloud Infrastructure & Automation",
    },
   {
  name: "Amazon S3",
  icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/amazons3.svg",
  level: 75,
  description: "Test Data, Documents & Application Storage",
},
    {
  name: "Performance Testing",
  icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/apachejmeter.svg",
  level: 75,
  description: "Load, Stress & Performance Validation",
},
    {
  name: "Security Testing",
  icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/owasp.svg",
  level: 70,
  description: "Web, API & Application Security Validation",
},
    {
      name: "Jira",
      icon: "https://api.iconify.design/logos:jira.svg",
      level: 80,
      description: "Defect Management, Agile & Scrum",
    },
    {
      name: "Confluence",
      icon: "https://api.iconify.design/logos:confluence.svg",
      level: 70,
      description: "Test Documentation & Knowledge Management",
    },
  ],
},
    summary: [
      { number: "12+", label: "Technologies" },
      { number: "7+", label: "Years Experience" },
      { number: "20+", label: "Projects Delivered" },
      { number: "100%", label: "Client Satisfaction" },
    ],
  },

 projects: {
  tag: "Portfolio",
  title: "Featured",
  titleHighlight: "Projects",
  description:
    "A selection of enterprise QA, AI quality engineering, test automation, healthcare, OTT, API, data, and intelligent automation projects I've worked on across professional and personal environments.",

  categories: [
    { id: "all", label: "All Projects" },
    { id: "ai", label: "AI & GenAI" },
    { id: "automation", label: "Test Automation" },
    { id: "enterprise", label: "Enterprise Automation" },
    { id: "api", label: "API & Data" },
    { id: "healthcare", label: "Healthcare" },
    { id: "ott", label: "OTT & Media" },
    { id: "personal", label: "Personal Projects" },
  ],

  items: [

    // =========================================================
    // CURRENT / RECENT ENTERPRISE & AI PROJECTS
    // =========================================================

    {
      id: 1,
      title: "Spira Power - AI Automation Platform",
      description:
        "AI-powered enterprise workflow platform that classifies incoming client emails, identifies sales-related requests, generates quotations using email and database information, prepares Material Test Certificates, and provides dashboard-based end-to-end workflow visibility.",
      imageUrl:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
      emoji: "⚡",
      category: "ai",
      tags: [
        "AI",
        "LLM",
        "Email Classification",
        "Quotation Automation",
        "Python",
        "Robot Framework",
        "Selenium",
        "API Testing",
        "Database Testing",
      ],
      liveUrl: "",
      githubUrl: "",
      status: "Private Project",
    },

    {
      id: 2,
      title: "AI / LLM Quality Engineering",
      description:
        "Enterprise AI quality engineering initiative focused on validating Generative AI applications, LLMs, SLMs, AI agents, RAG workflows, prompt behavior, hallucinations, accuracy, robustness, safety, and response quality.",
      imageUrl:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
      emoji: "🤖",
      category: "ai",
      tags: [
        "AI Testing",
        "LLM Testing",
        "SLM Testing",
        "AI Agents",
        "RAG",
        "GenAI Evaluation",
        "Prompt Testing",
        "Python",
      ],
      liveUrl: "",
      githubUrl: "",
      status: "Private Project",
    },

    {
      id: 3,
      title: "DFE AI Automation Platform",
      description:
        "Enterprise AI automation platform designed to automate DCR and DFE processing using intelligent scraping, AI agents, knowledge retrieval, document processing, and automated validation workflows.",
      imageUrl:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      emoji: "🧠",
      category: "ai",
      tags: [
        "Amazon Bedrock",
        "AI Agents",
        "AWS",
        "S3",
        "Vector Database",
        "Python",
        "Automation",
        "AI Testing",
      ],
      liveUrl: "",
      githubUrl: "",
      status: "Private Project",
    },

    {
      id: 4,
      title: "InstaCommerce AI",
      description:
        "AI-powered eCommerce automation platform connecting social commerce interactions with intelligent product discovery, customer engagement, product recommendations, image processing, and automated shopping workflows.",
      imageUrl:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
      emoji: "🛍️",
      category: "ai",
      tags: [
        "AI",
        "Recommendation Engine",
        "WhatsApp",
        "Instagram",
        "Python",
        "Django",
        "PostgreSQL",
        "AWS S3",
      ],
      liveUrl: "",
      githubUrl: "",
      status: "Private Project",
    },

    {
      id: 5,
      title: "RoadSign AI",
      description:
        "Computer vision and AI validation project focused on image recognition and automated validation of road sign recognition results.",
      imageUrl:
        "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80",
      emoji: "🚦",
      category: "ai",
      tags: [
        "Computer Vision",
        "AI Testing",
        "Image Recognition",
        "Python",
        "OCR",
        "Model Validation",
      ],
      liveUrl: "",
      githubUrl: "",
      status: "Private Project",
    },


    // =========================================================
    // ENTERPRISE AUTOMATION
    // =========================================================

    {
      id: 6,
      title: "IPMS Enterprise Automation",
      description:
        "Enterprise desktop automation solution for a Citrix-hosted IPMS application covering customer workflows, SRN creation, task management, DDI operations, OCR-based validation, image recognition, logging, and Windows desktop automation.",
      imageUrl:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
      emoji: "🖥️",
      category: "enterprise",
      tags: [
        "Robot Framework",
        "RPA",
        "Citrix",
        "OCR",
        "Tesseract",
        "Windows Automation",
        "PyAutoGUI",
        "Image Recognition",
      ],
      liveUrl: "",
      githubUrl: "",
      status: "Private Project",
    },

    {
      id: 7,
      title: "VLP / Master DDI Automation",
      description:
        "Enterprise automation solution for VLP workflows and Master DDI operations, including customer processing, SRN handling, DDI availability detection, OCR extraction, progressive scrolling, and workflow validation.",
      imageUrl:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
      emoji: "⚙️",
      category: "enterprise",
      tags: [
        "Robot Framework",
        "RPA",
        "OCR",
        "Tesseract",
        "Citrix",
        "Windows",
        "Image Recognition",
        "Workflow Automation",
      ],
      liveUrl: "",
      githubUrl: "",
      status: "Private Project",
    },

    {
      id: 8,
      title: "SOR Automation & Intelligence",
      description:
        "Enterprise automation and intelligence solution focused on automating SOR-related workflows, validation processes, data handling, and operational activities.",
      imageUrl:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
      emoji: "📊",
      category: "enterprise",
      tags: [
        "Automation",
        "RPA",
        "Python",
        "Data Validation",
        "API Testing",
        "Enterprise Automation",
      ],
      liveUrl: "",
      githubUrl: "",
      status: "Private Project",
    },


    // =========================================================
    // PREVIOUS EMPLOYER PROJECTS
    // =========================================================

    {
      id: 9,
      title: "EIT HRMS & Recommendation Engine",
      description:
        "HRMS platform integrated with web and mobile applications, including employee workflows, automated rule-based verification, resume parsing, sentiment analysis, and recommendation-engine validation for employee, employer, and job matching.",
      imageUrl:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80",
      emoji: "👥",
      category: "enterprise",
      tags: [
        "HRMS",
        "Web Testing",
        "Mobile Testing",
        "API Testing",
        "Database Testing",
        "Resume Parser",
        "Recommendation Engine",
        "AI Testing",
      ],
      liveUrl: "",
      githubUrl: "",
      status: "Private Project",
    },

    {
      id: 10,
      title: "TimeLens Attendance Management",
      description:
        "Enterprise attendance and workforce management platform supporting attendance tracking, status monitoring, dashboards, reporting, notifications, role-based access, data validation, and operational workflows.",
      imageUrl:
        "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1200&q=80",
      emoji: "⏱️",
      category: "enterprise",
      tags: [
        "Attendance Management",
        "QA Automation",
        "API Testing",
        "PostgreSQL",
        "AWS",
        "RDS",
        "S3",
        "Data Validation",
      ],
      liveUrl: "",
      githubUrl: "",
      status: "Private Project",
    },

    {
      id: 11,
      title: "GI Consultants",
      description:
        "Web, mobile, and API quality engineering project covering functional testing, mobile application validation, API testing, automation, regression testing, and end-to-end application quality.",
      imageUrl:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
      emoji: "🏥",
      category: "healthcare",
      tags: [
        "Healthcare",
        "Web Testing",
        "Mobile Testing",
        "API Testing",
        "Appium",
        "Automation",
        "Regression Testing",
      ],
      liveUrl: "",
      githubUrl: "",
      status: "Private Project",
    },

    {
      id: 12,
      title: "Steps to Go",
      description:
        "Healthcare and wellness application focused on validating user workflows, mobile functionality, API integrations, database behavior, and end-to-end application quality.",
      imageUrl:
        "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80",
      emoji: "🏃",
      category: "healthcare",
      tags: [
        "Healthcare",
        "Wellness",
        "Mobile Testing",
        "API Testing",
        "Database Testing",
        "Robot Framework",
        "Selenium",
      ],
      liveUrl: "",
      githubUrl: "",
      status: "Private Project",
    },

    {
      id: 13,
      title: "OTT Application Testing",
      description:
        "OTT application quality engineering covering functional testing, regression testing, UI validation, API testing, cross-platform workflows, and automation of critical user journeys.",
      imageUrl:
        "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=1200&q=80",
      emoji: "📺",
      category: "ott",
      tags: [
        "OTT",
        "Web Testing",
        "API Testing",
        "Regression Testing",
        "UI Automation",
        "Robot Framework",
        "Selenium",
        "Automation",
      ],
      liveUrl: "",
      githubUrl: "",
      status: "Private Project",
    },

    {
      id: 14,
      title: "Healthcare Application Testing",
      description:
        "Healthcare application quality engineering covering web and mobile workflows, functional testing, API validation, database testing, regression automation, and end-to-end testing.",
      imageUrl:
        "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1200&q=80",
      emoji: "⚕️",
      category: "healthcare",
      tags: [
        "Healthcare",
        "Web Testing",
        "Mobile Testing",
        "API Testing",
        "Postman",
        "PostgreSQL",
        "Robot Framework",
        "Selenium",
      ],
      liveUrl: "",
      githubUrl: "",
      status: "Private Project",
    },

    {
      id: 15,
      title: "Smart Home / IoT Applications",
      description:
        "IoT and smart-home application testing covering connected-device workflows, mobile and web applications, functional validation, automation, API testing, and end-to-end quality assurance.",
      imageUrl:
        "https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=format&fit=crop&w=1200&q=80",
      emoji: "🏠",
      category: "enterprise",
      tags: [
        "IoT",
        "Smart Home",
        "Mobile Testing",
        "Web Testing",
        "API Testing",
        "Automation",
        "Selenium",
        "Robot Framework",
      ],
      liveUrl: "",
      githubUrl: "",
      status: "Private Project",
    },


    // =========================================================
    // PERSONAL / LOCAL PROJECTS
    // =========================================================

    {
      id: 16,
      title: "Universal Product Image & Data Automation",
      description:
        "Personal automation solution for extracting product information and images from eCommerce websites, including product titles, descriptions, availability, and image assets.",
      imageUrl:
        "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80",
      emoji: "🛒",
      category: "automation",
      tags: [
        "Python",
        "Playwright",
        "Web Scraping",
        "BeautifulSoup",
        "API Automation",
        "Image Processing",
        "Automation",
      ],
      liveUrl: "",
      githubUrl: "",
      status: "Personal Project",
    },

    {
      id: 17,
      title: "AI Recommendation Engine Testing",
      description:
        "AI recommendation validation project focused on recommendation accuracy, similarity matching, product relevance, and behavioral validation using similarity-based recommendation techniques.",
      imageUrl:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      emoji: "🎯",
      category: "ai",
      tags: [
        "AI Testing",
        "Recommendation Engine",
        "Python",
        "Cosine Similarity",
        "Jaccard Similarity",
        "Data Validation",
      ],
      liveUrl: "",
      githubUrl: "",
      status: "Personal Project",
    },

    {
      id: 18,
      title: "API Automation Framework",
      description:
        "Reusable API testing and automation framework covering REST API validation, positive and negative scenarios, authentication, response validation, regression testing, and API documentation.",
      imageUrl:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
      emoji: "🔌",
      category: "api",
      tags: [
        "Python",
        "REST API",
        "Postman",
        "Swagger",
        "API Automation",
        "Regression Testing",
        "Validation",
      ],
      liveUrl: "",
      githubUrl: "",
      status: "Personal Project",
    },

    {
      id: 19,
      title: "Mobile Automation Framework",
      description:
        "Mobile automation framework covering Android and iOS application testing with reusable automation components, functional validation, regression testing, and cross-platform execution.",
      imageUrl:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
      emoji: "📱",
      category: "automation",
      tags: [
        "Appium",
        "Android",
        "iOS",
        "Python",
        "Mobile Automation",
        "Regression Testing",
      ],
      liveUrl: "",
      githubUrl: "",
      status: "Personal Project",
    },

    {
      id: 20,
      title: "AI Application Testing Framework",
      description:
        "Quality engineering framework for validating AI applications through functional testing, response evaluation, prompt validation, hallucination detection, accuracy assessment, and robustness testing.",
      imageUrl:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
      emoji: "🧪",
      category: "ai",
      tags: [
        "AI Testing",
        "LLM Testing",
        "Prompt Testing",
        "GenAI",
        "Python",
        "Quality Engineering",
        "Automation",
      ],
      liveUrl: "",
      githubUrl: "",
      status: "Personal Project",
    },

    {
      id: 21,
      title: "OCR Automation Framework",
      description:
        "OCR-driven automation framework for extracting and validating text from application screens and documents using image processing, OCR engines, fuzzy matching, and automated workflows.",
      imageUrl:
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80",
      emoji: "🔎",
      category: "automation",
      tags: [
        "Python",
        "Tesseract",
        "OCR",
        "PyAutoGUI",
        "Image Processing",
        "RapidFuzz",
        "Automation",
      ],
      liveUrl: "",
      githubUrl: "",
      status: "Personal Project",
    },
  ],
},
  contact: {
    tag: "Contact",
    title: "Let's work",
    titleHighlight: "together",
    description:
      "Have a project in mind? Let's discuss how we can bring it to life. I'm always open to new opportunities and collaborations.",
    info: [
      {
        icon: "email",
        title: "Email",
        value: "ravikumar9361@gmail.com",
      },
      {
        icon: "location",
        title: "Location",
        value: "Remote / Worldwide",
      },
      {
        icon: "availability",
        title: "Availability",
        value: "Open to work",
      },
    ],
    social: [
      {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        url: "https://github.com/ravikumar0508",
      },
      {
        name: "LinkedIn",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
        url: "https://www.linkedin.com/in/ravi-k-937ab3263/",
      },
    ],
    form: {
      namePlaceholder: "Your name",
      emailPlaceholder: "your@email.com",
      messagePlaceholder: "Tell me about your project...",
      submitText: "Send Message",
    },
  },

  certifications: {
  tag: "Credentials",
  title: "My ",
  titleHighlight: "Certifications",
  description:
    "A collection of professional certifications and continuous learning achievements across software engineering, QA automation, AI, data, Python, SQL, RPA, and emerging technologies.",

  items: [
    {
      id: 1,
      title: "Software Engineer",
      issuer: "HackerRank",
      logoUrl:
        "https://www.google.com/s2/favicons?domain=hackerrank.com&sz=128",
      imageUrl: "",
      issued: "2026",
      credentialId: "cc13af05b864",
      description:
        "HackerRank certification validating software engineering fundamentals, programming, problem solving, and technical development skills.",
      link: "https://www.hackerrank.com/certificates/cc13af05b864",
    },

    {
      id: 2,
      title: "SQL Advanced",
      issuer: "HackerRank",
      logoUrl:
        "https://www.google.com/s2/favicons?domain=hackerrank.com&sz=128",
      imageUrl: "",
      issued: "April 2026",
      credentialId: "4b3fb7d75afd",
      description:
        "Advanced SQL certification covering complex queries, data manipulation, joins, aggregation, and database problem solving.",
      link: "https://www.hackerrank.com/certificates/4b3fb7d75afd",
    },

    {
      id: 3,
      title: "NLP and Text Mining Tutorial for Beginners",
      issuer: "Simplilearn",
      logoUrl:
        "https://www.google.com/s2/favicons?domain=simplilearn.com&sz=128",
      imageUrl: "",
      issued: "April 2024",
      credentialId: "tdfAMgXU3Ib",
      description:
        "Certification covering Natural Language Processing, text processing, text mining, and foundational NLP techniques.",
      link: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIyMDAzIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvdGh1bWJfNTA3Mjg4M18xNzEzOTc5OTMyLnBuZyIsInVzZXJuYW1lIjoiUmF2aSBrdW1hciJ9&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F4611%2FNatural-Language-Processing-%2528NLP%2529-and-Text-Mining-Tutorial-for-Beginners%2Fcertificate%2Fdownload-skillup&%24web_only=true",
    },

    {
      id: 4,
      title: "Introduction to Large Language Models",
      issuer: "Simplilearn",
      logoUrl:
        "https://www.google.com/s2/favicons?domain=simplilearn.com&sz=128",
      imageUrl: "",
      issued: "April 2024",
      credentialId: "GBf5pQWP3Ib",
      description:
        "Introduction to Large Language Models, their architecture, capabilities, applications, and Generative AI concepts.",
      link: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIzODA4IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvdGh1bWJfNTA3MjY0M18xNzEzOTc1NzI5LnBuZyIsInVzZXJuYW1lIjoiUmF2aSBrdW1hciJ9&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F6751%2FIntroduction-to-Large-Language-Models%2Fcertificate%2Fdownload-skillup&%24web_only=true",
    },

    {
      id: 5,
      title: "Project Management 101: PMP Certification Training",
      issuer: "Simplilearn",
      logoUrl:
        "https://www.google.com/s2/favicons?domain=simplilearn.com&sz=128",
      imageUrl: "",
      issued: "April 2024",
      credentialId: "DzXYaXsvZIb",
      description:
        "Foundational project management training covering planning, execution, project lifecycle, risk, and delivery management.",
      link: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIzMjUxIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvdGh1bWJfNTA2NjI4MF8xNzEzNzcyMTM2LnBuZyIsInVzZXJuYW1lIjoiUmF2aSBrdW1hciJ9&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F6032%2FProject-Management-101%3A-PMP-certification-training%2Fcertificate%2Fdownload-skillup&%24web_only=true",
    },

    {
      id: 6,
      title: "Agile Scrum Master (ASM®)",
      issuer: "Simplilearn",
      logoUrl:
        "https://www.google.com/s2/favicons?domain=simplilearn.com&sz=128",
      imageUrl: "",
      issued: "April 2024",
      credentialId: "OUiPrtqLIb",
      description:
        "Agile Scrum Master certification covering Scrum principles, Agile practices, roles, ceremonies, and iterative delivery.",
      link: "",
    },

    {
      id: 7,
      title: "Introduction to Six Sigma",
      issuer: "Simplilearn",
      logoUrl:
        "https://www.google.com/s2/favicons?domain=simplilearn.com&sz=128",
      imageUrl: "",
      issued: "April 2024",
      credentialId: "qnMtzCSBTIb",
      description:
        "Introduction to Six Sigma methodologies, process improvement, quality management, and defect reduction principles.",
      link: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxOTQwIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvdGh1bWJfNTA1NzM3N18xNzEzNDQzMzI0LnBuZyIsInVzZXJuYW1lIjoiUmF2aSBrdW1hciJ9&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fdashboard%2Fcertificate&%24web_only=true",
    },

    {
      id: 8,
      title: "Neural Network 101: Image Recognition Using Machine Learning",
      issuer: "Simplilearn",
      logoUrl:
        "https://www.google.com/s2/favicons?domain=simplilearn.com&sz=128",
      imageUrl: "",
      issued: "April 2024",
      credentialId: "U2fBESbuRIb",
      description:
        "Foundational machine learning certification covering neural networks and image recognition using machine learning techniques.",
      link: "",
    },

    {
      id: 9,
      title: "SQL Basics",
      issuer: "HackerRank",
      logoUrl:
        "https://www.google.com/s2/favicons?domain=hackerrank.com&sz=128",
      imageUrl: "",
      issued: "January 2024",
      credentialId: "58e094f58b44",
      description:
        "SQL fundamentals including queries, filtering, sorting, aggregation, joins, and relational database operations.",
      link: "https://www.hackerrank.com/certificates/58e094f58b44",
    },

    {
      id: 10,
      title: "Data Engineering",
      issuer: "MindLuster",
      logoUrl:
        "https://www.google.com/s2/favicons?domain=mindluster.com&sz=128",
      imageUrl: "",
      issued: "October 2023",
      credentialId: "12190212398",
      description:
        "Foundational data engineering concepts covering data processing, data pipelines, transformation, and data workflows.",
      link: "https://www.mindluster.com/student/certificate/12190212398",
    },

    {
      id: 11,
      title: "SQL Beginner",
      issuer: "Great Learning",
      logoUrl:
        "https://www.google.com/s2/favicons?domain=mygreatlearning.com&sz=128",
      imageUrl: "",
      issued: "September 2023",
      credentialId: "49368",
      description:
        "Beginner-level SQL certification covering database fundamentals, queries, filtering, sorting, and data retrieval.",
      link: "",
    },

    {
      id: 12,
      title: "Open CV",
      issuer: "Great Learning",
      logoUrl:
        "https://www.google.com/s2/favicons?domain=mygreatlearning.com&sz=128",
      imageUrl: "",
      issued: "September 2023",
      credentialId: "56776/certificate",
      description:
        "Computer vision fundamentals using OpenCV for image processing and computer vision applications.",
      link: "",
    },

    {
      id: 13,
      title: "AI in Healthcare",
      issuer: "Great Learning",
      logoUrl:
        "https://www.google.com/s2/favicons?domain=mygreatlearning.com&sz=128",
      imageUrl: "",
      issued: "August 2023",
      credentialId: "IYJVQZAR",
      description:
        "Introduction to Artificial Intelligence applications, concepts, and use cases in the healthcare domain.",
      link: "",
    },

    {
      id: 14,
      title: "ChatGPT for NLP",
      issuer: "Great Learning",
      logoUrl:
        "https://www.google.com/s2/favicons?domain=mygreatlearning.com&sz=128",
      imageUrl: "",
      issued: "August 2023",
      credentialId: "OPABDESI",
      description:
        "Explores ChatGPT and its applications in Natural Language Processing and conversational AI.",
      link: "",
    },

    {
      id: 15,
      title: "Computer Vision Essentials",
      issuer: "Great Learning",
      logoUrl:
        "https://www.google.com/s2/favicons?domain=mygreatlearning.com&sz=128",
      imageUrl: "",
      issued: "September 2022",
      credentialId: "JZMTL0XC",
      description:
        "Computer vision fundamentals covering image processing, visual data, recognition, and machine learning concepts.",
      link: "",
    },

    {
      id: 16,
      title: "Robotic Process Automation (RPA)",
      issuer: "Great Learning",
      logoUrl:
        "https://www.google.com/s2/favicons?domain=mygreatlearning.com&sz=128",
      imageUrl: "",
      issued: "September 2022",
      credentialId: "AMSWDQVT",
      description:
        "RPA certification covering robotic process automation concepts, automation workflows, and business process automation.",
      link: "",
    },

    {
      id: 17,
      title: "Python",
      issuer: "HackerRank",
      logoUrl:
        "https://www.google.com/s2/favicons?domain=hackerrank.com&sz=128",
      imageUrl: "",
      issued: "October 2022",
      credentialId: "28cb942286d0",
      description:
        "HackerRank certification validating Python programming fundamentals, problem solving, and programming concepts.",
      link: "https://www.hackerrank.com/certificates/28cb942286d0",
    },

    {
      id: 18,
      title: "Introduction to NumPy",
      issuer: "Simplilearn",
      logoUrl:
        "https://www.google.com/s2/favicons?domain=simplilearn.com&sz=128",
      imageUrl: "",
      issued: "December 2021",
      credentialId: "s4xG0eKIVBb",
      description:
        "Introduction to NumPy and numerical computing concepts used in Python-based data processing and analysis.",
      link: "",
    },

    {
      id: 19,
      title: "Python for Beginners",
      issuer: "Simplilearn",
      logoUrl:
        "https://www.google.com/s2/favicons?domain=simplilearn.com&sz=128",
      imageUrl: "",
      issued: "December 2021",
      credentialId: "8x3LAfBIVBb",
      description:
        "Python fundamentals covering programming concepts, syntax, variables, control flow, functions, and basic development.",
      link: "",
    },

    {
      id: 20,
      title: "Introduction to Linux",
      issuer: "Great Learning",
      logoUrl:
        "https://www.google.com/s2/favicons?domain=mygreatlearning.com&sz=128",
      imageUrl: "",
      issued: "December 2021",
      credentialId: "ORYRVHRL",
      description:
        "Linux fundamentals covering operating system concepts, commands, file management, and basic Linux administration.",
      link: "",
    },

    {
      id: 21,
      title: "Red Hat Satellite Technical Overview",
      issuer: "Udemy",
      logoUrl:
        "https://www.google.com/s2/favicons?domain=udemy.com&sz=128",
      imageUrl: "",
      issued: "September 2019",
      credentialId: "UC-VFO86MI/",
      description:
        "Technical overview of Red Hat Satellite and its role in enterprise Linux systems management and administration.",
      link: "",
    },
  ],
},

  footer: {
    brand: "Ravi kumar",
    text: "Engineering intelligent quality through AI, automation, and innovation.",
    links: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Projects", href: "#projects" },
      { label: "Certifications", href: "#certifications" },
      { label: "Contact", href: "#contact" },
    ],
    copyright: "All rights reserved.",
    heart: "Made with ❤️ By Ravi kumar",
  },

  navbar: {
    brand: "Ravi kumar",
    links: [
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#projects" },
      { label: "Certifications", href: "#certifications" },
      { label: "Contact", href: "#contact" },
    ],
    cta: "Contact",
  },
};

export default PortfolioContent;
