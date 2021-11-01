export interface User {
  name: string;
  office: string;
  avatar: string;
  description: string;
}

export interface Deploy {
  id: number;
  title: string;
  image_url: string;
  repository_url: string;
  preview_url: string;
  technologies?: {
    name: string;
    link?: string;
  }[];
  screenshots?: {
    image_url: string;
  }[];
}
export interface Repository {
  id: number;
  title: string;
  image_url: string;
  repository_url: string;
  description: string;
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
  image_url: string;
}
