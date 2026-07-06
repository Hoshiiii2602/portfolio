export const profile = {
  name: "Nguyễn Xuân Trọng",
  nameEn: "Nguyen Xuan Trong",
  title: "Mobile Developer",
  roles: ["Flutter Developer", "React Native Developer"],
  phone: "0333759182",
  email: "trongnguyenxuan2001@gmail.com",
  location: "Hà Nội, Vietnam",
  objective:
    "Mobile Developer specializing in Flutter and React Native with experience in building and optimizing real-world applications in Fintech and Product-based applications. Experienced in developing high-performance mobile applications, integrating APIs, handling realtime data, and improving user experience. Seeking opportunities to contribute technical skills, build scalable mobile products, and grow toward a Senior Mobile Developer / Technical Lead role.",
};

export const experiences = [
  {
    company: "Bolt Technologies JSC",
    role: "Mobile Application Developer",
    period: "03/2025 — Present",
    highlights: [
      "Integrated REST APIs and handled realtime data using WebSocket for stock price and transaction status modules.",
      "Developed trading order flows, portfolio management features, and realtime data synchronization.",
      "Implemented JWT authentication, secure storage, and security solutions to protect user data.",
      "Optimized application performance by reducing screen loading time and improving realtime data processing efficiency.",
      "Refactored existing codebase and proposed architectural improvements to enhance scalability and maintainability.",
      "Developed HTML-based mini-game features and integrated them into mobile applications through WebView.",
      "Integrated third-party SDKs including VNPAY eKYC, FPT.AI eKYC, Firebase Messaging, and WebView Bridge.",
      "Participated in developing user authentication, digital identity verification, and transaction security flows for financial applications.",
    ],
  },
  {
    company: "Tinasoft Vietnam JSC",
    role: "Mobile Developer / Frontend Developer",
    period: "05/2023 — 03/2025",
    highlights: [
      "Developed mobile applications using Flutter and React Native for multiple production projects.",
      "Worked onsite with enterprise partners including Rivernet Vietnam, Sumikura, Annalink, and Viettel High Tech.",
      "Developed UI, integrated APIs, implemented business logic, and maintained application source code.",
      "Fixed production bugs, optimized application performance, and collaborated with customers throughout the development lifecycle.",
      "Worked on multiple domains including utility applications, education, logistics, and enterprise systems.",
    ],
  },
  {
    company: "VNPT Information Technology Company",
    role: "Frontend Intern",
    period: "10/2022 — 01/2023",
    highlights: [
      "Participated in developing and maintaining internal enterprise web systems.",
      "Built UI components based on design specifications and integrated basic APIs.",
      "Supported bug fixing and collaborated with team members during the development process.",
      "Learned and applied enterprise software development workflows.",
    ],
  },
];

