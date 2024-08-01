import { tw } from "twind";
import { useNavigate } from "react-router-dom";
import { useRequest } from "ahooks";
import { queryArticleList } from "@/api";
import { useAtom } from "jotai";
import { localeAtom } from "@/models/store";
import { css } from "twind/css";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { Spin } from "antd";

const Thoughts = () => {
  const [list, setList] = useState<any[]>([]);

  const navigate = useNavigate();

  const [locale] = useAtom(localeAtom);

  const { runAsync, loading } = useRequest(queryArticleList, {
    manual: true,
    onSuccess: (res) => {
      setList(res.data || []);
    },
  });

  console.log(list);

  useEffect(() => {
    runAsync();
  }, []);
  return (
    <div
      className={tw`flex flex-col items-center gap-[20px] w-full h-full pt-[20px] py-[20px] px-4 overflow-y-scroll`}
    >
      {loading ? (
        <div className={tw`w-full h-full flex justify-center items-center`}>
          <Spin />
        </div>
      ) : (
        (list || []).map((item) => (
          <div
            className={tw`max-w-[1100px] flex flex-col gap-[50px] p-[20px] text-sm bg-frc-50 border border-0 border-b-[1px] border-b-[#efefef] sm:h-[300px] sm:flex-row`}
          >
            <div className={tw`w-[250px] sm:h-[250px] flex justify-center`}>
              <img
                src={
                  item && `http://www.nanfang-art.com${item[locale]?.imgPath}`
                }
                alt=""
                style={{
                  height: "100%",
                }}
              />
            </div>
            <div className={tw`flex-1 flex flex-col`}>
              <div className={tw`text-lg font-bold h-[36px] text-frc-100`}>
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
                  className={tw`text-sm text-frc-100 cursor-pointer overell`}
                  onClick={() => {
                    navigate(`/detail/${item.groupId}`);
                  }}
                  dangerouslySetInnerHTML={{
                    __html: (item && item[locale]?.summary) || "--",
                  }}
                ></div>
                <div
                  className={tw`w-full flex justify-between items-center text-[#8d8d8d]`}
                >
                  <span
                    className={tw`cursor-pointer hover:text-underline hover:text-frc-300`}
                    onClick={() => {
                      navigate("/author");
                    }}
                  >
                    {(item && item[locale]?.author) || "--"}
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
        ))
      )}
    </div>
  );
};

export default Thoughts;
