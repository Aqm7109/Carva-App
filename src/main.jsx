import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Aboutpage from './Components/AboutPage/Aboutpage.jsx';
import Services from './Components/Services.jsx';
import ContactUs from './Components/ContactPage/ContactUs.jsx';
import Layout from './Components/Layout.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: (
        <Layout>
          <App />
        </Layout>
      ),
    },
    {
      path: '/about',
      element: (
        <Layout>
          <Aboutpage />
        </Layout>
      ),
    },
    {
      path: '/services',
      element: (
        <Layout>
          <Services />
        </Layout>
      ),
    },
    {
      path: '/contact-us',
      element: (
        <Layout>
          <ContactUs />
        </Layout>
      ),
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
