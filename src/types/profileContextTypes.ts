export interface ImagePrismic {
  dimensions: { width: number; height: number }
  alt: string | null
  copyright: string | null
  url: string
}

export interface LinkPrismic {
  link_type: string
  url: string
  target: string
}

export interface User {
  name: string
  office: string
  avatar: ImagePrismic
  description: string
  resume: LinkPrismic
  timeline: {
    title: string
    description: string
  }[]
  contacts: {
    email: string
    linkedin: LinkPrismic
    github: LinkPrismic
  }[]
}

export interface Aplicativos {
  id: string
  uid: string
  first_publication_date: string
  last_publication_date: string
  data: {
    name: string | null
    logo_small: ImagePrismic
    logo_large: ImagePrismic
    description: string
    status: string
    play_store: LinkPrismic
    apple_store: LinkPrismic
    data_apple_store: {
      rating: string
      number_rating: string
      number_downloads: string | null
    }[]
    data_play_store: {
      rating: string
      number_rating: string
      number_downloads: string | null
    }[]
    technologies?: {
      name: string
      link?: LinkPrismic
    }[]
    screenshots?: {
      image_url: string
    }[]
  }
}
export interface Project {
  id: string
  uid: string
  first_publication_date: string
  last_publication_date: string
  data: {
    name: string
    status: string
    image_url: ImagePrismic
    repository_url: string
    description: string
    preview_url?: LinkPrismic
    technologies: {
      name: string
      link?: LinkPrismic
    }[]
    screenshots?: {
      image_url: ImagePrismic
    }[]
  }
}
export interface Layout {
  id: number
  name: string
  tool: string
  image_url: string
  layout_url: string
}

export interface RepositoryGithub {
  id: number
  name: string
  html_url: string
  description: string
  language: string
}
