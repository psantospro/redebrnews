import { Link } from 'react-router-dom';
import { AdSlot } from '../components/AdSlot';
import { SectionHeader } from '../components/SectionHeader';
import { SidebarList } from '../components/SidebarList';
import { ArticleCard } from '../components/cards';
import { byKind, mostViewed } from '../data/articles';

export function BlogPage() {
  const posts = byKind('blog');

  return (
    <div className="container">
      <div className="breadcrumb">
        <Link to="/">Home</Link> / Blog
      </div>
      <h1 className="page-title">Blog</h1>

      <div className="page-grid">
        <section>
          {posts.length > 0 ? (
            <div className="article-list">
              {posts.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          ) : (
            <div className="empty-state">Nenhum post publicado ainda.</div>
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
