import { CONTATO } from '../data/site';

const PAGES: Record<string, { title: string; body: string[] }> = {
  'quem-somos': {
    title: 'Quem Somos',
    body: [
      'A RedeBRNews é um portal de notícias em vídeo com foco em política, cobertura regional do Norte, Nordeste e Centro-Oeste e nas principais pautas do Congresso Nacional.',
      'Nossa missão é levar informação que transforma: jornalismo direto, em vídeo, com presença nos estados e atenção especial às pautas que afetam o dia a dia da população.',
    ],
  },
  expediente: {
    title: 'Expediente',
    body: [
      'Redação: RedeADM — equipe de redação da RedeBRNews.',
      `Escritório: ${CONTATO.endereco}.`,
      `Contato: ${CONTATO.telefone} · ${CONTATO.email}.`,
    ],
  },
  'politica-de-privacidade': {
    title: 'Política de Privacidade',
    body: [
      'Esta política descreve como a RedeBRNews coleta, usa e protege as informações dos visitantes do portal.',
      'Utilizamos cookies e tecnologias semelhantes para exibição de publicidade (Google AdSense e parceiros), mensuração de audiência e melhoria da experiência de navegação.',
      'Ao navegar no portal, você concorda com o uso dessas tecnologias. Para dúvidas, fale conosco pelo e-mail ' + CONTATO.email + '.',
    ],
  },
  anuncie: {
    title: 'Anuncie',
    body: [
      'Alcance um público engajado com política e notícias regionais. A RedeBRNews oferece formatos de mídia display (970×250, 970×90, 300×250) e ações especiais em vídeo.',
      `Para receber nosso media kit, escreva para ${CONTATO.email} ou ligue para ${CONTATO.telefone}.`,
    ],
  },
  'fale-conosco': {
    title: 'Fale Conosco',
    body: [
      `E-mail: ${CONTATO.email}`,
      `Telefone: ${CONTATO.telefone}`,
      `Endereço: ${CONTATO.endereco}`,
    ],
  },
};

export function InstitutionalPage({ page }: { page: keyof typeof PAGES }) {
  const content = PAGES[page];

  return (
    <div className="container">
      <div className="breadcrumb">
        <a href="/">Home</a> / {content.title}
      </div>
      <h1 className="page-title">{content.title}</h1>
      <div className="page-prose">
        {content.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </div>
  );
}

export function ContatosPage() {
  return <InstitutionalPage page="fale-conosco" />;
}
