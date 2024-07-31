import { tw } from "twind";
import { useNavigate } from "react-router-dom";
import { css } from "twind/css";
import { useRequest } from "ahooks";
import { queryExhibitionList } from "@/api";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { localeAtom } from "@/models/store";
import dayjs from "dayjs";

const ExhibitionNews = () => {
  const [list, setList] = useState<any[]>([]);

  const navigate = useNavigate();
  const [locale] = useAtom(localeAtom);

  const { runAsync } = useRequest(queryExhibitionList, {
    manual: true,
    onSuccess: (res) => {
      setList(res.data);
    },
  });

  useEffect(() => {
    runAsync();
  }, []);
  return (
    <div
      className={tw`grid grid-cols-1 grid-flow-row gap-[20px] w-full h-full pt-[20px] py-[20px] px-4 overflow-y-scroll md:grid-cols-2`}
    >
      {list.map((item, index) => (
        <div
          style={{
            placeSelf: index % 2 === 0 ? "start end" : "",
          }}
          onClick={() => {
            navigate(`/news-detail/${item.groupId}`);
          }}
          className={tw`cursor-pointer max-w-[900px] flex flex-col gap-[50px] p-[20px] text-sm bg-frc-50 border border-0 border-b-[1px] border-b-[#efefef] sm:h-[300px] sm:flex-row`}
        >
          <div className={tw`w-[250px] sm:h-[250px] flex justify-center`}>
            <img
              src={`http://www.nanfang-art.com/${item[locale]?.imgPath}`}
              alt=""
              style={{
                height: "100%",
              }}
            />
          </div>
          <div
            className={tw`flex-1 flex flex-col
            ${css`
              .title {
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 3;
              }
            `}
          `}
          >
            <div className={tw`text-lg font-bold h-[72px] text-frc-100 title`}>
              {(item && item[locale]?.title) || "--"}
            </div>
            <div
              className={tw`w-full flex-1 flex flex-col justify-between
              ${css`
                .overell {
                  overflow: hidden;
                  text-overflow: ellipsis;
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                  -webkit-line-clamp: 5;
                }
              `}
            `}
            >
              <div
                className={tw`text-sm text-frc-100 overell`}
                dangerouslySetInnerHTML={{
                  __html: (item && item[locale]?.summary) || "--",
                }}
              ></div>
              <div
                className={tw`w-full flex justify-between items-center text-[#8d8d8d]`}
              >
                <span
                  className={tw`cursor-pointer hover:text-underline hover:text-frc-300`}
                >
                  {"--"}
                </span>
                <span>
                  {dayjs(item[locale]?.updateTime).format(
                    "YYYY-MM-DD HH:mm:ss"
                  ) || "--"}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExhibitionNews;
