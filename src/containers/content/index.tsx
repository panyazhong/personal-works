import { queryPaintDetail, queryPaintList } from "@/api";
import { localeAtom } from "@/models/store";
import { useRequest } from "ahooks";
import { Modal } from "antd";
import dayjs from "dayjs";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { tw } from "twind";
import { css } from "twind/css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

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
} from "../author-info/assets";

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

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const Content = () => {
  const [imgList, setImgList] = useState<any[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [currentImg, setCurrentImg] = useState<any>({});
  const [locale] = useAtom(localeAtom);
  const navigate = useNavigate();
  const [topPositionMap, setTopPositionMap] = useState<number[]>([1, 2]);

  const { runAsync } = useRequest(queryPaintList, {
    manual: true,
    onSuccess: (res) => {
      setImgList(res.data);
      setTopPositionMap([
        ...new Set([
          ...res.data.filter((i) => i.topPosition).map((i) => i.topPosition),
        ]),
      ]);
    },
  });

  const handleClick = async (id: string) => {
    const res = await queryPaintDetail({ groupId: id });

    const { groupId } = res.data[locale];

    if (groupId) {
      navigate(`/detail/${groupId}`);
    }
  };

  useEffect(() => {
    runAsync();
  }, []);

  return (
    <div className={tw`w-full px-[20px] h-full overflow-y-scroll`}>
      {topPositionMap.map((position, index) => {
        return (
          <div
            className={tw`h-[200px] ${
              index !== topPositionMap.length - 1 ? "mb-4" : ""
            } ${css`
              .swiper {
                width: 100%;
                height: 100%;
              }

              .swiper-slide {
                text-align: center;
                font-size: 18px;
                background: rgba(0, 0, 0, 0.1);

                border-radius: 20px;

                /* Center slide text vertically */
                display: flex;
                justify-content: center;
                align-items: center;
              }

              .swiper-slide img {
                display: block;
                height: 100%;
                object-fit: cover;
              }

              .swiper-button-prev,
              .swiper-button-next {
                display: flex;
                justify-content: center;
                align-items: center;
                color: #fff;
                background-color: rgba(0, 0, 0, 0.1);
                padding: 8px !important;
                border-radius: 60px;
                width: 60px;
                height: 60px;
                display: none;
              }
              .swiper-button-prev:after,
              .swiper-button-next:after {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
              }
              .swiper:hover {
                .swiper-button-prev,
                .swiper-button-next {
                  display: block;
                }
              }
            `}`}
          >
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop
              breakpoints={{
                "@0.00": {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                "@0.75": {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                "@1.00": {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                "@1.50": {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
            >
              {/* {Array.from({ length: 9 }).map((_, index) => ( */}
              {imgList
                .filter((i) => i.topPosition === position)
                .map((item, index) => (
                  <SwiperSlide>
                    <img
                      src={item[locale].imgPath}
                      className={tw`h-full w-auto`}
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        );
      })}

      <div
        // className={tw`flex flex-wrap flex-start items-center w-full h-full gap-[20px] px-[20px] pt-[100px]`}
        className={tw`grid w-full h-full gap-[20px] px-[20px] pt-[20px] pb-[20px] overflow-scroll lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2`}
      >
        {imgList
          .filter((i) => !i.topPosition)
          .map((item) => (
            <div
              className={tw`border border-frc-400 flex flex-col justify-center items-center rounded-[10px] shadow-1lv`}
            >
              <div
                className={tw`flex-1 flex items-center rounded-[10px] min-h-[150px] p-2`}
              >
                <img
                  className={tw`rounded-[4px]`}
                  src={item[locale].imgPath}
                  onClick={() => {
                    setOpen(true);
                    setCurrentImg(item);
                  }}
                />
              </div>
              <div
                className={tw`h-[48px] w-full border-t-1 border-t-frc-400 text-frc-100 flex items-center px-2`}
              >
                {item[locale]?.title}
              </div>
            </div>
          ))}

        <Modal
          open={open}
          footer={null}
          onClose={() => {
            setOpen(false);
          }}
          onCancel={() => {
            setOpen(false);
          }}
          centered
          className={tw`
          bg-inherit
          ${css`
            .ant-modal-content {
              background: rgba(0, 0, 0, 0.8);
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: 0px;
              width: 100%;
            }
            .ant-modal-close {
              color: #efefef;
            }
            .ant-modal-close:hover {
              color: #efefef;
            }
          `}  
        
        `}
        >
          <img
            className={tw`rounded-[4px] w-full`}
            height={"90%"}
            style={{
              minWidth: "400px",
            }}
            src={`http://www.nanfang-art.com/${currentImg[locale]?.imgPath}`}
            // src={
            //   "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
            // }
          ></img>

          <div
            className={tw`cursor-pointer w-full h-[32px] border-t-[1px] border-t-[#494949] flex items-center justify-between px-[20px] text-frc-100`}
          >
            <span
              onClick={() => {
                handleClick(currentImg[locale]?.groupId);
              }}
            >
              {currentImg[locale]?.title}
            </span>
            <span className={tw`text-[#fefefe]`}>
              {dayjs(currentImg[locale]?.updateTime).format(
                "YYYY-MM-DD HH:mm:ss"
              )}
            </span>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Content;
