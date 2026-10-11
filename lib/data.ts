import {
  Briefcase,
  Code2,
  Database,
  Facebook,
  Github,
  Headphones,
  Linkedin,
  Mail,
  MessageCircle,
  Palette,
  Pencil,
  Rocket,
  Search,
  Server,
  Shield,
  Smartphone,
  TestTube,
  Users,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

export const site = {
  name: "Md Shohel Rana",
  brand: "MD SHOHEL RANA DEV",
  title: "Full Stack Web Developer",
  description:
    "Full Stack Developer crafting fast, modern & scalable web applications with React, Next.js, Node.js & Supabase.",
  email: "mdshohelrana.coder@gmail.com",
  phone: "01340048790",
  phoneHref: "+8801340048790",
  location: "Dhaka, Bangladesh",
  photo: "https://i.postimg.cc/GtzJHpdb/file-0000000092907208b5c669ff2abef5b6-1.jpg",
  resume: "/resume.pdf",
  whatsapp:
    "https://wa.me/8801340048790?text=Hi%20Shohel!%20I'd%20like%20to%20discuss%20a%20project.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://mdshohelranadev.vercel.app",
};

export const socials: { label: string; href: string; icon: LucideIcon }[] = [
  { label: "GitHub", href: "https://github.com/mdshohelranadev", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/mdshohelranadev", icon: Linkedin },
  { label: "Facebook", href: "https://facebook.com/mdshohelranadev", icon: Facebook },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Contact", href: "#contact" },
];

export const roles = [
  "Full Stack Web Developer",
  "Next.js Developer",
  "React Specialist",
  "Supabase Expert",
];

export const stats: { icon: LucideIcon; value: number; suffix: string; label: string }[] = [
  { icon: Code2, value: 20, suffix: "+", label: "Projects Completed" },
  { icon: Briefcase, value: 3, suffix: "+", label: "Years Experience" },
  { icon: Users, value: 15, suffix: "+", label: "Happy Clients" },
  { icon: MessageCircle, value: 100, suffix: "%", label: "Response Rate" },
];

export type Skill = { name: string; level: number };

export const skillTabs: { id: string; label: string; icon: LucideIcon; skills: Skill[] }[] = [
  {
    id: "frontend",
    label: "Frontend",
    icon: Code2,
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "JavaScript", level: 92 },
      { name: "TypeScript", level: 85 },
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 88 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 82 },
      { name: "Redux / Zustand", level: 75 },
      { name: "React Hook Form", level: 85 },
      { name: "Shadcn UI", level: 88 },
      { name: "Material UI", level: 75 },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 80 },
      { name: "Next.js API Routes", level: 88 },
      { name: "Server Actions", level: 85 },
      { name: "REST API", level: 90 },
      { name: "GraphQL", level: 72 },
      { name: "tRPC", level: 70 },
      { name: "JWT Authentication", level: 82 },
      { name: "OAuth", level: 78 },
      { name: "WebSockets", level: 75 },
    ],
  },
  {
    id: "database",
    label: "Database",
    icon: Database,
    skills: [
      { name: "Supabase", level: 90 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "Prisma ORM", level: 78 },
      { name: "Redis", level: 70 },
      { name: "MySQL", level: 72 },
      { name: "Firebase", level: 75 },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    icon: Wrench,
    skills: [
      { name: "Git", level: 92 },
      { name: "GitHub", level: 92 },
      { name: "VS Code", level: 95 },
      { name: "Vercel", level: 90 },
      { name: "Netlify", level: 85 },
      { name: "Figma", level: 80 },
      { name: "Postman", level: 85 },
      { name: "npm / yarn", level: 90 },
    ],
  },
  {
    id: "styling",
    label: "Styling & UI",
    icon: Palette,
    skills: [
      { name: "Tailwind CSS", level: 95 },
      { name: "CSS Modules", level: 85 },
      { name: "SASS / SCSS", level: 80 },
      { name: "Styled Components", level: 75 },
      { name: "Shadcn UI", level: 88 },
      { name: "Radix UI", level: 78 },
      { name: "Framer Motion", level: 82 },
    ],
  },
  {
    id: "auth",
    label: "Auth & Security",
    icon: Shield,
    skills: [
      { name: "Supabase Auth", level: 88 },
      { name: "NextAuth.js", level: 85 },
      { name: "JWT", level: 82 },
      { name: "bcrypt", level: 78 },
      { name: "Clerk", level: 75 },
    ],
  },
];

