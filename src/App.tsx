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
    },
    colors: {
      frc: {
        100: "#383838",
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
