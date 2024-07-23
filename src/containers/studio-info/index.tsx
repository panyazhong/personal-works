import { tw } from "twind";

const StudioInfo = () => {
  return (
    <div className={tw`flex justify-center h-full`}>
      <div className={tw`w-[400px] flex flex-col mt-[100px]`}>
        <p className={tw`text-lg text-frc-300 font-bold`}>海怪工作室简介：</p>
        <span className={tw`text-md mt-[20px]`}>
          海怪工作室系海怪信息服务工作室。
          同步“海怪工作室”微信公众号文章，发布展讯、组织策划艺 术展览。
          提供咨询服务，包含且不限于咨询UAFC中法艺术家协会组
          织的艺术活动与项目。
        </span>
      </div>
    </div>
  );
};

export default StudioInfo;
