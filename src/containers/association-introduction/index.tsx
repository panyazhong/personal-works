import { tw } from "twind";

const AssociationIntroduction = () => {
  return (
    <div className={tw`flex justify-center h-full`}>
      <div className={tw`w-[400px] flex flex-col mt-[100px]`}>
        <p className={tw`text-lg text-frc-300 font-bold`}>协会介绍： </p>
        <span className={tw`text-md mt-[20px]`}>
          中法艺术家协会 UNION DES ARTISTES FRANCO-CHINOIS (缩写UAFC) •
          2017年6月中法艺术家协会(UAFC法国)于法国巴黎政府注册批准
          ，并在法兰西共和国日报官方公开宣布成立。 •
          中法艺术家协会(UAFC法国)，以中法两国艺术文化交流发展、
          创新开拓艺术领域为宗旨，致力于为中法两国艺术家构建专业艺
          术交流平台、创造跨领域合作机会，并挖掘和支持新独立艺术家
          。联合中法两国艺术家共同进行艺术推广，建设与发展中法两国
          之间的艺术文化交流活动。
        </span>
      </div>
    </div>
  );
};

export default AssociationIntroduction;
