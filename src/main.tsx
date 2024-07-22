import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import Home from "./containers/home/index.tsx";
import Content from "./containers/content/index.tsx";
import PersonalWorks from "./containers/personal-works/index.tsx";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/personal",
        element: <Content />,
      },
      {
        path: "/personal-works",
        element: <PersonalWorks />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
