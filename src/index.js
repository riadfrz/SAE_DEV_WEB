import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import Presentation from './Pages/Presentation';
import Services from './Pages/Services';
import Etudier from './Pages/Etudier';
import Immobillier from './Pages/Immobillier';
import Dpers from './Pages/Donnéespers';
import Leg from './Pages/Legal';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
      path: "/presentation",
      element: <Presentation/>,
    },
    {
      path: '/services',
      element: <Services/>,
    },
    
    {
        path: '/Etudier',
        element: <Etudier/>,
    },

    {
      path: '/Immobillier',
      element: <Immobillier/>,
  },
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/Donnéespers",
        element: <Dpers/>,
    },
    {
        path: "/Legal",
        element: <Leg/>,
    },
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

