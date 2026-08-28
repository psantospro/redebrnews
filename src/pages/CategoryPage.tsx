import { useParams } from 'react-router-dom';
import { AdSlot } from '../components/AdSlot';
import { SectionHeader } from '../components/SectionHeader';
import { SidebarList } from '../components/SidebarList';
import { ArticleCard } from '../components/cards';
import { byEditoria, mostViewed } from '../data/articles';
import { EDITORIAS } from '../data/site';
import type { EditoriaSlug } from '../types';
import { NotFoundPage } from './NotFoundPage';

export function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();

  if (!slug || !(slug in EDITORIAS)) return <NotFoundPage />;

  const editoria = slug as EditoriaSlug;
  const artigos = byEditoria(editoria);

  return (
    <div className="container">
      <div className="breadcrumb">
        <a href="/">Home</a> / Editorias / {EDITORIAS[editoria]}
      </div>
      <h1 className="page-title">{EDITORIAS[editoria]}</h1>

      <div className="page-grid">
        <section>
          {artigos.length > 0 ? (
            <div className="article-list">
              {artigos.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              Ainda não há matérias publicadas nesta editoria.
            </div>
          )}
        </section>
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
