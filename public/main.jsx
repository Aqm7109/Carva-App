import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Aboutpage from './Components/AboutPage/Aboutpage.jsx';
import Services from './Components/Services.jsx';
import ContactUs from './Components/ContactPage/ContactUs.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
    },
    {
      path: '/about',
      element: <Aboutpage />,
    },
    {
      path: '/services',
      element: <Services />,
    },
    {
      path: '/Contact-us',
      element: <ContactUs />,
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
