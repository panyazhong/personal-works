import { Button } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import { tw } from "twind";

const Header = () => {
  const Menus = [
    {
      label: "个人画展",
      path: "/personal",
    },
    {
      label: "个人作品",
      path: "/personal-works",
    },
  ];

  const navigate = useNavigate();
  const location = useLocation();

  console.log(location);

  return (
    <div
      className={tw`flex h-[72px] justify-between items-center text-sm px-2 bg-frc-100 fixed top-0 left-0 right-0 text-frc-300`}
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
            {menu.label}
          </div>
        ))}
      </div>

      <div>{/* <Button type="primary">aa</Button> */}</div>
    </div>
  );
};

export default Header;
