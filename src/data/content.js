export const profile = {
  name: "Sultan Suleimenov",
  title: "Mobile Developer",
  location: "Boston, MA, USA",
  status: "Available for work",
  email: "su1tan.com.goo@gmail.com",
  phone: "+1 857 421 25 48",
  github: "https://github.com/su1tan-com",
  linkedin: "https://www.linkedin.com/in/su1tan-com",
  cvUrl: "/sultan-suleimenov-cv.pdf",
  photo: "/photo.jpg",
};

export const about = [
  "I'm Sultan Suleimenov, a software engineer specializing in native mobile development. My core expertise is building robust, scalable mobile applications, but I'm also deeply interested in mobile game development and creating developer tools and libraries.",
  "I've worked in leading tech companies across the CIS region, contributing to high-impact products with large user bases. Today, I'm exploring opportunities in the United States and Western markets, where I aim to apply my engineering experience on a global scale.",
  "Beyond engineering, I actively invest in the tech community by organizing events, meetups, and educational initiatives. I enjoy bringing people together, sharing knowledge, and helping grow a strong, collaborative developer ecosystem.",
  "I'm driven by curiosity, clean engineering principles, and the desire to build products that genuinely make an impact.",
];

export const projects = [
  {
    name: "KazLang",
    category: "Ed-Tech",
    slug: "kazlang",
    image: "https://framerusercontent.com/images/XpleE6PZrZqNzXsz9i8QkHajXf4.png",
    description: "An educational platform for learning the Kazakh language through interactive lessons and gamified experiences.",
    stack: ["Kotlin", "Jetpack Compose", "Firebase", "Room DB"],
    links: { playStore: "https://play.google.com/store/apps/details?id=kz.qpia.android&hl=en_US" },
    screenshots: [],
  },
  {
    name: "SDUHub",
    category: "University Superapp",
    slug: "sduhub",
    image: "/projects/sduhub/sduhub.png",
    description: "A comprehensive superapp for SDU University students, offering features like indoor navigation, note-taking, AI-chat bot and seamless integration with university services.",
    stack: ["Kotlin", "Ktor", "Room DB", "Jetpack Compose", "Telegram Bots API", "DI koin", "Jetpack Android", "Firebase"],
    links: { github: "https://github.com/su1tan-com/SDUHub" },
    screenshots: [ "/projects/sduhub/1.png", "/projects/sduhub/2.png", "/projects/sduhub/3.png", "/projects/sduhub/4.png", "/projects/sduhub/5.png", "/projects/sduhub/6.png", "/projects/sduhub/7.png" ],
  },
];

export const experience = [
  {
    company: "Kaspi.kz",
    role: "Middle Software Engineer",
    location: "Almaty, Kazakhstan",
    period: "May 2025 — August 2025",
    bullets: [
      "Engineered Palm Pay biometric palm-vein payment integration as sole Android developer, enabling Kazakhstan to become 3rd country globally (alongside US, China) to deploy hand-scanning authentication; coordinated cross-functionally with camera, payments, iOS, and backend teams",
      "Led UI modernization for 85+ payment screens, refactoring XML to Jetpack Compose with 30+ accessible components and TalkBack support; completed 2-month migration with 3-person team",
      "Built Bluetooth connectivity module from scratch for contactless payment system supporting Classic and BLE protocols with SOLID principles",
    ],
  },
  {
    company: "Arbuz.kz",
    role: "Android Developer",
    location: "Almaty, Kazakhstan",
    period: "August 2023 — April 2025",
    bullets: [
      "Owned Warehouse Android app end-to-end, refactoring 40% of codebase and migrating 32% to Jetpack Compose, reducing crash rate by 25%",
      "Integrated cross-app payment flow acquiring 5,174 users within first month; automated courier notifications reducing help desk requests by 89%",
      "Built Android Studio plugin for Clean Architecture scaffolding, reducing feature setup time by 91% (35min to 3min)",
      "Created Gradle convention plugins eliminating 200+ lines of duplicate configuration across 12 modules",
      "Increased authorization conversion by 39.4% and address submission by 34.8% through UX optimization and A/B testing",
    ],
  },
  {
    company: "Kcell LLC",
    role: "Software Engineer Intern",
    location: "Almaty, Kazakhstan",
    period: "June 2023 — August 2023",
    bullets: [
      "Developed and maintained the front-end of e-commerce websites, improving site speed by 20%.",
      "Worked closely with back-end developers to integrate APIs and enhance site capabilities.",
      "Ensured websites met accessibility standards and were SEO optimized.",
      "Created visual design assets and graphics for online marketing campaigns.",
    ],
  },
];

export const education = [
  {
    degree: "Master of Science in Computer Information Systems",
    school: "Boston University",
    location: "Boston, MA, USA",
    period: "2025 — 2026",
    description:
      "Focused on advanced programming techniques, software design, and data structures and algorithms.",
  },
  {
    degree: "Bachelor of Computer Science",
    school: "SDU University",
    location: "Almaty, Kazakhstan",
    period: "2020 — 2024",
    description:
      "Top 4 diploma project all over engineering faculty. Created Superapp for university with indoor map, AI assistant notes and telegram bots integration. Coursework: electronics, design patterns, and low level architecture.",
  },
];

