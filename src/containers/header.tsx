import { Select } from "antd";
import { useAtom } from "jotai";
import { useNavigate, useLocation } from "react-router-dom";
import { tw } from "twind";
import { localeAtom } from "../models/store";

const Header = () => {
  const Menus = [
    {
      label: {
        zh: "首页",
        en: "Homepage",
        fr: "Page d’acceuil",
      },
      path: "/",
    },
    {
      label: {
        zh: "艺术家简介",
        en: "About the Artist",
        fr: "A propos de l’Artiste",
      },
      path: "/author",
    },
    {
      label: {
        zh: "绘画作品",
        en: "Paintings",
        fr: "Peintures",
      },
      path: "/personal",
    },
    {
      label: {
        zh: "纪录片作品",
        en: "Documentary Works",
        fr: "Documentaires",
      },
      path: "/",
    },
    {
      label: {
        zh: "协会简介",
        en: "About the Union",
        fr: "A propos de l’Union",
      },
      path: "/association-introduction",
    },

    {
      label: {
        zh: "海怪工作室",
        en: "Atelier Sea Monster",
        fr: "Atelier Sea Monster",
      },
      // path: "/personal-works",
      path: "/studio-info",
    },
    {
      label: {
        zh: "展讯",
        en: "Exhibition News",
        fr: "Actualités d’expositions",
      },
      path: "/exhibition-news",
    },
  ];

  const options = [
    {
      label: "中文",
      value: "zh",
    },
    {
      label: "English",
      value: "en",
    },
    {
      label: "Français",
      value: "fr",
    },
  ];

  const navigate = useNavigate();
  const location = useLocation();
  const [locale, setLocale] = useAtom(localeAtom);

  return (
    <div
      className={tw`flex h-[72px] justify-between items-center text-sm px-2 bg-frc-100 text-frc-300`}
    >
      <div
        onClick={() => {
          navigate("/");
        }}
        className={tw`cursor-pointer`}
      >
        <img
          src="https://theme.hozen.site/tranquility/images/logo.svg"
          alt=""
          className={tw`w-[50px]`}
        />
      </div>
      <div className={tw`flex gap-2 text-frc-300 font-bold text-base`}>
        {Menus.map((menu) => (
          <div
            className={tw`cursor-pointer hover:text-underline
              ${
                location.pathname === menu.path
                  ? "text-underline text-frc-400"
                  : ""
              }
            `}
            onClick={() => {
              navigate(menu.path);
            }}
          >
            {menu.label[locale]}
          </div>
        ))}
      </div>

      <div>
        {/* <Button type="primary">aa</Button> */}
        <Select
          className={tw`w-[100px]`}
          options={options}
          value={locale}
          onChange={(v) => setLocale(v)}
        />
      </div>
    </div>
  );
};

export default Header;
