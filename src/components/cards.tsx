import { Link } from 'react-router-dom';
import { EDITORIAS, formatDate } from '../data/site';
import type { Article } from '../types';

export function Thumb({
  article,
  className = '',
  dark = false,
}: {
  article: Article;
  className?: string;
  dark?: boolean;
}) {
  return (
    <div className={`thumb${dark || article.kind !== 'blog' ? ' thumb--dark' : ''} ${className}`}>
      {article.imageUrl && <img src={article.imageUrl} alt="" loading="lazy" />}
      {article.kind !== 'blog' && <span className="thumb__play">▶</span>}
      {article.duration && <span className="thumb__duration">{article.duration}</span>}
    </div>
  );
}

export function ArticleMeta({ article }: { article: Article }) {
  return (
    <div className="article-card__meta">
      Por {article.author} · {formatDate(article.publishedAt)}
      {article.updatedAt && article.updatedAt !== article.publishedAt && (
        <> · atualizado em {formatDate(article.updatedAt)}</>
      )}
    </div>
  );
}

export function editoriaLabel(article: Article): string {
  return EDITORIAS[article.editoria];
}

interface FeaturedArticleCardProps {
  article: Article;
  tag?: string;
  ctaLabel?: string; // default "Leia mais"
}

export function FeaturedArticleCard({ article, tag = 'Destaque', ctaLabel = 'Leia a matéria completa' }: FeaturedArticleCardProps) {
  return (
    <div className="hero-card">
      {article.imageUrl && (
        <img className="hero-card__image" src={article.imageUrl} alt="" />
      )}
      <div className="hero-card__overlay" />
      <div className="hero-card__content">
        <span className="featured-card__tag">{tag}</span>
        <h2 className="hero-card__title">
          <Link to={`/${article.slug}`}>{article.title}</Link>
        </h2>
        <p className="hero-card__excerpt">{article.excerpt}</p>
        <div className="hero-card__meta">
          Por {article.author} · {formatDate(article.publishedAt)}
          {article.updatedAt && article.updatedAt !== article.publishedAt && (
            <> · atualizado em {formatDate(article.updatedAt)}</>
          )}
        </div>
        <Link to={`/${article.slug}`} className="featured-card__cta">
          {ctaLabel}
        </Link>
      </div>
    </div>
  );
}

interface RankedStoryCardProps {
  rank: number;
  article: Article;
}

export function RankedStoryCard({ rank, article }: RankedStoryCardProps) {
  return (
    <div className="ranked-card">
      <div className="ranked-card__media">
        <span className="ranked-card__rank">{rank}</span>
        <Thumb article={article} className="ranked-card__thumb" />
      </div>
      <div className="ranked-card__cat">{editoriaLabel(article)}</div>
      <div className="ranked-card__title">
        <Link to={`/${article.slug}`}>{article.title}</Link>
      </div>
      <div className="ranked-card__date">{formatDate(article.publishedAt)}</div>
    </div>
  );
}

interface MediaCardProps {
  article: Article;
}

export function MediaCard({ article }: MediaCardProps) {
  return (
    <div className="media-card">
      <Link to={`/${article.slug}`}>
        <Thumb article={article} className="media-card__media" dark />
      </Link>
      <div className="media-card__title">
        <Link to={`/${article.slug}`}>{article.title}</Link>
      </div>
      <div className="media-card__date">{formatDate(article.publishedAt)}</div>
    </div>
  );
}

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="article-card">
      <Link to={`/${article.slug}`}>
        <Thumb article={article} className="article-card__media" />
      </Link>
      <div>
        <span className="article-card__cat">{editoriaLabel(article)}</span>
        <h3 className="article-card__title">
          <Link to={`/${article.slug}`}>{article.title}</Link>
        </h3>
        <p className="article-card__excerpt">{article.excerpt}</p>
        <ArticleMeta article={article} />
      </div>
    </article>
  );
}
