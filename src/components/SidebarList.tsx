import { Link } from 'react-router-dom';
import { formatDate } from '../data/site';
import type { Article } from '../types';
import { Thumb } from './cards';

interface SidebarListProps {
  articles: Article[];
  /** Quando true, o primeiro item ganha destaque com thumb maior. */
  featured?: boolean;
}

/** Lista lateral compacta (Recentes / Mais Vistos / Podcast). */
export function SidebarList({ articles, featured = false }: SidebarListProps) {
  return (
    <div className="sidebar-list">
      {articles.map((a, i) => {
        const isFeatured = featured && i === 0;
        return (
          <div key={a.slug} className={`sidebar-item${isFeatured ? ' sidebar-item--featured' : ''}`}>
            <Link to={`/${a.slug}`}>
              <Thumb article={a} className="sidebar-item__media" dark />
            </Link>
            <div>
              <div className="sidebar-item__title">
                <Link to={`/${a.slug}`}>{a.title}</Link>
              </div>
              <div className="sidebar-item__date">{formatDate(a.publishedAt)}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
