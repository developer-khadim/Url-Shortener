"use client";
import React from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import AppLayout from "./layouts/App-layout";
import LandingPage from "./pages/Landing";
import Dashbord from './pages/dashbord';
import PageLink from './pages/pageslink';
import Redirectlink from './pages/redirect-link';

const router = createBrowserRouter([
  {
    path: "/", 
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />
      },
      {
        path: "/dashbord",
        element: <Dashbord/>
      },
      {
        path:"/auth",
        element: <Dashbord/>
      },
      {
        path:"/pageslink/:id",
        element:<PageLink/>
      },
      {
        path:"/:id",
        element: <Redirectlink/>
      }
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
