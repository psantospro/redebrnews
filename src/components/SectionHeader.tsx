import { Link } from 'react-router-dom';

interface SectionHeaderProps {
  label: string;
  href?: string; // link "ver todos"
}

export function SectionHeader({ label, href }: SectionHeaderProps) {
  return (
    <div className="section-header">
      <span className="section-header__label">{label}</span>
      {href && (
        <Link to={href} className="section-header__more">
          ver todos →
        </Link>
      )}
    </div>
  );
}
