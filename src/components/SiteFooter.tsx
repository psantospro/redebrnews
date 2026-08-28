import { Link } from 'react-router-dom';
import { CONTATO, SOCIAL_LINKS } from '../data/site';

const FOOTER_LINKS = [
  { label: 'Quem Somos', href: '/quem-somos' },
  { label: 'Expediente', href: '/expediente' },
  { label: 'Política de Privacidade', href: '/politica-de-privacidade' },
  { label: 'Anuncie', href: '/anuncie' },
  { label: 'Fale Conosco', href: '/fale-conosco' },
];

const SOCIAL_ICON: Record<string, string> = {
  facebook: 'f',
  x: '𝕏',
  instagram: '⚬',
  tiktok: '♪',
  youtube: '▶',
};

interface SiteFooterProps {
  copyrightYear: number;
}

export function SiteFooter({ copyrightYear }: SiteFooterProps) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div>
            <Link to="/" className="site-footer__logo">
              <img src="/logo-white.png" alt="RBN — RedeBRNews" />
            </Link>
            <p className="site-footer__about">
              Portal de notícias em vídeo com cobertura política e regional. Informação que transforma.
            </p>
            <div className="site-footer__social">
              {SOCIAL_LINKS.map((s) => (
                <a key={s.platform} href={s.href} target="_blank" rel="noreferrer" aria-label={s.platform}>
                  {SOCIAL_ICON[s.platform]}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="site-footer__heading">Institucional</div>
            <ul className="site-footer__links">
              {FOOTER_LINKS.map((l) => (
                <li key={l.href}>
                  <Link to={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="site-footer__heading">Fale conosco</div>
            <div className="site-footer__contact">
              {CONTATO.endereco}
              <br />
              {CONTATO.telefone}
              <br />
              <a href={`mailto:${CONTATO.email}`} style={{ color: 'inherit' }}>
                {CONTATO.email}
              </a>
            </div>
          </div>
        </div>

        <div className="site-footer__bottom">
          © {copyrightYear}. RedeBRNews. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
