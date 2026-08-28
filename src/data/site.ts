import type { Columnist, EditoriaSlug, EstadoSlug, NavItem, SocialLink } from '../types';

export const EDITORIAS: Record<EditoriaSlug, string> = {
  politica: 'Política',
  brasil: 'Brasil',
  economia: 'Economia',
  mundo: 'Mundo',
  saude: 'Saúde',
  educacao: 'Educação',
  seguranca: 'Segurança',
  esportes: 'Esportes',
  cultura: 'Cultura',
  justica: 'Justiça',
};

export const ESTADOS: Record<EstadoSlug, string> = {
  maranhao: 'Maranhão',
  sergipe: 'Sergipe',
  piaui: 'Piauí',
  amazonas: 'Amazonas',
  'mato-grosso': 'Mato Grosso',
  bahia: 'Bahia',
  arapuan: 'Arapuan–PB',
  'rio-grande-norte': 'Rio Grande do Norte',
  ceara: 'Ceará',
  alagoas: 'Alagoas',
};

export const MAIN_NAV: NavItem[] = [
  { label: 'Política', href: '/editoria/politica' },
  { label: 'Brasil', href: '/editoria/brasil' },
  { label: 'Economia', href: '/editoria/economia' },
  { label: 'Mundo', href: '/editoria/mundo' },
  { label: 'Saúde', href: '/editoria/saude' },
  { label: 'Educação', href: '/editoria/educacao' },
  { label: 'Segurança', href: '/editoria/seguranca' },
  { label: 'Esportes', href: '/editoria/esportes' },
  { label: 'Cultura', href: '/editoria/cultura' },
  { label: 'Justiça', href: '/editoria/justica' },
  { label: 'Colunas', href: '/colunas' },
  {
    label: 'Mais',
    href: '#',
    children: [
      { label: 'Vídeos', href: '/videos' },
      { label: 'Blog', href: '/blog' },
      { label: 'Podcast', href: '/podcast' },
      { label: 'Quem Somos', href: '/quem-somos' },
      { label: 'Expediente', href: '/expediente' },
      { label: 'Política de Privacidade', href: '/politica-de-privacidade' },
      { label: 'Anuncie', href: '/anuncie' },
      { label: 'Fale Conosco', href: '/fale-conosco' },
    ],
  },
];

export const VIDEOS_SUBNAV: NavItem[] = (
  [
    'maranhao',
    'sergipe',
    'piaui',
    'amazonas',
    'mato-grosso',
    'bahia',
    'arapuan',
    'rio-grande-norte',
    'ceara',
  ] as EstadoSlug[]
).map((slug) => ({ label: ESTADOS[slug], href: `/videos/${slug}` }));

export const COLUNISTAS: Columnist[] = [
  {
    slug: 'wellington-farias',
    name: 'Wellington Farias',
    topic: 'Política',
    bio: 'Análises sobre os movimentos da política nacional e os bastidores do poder.',
  },
  {
    slug: 'redeadm',
    name: 'RedeADM',
    topic: 'Redação',
    bio: 'Equipe de redação da RedeBRNews, com cobertura em vídeo das principais pautas do país.',
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'facebook', href: 'https://facebook.com/redebrnews' },
  { platform: 'x', href: 'https://x.com/redebrnews' },
  { platform: 'instagram', href: 'https://instagram.com/redebrnews' },
  { platform: 'tiktok', href: 'https://tiktok.com/@redebrnews' },
];

export const CONTATO = {
  endereco: 'SHN Quadra 2, Bloco F – Sala 610, Ed. Executive Office Tower, CEP 70.702-906, Brasília – DF',
  telefone: '+55 (61) 98194-6141',
  email: 'contato@redebrnews.com.br',
};

export function formatDate(iso: string): string {
  const meses = [
    'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
    'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro',
  ];
  const d = new Date(iso + 'T12:00:00');
  return `${d.getDate()} de ${meses[d.getMonth()]} de ${d.getFullYear()}`;
}
