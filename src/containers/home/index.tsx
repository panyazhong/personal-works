import { tw } from "twind";
import home from "@/assets/bg.jpg";
import { useAtom } from "jotai";
import { localeAtom } from "@/models/store";

const Home = () => {
  const InfoMap: any = {
    zh: {
      title: "旅法画家 - 南方",
      context1: "旅法画家、艺术家、纪录片导演、策展人",
      context2: "UAFC中法艺术家协会会长",
    },
    en: {
      title: "NAN Fang",
      context1: "Painter、Artist、Documentary Film Director、Art Curator",
      context2: "President of the Union of French and Chinese Artists (UAFC)",
    },
    fr: {
      title: "NAN Fang",
      context1:
        "Artiste peintre、Réalisatrice de documentaires、Curatrice d’Art",
      context2: "Présidente de l’Union des Artistes Franco-Chinois (UAFC)",
    },
  };
  const [locale] = useAtom(localeAtom);

  return (
    <div
      className={tw`flex justify-center flex-col py-[20px] items-center w-full h-full min-w-[400px]`}
    >
      <img src={home} className={tw`sm:w-[60%] w-[90%]`} />

      <div
        className={tw`text-frc-100 flex flex-col items-end sm:w-[60%] w-[90%] w-full text-right`}
      >
        <div className={tw`text-[32px]`}>{InfoMap[locale]?.title}</div>

        <div className={tw`text-[30px]`}>{InfoMap[locale]?.context1}</div>
        <div className={tw`text-[30px]`}>{InfoMap[locale]?.context2}</div>
      </div>
    </div>
  );
};

export default Home;
