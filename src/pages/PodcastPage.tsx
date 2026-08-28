import { Link } from 'react-router-dom';
import { SectionHeader } from '../components/SectionHeader';
import { MediaCard } from '../components/cards';
import { byKind } from '../data/articles';

export function PodcastPage() {
  const episodios = byKind('podcast');

  return (
    <div className="container">
      <div className="breadcrumb">
        <Link to="/">Home</Link> / Podcast
      </div>
      <h1 className="page-title">Podcast</h1>

      {episodios.length > 0 ? (
        <section className="page-section">
          <SectionHeader label="Episódios" />
          <div className="media-grid">
            {episodios.map((p) => (
              <MediaCard key={p.slug} article={p} />
            ))}
          </div>
        </section>
      ) : (
        <div className="empty-state">Nenhum episódio publicado ainda.</div>
      )}
    </div>
  );
}