export const certifications = [
  { name: "Compose Application", org: "Google Developers Group", year: "2024", link: "https://www.linkedin.com/posts/su1tan-com_google-android-certificate-activity-7165993245594894336-W0ui/?rcm=ACoAADXLHscBsY97XJCkwDhBHoM1Njrfoa5Pw5Q" },
  { name: "Advanced Android Development", org: "Justcode", year: "2023", link: "https://www.linkedin.com/posts/su1tan-com_sultan-suleimenov-activity-7145725359366311936-VnFA/?rcm=ACoAADXLHscBsY97XJCkwDhBHoM1Njrfoa5Pw5Q" },
  { name: "Mobile Android", org: "OneLab", year: "2023", link: "https://www.linkedin.com/posts/su1tan-com_certificate-android-course-activity-7055572568560263168-1AKy/?rcm=ACoAADXLHscBsY97XJCkwDhBHoM1Njrfoa5Pw5Q" },
  { name: "Networks basics. CCNAv7 Cisco certification", org: "Cisco", year: "2022", link: "https://www.linkedin.com/posts/su1tan-com_%D1%81%D0%B5%D1%80%D1%82%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%82-%D0%BA%D0%BE%D0%BC%D0%BF%D1%8C%D1%8E%D1%82%D0%B5%D1%80%D0%BD%D1%8B%D1%85-%D1%81%D0%B5%D1%82%D0%B5%D0%B9-activity-7030511352649539584-vfG-/?rcm=ACoAADXLHscBsY97XJCkwDhBHoM1Njrfoa5Pw5Q" },
];

export const stack = [
  { name: "Kotlin", description: "Primary Language", color: "#7F52FF" },
  { name: "Jetpack Compose", description: "Modern UI Toolkit", color: "#4285F4" },
  { name: "Android", description: "Mobile Platform", color: "#3DDC84" },
  { name: "Gradle", description: "Build System", color: "#02303A" },
  { name: "Figma", description: "Design Tool", color: "#F24E1E" },
  { name: "Git", description: "Version Control", color: "#F05032" },
];

export const awards = [
  { name: "AI and Big data", org: "Startup Incubator", year: "2024", link: "https://www.linkedin.com/posts/su1tan-com_%D0%BC%D1%8B-%D0%B2%D1%8B%D0%B8%D0%B3%D1%80%D0%B0%D0%BB%D0%B8-%D0%B2-%D0%B8%D0%BD%D0%BA%D1%83%D0%B1%D0%B0%D1%82%D0%BE%D1%80%D0%B5-ai-big-data-activity-7212700994864852993-gLxg/?rcm=ACoAADXLHscBsY97XJCkwDhBHoM1Njrfoa5Pw5Q" },
  { name: "First Digital Keruen", org: "Alatau hub", year: "2024", link: "https://www.linkedin.com/posts/su1tan-com_%D0%B0%D0%BB%D0%BC%D0%B0%D1%82%D1%8B-%D0%BE%D0%B1%D0%BB%D1%8B%D1%81%D1%8B%D0%BD%D0%B4%D0%B0-%D0%B0%D0%BB%D2%93%D0%B0%D1%88-%D1%80%D0%B5%D1%82-digital-keruen-activity-7302437186891665408-YRo-/?rcm=ACoAADXLHscBsY97XJCkwDhBHoM1Njrfoa5Pw5Q" },
  { name: "Halyk OYI Hackathon", org: "Halyk bank", year: "2023", link: "https://www.linkedin.com/posts/su1tan-com_yo-yo-its-sultan-a-few-days-ago-arsen-activity-7132392942689775616-hrrb/?rcm=ACoAADXLHscBsY97XJCkwDhBHoM1Njrfoa5Pw5Q" },
];

export const recommendations = [
  {
    name: "Fatima Tuyakbayeva",
    title: "Head of Division",
    subtitle: "Android lead at Kaspi.kz",
    text: "I would like to highlight Sultan's contribution to our Android development team. Although he was with us for only three months, he quickly proved himself to be communicative, reliable, and highly adaptable. From day one, he established strong working relationships with the team and integrated seamlessly into our workflow. Sultan consistently delivered his tasks with responsibility and attention to detail. His positive mindset, readiness to support colleagues, and strong motivation to learn made him an excellent team player. I am confident that with his work ethic and character, he will continue to grow rapidly as an engineer and become a valuable addition to any team.",
  },
  {
    name: "Osman Suleimanov",
    title: "Android Tech Lead",
    subtitle: "at Arbuz.kz",
    text: "I am pleased to recommend Sultan Suleimenov for a position within your organization. Sultan has worked under my supervision at Arbuz.kz as an Android Developer for the past year, where he consistently delivered high-impact results. He independently redesigned our address selection system, significantly improving order completion rates and customer satisfaction. He also led the integration of our e-payment gateway with the Freedom financial platform, directly contributing to increased payment adoption and revenue growth. His proactive approach to stability issues through our BugFixDay initiatives resulted in measurably reduced crash rates and improved user retention. Beyond technical execution, Sultan demonstrates strong initiative in improving team processes. I recommend him without reservation and am confident he will be a valuable asset to your organization.",
  },
  {
    name: "Akniyet Alibek",
    title: "iOS Developer",
    subtitle: "same team at Arbuz.kz",
    text: "I had the pleasure of working alongside Sultan in the same team, where he consistently demonstrated his expertise as an Android developer. He is an incredibly proactive individual, always asking insightful questions and showing initiative to tackle challenges head-on. Sultan has a strong sense of responsibility, ensuring that every task is completed with the utmost attention to detail and quality. In addition to his technical skills, he is an excellent communicator and speaker, never hesitating to share his knowledge with the team or present ideas to a larger audience. His confidence in public speaking and his ability to clearly articulate complex concepts make him a valuable asset to any project or team. It was a true pleasure to work with Sultan and I highly recommend him for any future endeavors!",
  },
];

export const navItems = [
  { label: "Intro", href: "#intro" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Awards", href: "#awards" },
  { label: "Certifications", href: "#certifications" },
  { label: "Recommendations", href: "#recommendations" },
  { label: "Contact", href: "#contact" },
];
