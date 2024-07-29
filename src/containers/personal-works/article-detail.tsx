import { queryArticleDetail } from "@/api";
import { localeAtom } from "@/models/store";
import { useDebounceEffect, useRequest, useScroll } from "ahooks";
import { Spin } from "antd";
import { useAtom } from "jotai";
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { tw } from "twind";
import { css } from "twind/css";

const ArticleDetail = () => {
  const [context, setContext] = useState<any>({});
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = useScroll(scrollRef);
  const navigate = useNavigate();
  const location = useLocation();
  const [locale] = useAtom(localeAtom);

  const scrollTop = () => {
    // scrollRef.current!.scrollTop = 0;
    scrollRef.current!.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const back = () => {
    navigate(-1);
  };

  const { runAsync, loading } = useRequest(queryArticleDetail, {
    manual: true,
    onSuccess: (res) => {
      setContext(res.data);
    },
  });

  useDebounceEffect(() => {
    const groupId = location.pathname.split("/").reverse()[0];

    runAsync({ groupId });
  }, [location.pathname]);
  return (
    <div
      className={tw`overflow-y-scroll h-full pt-[20px] px-[80px]`}
      ref={scrollRef}
    >
      {loading ? (
        <div className={tw`w-full h-full flex justify-center items-center`}>
          <Spin />
        </div>
      ) : (
        <div
          className={tw`text-frc-100 ${css`
            p {
              margin-bottom: 24px;
            }

            img {
              margin-top: 10px;
              margin-bottom: 10px;
            }
          `}`}
          dangerouslySetInnerHTML={{
            __html: context[locale]?.content,
          }}
        ></div>
      )}

      <div
        className={tw`fixed top-[100px] right-[25px] w-[50px] h-[50px] bg-[#ccc] flex items-center justify-center cursor-pointer hover:text-frc-200 rounded-[5px]`}
        onClick={back}
      >
        返回
      </div>
      {(scroll?.top || 0) > 100 && (
        <div
          className={tw`fixed bottom-[50px] right-[25px] w-[50px] h-[50px] bg-[#ccc] flex items-center justify-center cursor-pointer hover:text-frc-200 rounded-[5px]`}
          onClick={scrollTop}
        >
          TOP
        </div>
      )}
    </div>
  );
};

export default ArticleDetail;
