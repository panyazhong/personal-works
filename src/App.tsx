import { setup } from "twind";
import "./App.css";
import { PropsWithChildren } from "react";
import Header from "./containers/header";
import { Outlet } from "react-router-dom";

setup({
  theme: {
    extend: {
      borderRadius: {
        inherit: "inherit",
      },
      boxShadow: {
        "1lv":
          "0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12),0 1px 5px 0 rgba(0,0,0,.2)",
      },
    },
    colors: {
      frc: {
        100: "#fefefe",
        200: "#fcfcfb",
        300: "#383838",
        400: "#555",
        500: "#666",
      },
      frcFont: {
        100: "#888",
      },
    },
  },
});

const App = () => {
  return (
    <>
      <Header />

      <Outlet />
    </>
  );
};

export default App;
