export interface Project {
    id: string;
    title: string;
    description: string;
    category: string;
    techStack: string[];
    githubUrl?: string;
    liveUrl?: string;
    image?: string;
}

export const categories = [
    "All",
    "Full-Stack",
    "Frontend",
    "Backend",
    "Cloud/AWS",
    "Data Science",
    "Java",
];

export const projects: Project[] = [
    {
        id: "bc1",
        title: "Belinda's Closet - Users Management",
        description:
            "Contributed users management features including password editing and improved admin interface for a nonprofit clothing donation platform.",
        category: "Full-Stack",
        techStack: ["Next.js", "React", "TypeScript"],
        githubUrl: "https://github.com/SeattleColleges/belindas-closet-nextjs",
    },
    {
        id: "bc2",
        title: "Belinda's Closet - Forgot Password",
        description:
            "Implemented secure password reset functionality with email verification for user account recovery in a community service application.",
        category: "Full-Stack",
        techStack: ["Next.js", "React", "TypeScript", "Authentication"],
        githubUrl: "https://github.com/SeattleColleges/belindas-closet-nextjs",
    },
    {
        id: "nsc1",
        title: "NSC Events Platform",
        description:
            "Contributed code reviews and testing for a full-stack event management platform for North Seattle College students and faculty.",
        category: "Full-Stack",
        techStack: ["React", "Node.js", "TypeScript", "PostgreSQL"],
        githubUrl: "https://github.com/SeattleColleges/nsc-events-fullstack",
    },
    {
        id: "tz1",
        title: "TensorZero Testing Suite",
        description:
            "Open-source contribution to TensorZero project implementing test coverage using Go client for tags and episode ID fields.",
        category: "Backend",
        techStack: ["Go", "Testing", "Open Source"],
        githubUrl: "https://github.com/tensorzero/tensorzero",
    },
    {
        id: "1",
        title: "E-Commerce Platform",
        description:
            "Full-stack e-commerce application with user authentication, product catalog, shopping cart, and payment integration.",
        category: "Full-Stack",
        techStack: ["Next.js", "React", "Node.js", "PostgreSQL", "Stripe"],
        githubUrl: "https://github.com/BeimnetTesfaye/ecommerce-platform",
        image: "/projects/ecommerce.jpg",
    },
    {
        id: "2",
        title: "Task Management App",
        description:
            "Collaborative task management application with real-time updates, team workspaces, and project tracking.",
        category: "Full-Stack",
        techStack: ["React", "NestJS", "TypeScript", "PostgreSQL", "Prisma"],
        githubUrl: "https://github.com/BeimnetTesfaye/task-manager",
        liveUrl: "https://task-manager-demo.vercel.app",
    },
    {
        id: "3",
        title: "Portfolio Website",
        description:
            "Modern, responsive portfolio website with 3D elements, dark mode, and smooth animations.",
        category: "Frontend",
        techStack: [
            "Next.js",
            "React",
            "Tailwind CSS",
            "Framer Motion",
            "Three.js",
        ],
        githubUrl: "https://github.com/BeimnetTesfaye/portfolio",
        liveUrl: "https://beimnettesfaye.com",
    },
    {
        id: "4",
        title: "Weather Dashboard",
        description:
            "Interactive weather dashboard with location search, forecasts, and data visualization.",
        category: "Frontend",
        techStack: ["React", "TypeScript", "Tailwind CSS", "OpenWeather API"],
        githubUrl: "https://github.com/BeimnetTesfaye/weather-dashboard",
        liveUrl: "https://weather-dashboard-demo.vercel.app",
    },
    {
        id: "5",
        title: "RESTful API Server",
        description:
            "Scalable REST API with authentication, role-based access control, and comprehensive documentation.",
        category: "Backend",
        techStack: ["NestJS", "TypeScript", "PostgreSQL", "TypeORM", "Swagger"],
        githubUrl: "https://github.com/BeimnetTesfaye/rest-api-server",
    },
    {
        id: "6",
        title: "AWS Infrastructure Setup",
        description:
            "Cloud infrastructure deployment using AWS services including VPC, EC2, RDS, S3, and CloudFormation.",
        category: "Cloud/AWS",
        techStack: [
            "AWS",
            "CloudFormation",
            "EC2",
            "RDS",
            "S3",
            "Lambda",
            "VPC",
        ],
        githubUrl: "https://github.com/BeimnetTesfaye/aws-infrastructure",
    },
    {
        id: "7",
        title: "Data Analysis Tool",
        description:
            "Python-based data analysis tool for processing and visualizing large datasets with interactive charts.",
        category: "Data Science",
        techStack: ["Python", "Pandas", "Matplotlib", "NumPy", "Jupyter"],
        githubUrl: "https://github.com/BeimnetTesfaye/data-analysis-tool",
    },
    {
        id: "8",
        title: "Student Management System",
        description:
            "Java application for managing student records, courses, and grades with a desktop GUI.",
        category: "Java",
        techStack: ["Java", "JavaFX", "MySQL", "JDBC"],
        githubUrl: "https://github.com/BeimnetTesfaye/student-management",
    },
    {
        id: "9",
        title: "Mobile Expense Tracker",
        description:
            "React Native mobile app for tracking personal expenses with charts and budget alerts.",
        category: "Full-Stack",
        techStack: ["React Native", "Expo", "Node.js", "MongoDB"],
        githubUrl: "https://github.com/BeimnetTesfaye/expense-tracker",
    },
    {
        id: "10",
        title: "Real-Time Chat Application",
        description:
            "WebSocket-based chat application with rooms, direct messaging, and typing indicators.",
        category: "Full-Stack",
        techStack: ["React", "Node.js", "Socket.io", "Express", "MongoDB"],
        githubUrl: "https://github.com/BeimnetTesfaye/chat-app",
    },
];

