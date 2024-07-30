import { tw } from "twind";
import monstor from "@/assets/0727_1.jpg";
import monstorCode from "@/assets/0728_1.jpg";
import { useAtom } from "jotai";
import { localeAtom } from "@/models/store";
import { css } from "twind/css";

const StudioInfo = () => {
  const InfoMap = {
    title: {
      zh: "海怪工作室简介:",
      en: "About Atelier Sea Monster:",
      fr: "A propos de l‘Atelier Sea Monster:",
    },
    context: {
      zh: "<p>海怪工作室系海怪信息服务工作室。</p><p>同步”海怪工作室”微信公众号文章，发布展讯、组织策划艺 术展览。</p><p>提供咨询服务，包含且不限于咨询UAFC中法艺术家协会组织的艺术活动与项目。</p>",
      en: `<p>Atelier Sea Monster is the Sea Monster Information
            Services Studio</p>
            <p>Simultaneous publication of articles with the WeChat
            public account Atelier Sea Monster, publication of
            exhibition news, organisation and planning of art
            exhibitions.</p>
            <p>Provision of consulting services, including but not limited
            to advising the Union des Artistes Franco-Chinois (UAFC)
            in the organisation of artistic activities and projects.</p>`,
      fr: `<p>Atelier Sea Monster est l’atelier de service d’informations
            Sea Monster</p>
            <p>Publication d’articles simultanément avec le compte public
            WeChat « Atelier Sea Monster », publication d’actualités
            d’expositions, organisation et planification des expositions
            d’art.</p>
            <p>Offre des services de consultance, y compris mais pas
            limité au conseil de l’Union des Artistes Franco-Chinois
            (UAFC) dans la réalisation d’activités et projets artistiques.</p>`,
    },
  };

  const [locale] = useAtom(localeAtom);
  return (
    <div
      className={tw`bg-frc-100 grid grid-cols-1 w-full h-full overflow-y-scroll sm:flex sm:flex-row sm:gap-[100px]`}
    >
      <div
        className={tw`w-[90%] flex justify-center items-center mt-[30px] mx-auto sm:w-[50%] sm:justify-end`}
      >
        <img
          src={monstor}
          className={tw`w-[80%] sm:w-[70%]`}
          style={{
            height: "auto",
          }}
        />
      </div>
      <div
        className={tw`w-[100%] flex items-center h-full items-center sm:w-[50%]`}
      >
        <div className={tw`w-[100%] flex flex-col items-center sm:items-start`}>
          <div
            className={tw`w-[70%] min-w-[300px] flex flex-col mt-[100px] mb-[20px] text-frc-50`}
          >
            <p className={tw`text-lg font-bold`}>{InfoMap.title[locale]}</p>
            <div
              className={tw`text-md mt-[20px]
            ${css`
              p {
                margin: 10px 0;
              }
            `}
          `}
              dangerouslySetInnerHTML={{
                __html: InfoMap.context[locale],
              }}
            />
          </div>
          <img
            src={monstorCode}
            className={tw`w-[80%] sm:w-[50%]`}
            style={{
              height: "auto",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default StudioInfo;
