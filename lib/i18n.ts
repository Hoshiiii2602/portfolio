export type Locale = "vi" | "en";

export const locales: Locale[] = ["vi", "en"];

export const localeLabels: Record<Locale, string> = {
  vi: "VI",
  en: "EN",
};

export const cvFiles: Record<Locale, { href: string; label: string }> = {
  vi: {
    href: "/cv/NGUYEN-XUAN-TRONG-VI.pdf",
    label: "Tải CV tiếng Việt",
  },
  en: {
    href: "/cv/NGUYEN-XUAN-TRONG-EN.pdf",
    label: "Download English CV",
  },
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  highlights: string[];
};

export type Project = {
  name: string;
  company: string;
  role: string;
  period: string;
  description: string;
  tech: string[];
  highlights: string[];
};

export type SkillGroup = {
  category: string;
  skills: string[];
};

export type SiteContent = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    experience: string;
    projects: string;
    skills: string;
    education: string;
    contact: string;
    getInTouch: string;
  };
  hero: {
    badge: string;
    greeting: string;
    subtitle: string;
    tagline: string;
    viewWork: string;
    contactMe: string;
    downloadCv: string;
    downloadCvOther: string;
    scroll: string;
    yearsExp: string;
    projectsDelivered: string;
    mobileDev: string;
  };
  about: {
    label: string;
    title: string;
    description: string;
    interests: string;
  };
  experience: {
    label: string;
    title: string;
    description: string;
    current: string;
  };
  projectsMeta: {
    label: string;
    title: string;
    description: string;
  };
  skills: {
    label: string;
    title: string;
    description: string;
    strengthsLabel: string;
  };
  educationMeta: {
    label: string;
    title: string;
    gpaLabel: string;
    periodLabel: string;
  };
  contact: {
    label: string;
    title: string;
    description: string;
  };
  footer: {
    rights: string;
    builtWith: string;
  };
  profile: {
    name: string;
    nameEn: string;
    title: string;
    roles: string[];
    phone: string;
    email: string;
    location: string;
    objective: string;
  };
  experiences: Experience[];
  projectList: Project[];
  skillGroups: SkillGroup[];
  strengths: string[];
  education: {
    school: string;
    degree: string;
    major: string;
    period: string;
    gpa: string;
    description: string;
  };
  hobbies: string[];
};

const sharedTech = {
  upstock: ["Flutter", "Bloc", "Riverpod", "WebSocket", "JWT"],
  serviceTest: ["ReactJS", "TypeScript"],
  f1: ["Flutter", "Figma", "REST API"],
  annalink: ["React Native", "NextJS", "Figma"],
  lunar: ["React Native", "Offline Mode"],
  sumikura: ["React Native", "Figma", "Jira"],
};

