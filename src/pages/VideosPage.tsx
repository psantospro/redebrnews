import { useParams } from 'react-router-dom';
import { AdSlot } from '../components/AdSlot';
import { SectionHeader } from '../components/SectionHeader';
import { SidebarList } from '../components/SidebarList';
import { MediaCard } from '../components/cards';
import { byEstado, byKind, mostViewed } from '../data/articles';
import { ESTADOS } from '../data/site';
import type { EstadoSlug } from '../types';
import { NotFoundPage } from './NotFoundPage';

const ESTADO_SLUGS = Object.keys(ESTADOS) as EstadoSlug[];

export function VideosPage() {
  const { estado } = useParams<{ estado?: string }>();

  if (estado && !ESTADO_SLUGS.includes(estado as EstadoSlug)) return <NotFoundPage />;

  const videos = estado ? byEstado(estado as EstadoSlug) : byKind('video');
  const titulo = estado ? `Vídeos · ${ESTADOS[estado as EstadoSlug]}` : 'Vídeos';

  return (
    <div className="container">
      <div className="breadcrumb">
        <a href="/">Home</a> / <a href="/videos">Vídeos</a>
        {estado && <> / {ESTADOS[estado as EstadoSlug]}</>}
      </div>
      <h1 className="page-title">{titulo}</h1>

      <div className="filter-chips">
        <a className={`filter-chip${!estado ? ' filter-chip--active' : ''}`} href="/videos">
          Todos
        </a>
        {ESTADO_SLUGS.map((uf) => (
          <a
            key={uf}
            className={`filter-chip${estado === uf ? ' filter-chip--active' : ''}`}
            href={`/videos/${uf}`}
            style={{ textDecoration: 'none' }}
          >
            {ESTADOS[uf]}
          </a>
        ))}
      </div>

      <div className="page-grid">
        <section>
          {videos.length > 0 ? (
            <div className="media-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
              {videos.map((v) => (
                <MediaCard key={v.slug} article={v} />
              ))}
            </div>
          ) : (
            <div className="empty-state">Nenhum vídeo publicado nesta seção ainda.</div>
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
