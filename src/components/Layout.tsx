import { Outlet, ScrollRestoration } from 'react-router-dom';
import { BreakingNewsBar } from './BreakingNewsBar';
import { SiteHeader } from './SiteHeader';
import { PrimaryNav } from './PrimaryNav';
import { SiteFooter } from './SiteFooter';
import { MAIN_NAV, SOCIAL_LINKS } from '../data/site';
import { mostRecent } from '../data/articles';

export function Layout() {
  const headline = mostRecent(1)[0]?.title ?? '';

  return (
    <>
      <BreakingNewsBar headline={headline} socialLinks={SOCIAL_LINKS} />
      <SiteHeader weather={{ tempC: 28, city: 'Brasília, DF', icon: '⛅' }} />
      <PrimaryNav items={MAIN_NAV} />
      <main className="main">
        <Outlet />
      </main>
      <SiteFooter copyrightYear={new Date().getFullYear()} />
      <ScrollRestoration />
    </>
  );
}
