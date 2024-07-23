import { setup, tw } from "twind";
import "./App.css";
import Header from "./containers/header";
import { Outlet } from "react-router-dom";
import enUS from "antd/es/locale/en_US";

console.log(enUS);
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
      backgroundImage: {
        "author-bg": "url('/src/assets/bg.png')",
      },
    },
    colors: {
      frc: {
        50: "#191B1C",
        100: "#ffebc8",
        200: "#fcfcfb",
        300: "#383838",
        400: "#35393B",
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
      <div className={tw`flex flex-col w-full h-full bg-frc-50`}>
        <Header />
        <div className={tw`flex-1 overflow-hidden`}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default App;
