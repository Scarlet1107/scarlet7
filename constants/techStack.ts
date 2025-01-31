export interface TechStackList {
  name: string;
  icon: string;
  level: number;
}

export const techStackList: TechStackList[] = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    level: 90,
  },
  {
    name: "Next.js",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original-wordmark.svg",
    level: 95,
  },
  {
    name: "JavaScript",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    level: 80,
  },
  {
    name: "TypeScript",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    level: 85,
  },
  {
    name: "Tailwind CSS",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg",
    level: 80,
  },
  {
    name: "C",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
    level: 60,
  },
  {
    name: "Java",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
    level: 60,
  },
  {
    name: "Python",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
    level: 75,
  },
  {
    name: "Supabase",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
    level: 80,
  },
  {
    name: "AWS",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    level: 65,
  },
  {
    name: "Ruby on Rails",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/rails/rails-original-wordmark.svg",
    level: 40,
  },
  {
    name: "Laravel",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-original.svg",
    level: 30,
  },
  {
    name: "C++",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
    level: 60,
  },
  {
    name: "tRPC",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/trpc/trpc-original.svg",
    level: 40,
  },
  {
    name: "framermotion",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg",
    level: 50,
  },
  {
    name: "three.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg",
    level: 40,
  },
];
export const categories = {
  frontend: [
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "three.js",
    "framermotion",
  ],
  backend: ["Ruby on Rails", "Laravel", "Python", "tRPC"],
  languages: ["C", "C++", "Java"], // 汎用言語
  cloud: ["AWS", "Supabase"],
};
