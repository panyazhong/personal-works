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

const Content = () => {
  const [imgList, setImgList] = useState<any[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [currentImg, setCurrentImg] = useState<any>({});
  const [locale] = useAtom(localeAtom);
  const navigate = useNavigate();

  const { runAsync } = useRequest(queryPaintList, {
    manual: true,
    onSuccess: (res) => {
      setImgList(res.data);
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
    <div
      // className={tw`flex flex-wrap flex-start items-center w-full h-full gap-[20px] px-[20px] pt-[100px]`}
      className={tw`grid w-full h-full gap-[20px] px-[20px] pt-[20px] pb-[20px] overflow-scroll lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2`}
    >
      {imgList.map((item) => (
        <div
          className={tw`border border-frc-400 flex flex-col justify-center items-center rounded-[10px] shadow-1lv`}
        >
          <div className={tw`flex-1 flex items-center rounded-[10px] p-2`}>
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
          src={currentImg[locale]?.imgPath}
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
  );
};

export default Content;
