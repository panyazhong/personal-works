import { Button, Drawer, Select } from "antd";
import { useAtom } from "jotai";
import { useNavigate, useLocation } from "react-router-dom";
import { tw } from "twind";
import { localeAtom } from "../models/store";
import logo from "@/assets/logo.jpg";
import { MenuOutlined } from "@ant-design/icons";
import { useState } from "react";
import { css } from "twind/css";

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
    {
      label: {
        zh: "联系方式",
        en: "Contact Information",
        fr: "Contact",
      },
      path: "/contract-info",
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
  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div
      className={tw`flex h-[72px] justify-between items-center text-sm px-2 bg-frc-50 text-frc-100`}
    >
      <div className={tw`flex items-center`}>
        <div
          onClick={() => {
            navigate("/");
          }}
          className={tw`cursor-pointer`}
        >
          <img src={logo} alt="" className={tw`w-[50px] rounded-full`} />
        </div>
        <div
          className={tw`flex gap-2 text-frc-100 font-bold text-base ml-[20px] hidden xl:flex`}
        >
          {Menus.map((menu) => (
            <div
              className={tw`cursor-pointer hover:text-underline
              ${
                location.pathname === menu.path
                  ? "text-underline text-frc-200"
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
      </div>

      <div>
        <MenuOutlined
          className={tw`xl:hidden mr-[20px] cursor-pointer`}
          onClick={() => setOpen(true)}
        />
        <Select
          className={tw`w-[100px]`}
          options={options}
          value={locale}
          onChange={(v) => setLocale(v)}
        />
      </div>

      <Drawer
        title=""
        placement="top"
        closable={false}
        onClose={onClose}
        open={open}
        key={"top"}
        getContainer={document.getElementById("root") as HTMLDivElement}
        className={tw`bg-frc-50 text-frc-100 ${css``}`}
      >
        <div className={tw`flex flex-col items-center`}>
          {Menus.map((menu) => (
            <div
              className={tw`cursor-pointer h-[36px] hover:text-underline
              ${
                location.pathname === menu.path
                  ? "text-underline text-frc-200"
                  : ""
              }
            `}
              onClick={() => {
                setOpen(false);
                navigate(menu.path);
              }}
            >
              {menu.label[locale]}
            </div>
          ))}
        </div>
      </Drawer>
    </div>
  );
};

export default Header;
