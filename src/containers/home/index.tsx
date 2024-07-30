import { tw } from "twind";
import home from "@/assets/bg.jpg";
import { useAtom } from "jotai";
import { localeAtom } from "@/models/store";

const Home = () => {
  const InfoMap: any = {
    zh: {
      title: "旅法画家 - 南方",
      context: "UAFC中法艺术家协会会长",
    },
    en: {
      title: "Artiste peintre - NAN Fang",
      context: "Union des Artistes Franco-Chinois",
    },
  };
  const [locale] = useAtom(localeAtom);

  return (
    <div
      className={tw`flex justify-center flex-col py-[20px] items-center w-full h-full min-w-[400px]`}
    >
      <img src={home} className={tw`sm:w-[60%] w-[90%]`} />

      <div
        className={tw`text-frc-100 flex flex-col items-end sm:w-[60%] w-[90%] w-full`}
      >
        <div className={tw`text-[32px]`}>{InfoMap[locale]?.title}</div>

        <div className={tw`text-[30px]`}>{InfoMap[locale]?.context}</div>
      </div>
    </div>
  );
};

export default Home;
