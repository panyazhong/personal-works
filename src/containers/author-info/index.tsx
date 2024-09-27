import { localeAtom } from "@/models/store";
import { useAtom } from "jotai";
import { tw } from "twind";
// import { css } from "twind/css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  author1,
  author2,
  author3,
  author4,
  author5,
  author6,
  author7,
  author8,
  author9,
} from "./assets";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

const imgs = [
  author1,
  author2,
  author3,
  author4,
  author5,
  author6,
  author7,
  author8,
  author9,
];

const AuthorInfo = () => {
  const InfoMap = {
    name: {
      zh: "南方",
      en: "NAN Fang",
      fr: "NAN Fang",
    },
    experience: {
      zh: `<ol>
            <li>旅法画家、艺术家、纪录片导演、摄影师、策展人</li>
            <li>法国UAFC中法艺术家协会会长</li>
            <li>海怪工作室负责人</li>
            <li>法国巴黎时尚广告设计与策划硕士、法国巴黎奢侈品管理硕士</li>
            <li>法国巴黎奢侈品集团公司前总负责人</li>
          </ol>`,
      en: `<ol>
            <li>Painter, Artist, Documentary Film Director, Photographer, Art Curator</li>
            <li>President of the Union of French and Chinese Artists (UAFC) </li>
            <li>Manager of the Atelier Sea Monster </li>
            <li>Master’s Degree in Fashion Design and Planning - Paris, Master’s Degree in luxury industry management - Paris</li>  
            <li>Former General Manager of a luxury goods company in Paris</li></ol>
            `,
      fr: `<ol>
            <li>Artiste peintre, artiste, réalisatrice de films documentaires, photographe, curatrice d’exposition</li>
            <li>Présidente de l’Union des Artistes Franco-Chinois (UAFC)</li>
            <li>Résponsable de l’Atelier Sea Monster</li>
            <li>Master en design et planning de mode - Paris, Master en administration de compagnie de produits de luxe – Paris</li>  
            <li>Ancienne Responsable Générale d’une compagnie de produits de luxe à Paris</li></ol>
            `,
    },
    style: {
      zh: `<span>
            <strong>作品风格：</strong>独创阴翳美学，以色彩诠释黑暗。
          </span>`,
      en: `<span>
            <strong>Artistic style：</strong>self-created Aesthetics of Shadows (yinyi-meixue), using colour to interpret the dark。
          </span>`,
      fr: `<span>
            <strong>Style des œuvres：</strong>style d’invention personnelle Esthétique de la pénombre (yinyi-meixue), l’emploi de la couleur pour interpréter l’obscurité
          </span>`,
    },
    own: {
      zh: `<span>2018卢森堡美术馆艺术奖</span>
          <span>2022法国巴黎个人艺术展《花臂勇士和她的刺客们》</span>
          <span>2024法国巴黎大皇宫国际艺术展</span>
          <span>2024法国巴黎卢浮宫艺术博览会金奖</span>`,
      en: `<span>2018 Medal of the Fine Arts Museum of Luxembourg</span>
          <span>2022 Personal exhibition in Paris, Painter NAN Fang and her Assassins</span>
          <span>2024 International exhibition at the Grand Palais Ephémère Paris - Art Capital</span>
          <span>2024 Gold Medal Award at the International Contemporary Art Fair at the Louvre - Art Shopping</span>`,
      fr: `<span>2018 Médaille du Musée des Beaux-Arts du Luxembourg</span>
          <span>2022 Exposition personnelle à Paris « Artiste Peintre NAN Fang et et ses asssassins » </span>
          <span>2024 Exposition internationale au Grand Palais Ephémère Paris - Art Capital</span>
          <span>2024 Médaille d’or au Salon international d’art contemporain au Louvre – Art Shopping</span>`,
    },
    live: {
      zh: `<p>
            现工作生活于法国巴黎，继续创作个人作品，其作品广泛被私人藏家收藏。
          </p>`,
      en: `<p>
          Works and lives in Paris, continues the creation of her own works, her works are widely appreciated by private art collectors
        </p>`,
      fr: `<p>
          Travaille et vit à Paris, poursuit la création de ses propres œuvres, ses œuvres sont appréciés par de nombreux collectionneurs privés
        </p>`,
    },
  };

  const [locale] = useAtom(localeAtom);

  // const onChange = (currentSlide: number) => {
  //   console.log(currentSlide);
  // };
  return (
    <div
      //flex flex-col items-center justify-center
      className={tw`text-[16px] mx-auto relative flex flex-col justify-center items-center w-[100%] min-w-[300px] w-full text-frc-100 xl:flex-row`}
    >
      <div
        className={tw`w-[90%] max-w-[900px] h-[300px] text-[#000] relative w-full overflow-hidden sm:h-[600px]`}
      >
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          effect="fade"
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          className="mySwiper"
          loop
        >
          {Array.from({ length: 9 }).map((_, index) => (
            <SwiperSlide>
              <img src={imgs[index]} className={tw`h-full w-auto`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div
        className={tw`flex-1 w-full h-100%  max-w-[540px] px-[50px] py-[20px] rounded-[10px]`}
      >
        <div className={tw`flex flex-col flex-start mb-[40px]`}>
          <strong>{InfoMap.name[locale]}</strong>
          <div
            dangerouslySetInnerHTML={{
              __html: InfoMap.experience[locale],
            }}
          />
        </div>

        <div className={tw`flex flex-col flex-start justify-end mb-[40px]`}>
          {/* <span>
            <strong>作品风格：</strong>独创阴翳美学，以色彩诠释黑暗。
          </span> */}
          <div
            dangerouslySetInnerHTML={{
              __html: InfoMap.style[locale],
            }}
          />
        </div>

        <div
          className={tw`flex flex-col flex-start mb-[40px]`}
          dangerouslySetInnerHTML={{
            __html: InfoMap.own[locale],
          }}
        />

        <div dangerouslySetInnerHTML={{ __html: InfoMap.live[locale] }} />
        {/* <p>
          现工作生活于法国巴黎，继续创作个人作品，其作品广泛被私人藏 家收藏。
        </p> */}
      </div>

      {/* <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
      </Swiper> */}
    </div>
  );
};

export default AuthorInfo;
