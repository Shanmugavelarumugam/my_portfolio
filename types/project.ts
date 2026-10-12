export type ProjectVisual = "mobile" | "pos" | "desktop";

export interface Project {
  slug: string;
  index: string;
  category: string;
  title: string;
  summary: string;
  tech: string[];
  /** Future screenshot path — files are placeholders until real shots are added */
  image: string;
  visual: ProjectVisual;
  problem: string;
  solution: string;
  features: string[];
  architecture: string[];
  contribution: string[];
  role: string;
}