export const services: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Full-stack web apps built with Next.js, React, and modern tools — fast, scalable, and SEO-friendly.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Pixel-perfect designs that look stunning on every device — mobile, tablet, and desktop.",
  },
  {
    icon: Palette,
    title: "UI/UX Implementation",
    description:
      "Converting Figma designs into clean, interactive, and animated user interfaces.",
  },
  {
    icon: Database,
    title: "Backend & APIs",
    description:
      "Robust REST APIs, authentication systems, and database architecture with Supabase/PostgreSQL.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Lightning-fast websites with 95+ Lighthouse scores, lazy loading, and optimized bundles.",
  },
  {
    icon: Shield,
    title: "Maintenance & Support",
    description:
      "Ongoing support, bug fixes, security updates, and feature enhancements for your projects.",
  },
];

export const projectFilters = ["All", "Web App", "Dashboard", "Landing Page", "CMS"] as const;
export type ProjectCategory = Exclude<(typeof projectFilters)[number], "All">;

export type Project = {
  title: string;
  image: string;
  description: string;
  tech: string[];
  category: ProjectCategory;
  demo: string | null;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=75",
    description:
      "Full-featured online store with cart, checkout, admin dashboard, and Stripe payments.",
    tech: ["Next.js", "Supabase", "Stripe", "Tailwind"],
    category: "Web App",
    demo: "https://veloura-khaki.vercel.app/",
    featured: true,
  },
  {
    title: "Task Management Dashboard",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=75",
    description:
      "Team collaboration tool with real-time updates, kanban boards, and role-based access.",
    tech: ["React", "Node.js", "PostgreSQL", "Socket.io"],
    category: "Dashboard",
    demo: null,
  },
  {
    title: "Restaurant Landing Page",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=75",
    description:
      "Modern restaurant website with online menu, table booking, and location map.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    category: "Landing Page",
    demo: null,
  },
  {
    title: "Portfolio CMS",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=75",
    description:
      "Content management system for creators with blog, projects, and analytics.",
    tech: ["Next.js", "Supabase", "TypeScript"],
    category: "CMS",
    demo: null,
    featured: true,
  },
  {
    title: "Fitness Tracker App",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=75",
    description:
      "Track workouts, nutrition, and progress with beautiful charts and goals.",
    tech: ["React", "Chart.js", "Firebase"],
    category: "Web App",
    demo: null,
  },
  {
    title: "SaaS Landing Page",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=75",
    description:
      "High-converting SaaS landing page with animations, pricing, and testimonials.",
    tech: ["Next.js", "Framer Motion", "Tailwind"],
    category: "Landing Page",
    demo: null,
  },
];

export const roadmap: {
  step: string;
  icon: LucideIcon;
  title: string;
  duration: string;
  description: string;
}[] = [
  {
    step: "01",
    icon: Search,
    title: "Discovery Call",
    duration: "Day 1",
    description:
      "We discuss your project goals, requirements, target audience, and expectations in detail.",
  },
  {
    step: "02",
    icon: Pencil,
    title: "Planning & Design",
    duration: "Day 2-4",
    description:
      "Wireframes, UI/UX design, and architecture planning — approved before a single line of code.",
  },
  {
    step: "03",
    icon: Code2,
    title: "Development",
    duration: "Day 5-12",
    description:
      "Clean, scalable code using Next.js, React, and Supabase. Daily updates and preview links.",
  },
  {
    step: "04",
    icon: TestTube,
    title: "Testing & QA",
    duration: "Day 13-14",
    description:
      "Cross-browser testing, mobile responsiveness, performance audit, and bug fixing.",
  },
  {
    step: "05",
    icon: Rocket,
    title: "Deployment",
    duration: "Day 15",
    description:
      "Deploy to Vercel, configure domain, SEO setup, and hand over credentials to you.",
  },
  {
    step: "06",
    icon: Headphones,
    title: "Support",
    duration: "30 Days",
    description: "Free 30-day support for bug fixes, minor tweaks, and technical guidance.",
  },
];

export const experiences: {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  current?: boolean;
}[] = [
  {
    role: "Senior Full Stack Developer",
    company: "Tech Solutions Ltd.",
    location: "Remote",
    period: "2023 — Present",
    description:
      "Leading development of SaaS products with Next.js and Supabase. Mentoring junior developers and improving code quality.",
    current: true,
  },
  {
    role: "Full Stack Developer",
    company: "Digital Agency",
    location: "Dhaka, BD",
    period: "2022 — 2023",
    description:
      "Built 20+ client websites and web apps. Collaborated with designers to deliver pixel-perfect UIs.",
  },
  {
    role: "Frontend Developer",
    company: "Startup Hub",
    location: "Dhaka, BD",
    period: "2021 — 2022",
    description:
      "Developed responsive React applications. Implemented component libraries and improved performance.",
  },
];

export const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const footerSocials = [...socials, { label: "Email", href: `mailto:${site.email}`, icon: Mail }];
