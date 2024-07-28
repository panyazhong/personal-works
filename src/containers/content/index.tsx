import { queryPaintList } from "@/api";
import { localeAtom } from "@/models/store";
import { useRequest } from "ahooks";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { tw } from "twind";

const Content = () => {
  const [imgList, setImgList] = useState<any[]>([]);
  const [locale] = useAtom(localeAtom);

  const { runAsync } = useRequest(queryPaintList, {
    manual: true,
    onSuccess: (res) => {
      setImgList(res.data);
    },
  });

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
            <img className={tw`rounded-[4px]`} src={item[locale].imgPath} />{" "}
          </div>
          <div
            className={tw`h-[48px] w-full border-t-1 border-t-frc-400 text-frc-100 flex items-center px-2`}
          >
            {item[locale]?.title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Content;
