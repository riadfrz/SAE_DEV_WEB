import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Presentation from './Pages/Presentation';
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
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

