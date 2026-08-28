import { Link, useParams } from 'react-router-dom';
import { AdSlot } from '../components/AdSlot';
import { SectionHeader } from '../components/SectionHeader';
import { SidebarList } from '../components/SidebarList';
import { ArticleMeta } from '../components/cards';
import { byTag, getArticle, mostRecent, mostViewed } from '../data/articles';
import { EDITORIAS, ESTADOS, formatDate } from '../data/site';
import { NotFoundPage } from './NotFoundPage';

export function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticle(slug) : undefined;

  if (!article) return <NotFoundPage />;

  const relacionados = mostRecent(4).filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <div className="container">
      <div className="page-grid">
        <article>
          <div className="breadcrumb">
            <Link to="/">Home</Link> /{' '}
            <Link to={`/editoria/${article.editoria}`}>{EDITORIAS[article.editoria]}</Link>
            {article.estado && (
              <>
                {' '}/ <Link to={`/videos/${article.estado}`}>{ESTADOS[article.estado]}</Link>
              </>
            )}
          </div>

          <span className="featured-card__tag">{EDITORIAS[article.editoria]}</span>
          <h1 className="article-page__title">{article.title}</h1>
          <ArticleMeta article={article} />

          {article.kind !== 'blog' && (
            <div className="article-page__video">
              ▶&nbsp;&nbsp;Player de vídeo{article.duration ? ` · ${article.duration}` : ''}
            </div>
          )}

          <div className="article-page__body">
            <p>
              <strong>{article.excerpt}</strong>
            </p>
            <p>
              Este conteúdo foi migrado do portal anterior. O texto completo da matéria será
              publicado nesta página assim que a migração editorial for concluída.
            </p>
          </div>

          {article.tags && article.tags.length > 0 && (
            <div className="filter-chips" style={{ marginTop: 'var(--space-5)' }}>
              {article.tags.map((t) => (
                <Link key={t} to={`/tag/${t}`} className="filter-chip" style={{ textDecoration: 'none' }}>
                  #{t}
                </Link>
              ))}
            </div>
          )}

          <section className="page-section" style={{ marginTop: 'var(--space-6)' }}>
            <SectionHeader label="Relacionados" />
            <div className="sidebar-list">
              {relacionados.map((a) => (
                <div key={a.slug} className="ranked-card__title" style={{ marginBottom: 12 }}>
                  <Link to={`/${a.slug}`}>{a.title}</Link>
                  <div className="ranked-card__date">{formatDate(a.publishedAt)}</div>
                </div>
              ))}
            </div>
          </section>
        </article>

        <aside className="sidebar">
          <AdSlot size="1x1" imageUrl="ad-1x1.jpg" />
          <section>
            <SectionHeader label="Mais vistos" />
            <SidebarList articles={mostViewed(5)} />
          </section>
        </aside>
      </div>
    </div>
  );
}

export function TagPage() {
  const { tag } = useParams<{ tag: string }>();
  const artigos = tag ? byTag(tag) : [];

  return (
    <div className="container">
      <div className="breadcrumb">
        <Link to="/">Home</Link> / Tag / #{tag}
      </div>
      <h1 className="page-title">#{tag}</h1>
      {artigos.length > 0 ? (
        <div className="article-list" style={{ maxWidth: 820 }}>
          {artigos.map((a) => (
            <div key={a.slug} className="ranked-card__title" style={{ fontSize: 16 }}>
              <Link to={`/${a.slug}`}>{a.title}</Link>
              <div className="ranked-card__date">{formatDate(a.publishedAt)}</div>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          Parece que não conseguimos encontrar o que você está procurando.
        </div>
      )}
    </div>
  );
}

export function AuthorPage() {
  const { slug } = useParams<{ slug: string }>();
  const nome = slug === 'redeadm' ? 'RedeADM' : slug ?? '';
  const artigos = mostRecent(20).filter((a) => a.author.toLowerCase() === nome.toLowerCase());

  return (
    <div className="container">
      <div className="breadcrumb">
        <Link to="/">Home</Link> / Autor / {nome}
      </div>
      <h1 className="page-title">Arquivo do autor: {nome}</h1>
      <div className="article-list" style={{ maxWidth: 820 }}>
        {artigos.map((a) => (
          <div key={a.slug} className="ranked-card__title" style={{ fontSize: 16 }}>
            <Link to={`/${a.slug}`}>{a.title}</Link>
            <div className="ranked-card__date">{formatDate(a.publishedAt)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SearchPage() {
  const q = new URLSearchParams(window.location.search).get('q')?.toLowerCase() ?? '';
  const resultados = q
    ? mostRecent(50).filter(
        (a) => a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q),
      )
    : [];

  return (
    <div className="container">
      <h1 className="page-title">Busca</h1>
      <p className="page-prose">
        {q ? `Resultados para “${q}”: ${resultados.length}` : 'Digite um termo na busca do topo.'}
      </p>
      <div className="article-list" style={{ maxWidth: 820, marginTop: 'var(--space-5)' }}>
        {resultados.map((a) => (
          <div key={a.slug} className="ranked-card__title" style={{ fontSize: 16 }}>
            <Link to={`/${a.slug}`}>{a.title}</Link>
            <div className="ranked-card__date">{formatDate(a.publishedAt)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
