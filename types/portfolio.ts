export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "resume" | "mail";
}

export interface Profile {
  name: string;
  firstName: string;
  title: string;
  greeting: string;
  description: string;
  location: string;
  availability: string;
  email: string;
  resumeHref: string;
  projectsHref: string;
  contactHref: string;
}

export interface AboutEducation {
  year: string;
  degree: string;
  field: string;
  school: string;
  location: string;
}

export interface AboutContent {
  label: string;
  title: string;
  paragraphs: string[];
  degreeSummary: string;
  educationLabel: string;
  educationTitle: string;
  education: AboutEducation;
}
