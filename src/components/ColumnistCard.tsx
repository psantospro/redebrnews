import { Link } from 'react-router-dom';
import type { Columnist } from '../types';

interface ColumnistCardProps {
  columnist: Columnist;
}

export function ColumnistCard({ columnist }: ColumnistCardProps) {
  const initials = columnist.name
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('');

  return (
    <div className="columnist-card">
      <div className="columnist-card__avatar">
        {columnist.avatarUrl ? <img src={columnist.avatarUrl} alt={columnist.name} /> : initials}
      </div>
      <div>
        <div className="columnist-card__name">
          <Link to={`/colunas/${columnist.slug}`}>{columnist.name}</Link>
        </div>
        <div className="columnist-card__topic">{columnist.topic}</div>
        <div className="columnist-card__bio">{columnist.bio}</div>
      </div>
    </div>
  );
}
