import { tw } from "twind";
import logo from "@/assets/logo.jpg";
import { useAtom } from "jotai";
import { localeAtom } from "@/models/store";
import { css } from "twind/css";

const AssociationIntroduction = () => {
  const InfoMap = {
    title: {
      zh: "协会介绍：",
      en: "About the Union :",
      fr: "A propos de l’Union:",
    },
    context: {
      zh: `<p>中法艺术家协会</p>
            <p>UNION DES ARTISTES FRANCO-CHINOIS (缩写UAFC)</p>
            <p>• 2017年6月中法艺术家协会(UAFC法国)于法国巴黎政府注册批准，并在法兰西共和国日报官方公开宣布成立。</p>
            <p>• 中法艺术家协会(UAFC法国)，以中法两国艺术文化交流发展、创新开拓艺术领域为宗旨，致力于为中法两国艺术家构建专业艺术交流平台、创造跨领域合作机会，并挖掘和支持新独立艺术家。联合中法两国艺术家共同进行艺术推广，建设与发展中法两国之间的艺术文化交流活动。</p>`,
      en: `<p>UNION OF FRENCH AND CHINESE ARTISTS (UAFC, Union des ArtistesFranco-Chinois)</p>
            <pIn June 2017, the registration of the Union of French and Chinese
            Artists (UAFC) was approved by the Paris authorities and its
            etablisment was officially announced in the Official Journal of the
            French Republic.</p>
            <p>The Union of French and Chinese Artists with the overarching
            mission of developping French and Chinese cultural relations and
            fostering innovation in the field of the arts, strives to establish a
            professional platform for exchanges between artists of the two
            countries, to create opportunities for collaboration across borders,
            and to discover and support new independent artists. Artists from
            France and China united together strive to promote art, to establish
            and further activities of artistic and cultural exchanges between their
            two countries.</p>`,
      fr: `<p>UNION DES ARTISTES FRANCO-CHINOIS (UAFC)/p>
            <p>En juin 2017, l’enregistrement de l’Union des Artistes Franco-Chinois
            (UAFC) a été approuvé par les autorités de Paris, et son
            établissement a été déclaré officiellement au Journal officiel de la
            République française.</p>
            <p>L’Union des Artistes Franco-Chinois (UAFC), avec comme mission le
            développement des échanges culturels entre la France et la Chine et
            l’innovation dans les domaines de l’art, œuvre à l’élaboration d’une
            plateforme professionnelle d’échanges entre les artistes issus de ces
            deux pays, à la création d’opportunités de coopération par-delà les
            frontières, et à la découverte et au soutien de nouveaux talents
            indépendants. Artistes de France et de Chine unis œuvre ensemble à
            la promotion de l’art, à la mise en place et au développement
            d’activités d’échanges artistiques et culturels entre leurs deux pays.</p>`,
    },
  };

  const [locale] = useAtom(localeAtom);

  return (
    <div className={tw`flex flex-col h-full items-center`}>
      <div
        className={tw`w-[50%] min-w-[300px] flex flex-col mt-[100px] mb-[20px] text-frc-100`}
      >
        <p className={tw`text-lg font-bold`}>{InfoMap.title[locale]} </p>
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
        src={logo}
        style={{
          height: "50%",
          width: "auto",
        }}
      />
    </div>
  );
};

export default AssociationIntroduction;