export const skills = {
    frontend: [
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
        { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        { name: "Expo", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/expo/expo-original-wordmark.svg" },
        { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
        { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
        { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
        { name: "Framer Motion", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg" },
    ],
    backend: [
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" },
        { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
        { name: "NestJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original-wordmark.svg" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
    ],
    databases: [
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" },
        { name: "Prisma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" },
    ],
    cloud: [
        { name: "AWS EC2", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
        { name: "AWS S3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
        { name: "AWS RDS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
        { name: "AWS Lambda", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
        { name: "AWS VPC", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
        { name: "CloudFormation", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
        { name: "CloudFront", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg" },
    ],
    tools: [
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg" },
        { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
        { name: "VSCode", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
        { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
        { name: "npm", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg" },
        { name: "yarn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/yarn/yarn-original.svg" },
    ],
    data: [
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
        { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original-wordmark.svg" },
        { name: "Matplotlib", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original-wordmark.svg" },
    ],
};

export interface FeaturedContribution {
    id: string;
    title: string;
    description: string;
    repository: string;
    repoUrl: string;
    prUrl?: string;
    type: "contribution" | "review";
    techStack: string[];
    highlights: string[];
}

export const featuredContributions: FeaturedContribution[] = [
    {
        id: "1",
        title: "Users Management Feature",
        description:
            "Contributed to Belinda's Closet project by renaming Edit User Role page to Users Management and implementing password edit functionality for user administration.",
        repository: "SeattleColleges/belindas-closet-nextjs",
        repoUrl: "https://github.com/SeattleColleges/belindas-closet-nextjs",
        prUrl: "https://github.com/pulls?q=is%3Apr+author%3ABeimnetTesfaye+repo%3ASeattleColleges/belindas-closet-nextjs",
        type: "contribution",
        techStack: ["Next.js", "React", "TypeScript"],
        highlights: [
            "Improved UI/UX with better page naming",
            "Added secure password management",
            "Enhanced user administration features",
        ],
    },
    {
        id: "2",
        title: "Forgot Password Feature",
        description:
            "Implemented complete forgot password functionality for Belinda's Closet, enabling users to securely reset their passwords through email verification.",
        repository: "SeattleColleges/belindas-closet-nextjs",
        repoUrl: "https://github.com/SeattleColleges/belindas-closet-nextjs",
        prUrl: "https://github.com/pulls?q=is%3Apr+author%3ABeimnetTesfaye+repo%3ASeattleColleges/belindas-closet-nextjs",
        type: "contribution",
        techStack: ["Next.js", "React", "TypeScript", "Authentication"],
        highlights: [
            "Email-based password reset flow",
            "Secure token generation and validation",
            "Improved user authentication experience",
        ],
    },
    {
        id: "3",
        title: "NSC Events PR #92 Review",
        description:
            "Conducted comprehensive code review and local testing for PR #92 in NSC Events fullstack project, ensuring code quality and functionality.",
        repository: "SeattleColleges/nsc-events-fullstack",
        repoUrl: "https://github.com/SeattleColleges/nsc-events-fullstack",
        prUrl: "https://github.com/SeattleColleges/nsc-events-fullstack/pull/92",
        type: "review",
        techStack: ["React", "Node.js", "TypeScript", "PostgreSQL"],
        highlights: [
            "Thorough code review and feedback",
            "Local testing and validation",
            "Collaborative development",
        ],
    },
    {
        id: "4",
        title: "NSC Events Code Reviews",
        description:
            "Actively participated in peer code reviews for NSC Events project, reviewing multiple PRs from classmates including Keiffer, Luwam, and Biruk.",
        repository: "SeattleColleges/nsc-events-fullstack",
        repoUrl: "https://github.com/SeattleColleges/nsc-events-fullstack",
        prUrl: "https://github.com/pulls?q=is%3Apr+reviewed-by%3ABeimnetTesfaye+repo%3ASeattleColleges/nsc-events-fullstack",
        type: "review",
        techStack: ["React", "Node.js", "TypeScript", "PostgreSQL"],
        highlights: [
            "Collaborative team environment",
            "Constructive feedback and suggestions",
            "Quality assurance practices",
        ],
    },
    {
        id: "5",
        title: "TensorZero Open Source Contribution",
        description:
            "Contributed to TensorZero open-source project by creating TestTensorzeroTags test using Go client and implementing tensorzero::tags and tensorzero::episode_id fields.",
        repository: "tensorzero/tensorzero",
        repoUrl: "https://github.com/tensorzero/tensorzero",
        prUrl: "https://github.com/pulls?q=is%3Apr+author%3ABeimnetTesfaye+repo%3Atensorzero/tensorzero",
        type: "contribution",
        techStack: ["Go", "Testing", "Open Source"],
        highlights: [
            "First open-source contribution",
            "Implemented comprehensive test coverage",
            "Addressed GitHub issue #2429",
        ],
    },
];
