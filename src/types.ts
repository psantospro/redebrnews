export type EditoriaSlug =
  | 'politica'
  | 'brasil'
  | 'economia'
  | 'mundo'
  | 'saude'
  | 'educacao'
  | 'seguranca'
  | 'esportes'
  | 'cultura'
  | 'justica';

export type EstadoSlug =
  | 'maranhao'
  | 'sergipe'
  | 'piaui'
  | 'amazonas'
  | 'mato-grosso'
  | 'bahia'
  | 'arapuan'
  | 'rio-grande-norte'
  | 'ceara'
  | 'alagoas';

export type ContentKind = 'video' | 'blog' | 'podcast';

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  editoria: EditoriaSlug;
  estado?: EstadoSlug;
  kind: ContentKind;
  author: string;
  publishedAt: string; // ISO date
  updatedAt?: string; // ISO date
  imageUrl?: string;
  duration?: string; // "04:35"
  views?: number;
  featured?: boolean;
  tags?: string[];
}

export interface Columnist {
  slug: string;
  name: string;
  topic: string;
  bio: string;
  avatarUrl?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface SocialLink {
  platform: 'facebook' | 'x' | 'instagram' | 'tiktok' | 'youtube';
  href: string;
}
