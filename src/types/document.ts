export interface Document {
  id: string;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  updatedAt: string;
  status: 'draft' | 'published' | 'archived';
  tags: string[];
  size: number;
  type: 'pdf' | 'docx' | 'txt' | 'md';
}

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}
