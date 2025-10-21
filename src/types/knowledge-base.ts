export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: number;
  date: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  tags: string[];
  featured?: boolean;
  popular?: boolean;
}

export interface Category {
  name: string;
  count: number;
}

export interface ArticleFilter {
  category: string;
  searchQuery: string;
  tag?: string;
} 