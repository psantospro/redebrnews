import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <div className="container">
      <div className="empty-state" style={{ marginTop: 'var(--space-7)' }}>
        <h1 className="page-title" style={{ marginBottom: 8 }}>404</h1>
        <p>Parece que não conseguimos encontrar o que você está procurando.</p>
        <p>
          <Link to="/">Voltar para a página inicial</Link>
        </p>
      </div>
    </div>
  );
}
