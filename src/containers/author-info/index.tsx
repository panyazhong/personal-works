import { Timeline } from "antd";
import { tw } from "twind";

const AuthorInfo = () => {
  return (
    <div className={tw`flex items-center justify-center w-full h-full w-full`}>
      <Timeline
        mode="alternate"
        style={{
          width: "80%",
          maxWidth: "700px",
        }}
      >
        <Timeline.Item position="left" color="gray">
          <div className={tw`flex flex-col flex-start`}>
            <strong>南方</strong>
            <ol>
              <li>旅法画家、艺术家、纪录片导演、摄影师、策展人</li>
              <li>法国UAFC中法艺术家协会会长</li>
              <li>海怪工作室负责人</li>
              <li>法国巴黎时尚广告设计与策划硕士、法国巴黎奢侈品管理硕士</li>
              <li>法国巴黎奢侈品集团公司前总负责人</li>
            </ol>
          </div>
        </Timeline.Item>
        <Timeline.Item position="right" color="gray">
          <div className={tw`flex flex-col flex-start`}>
            <span>
              <strong>作品风格:</strong>独创阴翳美学，以色彩诠释黑暗。
            </span>
          </div>
        </Timeline.Item>
        <Timeline.Item position="left" color="gray">
          <div className={tw`flex flex-col flex-start`}>
            <strong>曾获奖项</strong>
            <span>2018卢森堡美术馆艺术奖</span>
            <span>2022法国巴黎个人艺术展《花臂勇士和她的刺客们》</span>
            <span>2024法国巴黎大皇宫国际艺术展</span>
            <span>2024法国巴黎卢浮宫艺术博览会金奖</span>
          </div>
        </Timeline.Item>
        <Timeline.Item position="right" color="gray">
          <p className={tw`text-center`}>
            现工作生活于法国巴黎，继续创作个人作品，其作品广泛被私人藏 家收藏。
          </p>
        </Timeline.Item>
        <Timeline.Item color="gray">
          <div className={tw`flex flex-col flex-start`}>
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
          </div>
        </Timeline.Item>
      </Timeline>
    </div>
  );
};

export default AuthorInfo;
