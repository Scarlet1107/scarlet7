export interface BlogType {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;
  image: string;
  eyecatch: Eyecatch;
  category: Category;
}

export interface Eyecatch {
  url: string;
  height: number;
  width: number;
}

export interface Category {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
}
