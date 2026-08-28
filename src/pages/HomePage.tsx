import { useMemo, useState } from 'react';
import { AdSlot } from '../components/AdSlot';
import { SectionHeader } from '../components/SectionHeader';
import { ColumnistCard } from '../components/ColumnistCard';
import { SidebarList } from '../components/SidebarList';
import { ArticleCard, FeaturedArticleCard, MediaCard, RankedStoryCard } from '../components/cards';
import { ARTICLES, byKind, mostRecent, mostViewed } from '../data/articles';
import { COLUNISTAS, EDITORIAS, ESTADOS } from '../data/site';
import type { EstadoSlug } from '../types';

const ESTADOS_FILTRO: EstadoSlug[] = [
  'amazonas',
  'maranhao',
  'sergipe',
  'mato-grosso',
  'bahia',
  'ceara',
];

export function HomePage() {
  const featured = ARTICLES.filter((a) => a.featured);
  const [main, ...secondary] = featured;

  const videos = byKind('video');
  const podcasts = byKind('podcast');
  const [estadoFiltro, setEstadoFiltro] = useState<EstadoSlug | 'todos'>('todos');

  const videosFiltrados = useMemo(
    () =>
      (estadoFiltro === 'todos' ? videos : videos.filter((v) => v.estado === estadoFiltro)).slice(0, 8),
    [estadoFiltro, videos],
  );

  const recentes = mostRecent(6);
  const maisVistos = mostViewed(5);

  return (
    <div className="container">
      <AdSlot size="970x90" />

      {/* Destaque principal */}
      <section className="page-section">
        {main && <FeaturedArticleCard article={main} tag={EDITORIAS[main.editoria]} />}
      </section>

      {/* Destaques ranqueados */}
      {secondary.length > 0 && (
        <section className="page-section">
          <SectionHeader label="Destaques" />
          <div className="ranked-grid">
            {secondary.map((a, i) => (
              <RankedStoryCard key={a.slug} rank={i + 1} article={a} />
            ))}
          </div>
        </section>
      )}

      {/* Assista na íntegra — filtro por estado */}
      <section className="page-section">
        <SectionHeader label="Assista na íntegra" href="/videos" />
        <div className="filter-chips">
          <button
            className={`filter-chip${estadoFiltro === 'todos' ? ' filter-chip--active' : ''}`}
            onClick={() => setEstadoFiltro('todos')}
          >
            Todos
          </button>
          {ESTADOS_FILTRO.map((uf) => (
            <button
              key={uf}
              className={`filter-chip${estadoFiltro === uf ? ' filter-chip--active' : ''}`}
              onClick={() => setEstadoFiltro(uf)}
            >
              {ESTADOS[uf]}
            </button>
          ))}
        </div>
        {videosFiltrados.length > 0 ? (
          <div className="media-grid">
            {videosFiltrados.map((v) => (
              <MediaCard key={v.slug} article={v} />
            ))}
          </div>
        ) : (
          <div className="empty-state">Nenhum vídeo neste estado ainda.</div>
        )}
      </section>

      <AdSlot size="970x250" imageUrl="zoho_banner_5.jpg" label="970 × 250 · full banner" />

      {/* Mais recentes + sidebar */}
      <div className="page-grid">
        <section>
          <SectionHeader label="Mais recentes" />
          <div className="article-list">
            {recentes.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </section>

        <aside className="sidebar">
          <section>
            <SectionHeader label="Recentes" />
            <SidebarList articles={mostRecent(4)} />
          </section>
          <AdSlot size="1x1" imageUrl="ad-1x1.jpg" />
          <section>
            <SectionHeader label="Vídeos mais vistos" />
            <SidebarList articles={maisVistos} />
          </section>
          <section>
            <SectionHeader label="Colunistas" href="/colunas" />
            {COLUNISTAS.slice(0, 1).map((c) => (
              <ColumnistCard key={c.slug} columnist={c} />
            ))}
          </section>
        </aside>
      </div>

      {/* Podcast */}
      <section className="page-section" style={{ marginTop: 'var(--space-7)' }}>
        <SectionHeader label="Podcast" href="/podcast" />
        <div className="media-grid">
          {podcasts.map((p) => (
            <MediaCard key={p.slug} article={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
