import { Link, useParams } from 'react-router-dom';
import { SectionHeader } from '../components/SectionHeader';
import { ColumnistCard } from '../components/ColumnistCard';
import { ArticleCard } from '../components/cards';
import { byAuthor } from '../data/articles';
import { COLUNISTAS } from '../data/site';
import { NotFoundPage } from './NotFoundPage';

export function ColunasPage() {
  return (
    <div className="container">
      <div className="breadcrumb">
        <Link to="/">Home</Link> / Colunas
      </div>
      <h1 className="page-title">Colunas</h1>
      <section className="page-section" style={{ maxWidth: 640 }}>
        <SectionHeader label="Colunistas" />
        <div className="sidebar-list">
          {COLUNISTAS.map((c) => (
            <ColumnistCard key={c.slug} columnist={c} />
          ))}
        </div>
      </section>
    </div>
  );
}

export function ColunistaPage() {
  const { slug } = useParams<{ slug: string }>();
  const colunista = COLUNISTAS.find((c) => c.slug === slug);

  if (!colunista) return <NotFoundPage />;

  const artigos = byAuthor(colunista.name);

  return (
    <div className="container">
      <div className="breadcrumb">
        <Link to="/">Home</Link> / <Link to="/colunas">Colunas</Link> / {colunista.name}
      </div>
      <h1 className="page-title">{colunista.name}</h1>
      <section className="page-section" style={{ maxWidth: 640 }}>
        <ColumnistCard columnist={colunista} />
      </section>
      <section className="page-section">
        <SectionHeader label={`Artigos de ${colunista.name}`} />
        {artigos.length > 0 ? (
          <div className="article-list">
            {artigos.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        ) : (
          <div className="empty-state">Nenhuma coluna publicada ainda.</div>
        )}
      </section>
    </div>
  );
}
