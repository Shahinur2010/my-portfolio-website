import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main/Main';
import Home from './pages/Home/Home/Home';
import AuthProvider from './providers/AuthProvider';
import { ThemeProvider } from './providers/ThemeProvider';
import Resume from './pages/Resume/Resume';
import Projects from './pages/Projects/Projects';
import About from './pages/About/About';
import ErrorElement from './pages/ErrorPage/ErrorElement';
import Contact from './pages/Contact/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/resume',
        element: <Resume></Resume>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/projects',
        element: <Projects></Projects>,
        loader: () => fetch('/projects.json')
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '*',
        element: <ErrorElement></ErrorElement>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
