export interface User {
  name: string;
  office: string;
  avatar: string;
  description: string;
  resume: string;
  contacts: {
    email: string;
    linkedin: string;
    github: string;
  };
}
export interface Contribution {
  id: number;
  name: string;
  logo: string;
  logo_large: string;
  description: string;
  status: string;
  play_store: string;
  apple_store: string;
  data_apple_store: {
    rating: string,
    number_rating: string,
    number_downloads: string | null 
  },
  data_play_store: {
    rating: string,
    number_rating: string,
    number_downloads: string | null 
  },
  technologies?: {
    name: string;
    link?: string;
  }[];
  screenshots?: {
    image_url: string;
  }[];
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

export interface RepositoryGithub {
  id: number;
  name: string;
  html_url: string;
  description: string;
  language: string;
}
