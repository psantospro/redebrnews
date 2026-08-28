import type { Article } from '../types';

/**
 * Base inicial de conteúdo.
 * Os 10 primeiros artigos são os extraídos do site atual (redebrnews.tv.br/ini),
 * com editorias atribuídas conforme a nova estrutura do portal.
 */
export const ARTICLES: Article[] = [
  {
    slug: 'senado-avanca-nas-pecs-da-seguranca-e-6x1',
    title: 'Senado avança nas PECs da segurança e 6×1',
    excerpt:
      'O presidente do Senado, Davi Alcolumbre, despachou na última sexta-feira (21) para a Comissão de Constituição e Justiça (CCJ) duas propostas de emenda à Constituição: a PEC da Segurança Pública e a que prevê o fim da escala 6×1.',
    editoria: 'politica',
    kind: 'video',
    author: 'RedeADM',
    publishedAt: '2026-08-23',
    updatedAt: '2026-08-24',
    imageUrl: 'imagem do senado.webp',
    duration: '04:12',
    views: 18400,
    featured: true,
    tags: ['senado', 'pec', 'seguranca-publica', 'escala-6x1'],
  },
  {
    slug: 'eleicoes-deste-ano-define-novo-congresso-para-2027',
    title: 'Eleições deste ano definem novo Congresso para 2027',
    excerpt:
      'No dia 4 de outubro deste ano, além do presidente da República, dos deputados distritais e estaduais e dos 27 governadores, serão eleitos os deputados federais e senadores que compõem o Congresso Nacional.',
    editoria: 'politica',
    kind: 'video',
    author: 'RedeADM',
    publishedAt: '2026-08-22',
    updatedAt: '2026-08-24',
    duration: '03:48',
    views: 15200,
    featured: true,
    tags: ['eleicoes-2026', 'congresso'],
  },
  {
    slug: 'operacao-rastro-investiga-fraude-de-r-50-milhoes-envolvendo-contas-no-banco-do-brasil',
    title: 'Operação Rastro investiga fraude de R$ 50 milhões envolvendo contas no Banco do Brasil',
    excerpt:
      'A Polícia Civil deflagrou a Operação Rastro, que investiga uma fraude estimada em R$ 50 milhões envolvendo contas de pessoas jurídicas correntistas do Banco do Brasil, com mandados de busca em SP, MG, RR e SC.',
    editoria: 'seguranca',
    estado: 'rio-grande-norte',
    kind: 'video',
    author: 'RedeADM',
    publishedAt: '2026-08-20',
    updatedAt: '2026-08-20',
    duration: '05:03',
    views: 12800,
    featured: true,
    tags: ['operacao-rastro', 'policia-civil', 'fraude'],
  },
  {
    slug: 'tse-registra-mais-de-11-mil-denuncias-de-propaganda-irregular-no-inicio-da-campanha',
    title: 'TSE registra mais de 1,1 mil denúncias de propaganda irregular no início da campanha',
    excerpt:
      'A Justiça Eleitoral já recebeu 1.103 denúncias de irregularidades em propaganda eleitoral, com São Paulo liderando os registros, seguido de Pernambuco, Paraná, Rio Grande do Sul e Minas Gerais.',
    editoria: 'justica',
    kind: 'video',
    author: 'RedeADM',
    publishedAt: '2026-08-20',
    updatedAt: '2026-08-20',
    duration: '03:36',
    views: 9700,
    tags: ['tse', 'eleicoes-2026', 'propaganda-eleitoral'],
  },
  {
    slug: 'eleicoes-2026-senado-pode-ter-forte-renovacao',
    title: 'Eleições 2026: Senado pode ter forte renovação',
    excerpt:
      'O Senado Federal poderá passar por uma significativa renovação nas eleições de 2026. Das 54 vagas em disputa, 22 cadeiras terão novos ocupantes, segundo levantamento sobre os atuais senadores.',
    editoria: 'politica',
    kind: 'video',
    author: 'RedeADM',
    publishedAt: '2026-08-19',
    updatedAt: '2026-08-20',
    duration: '04:35',
    views: 11300,
    tags: ['eleicoes-2026', 'senado'],
  },
  {
    slug: 'consorcios-publicos-poderao-facilitar-compra-de-insumos-para-a-merenda-escolar',
    title: 'Consórcios públicos poderão facilitar compra de insumos para a merenda escolar',
    excerpt:
      'A Comissão de Constituição e Justiça e de Cidadania (CCJ) da Câmara dos Deputados aprovou proposta que permite a estados, Distrito Federal e municípios formar consórcios para compras do PNAE.',
    editoria: 'educacao',
    estado: 'alagoas',
    kind: 'video',
    author: 'RedeADM',
    publishedAt: '2026-08-18',
    updatedAt: '2026-08-19',
    duration: '02:58',
    views: 6400,
    tags: ['pnae', 'merenda-escolar', 'camara'],
  },
  {
    slug: 'eleicao-para-camara-dos-deputados-tera-menos-candidatos-neste-ano',
    title: 'Número de candidatos à Câmara dos Deputados será menor nestas eleições',
    excerpt:
      'As eleições de 2026 para a Câmara dos Deputados terão menos candidatos que as de 2022. Também há menos deputados candidatos à reeleição: 437 dos 513 buscam permanecer no cargo.',
    editoria: 'politica',
    kind: 'blog',
    author: 'RedeADM',
    publishedAt: '2026-08-17',
    updatedAt: '2026-08-19',
    views: 7200,
    tags: ['eleicoes-2026', 'camara-dos-deputados'],
  },
  {
    slug: 'campanha-eleitoral-tem-inicio-neste-domingo-com-novas-regras-para-os-candidatos',
    title: 'Campanha eleitoral tem início neste domingo com novas regras para os candidatos',
    excerpt:
      'A propaganda eleitoral para as eleições deste ano começa oficialmente neste domingo (16). A partir dessa data, candidatas e candidatos poderão divulgar suas propostas seguindo as novas regras.',
    editoria: 'politica',
    kind: 'video',
    author: 'RedeADM',
    publishedAt: '2026-08-14',
    updatedAt: '2026-08-19',
    duration: '03:20',
    views: 8900,
    tags: ['eleicoes-2026', 'propaganda-eleitoral'],
  },
  {
    slug: 'camara-instala-comissao-especial-para-discutir-reducao-da-maioridade-penal',
    title: 'Câmara instala comissão especial para discutir redução da maioridade penal',
    excerpt:
      'A Câmara dos Deputados definiu a instalação de uma comissão especial para discutir a redução da maioridade penal no Brasil. A medida atende à PEC 32/2015, que tramita na Casa.',
    editoria: 'justica',
    estado: 'rio-grande-norte',
    kind: 'blog',
    author: 'RedeADM',
    publishedAt: '2026-08-13',
    updatedAt: '2026-08-19',
    views: 10500,
    tags: ['maioridade-penal', 'camara', 'pec'],
  },
  {
    slug: 'prefeito-de-socorro-do-piaui-destaca-mobilizacao-em-brasilia-em-busca-de-recursos-para-os-municipios',
    title: 'Prefeito de Socorro do Piauí destaca mobilização em Brasília em busca de recursos para os municípios',
    excerpt:
      'Durante a mobilização de prefeitos em Brasília, o prefeito Aderson Filho, de Socorro do Piauí, falou sobre a participação dos municípios na busca por recursos federais.',
    editoria: 'brasil',
    estado: 'piaui',
    kind: 'video',
    author: 'RedeADM',
    publishedAt: '2026-08-12',
    updatedAt: '2026-08-13',
    duration: '02:44',
    views: 5100,
    tags: ['piaui', 'prefeitos', 'municipios'],
  },

  // Conteúdo de exemplo para as demais editorias da nova estrutura
  {
    slug: 'mec-anuncia-novos-programas-para-alfabetizacao-na-idade-certa',
    title: 'MEC anuncia novos programas para alfabetização na idade certa',
    excerpt: 'O Ministério da Educação lançou um pacote de programas voltados à alfabetização de crianças na idade certa, com metas para os próximos quatro anos.',
    editoria: 'educacao',
    kind: 'video',
    author: 'RedeADM',
    publishedAt: '2026-08-21',
    duration: '03:15',
    views: 4300,
    tags: ['mec', 'alfabetizacao'],
  },
  {
    slug: 'hospitais-federais-recebem-reforco-de-r-3-bilhoes',
    title: 'Hospitais federais recebem reforço de R$ 3 bilhões',
    excerpt: 'O investimento será usado para ampliar leitos, modernizar equipamentos e reduzir filas de cirurgias eletivas pelo SUS.',
    editoria: 'saude',
    kind: 'video',
    author: 'RedeADM',
    publishedAt: '2026-08-21',
    duration: '02:48',
    views: 6800,
    tags: ['sus', 'saude-publica'],
  },
  {
    slug: 'stf-forma-maioria-para-manter-regras-sobre-redes-sociais',
    title: 'STF forma maioria para manter regras sobre redes sociais',
    excerpt: 'O Supremo Tribunal Federal formou maioria para manter as regras de moderação e responsabilidade das plataformas digitais no país.',
    editoria: 'justica',
    kind: 'video',
    author: 'RedeADM',
    publishedAt: '2026-08-20',
    duration: '04:02',
    views: 9100,
    tags: ['stf', 'redes-sociais'],
  },
  {
    slug: 'governo-anuncia-pacote-de-r-50-bilhoes-em-investimentos',
    title: 'Governo anuncia pacote de R$ 50 bilhões em investimentos',
    excerpt: 'Os recursos serão aplicados em obras de mobilidade urbana, saneamento, habitação e transportes em todas as regiões do país.',
    editoria: 'economia',
    kind: 'video',
    author: 'RedeADM',
    publishedAt: '2026-08-19',
    duration: '05:20',
    views: 13400,
    tags: ['investimentos', 'infraestrutura'],
  },
  {
    slug: 'brasil-assina-acordo-comercial-com-bloco-asiatico',
    title: 'Brasil assina acordo comercial com bloco asiático',
    excerpt: 'O acordo prevê redução de tarifas para produtos do agronegócio e deve entrar em vigor no próximo ano.',
    editoria: 'mundo',
    kind: 'video',
    author: 'RedeADM',
    publishedAt: '2026-08-18',
    duration: '03:44',
    views: 5600,
    tags: ['comercio-exterior', 'agronegocio'],
  },
  {
    slug: 'selecao-brasileira-vence-e-se-classifica-para-a-proxima-fase',
    title: 'Seleção brasileira vence e se classifica para a próxima fase',
    excerpt: 'Com gols no segundo tempo, o Brasil venceu por 2 a 0 e garantiu vaga antecipada na próxima fase da competição.',
    editoria: 'esportes',
    kind: 'video',
    author: 'RedeADM',
    publishedAt: '2026-08-17',
    duration: '02:10',
    views: 16900,
    tags: ['selecao-brasileira', 'futebol'],
  },
  {
    slug: 'festival-de-inverno-movimenta-economia-criativa-no-nordeste',
    title: 'Festival de inverno movimenta economia criativa no Nordeste',
    excerpt: 'O evento reuniu mais de 200 atrações e injetou milhões na economia das cidades-sede, segundo os organizadores.',
    editoria: 'cultura',
    kind: 'video',
    author: 'RedeADM',
    publishedAt: '2026-08-16',
    duration: '03:05',
    views: 3800,
    tags: ['cultura', 'nordeste'],
  },
  {
    slug: 'lula-destaca-importancia-do-dialogo-com-o-congresso',
    title: 'Lula destaca importância do diálogo com o Congresso',
    excerpt: 'Em evento com parlamentares, o presidente defendeu a articulação política para destravar a agenda legislativa do segundo semestre.',
    editoria: 'politica',
    kind: 'podcast',
    author: 'RedeADM',
    publishedAt: '2026-08-22',
    duration: '28:40',
    views: 3100,
    tags: ['congresso', 'governo-federal'],
  },
  {
    slug: 'operacao-combate-organizacao-criminosa-em-seis-estados',
    title: 'Operação combate organização criminosa em seis estados',
    excerpt: 'Forças de segurança cumpriram dezenas de mandados em ação coordenada contra facção com atuação interestadual.',
    editoria: 'seguranca',
    kind: 'podcast',
    author: 'RedeADM',
    publishedAt: '2026-08-20',
    duration: '22:15',
    views: 2700,
    tags: ['seguranca-publica'],
  },
  {
    slug: 'nova-tecnologia-amplia-cirurgias-pelo-sus',
    title: 'Nova tecnologia amplia cirurgias pelo SUS',
    excerpt: 'Hospitais de referência passam a usar telemedicina e robótica para ampliar a capacidade de cirurgias na rede pública.',
    editoria: 'saude',
    kind: 'podcast',
    author: 'RedeADM',
    publishedAt: '2026-08-18',
    duration: '19:52',
    views: 1900,
    tags: ['sus', 'tecnologia'],
  },
];

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function byEditoria(editoria: Article['editoria']): Article[] {
  return ARTICLES.filter((a) => a.editoria === editoria).sort(
    (a, b) => b.publishedAt.localeCompare(a.publishedAt),
  );
}

export function byEstado(estado: NonNullable<Article['estado']>): Article[] {
  return ARTICLES.filter((a) => a.estado === estado).sort(
    (a, b) => b.publishedAt.localeCompare(a.publishedAt),
  );
}

export function byKind(kind: Article['kind']): Article[] {
  return ARTICLES.filter((a) => a.kind === kind).sort(
    (a, b) => b.publishedAt.localeCompare(a.publishedAt),
  );
}

export function byTag(tag: string): Article[] {
  return ARTICLES.filter((a) => a.tags?.includes(tag));
}

export function byAuthor(author: string): Article[] {
  return ARTICLES.filter((a) => a.author.toLowerCase() === author.toLowerCase());
}

export function mostRecent(limit = 8): Article[] {
  return [...ARTICLES].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt)).slice(0, limit);
}

export function mostViewed(limit = 5): Article[] {
  return [...ARTICLES].sort((a, b) => (b.views ?? 0) - (a.views ?? 0)).slice(0, limit);
}
