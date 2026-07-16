export interface Work {
  slug: string;
  title: string;
  description: string;
  year: string;
  tags: string[];
  github?: string;
  live?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string;
}
