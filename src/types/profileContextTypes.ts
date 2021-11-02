export interface User {
  name: string;
  office: string;
  avatar: string;
  description: string;
  contacts: {
    email: string;
    linkedin: string;
    github: string;
  };
}

export interface Project {
  id: number;
  title: string;
  status: string;
  image_url: string;
  repository_url: string;
  description: string;
  preview_url?: string;
  technologies?: {
    name: string;
    link?: string;
  }[];
  screenshots?: {
    image_url: string;
  }[];
}
export interface Layout {
  id: number;
  name: string;
  tool: string;
  image_url: string;
  layout_url: string;
}
