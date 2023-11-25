import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import { App } from './components/App';
import './global.scss';
import { HomePage } from './pages/HomePage';
import { BabyHomePage } from './pages/BabyHomePage';
import { ErrorPage } from './pages/ErrorPage';
import { InfoPage } from './pages/InfoPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/',
        element: <BabyHomePage />,
      },
      {
        path: '/',
        element: <InfoPage />,
      },
    ]
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />
);
