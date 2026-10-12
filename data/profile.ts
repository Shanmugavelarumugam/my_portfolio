import type { AboutContent, Profile } from "@/types/portfolio";

export const profile: Profile = {
  name: "Shanmugavel A",
  firstName: "Shanmugavel",
  title: "Flutter Developer",
  greeting: "Hello, I'm",
  description:
    "I build mobile applications that solve real-world problems, turning ideas into software solutions.",
  location: "India",
  availability: "Available for opportunities",
  email: "hello@example.com",
  resumeHref: "/resume/resume.pdf",
  projectsHref: "#projects",
  contactHref: "#contact",
};

export const aboutContent: AboutContent = {
  label: "About Me",
  title: "A little about me",
  paragraphs: [
    "I'm a Flutter Developer who enjoys building practical mobile applications and solving real-world problems through software.",
    "My work includes hospital management systems, pharmacy applications, and desktop billing software. I focus on writing maintainable code and creating reliable applications.",
  ],
  degreeSummary: "B.E., Electronics & Communication Engineering · 2024",
  educationLabel: "Education",
  educationTitle: "My Education",
  education: {
    year: "2024",
    degree: "Bachelor of Engineering",
    field: "Electronics and Communication Engineering",
    school: "Rajalakshmi Engineering College",
    location: "Chennai, Tamil Nadu",
  },
};
