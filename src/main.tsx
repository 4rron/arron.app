import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './routes/error/error.tsx';
import About from './routes/about/about.tsx';
import Experience from './routes/experience/experience.tsx';
import Home from './routes/home/home.tsx';
import Projects from './routes/projects/projects.tsx';
import Hobbies from './routes/hobbies/hobbies.tsx';
import Demons from './routes/projects/demons.tsx';
import Maxix from './routes/projects/maxix.tsx';
import Ritual from './routes/projects/ritual.tsx';
import Shell from './shell.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Shell />, // Can add root element here for full app shell
        errorElement: <ErrorPage />,
        children: [
            { path: '/', element: <Home />, index: true },
            { path: 'about', element: <About /> },
            { path: 'experience', element: <Experience /> },
            { path: 'hobbies', element: <Hobbies /> },
            { path: 'projects', element: <Projects /> },
            { path: 'projects/demons', element: <Demons /> },
            { path: 'projects/maxix', element: <Maxix /> },
            { path: 'projects/ritual', element: <Ritual /> },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
