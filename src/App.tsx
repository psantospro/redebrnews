import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { CategoryPage } from './pages/CategoryPage';
import { VideosPage } from './pages/VideosPage';
import { BlogPage } from './pages/BlogPage';
import { PodcastPage } from './pages/PodcastPage';
import { ColunasPage, ColunistaPage } from './pages/ColunasPage';
import { ArticlePage, AuthorPage, SearchPage, TagPage } from './pages/ArticlePage';
import { ContatosPage, InstitutionalPage } from './pages/InstitutionalPage';
import { NotFoundPage } from './pages/NotFoundPage';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/editoria/:slug', element: <CategoryPage /> },
      { path: '/videos', element: <VideosPage /> },
      { path: '/videos/:estado', element: <VideosPage /> },
      { path: '/blog', element: <BlogPage /> },
      { path: '/podcast', element: <PodcastPage /> },
      { path: '/colunas', element: <ColunasPage /> },
      { path: '/colunas/:slug', element: <ColunistaPage /> },
      { path: '/author/:slug', element: <AuthorPage /> },
      { path: '/tag/:tag', element: <TagPage /> },
      { path: '/busca', element: <SearchPage /> },
      { path: '/contatos', element: <ContatosPage /> },
      { path: '/quem-somos', element: <InstitutionalPage page="quem-somos" /> },
      { path: '/expediente', element: <InstitutionalPage page="expediente" /> },
      { path: '/politica-de-privacidade', element: <InstitutionalPage page="politica-de-privacidade" /> },
      { path: '/anuncie', element: <InstitutionalPage page="anuncie" /> },
      { path: '/fale-conosco', element: <InstitutionalPage page="fale-conosco" /> },
      { path: '/:slug', element: <ArticlePage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