export const content: Record<Locale, SiteContent> = {
  vi: {
    meta: {
      title: "Nguyễn Xuân Trọng | Mobile Developer",
      description:
        "Lập trình viên Mobile chuyên Flutter và React Native. Kinh nghiệm Fintech, dữ liệu realtime và sản phẩm mobile hiệu năng cao.",
    },
    nav: {
      about: "Giới thiệu",
      experience: "Kinh nghiệm",
      projects: "Dự án",
      skills: "Kỹ năng",
      education: "Học vấn",
      contact: "Liên hệ",
      getInTouch: "Liên hệ ngay",
    },
    hero: {
      badge: "Sẵn sàng nhận cơ hội mới",
      greeting: "Xin chào, tôi là",
      subtitle: "Mobile Developer",
      tagline:
        "Xây dựng ứng dụng mobile hiệu năng cao trong lĩnh vực Fintech và sản phẩm số với Flutter & React Native.",
      viewWork: "Xem dự án",
      contactMe: "Liên hệ",
      downloadCv: "Tải CV (Tiếng Việt)",
      downloadCvOther: "Tải CV (English)",
      scroll: "Cuộn xuống",
      yearsExp: "Năm kinh nghiệm",
      projectsDelivered: "Dự án hoàn thành",
      mobileDev: "Mobile Dev",
    },
    about: {
      label: "Giới thiệu",
      title: "Kiến tạo trải nghiệm mobile có giá trị",
      description:
        "Đam mê xây dựng sản phẩm mobile mở rộng tốt, bảo mật và hiệu năng cao.",
      interests: "Sở thích",
    },
    experience: {
      label: "Kinh nghiệm",
      title: "Hành trình nghề nghiệp",
      description:
        "Từ thực tập sinh đến Mobile Developer — triển khai sản phẩm trong Fintech, doanh nghiệp và ứng dụng tiêu dùng.",
      current: "Hiện tại",
    },
    projectsMeta: {
      label: "Dự án",
      title: "Dự án tiêu biểu",
      description:
        "Các dự án mobile và web trong Fintech, doanh nghiệp và tiện ích người dùng.",
    },
    skills: {
      label: "Kỹ năng",
      title: "Chuyên môn kỹ thuật",
      description:
        "Bộ công cụ toàn diện để xây dựng ứng dụng mobile và web hiện đại.",
      strengthsLabel: "Điểm mạnh",
    },
    educationMeta: {
      label: "Học vấn",
      title: "Nền tảng học thuật",
      gpaLabel: "GPA",
      periodLabel: "Thời gian",
    },
    contact: {
      label: "Liên hệ",
      title: "Cùng tạo nên điều tuyệt vời",
      description:
        "Sẵn sàng cho cơ hội Mobile Developer mới. Liên hệ để hợp tác, dự án hoặc trao đổi.",
    },
    footer: {
      rights: "Bảo lưu mọi quyền.",
      builtWith: "Xây dựng bằng",
    },
    profile: {
      name: "Nguyễn Xuân Trọng",
      nameEn: "Nguyen Xuan Trong",
      title: "Mobile Developer",
      roles: ["Flutter Developer", "React Native Developer"],
      phone: "0333759182",
      email: "trongnguyenxuan2001@gmail.com",
      location: "Hà Nội, Việt Nam",
      objective:
        "Lập trình viên Mobile với định hướng phát triển chuyên sâu về Flutter và React Native, có kinh nghiệm xây dựng và tối ưu ứng dụng thực tế trong lĩnh vực Fintech và Product. Mong muốn tham gia phát triển các sản phẩm mobile chất lượng cao, tối ưu hiệu năng, nâng cao trải nghiệm người dùng và tạo ra giá trị thực tiễn cho doanh nghiệp. Hướng tới trở thành Senior Mobile Developer / Technical Lead trong tương lai.",
    },
    experiences: [
      {
        company: "Công ty Cổ phần Công nghệ Bolt Technologies",
        role: "Chuyên viên Phát triển ứng dụng Mobile",
        period: "03/2025 — Hiện tại",
        highlights: [
          "Tích hợp REST API và xử lý dữ liệu realtime thông qua WebSocket phục vụ các module bảng giá và trạng thái giao dịch.",
          "Xây dựng luồng đặt lệnh (order flow), quản lý danh mục và cập nhật dữ liệu theo thời gian thực.",
          "Áp dụng cơ chế xác thực JWT, secure storage và các giải pháp bảo mật nhằm bảo vệ dữ liệu người dùng.",
          "Tối ưu hiệu năng ứng dụng: giảm thời gian load màn hình và cải thiện độ mượt khi xử lý dữ liệu realtime.",
          "Chủ động refactor và đề xuất cải tiến kiến trúc nhằm tăng khả năng mở rộng và maintain hệ thống.",
          "Phát triển tính năng minigame nền tảng HTML và tích hợp vào ứng dụng mobile thông qua WebView.",
          "Tích hợp các SDK bên thứ ba như eKYC VNPAY, eKYC FPT.AI, Firebase Messaging và WebView Bridge.",
          "Tham gia xây dựng các luồng xác thực người dùng, định danh điện tử và bảo mật giao dịch trong lĩnh vực tài chính.",
        ],
      },
      {
        company: "Công ty Cổ phần Tinasoft Việt Nam",
        role: "Mobile Developer / Frontend Developer",
        period: "05/2023 — 03/2025",
        highlights: [
          "Phát triển ứng dụng mobile bằng Flutter / React Native cho nhiều dự án thực tế.",
          "Được cử Onsite tại các đối tác doanh nghiệp như Rivernet Việt Nam, Sumikura, Annalink và Viettel High Tech.",
          "Xây dựng giao diện, tích hợp API, xử lý business logic và maintain source code.",
          "Fix bug production, tối ưu hiệu năng và phối hợp với khách hàng trong suốt quá trình phát triển.",
          "Tham gia nhiều domain như tiện ích, giáo dục, logistics và enterprise systems.",
        ],
      },
      {
        company: "Công ty Công nghệ Thông tin VNPT",
        role: "Frontend Intern",
        period: "10/2022 — 01/2023",
        highlights: [
          "Tham gia phát triển và bảo trì hệ thống Web nội bộ/doanh nghiệp.",
          "Hỗ trợ xây dựng giao diện từ thiết kế và tích hợp API cơ bản.",
          "Tham gia fix bug và phối hợp cùng team trong quá trình phát triển dự án.",
          "Làm quen quy trình làm việc thực tế theo mô hình doanh nghiệp.",
        ],
      },
    ],
    projectList: [
      {
        name: "Upstock — Công ty Cổ phần Chứng khoán UP",
        company: "UP Securities",
        role: "Chuyên viên Phát triển ứng dụng Mobile",
        period: "03/2025 — Hiện tại",
        description:
          "Ứng dụng đầu tư tài chính dành cho người dùng cá nhân, hỗ trợ quản lý tài sản và thực hiện giao dịch trực tuyến.",
        tech: sharedTech.upstock,
        highlights: [
          "Xây dựng các module chính: Trái phiếu, Danh mục đầu tư, Sổ lệnh và Lịch sử giao dịch với dữ liệu realtime.",
          "Tích hợp WebSocket để cập nhật giá và trạng thái giao dịch theo thời gian thực.",
          "Thiết kế và triển khai luồng đặt lệnh (buy/sell), đảm bảo xử lý chính xác và đồng bộ dữ liệu với backend.",
          "Quản lý state bằng Bloc / Riverpod, tối ưu luồng dữ liệu và hiệu năng khi xử lý high-frequency updates.",
          "Áp dụng các giải pháp tối ưu hiệu năng và giảm thiểu re-render UI trong các màn hình realtime.",
          "Đảm bảo bảo mật dữ liệu thông qua JWT, mã hóa dữ liệu cục bộ và kiểm soát session người dùng.",
          "Triển khai cơ chế giao tiếp giữa Flutter và HTML WebView để đồng bộ trạng thái và dữ liệu người dùng.",
        ],
      },
      {
        name: "Service Test — Viettel High Tech",
        company: "Viettel High Tech",
        role: "Frontend Developer (Onsite)",
        period: "11/2024 — 03/2025",
        description:
          "Hệ thống nội bộ phục vụ kiểm thử dịch vụ và quản lý quy trình kỹ thuật tại Viettel High Tech.",
        tech: sharedTech.serviceTest,
        highlights: [
          "Được cử onsite làm việc trực tiếp với khách hàng tại Viettel High Tech.",
          "Phát triển giao diện Web bằng ReactJS và TypeScript.",
          "Tích hợp API, xử lý nghiệp vụ theo yêu cầu thực tế từ khách hàng.",
          "Hỗ trợ triển khai tính năng mới, fix bug và tối ưu hiệu suất hệ thống.",
          "Phối hợp chặt chẽ với team khách hàng để đảm bảo tiến độ dự án.",
        ],
      },
      {
        name: "F1 Homes / Finra Capital",
        company: "Finra Capital",
        role: "Flutter Mobile Developer (Onsite)",
        period: "07/2024 — 10/2024",
        description:
          "Ứng dụng tài chính phục vụ nhu cầu đầu tư và quản lý tài sản số.",
        tech: sharedTech.f1,
        highlights: [
          "Tham gia xây dựng cấu trúc dự án và phát triển các tính năng mới theo yêu cầu nghiệp vụ.",
          "Phát triển giao diện UI chuẩn theo thiết kế Figma, tối ưu animation và trải nghiệm người dùng.",
          "Tích hợp API từ backend, xử lý luồng dữ liệu và logic nghiệp vụ.",
          "Chủ động trao đổi với đối tác để làm rõ yêu cầu và triển khai tính năng phù hợp.",
          "Hỗ trợ fix bug, tối ưu hiệu năng và hoàn thiện sản phẩm trước release.",
        ],
      },
      {
        name: "Annalink Porter",
        company: "Công ty Cổ phần Annalink",
        role: "Mobile / Web Developer (Onsite & Remote)",
        period: "04/2024 — 08/2024",
        description:
          "Hệ thống hỗ trợ tư vấn và quản lý quy trình du học, bao gồm Mobile App và WebApp.",
        tech: sharedTech.annalink,
        highlights: [
          "Tham gia phát triển Mobile App bằng React Native và WebApp bằng NextJS.",
          "Xây dựng base project và triển khai các tính năng theo yêu cầu khách hàng.",
          "Chuyển đổi giao diện từ Figma sang sản phẩm hoàn chỉnh, đảm bảo responsive và trải nghiệm tốt.",
          "Hỗ trợ trao đổi trực tiếp với khách hàng, BA để làm rõ nghiệp vụ.",
          "Tích hợp API, xử lý bug production và cải thiện độ ổn định hệ thống.",
        ],
      },
      {
        name: "Lịch Âm — Rivernet Việt Nam",
        company: "Công ty Cổ phần Công nghệ Rivernet Việt Nam",
        role: "React Native Developer (Onsite)",
        period: "03/2024 — 05/2024",
        description:
          "Ứng dụng lịch âm hỗ trợ tra cứu lịch vạn niên, ngày tốt xấu và các tiện ích liên quan.",
        tech: sharedTech.lunar,
        highlights: [
          "Tham gia quản lý và phát triển dự án với quy mô team nhỏ.",
          "Xây dựng các tính năng chính của ứng dụng bằng React Native.",
          "Thiết kế luồng xử lý dữ liệu giúp ứng dụng hoạt động ổn định ở cả chế độ online và offline.",
          "Tối ưu cấu trúc dữ liệu, tốc độ tải nội dung và trải nghiệm người dùng.",
          "Chủ động fix bug, cải thiện hiệu năng và hoàn thiện sản phẩm đúng tiến độ.",
        ],
      },
      {
        name: "Sumikura — SK Investment",
        company: "Công ty Cổ phần Đầu tư SK",
        role: "React Native Developer (Onsite & Remote)",
        period: "10/2023 — 03/2024",
        description:
          "Ứng dụng thương mại/dịch vụ dành cho hệ sinh thái sản phẩm điều hòa, máy lạnh.",
        tech: sharedTech.sumikura,
        highlights: [
          "Tham gia phát triển ứng dụng mobile bằng React Native.",
          "Xây dựng giao diện theo thiết kế từ Figma / Photoshop.",
          "Tích hợp API và hoàn thiện các chức năng chính của hệ thống.",
          "Quản lý task kỹ thuật, hỗ trợ team trong quá trình triển khai dự án.",
          "Fix bug trên Jira, tối ưu UI/UX và cải thiện trải nghiệm người dùng.",
        ],
      },
    ],
    skillGroups: [
      { category: "Mobile", skills: ["Flutter", "Dart", "React Native"] },
      { category: "Frontend", skills: ["ReactJS", "NextJS", "TypeScript"] },
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
      { category: "Tools", skills: ["Git", "Jira", "Postman", "Firebase"] },
      {
        category: "Performance",
        skills: [
          "App Optimization",
          "Memory Management",
          "UI Rendering Optimization",
        ],
      },
    ],
    strengths: ["Problem Solving", "System Thinking", "Teamwork"],
    education: {
      school: "Đại học Kinh tế Kỹ thuật Công nghiệp (UNETI)",
      degree: "Tốt nghiệp chuyên ngành Công nghệ thông tin",
      major: "Khoa: Công nghệ thông tin",
      period: "09/2019 — 06/2023",
      gpa: "3.18 / 4.0",
      description:
        "Có nền tảng về lập trình, cấu trúc dữ liệu, cơ sở dữ liệu và phát triển phần mềm.",
    },
    hobbies: [
      "Công nghệ và sản phẩm số",
      "Tìm hiểu xu hướng Mobile App mới",
      "Thể thao",
      "Du lịch",
    ],
  },
  en: {
    meta: {
      title: "Nguyen Xuan Trong | Mobile Developer",
      description:
        "Mobile Developer specializing in Flutter and React Native. Experienced in Fintech, realtime data, and high-performance mobile products.",
    },
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      education: "Education",
      contact: "Contact",
      getInTouch: "Get in touch",
    },
    hero: {
      badge: "Available for opportunities",
      greeting: "Hi, I'm",
      subtitle: "Mobile Developer",
      tagline:
        "Building high-performance mobile applications in Fintech and product-based domains with Flutter & React Native.",
      viewWork: "View my work",
      contactMe: "Contact me",
      downloadCv: "Download CV (English)",
      downloadCvOther: "Download CV (Vietnamese)",
      scroll: "Scroll",
      yearsExp: "Years Experience",
      projectsDelivered: "Projects Delivered",
      mobileDev: "Mobile Dev",
    },
    about: {
      label: "About",
      title: "Crafting mobile experiences that matter",
      description:
        "Passionate about building scalable, secure, and performant mobile products.",
      interests: "Interests",
    },
    experience: {
      label: "Experience",
      title: "Professional journey",
      description:
        "From intern to mobile developer — building products across fintech, enterprise, and consumer apps.",
      current: "Current",
    },
    projectsMeta: {
      label: "Projects",
      title: "Featured work",
      description:
        "A selection of mobile and web projects across fintech, enterprise, and consumer domains.",
    },
    skills: {
      label: "Skills",
      title: "Technical expertise",
      description:
        "A comprehensive toolkit for building modern mobile and web applications.",
      strengthsLabel: "Strengths",
    },
    educationMeta: {
      label: "Education",
      title: "Academic background",
      gpaLabel: "GPA",
      periodLabel: "Period",
    },
    contact: {
      label: "Contact",
      title: "Let's build something great",
      description:
        "Open to new opportunities as a Mobile Developer. Feel free to reach out for collaborations, projects, or just a friendly chat.",
    },
    footer: {
      rights: "All rights reserved.",
      builtWith: "Built with",
    },
    profile: {
      name: "Nguyễn Xuân Trọng",
      nameEn: "Nguyen Xuan Trong",
      title: "Mobile Developer",
      roles: ["Flutter Developer", "React Native Developer"],
      phone: "0333759182",
      email: "trongnguyenxuan2001@gmail.com",
      location: "Hà Nội, Vietnam",
      objective:
        "Mobile Developer specializing in Flutter and React Native with experience in building and optimizing real-world applications in Fintech and Product-based applications. Experienced in developing high-performance mobile applications, integrating APIs, handling realtime data, and improving user experience. Seeking opportunities to contribute technical skills, build scalable mobile products, and grow toward a Senior Mobile Developer / Technical Lead role.",
    },
    experiences: [
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
    ],
    projectList: [
      {
        name: "Upstock Investment Application",
        company: "UP Securities",
        role: "Mobile Application Developer",
        period: "03/2025 — Present",
        description:
          "A financial investment application that allows users to manage assets and perform online transactions.",
        tech: sharedTech.upstock,
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
        tech: sharedTech.serviceTest,
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
        tech: sharedTech.f1,
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
        tech: sharedTech.annalink,
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
        tech: sharedTech.lunar,
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
        tech: sharedTech.sumikura,
        highlights: [
          "Developed mobile applications using React Native.",
          "Built UI based on Figma / Photoshop designs.",
          "Integrated APIs and implemented core application features.",
          "Managed technical tasks and supported team members during development.",
          "Fixed bugs on Jira, optimized UI/UX, and improved user experience.",
        ],
      },
    ],
    skillGroups: [
      { category: "Mobile", skills: ["Flutter", "Dart", "React Native"] },
      { category: "Frontend", skills: ["ReactJS", "NextJS", "TypeScript"] },
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
      { category: "Tools", skills: ["Git", "Jira", "Postman", "Firebase"] },
      {
        category: "Performance",
        skills: [
          "App Optimization",
          "Memory Management",
          "UI Rendering Optimization",
        ],
      },
    ],
    strengths: ["Problem Solving", "System Thinking", "Teamwork"],
    education: {
      school: "University of Economics - Technology for Industries (UNETI)",
      degree: "Bachelor's degree in Information Technology",
      major: "Information Technology Major",
      period: "09/2019 — 06/2023",
      gpa: "3.18 / 4.0",
      description:
        "Bachelor's degree in Information Technology with knowledge of programming, data structures, databases, and software development.",
    },
    hobbies: [
      "Technology and digital products",
      "Exploring new trends in Mobile App development",
      "Sports",
      "Traveling",
    ],
  },
};

export function getNavLinks(locale: Locale) {
  const t = content[locale].nav;
  return [
    { href: "#about", label: t.about },
    { href: "#experience", label: t.experience },
    { href: "#projects", label: t.projects },
    { href: "#skills", label: t.skills },
    { href: "#education", label: t.education },
    { href: "#contact", label: t.contact },
  ];
}
