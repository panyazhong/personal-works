import { Timeline } from "antd";
import { tw } from "twind";
import bg from "@/assets/bg.png";
import { css } from "twind/css";

const AuthorInfo = () => {
  return (
    <div
      //flex flex-col items-center justify-center
      className={tw`flex flex-col justify-center items-center grid-rows-2 w-full h-full w-full text-frc-100
        ${css`
          .with-bg:before {
            content: " ";
            display: block;
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            opacity: 0.2;
            background-image: url("/src/assets/bg.png");
            background-repeat: no-repeat;
            background-position: 50% 0;
            background-size: cover;
            border-radius: 10px;
          }
        `}
      `}
    >
      <div
        className={tw`relative with-bg w-[540px] px-[50px] py-[20px] rounded-[10px]`}
      >
        <div className={tw`flex flex-col flex-start mb-[40px]`}>
          <strong>南方</strong>
          <ol>
            <li>旅法画家、艺术家、纪录片导演、摄影师、策展人</li>
            <li>法国UAFC中法艺术家协会会长</li>
            <li>海怪工作室负责人</li>
            <li>法国巴黎时尚广告设计与策划硕士、法国巴黎奢侈品管理硕士</li>
            <li>法国巴黎奢侈品集团公司前总负责人</li>
          </ol>
        </div>

        <div className={tw`flex flex-col flex-start justify-end mb-[40px]`}>
          <span>
            <strong>作品风格：</strong>独创阴翳美学，以色彩诠释黑暗。
          </span>
        </div>

        <div className={tw`flex flex-col flex-start mb-[40px]`}>
          <span>2018卢森堡美术馆艺术奖</span>
          <span>2022法国巴黎个人艺术展《花臂勇士和她的刺客们》</span>
          <span>2024法国巴黎大皇宫国际艺术展</span>
          <span>2024法国巴黎卢浮宫艺术博览会金奖</span>
        </div>

        <p>
          现工作生活于法国巴黎，继续创作个人作品，其作品广泛被私人藏 家收藏。
        </p>
      </div>
      {/* <div className={tw`flex flex-col flex-start`}>
        <strong>联系方式</strong>
        <span>邮箱：nf@nanfang-art.com</span>
        <span className={tw`flex`}>
          电话：
          <span>
            0033-753750525（法国）
            <br />
            15066899551（微信 同号）
          </span>
        </span>
      </div> */}
    </div>
  );
};

export default AuthorInfo;
