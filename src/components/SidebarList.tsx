import { Link } from 'react-router-dom';
import { formatDate } from '../data/site';
import type { Article } from '../types';
import { Thumb } from './cards';

interface SidebarListProps {
  articles: Article[];
}

/** Lista lateral compacta (Recentes / Mais Vistos). */
export function SidebarList({ articles }: SidebarListProps) {
  return (
    <div className="sidebar-list">
      {articles.map((a) => (
        <div key={a.slug} className="sidebar-item">
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
      ))}
    </div>
  );
}
