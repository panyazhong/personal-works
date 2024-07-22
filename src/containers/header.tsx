import { useNavigate } from "react-router-dom";
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

  return (
    <div
      className={tw`flex h-[72px] justify-between items-center text-sm px-2 bg-frc-100 fixed top-0 left-0 right-0`}
    >
      <div
        onClick={() => {
          navigate("/");
        }}
        className={tw`cursor-pointer`}
      >
        Logo
      </div>
      <div className={tw`flex gap-2`}>
        {Menus.map((menu) => (
          <div
            className={tw`cursor-pointer hover:text-underline`}
            onClick={() => {
              navigate(menu.path);
            }}
          >
            {menu.label}
          </div>
        ))}
      </div>

      <div></div>
    </div>
  );
};

export default Header;
