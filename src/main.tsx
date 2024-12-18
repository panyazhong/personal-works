import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import Home from "./containers/home/index.tsx";
import Content from "./containers/content/index.tsx";
import PersonalWorks from "./containers/personal-works/index.tsx";
import ArticleDetail from "./containers/personal-works/article-detail.tsx";
import AuthorInfo from "./containers/author-info/index.tsx";
import AssociationIntroduction from "./containers/association-introduction/index.tsx";
import ExhibitionNews from "./containers/exhibition-news/index.tsx";
import StudioInfo from "./containers/studio-info/index.tsx";

import "./index.css";
import ContractInfo from "./containers/contract-info/index.tsx";
import ArtMerchandise from "./containers/art-merchandise/index.tsx";
import JoinUnion from "./containers/join-union/index.tsx";
import Thoughts from "./containers/thoughts/index.tsx";
import NewsDetail from "./containers/exhibition-news-detail/index.tsx";

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
        path: "/paintings",
        element: <Content />,
      },
      {
        path: "/personal-works",
        element: <PersonalWorks />,
      },
      {
        path: "/detail/:id",
        element: <ArticleDetail />,
      },
      {
        path: "/author",
        element: <AuthorInfo />,
      },
      {
        path: "/association-introduction",
        element: <AssociationIntroduction />,
      },
      {
        path: "/exhibition-news",
        element: <ExhibitionNews />,
      },
      {
        path: "/news-detail/:id",
        element: <NewsDetail />,
      },
      {
        path: "/studio-info",
        element: <StudioInfo />,
      },
      {
        path: "/contract-info",
        element: <ContractInfo />,
      },
      {
        path: "/art-merchandise",
        element: <ArtMerchandise />,
      },
      {
        path: "/join-union",
        element: <JoinUnion />,
      },
      {
        path: "/thoughts",
        element: <Thoughts />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