export const projects = [
  {
    name: "Upstock Investment Application",
    company: "UP Securities",
    role: "Mobile Application Developer",
    period: "03/2025 — Present",
    description:
      "A financial investment application that allows users to manage assets and perform online transactions.",
    tech: ["Flutter", "Bloc", "Riverpod", "WebSocket", "JWT"],
    highlights: [
      "Developed major modules including Bonds, Investment Portfolio, Order Book, and Transaction History with realtime data updates.",
      "Integrated WebSocket for realtime price updates and transaction status synchronization.",
      "Designed and implemented buy/sell order flows ensuring data accuracy and consistency with backend services.",
      "Managed application state using Bloc / Riverpod and optimized data handling for high-frequency updates.",
      "Improved UI rendering performance and minimized unnecessary widget rebuilds.",
      "Applied JWT authentication, local data encryption, and session management for user security.",
      "Built Flutter-WebView communication bridge to synchronize user data and application states.",
    ],
  },
  {
    name: "Service Test",
    company: "Viettel High Tech",
    role: "Frontend Developer (Onsite)",
    period: "11/2024 — 03/2025",
    description:
      "Internal system for service testing and technical workflow management.",
    tech: ["ReactJS", "TypeScript"],
    highlights: [
      "Worked onsite directly with Viettel High Tech team.",
      "Developed web interfaces using ReactJS and TypeScript.",
      "Integrated APIs and implemented business requirements.",
      "Supported feature development, bug fixing, and system performance optimization.",
      "Collaborated closely with customer teams to ensure project delivery.",
    ],
  },
  {
    name: "F1 Homes / Finra Capital",
    company: "Finra Capital",
    role: "Flutter Mobile Developer (Onsite)",
    period: "07/2024 — 10/2024",
    description:
      "Financial application for investment and digital asset management.",
    tech: ["Flutter", "Figma", "REST API"],
    highlights: [
      "Participated in project structure development and implemented new features based on business requirements.",
      "Developed UI based on Figma designs and optimized animations and user experience.",
      "Integrated backend APIs and handled business logic.",
      "Worked directly with partners to clarify requirements and deliver suitable solutions.",
      "Supported bug fixing, performance optimization, and product release preparation.",
    ],
  },
  {
    name: "Annalink Porter",
    company: "Annalink JSC",
    role: "Mobile / Web Developer",
    period: "04/2024 — 08/2024",
    description:
      "A consulting and study abroad management system including Mobile App and WebApp.",
    tech: ["React Native", "NextJS", "Figma"],
    highlights: [
      "Developed Mobile App using React Native and WebApp using NextJS.",
      "Built base project structure and implemented features based on customer requirements.",
      "Converted Figma designs into production-ready interfaces with responsive layouts.",
      "Collaborated with customers and BA teams to clarify business requirements.",
      "Integrated APIs, fixed production issues, and improved system stability.",
    ],
  },
  {
    name: "Lunar Calendar Application",
    company: "Rivernet Vietnam JSC",
    role: "React Native Developer (Onsite)",
    period: "03/2024 — 05/2024",
    description:
      "A mobile application supporting lunar calendar lookup and related utilities.",
    tech: ["React Native", "Offline Mode"],
    highlights: [
      "Participated in managing and developing projects with a small development team.",
      "Developed main application features using React Native.",
      "Designed data processing flows to support both online and offline modes.",
      "Optimized data structure, loading speed, and user experience.",
      "Fixed bugs, improved performance, and delivered features on schedule.",
    ],
  },
  {
    name: "Sumikura",
    company: "SK Investment JSC",
    role: "React Native Developer",
    period: "10/2023 — 03/2024",
    description:
      "Mobile application for air conditioner and home appliance service ecosystem.",
    tech: ["React Native", "Figma", "Jira"],
    highlights: [
      "Developed mobile applications using React Native.",
      "Built UI based on Figma / Photoshop designs.",
      "Integrated APIs and implemented core application features.",
      "Managed technical tasks and supported team members during development.",
      "Fixed bugs on Jira, optimized UI/UX, and improved user experience.",
    ],
  },
];

export const skillGroups = [
  {
    category: "Mobile",
    skills: ["Flutter", "Dart", "React Native"],
  },
  {
    category: "Frontend",
    skills: ["ReactJS", "NextJS", "TypeScript"],
  },
  {
    category: "State Management",
    skills: ["Bloc", "Riverpod", "Provider", "GetX", "Redux"],
  },
  {
    category: "Fintech",
    skills: [
      "eKYC",
      "OCR",
      "Face Matching",
      "Liveness Detection",
      "Trading Flow",
      "Portfolio Management",
    ],
  },
  {
    category: "Third-party SDK",
    skills: [
      "VNPAY eKYC",
      "FPT.AI eKYC",
      "Firebase Messaging",
      "Deep Link",
      "WebView Integration",
    ],
  },
  {
    category: "Networking",
    skills: ["REST API", "WebSocket", "Realtime Data Handling"],
  },
  {
    category: "Security",
    skills: ["JWT Authentication", "Secure Storage", "Data Encryption"],
  },
  {
    category: "Tools",
    skills: ["Git", "Jira", "Postman", "Firebase"],
  },
  {
    category: "Performance",
    skills: [
      "App Optimization",
      "Memory Management",
      "UI Rendering Optimization",
    ],
  },
];

export const strengths = [
  "Problem Solving",
  "System Thinking",
  "Teamwork",
];

export const education = {
  school: "University of Economics - Technology for Industries (UNETI)",
  degree: "Bachelor's degree in Information Technology",
  major: "Information Technology Major",
  period: "09/2019 — 06/2023",
  gpa: "3.18 / 4.0",
  description:
    "Bachelor's degree in Information Technology with knowledge of programming, data structures, databases, and software development.",
};

export const hobbies = [
  "Technology and digital products",
  "Exploring new trends in Mobile App development",
  "Sports",
  "Traveling",
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];
