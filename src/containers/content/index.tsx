/* eslint-disable @typescript-eslint/no-explicit-any */
import { queryPaintDetail, queryPaintList } from "@/api";
import { localeAtom } from "@/models/store";
import { useAsyncEffect, useRequest } from "ahooks";
import { Image, Modal, Spin } from "antd";
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

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { LoadingOutlined } from "@ant-design/icons";

const label = {
  zh: "作品思想",
  en: "Thoughts",
  fr: "Réflexions",
};

const Content = () => {
  const [imgList, setImgList] = useState<any[]>([]);
  const [detail, setDetail] = useState<any>();
  const [open, setOpen] = useState<boolean>(false);
  const [currentImg, setCurrentImg] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [locale] = useAtom(localeAtom);
  const navigate = useNavigate();
  const [topPositionMap, setTopPositionMap] = useState<number[]>([1]);

  const { runAsync } = useRequest(queryPaintList, {
    manual: true,
    onSuccess: (res) => {
      setImgList(res.data);
      setTopPositionMap([
        ...new Set([
          ...res.data
            .filter((i: any) => i.topPosition)
            .map((i: any) => i.topPosition),
        ]),
      ]);
    },
  });

  const handleClick = async (id: string) => {
    navigate(`/detail/${id}`);
  };

  useAsyncEffect(async () => {
    if (!open) {
      setCurrentImg({});
      return;
    }
    setLoading(true);
    const res = await queryPaintDetail({
      groupId: currentImg[locale]?.groupId,
    });

    setDetail(res.data);
    setLoading(false);
  }, [open]);

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

              .ant-image {
                height: 100%;
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
              navigation
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
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              {/* {Array.from({ length: 9 }).map((_, index) => ( */}
              {imgList
                .filter((i) => i.topPosition === position)
                .map((item) => (
                  <SwiperSlide>
                    <Image.PreviewGroup
                      preview={
                        imgList
                          .filter((i) => i.topPosition === position)
                          .map(
                            (item) =>
                              `http://www.nanfang-art.com/${item[locale]?.imgPath}`
                          ) as any
                      }
                    >
                      <Image
                        src={`http://www.nanfang-art.com/${item[locale]?.imgPath}`}
                        className={tw`h-full w-auto`}
                      />
                    </Image.PreviewGroup>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        );
      })}

      <div
        // className={tw`flex flex-wrap flex-start items-center w-full h-full gap-[20px] px-[20px] pt-[100px]`}
        className={tw`grid w-full gap-[20px] px-[20px] pt-[20px] pb-[20px] lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2`}
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
                  src={item[locale]?.imgPath}
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
          key={`${open}`}
          width={750}
          style={{
            minHeight: "200px",
          }}
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
          {loading ? (
            <div
              className={tw`
                  w-full
                  h-[300px]
                  flex
                  items-center
                  justify-center
                 `}
            >
              <Spin indicator={<LoadingOutlined spin />} />
            </div>
          ) : (
            <div
              className={tw`h-full flex flex-col justify-between sm:flex-row`}
            >
              <div className={tw`flex-1 sm:mr-[170px]`}>
                <img
                  className={tw`rounded-[4px] flex-1`}
                  height={"90%"}
                  style={{
                    minWidth: "400px",
                  }}
                  src={`http://www.nanfang-art.com${currentImg[locale]?.imgPath}`}
                  // src={
                  //   "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                  // }
                ></img>
              </div>

              <div
                className={tw`cursor-pointer 
                  w-full
                  h-[60px]
                  flex 
                 
                  items-center
                  justify-between 
                  text-frc-100 
                  
                 
                 
                  bottom-0
                  right-0
                  sm:h-full 
                  sm:w-[160px] 
                  sm:absolute
                  sm:top-0
                  sm:pt-[50px]
                  sm:pb-[20px]
                  sm:flex-col
                `}
              >
                <div className={tw`w-full flex flex-col items-start`}>
                  <span className={tw`w-full text-[15px] truncate`}>
                    {currentImg[locale]?.title}
                  </span>
                  <span className={tw`mt-2 overell hidden sm:block`}>
                    {currentImg[locale]?.content}
                  </span>
                </div>

                <div className={tw`flex flex-col items-center w-full`}>
                  {detail?.articleInfo &&
                    detail?.articleInfo?.articleGroupId && (
                      <div className={tw`flex w-full justify-end sm:flex-col`}>
                        <span
                          className={tw`w-[87px] justify-between text-right sm:text-left sm:w-[140px]`}
                        >
                          {label[locale]}：
                        </span>
                        <span
                          className={tw`w-auto text-right cursor-pointer underline color-[#ffebc8]  truncate sm:text-left sm:w-[140px] sm:text-left`}
                          onClick={() => {
                            console.log(detail);
                            if (
                              detail?.articleInfo &&
                              detail?.articleInfo?.articleGroupId
                            ) {
                              handleClick(detail?.articleInfo?.articleGroupId);
                            }
                          }}
                        >
                          {detail?.articleInfo
                            ? detail?.articleInfo[locale]
                            : "--"}
                        </span>
                      </div>
                    )}

                  <span
                    className={tw`text-[#fefefe] text-right w-full text-[12px] pr-2`}
                  >
                    {dayjs(currentImg[locale]?.updateTime).format(
                      "YYYY-MM-DD HH:mm:ss"
                    )}
                  </span>
                </div>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default Content;
