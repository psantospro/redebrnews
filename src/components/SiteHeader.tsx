import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface SiteHeaderProps {
  weather?: { tempC: number; city: string; icon: string };
}

export function SiteHeader({ weather }: SiteHeaderProps) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    if (q) navigate(`/busca?q=${encodeURIComponent(q)}`);
  };

  return (
    <header className="site-header">
      <div className="container">
        <Link to="/" className="site-header__logo" aria-label="RedeBRNews — página inicial">
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="RBN — RedeBRNews" />
        </Link>

        {weather && (
          <div className="site-header__weather">
            <span className="site-header__weather-icon">{weather.icon}</span>
            <div>
              <div className="site-header__weather-temp">{weather.tempC}°C</div>
              <div className="site-header__weather-city">{weather.city}</div>
            </div>
          </div>
        )}

        <form className="site-header__search" onSubmit={onSearch} role="search">
          <input
            type="search"
            placeholder="Buscar no portal"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Buscar no portal"
          />
          <button type="submit" aria-label="Buscar">🔍</button>
        </form>
      </div>
    </header>
  );
}
