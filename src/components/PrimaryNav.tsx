import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import type { NavItem } from '../types';

interface PrimaryNavProps {
  items: NavItem[];
}

export function PrimaryNav({ items }: PrimaryNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="primary-nav" aria-label="Navegação principal">
      <div className="container">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `primary-nav__home${isActive ? ' primary-nav__home--active' : ''}`
          }
          aria-label="Home"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
            <path
              d="M4 11.5 12 4l8 7.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 10v9a1 1 0 0 0 1 1h3v-5h4v5h3a1 1 0 0 0 1-1v-9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </NavLink>
        <ul className={`primary-nav__list${open ? ' primary-nav__list--open' : ''}`}>
          {items.map((item) => (
            <li key={item.label} className="primary-nav__item">
              {item.children ? (
                <>
                  <span className="primary-nav__link" style={{ cursor: 'pointer' }}>
                    {item.label} ▾
                  </span>
                  <ul className="primary-nav__dropdown">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link to={child.href} onClick={() => setOpen(false)}>
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <NavLink
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `primary-nav__link${isActive ? ' primary-nav__link--active' : ''}`
                  }
                >
                  {item.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
        <button
          className="primary-nav__toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
          aria-expanded={open}
        >
          ☰
        </button>
      </div>
    </nav>
  );
}
