import type { SocialLink } from '../types';

interface BreakingNewsBarProps {
  headline: string;
  socialLinks: SocialLink[];
}

const SOCIAL_ICON: Record<SocialLink['platform'], string> = {
  facebook: 'f',
  x: '𝕏',
  instagram: '⚬',
  tiktok: '♪',
  youtube: '▶',
};

export function BreakingNewsBar({ headline, socialLinks }: BreakingNewsBarProps) {
  return (
    <div className="breaking-bar">
      <div className="container">
        <div style={{ display: 'flex', gap: 12, minWidth: 0 }}>
          <span className="breaking-bar__label">ÚLTIMAS NOTÍCIAS</span>
          <span className="breaking-bar__headline">|&nbsp;&nbsp;{headline}</span>
        </div>
        <div className="breaking-bar__social">
          {socialLinks.map((s) => (
            <a key={s.platform} href={s.href} target="_blank" rel="noreferrer" aria-label={s.platform}>
              {SOCIAL_ICON[s.platform]}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
