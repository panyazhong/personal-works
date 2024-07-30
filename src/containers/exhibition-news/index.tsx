import { tw } from "twind";
import { useNavigate } from "react-router-dom";
import { css } from "twind/css";

const ExhibitionNews = () => {
  const list = [
    {
      title: "123",
      desc: "这篇文章用来测试置顶功能. 设置文章属性 sticky: [number] 来指定置顶优先级，数字越大优先级越高，但不能小于等于0. 该篇文章的 sticky 为 2. 它应该出现在文章列表的顶部，并高于优先级更低的文章.",
      publishDate: "2024-01-02",
      author: "lvfa",
    },
    {
      title: "123",
      desc: "desc",
      publishDate: "2024-01-02",
      author: "lvfa",
    },
    {
      title: "123",
      desc: "desc",
      publishDate: "2024-01-02",
      author: "lvfa",
    },
    {
      title: "123",
      desc: "desc",
      publishDate: "2024-01-02",
      author: "lvfa",
    },
    {
      title: "123",
      desc: "desc",
      publishDate: "2024-01-02",
      author: "lvfa",
    },
    {
      title: "123",
      desc: "desc",
      publishDate: "2024-01-02",
      author: "lvfa",
    },
    {
      title: "123",
      desc: "desc",
      publishDate: "2024-01-02",
      author: "lvfa",
    },
    {
      title: "123",
      desc: "desc",
      publishDate: "2024-01-02",
      author: "lvfa",
    },
    {
      title: "123",
      desc: "desc",
      publishDate: "2024-01-02",
      author: "lvfa",
    },
    {
      title: "123",
      desc: "desc",
      publishDate: "2024-01-02",
      author: "lvfa",
    },
    {
      title: "123",
      desc: "desc",
      publishDate: "2024-01-02",
      author: "lvfa",
    },
    {
      title: "123",
      desc: "desc",
      publishDate: "2024-01-02",
      author: "lvfa",
    },
    {
      title: "123",
      desc: "desc",
      publishDate: "2024-01-02",
      author: "lvfa",
    },
    {
      title: "123",
      desc: "desc",
      publishDate: "2024-01-02",
      author: "lvfa",
    },
    {
      title: "123",
      desc: "desc",
      publishDate: "2024-01-02",
      author: "lvfa",
    },
    {
      title: "123",
      desc: "desc",
      publishDate: "2024-01-02",
      author: "lvfa",
    },
    {
      title: "123",
      desc: "desc",
      publishDate: "2024-01-02",
      author: "lvfa",
    },
    {
      title: "123",
      desc: "desc",
      publishDate: "2024-01-02",
      author: "lvfa",
    },
    {
      title: "123",
      desc: "desc",
      publishDate: "2024-01-02",
      author: "lvfa",
    },
    {
      title: "123",
      desc: "desc",
      publishDate: "2024-01-02",
      author: "lvfa",
    },
    {
      title: "123",
      desc: "desc",
      publishDate: "2024-01-02",
      author: "lvfa",
    },
    {
      title: "123",
      desc: "desc",
      publishDate: "2024-01-02",
      author: "lvfa",
    },
    {
      title: "123",
      desc: "desc",
      publishDate: "2024-01-02",
      author: "lvfa",
    },
    {
      title: "123",
      desc: "desc",
      publishDate: "2024-01-02",
      author: "lvfa",
    },
    {
      title: "123",
      desc: "desc",
      publishDate: "2024-01-02",
      author: "lvfa",
    },
    {
      title: "123",
      desc: "desc",
      publishDate: "2024-01-02",
      author: "lvfa",
    },
    {
      title: "123",
      desc: "desc",
      publishDate: "2024-01-02",
      author: "lvfa",
    },
    {
      title: "123",
      desc: "desc",
      publishDate: "2024-01-02",
      author: "lvfa",
    },
    {
      title: "123",
      desc: "desc",
      publishDate: "2024-01-02",
      author: "lvfa",
    },
    {
      title: "123",
      desc: "desc",
      publishDate: "2024-01-02",
      author: "lvfa",
    },
    {
      title: "123",
      desc: "desc",
      publishDate: "2024-01-02",
      author: "lvfa",
    },
    {
      title: "123",
      desc: "desc",
      publishDate: "2024-01-02",
      author: "lvfa",
    },
    {
      title: "123",
      desc: "desc",
      publishDate: "2024-01-02",
      author: "lvfa",
    },
    {
      title: "123",
      desc: "desc",
      publishDate: "2024-01-02",
      author: "lvfa",
    },
    {
      title: "123",
      desc: "desc",
      publishDate: "2024-01-02",
      author: "lvfa",
    },
    {
      title: "123",
      desc: "desc",
      publishDate: "2024-01-02",
      author: "lvfa",
    },
    {
      title: "123",
      desc: "desc",
      publishDate: "2024-01-02",
      author: "lvfa",
    },
    {
      title: "123",
      desc: "desc",
      publishDate: "2024-01-02",
      author: "lvfa",
    },
    {
      title: "123",
      desc: "desc",
      publishDate: "2024-01-02",
      author: "lvfa",
    },
    {
      title: "123",
      desc: "desc",
      publishDate: "2024-01-02",
      author: "lvfa",
    },
    {
      title: "123",
      desc: "desc",
      publishDate: "2024-01-02",
      author: "lvfa",
    },
    {
      title: "123",
      desc: "desc",
      publishDate: "2024-01-02",
      author: "lvfa",
    },
    {
      title: "123",
      desc: "desc",
      publishDate: "2024-01-02",
      author: "lvfa",
    },
    {
      title: "123",
      desc: "desc",
      publishDate: "2024-01-02",
      author: "lvfa",
    },
    {
      title: "123",
      desc: "desc",
      publishDate: "2024-01-02",
      author: "lvfa",
    },
    {
      title: "123",
      desc: "desc",
      publishDate: "2024-01-02",
      author: "lvfa",
    },
    {
      title: "123",
      desc: "desc",
      publishDate: "2024-01-02",
      author: "lvfa",
    },
    {
      title: "123",
      desc: "desc",
      publishDate: "2024-01-02",
      author: "lvfa",
    },
    {
      title: "123",
      desc: "desc",
      publishDate: "2024-01-02",
      author: "lvfa",
    },
    {
      title: "123",
      desc: "desc",
      publishDate: "2024-01-02",
      author: "lvfa",
    },
    {
      title: "123",
      desc: "desc",
      publishDate: "2024-01-02",
      author: "lvfa",
    },
    {
      title: "123",
      desc: "desc",
      publishDate: "2024-01-02",
      author: "lvfa",
    },
    {
      title: "123",
      desc: "desc",
      publishDate: "2024-01-02",
      author: "lvfa",
    },
    {
      title: "123",
      desc: "desc",
      publishDate: "2024-01-02",
      author: "lvfa",
    },
  ];

  const navigate = useNavigate();
  return (
    <div
      className={tw`grid grid-cols-1 gap-[20px] w-full h-full pt-[20px] py-[20px] px-4 overflow-y-scroll md:grid-cols-2`}
    >
      {list.map((item, index) => (
        // <div
        //   className={tw`${
        //     index % 2 === 0 ? "place-self-end" : ""
        //   } w-full flex flex-col flex-start h-[300px] p-[20px] text-sm bg-frc-200 max-w-[800px] rounded-[5px]`}
        // >
        //   <div className={tw`text-lg font-bold`}>{item.title}</div>
        //   <div
        //     className={tw`text-sm text-frc-600 truncate cursor-pointer hover:text-frc-300`}
        //     onClick={() => {
        //       navigate("/detail/1");
        //     }}
        //   >
        //     {item.desc}
        //   </div>
        //   <div className={tw`w-full flex justify-between items-center`}>
        //     <span>{item.publishDate}</span>
        //     <span
        //       className={tw`cursor-pointer hover:text-underline hover:text-frc-300`}
        //       onClick={() => {
        //         navigate("/author");
        //       }}
        //     >
        //       {item.author}
        //     </span>
        //   </div>
        // </div>
        <div
          className={tw`max-w-[800px] flex flex-col gap-[50px] p-[20px] text-sm bg-frc-50 border border-0 border-b-[1px] border-b-[#efefef] sm:h-[300px] sm:flex-row`}
        >
          <div className={tw`w-[250px] sm:h-[250px]`}>
            <img
              src="https://upload.jianshu.io/admin_banners/web_images/5093/55c24be237c81439b15a72983b4d8554dd84794b.png?imageMogr2/quality/50"
              alt=""
            />
          </div>
          <div className={tw`flex-1 flex flex-col`}>
            <div className={tw`text-lg font-bold h-[36px] text-frc-100`}>
              {"--"}
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
              >
                展讯内容展讯内容展讯内容展讯内容展讯内容展讯内容展讯内容展讯内容展讯内容展讯内容展讯内容展讯内容展讯内容展讯内容展讯内容展讯内容展讯内容展讯内容展讯内容展讯内容展讯内容展讯内容展讯内容展讯内容
              </div>
              <div
                className={tw`w-full flex justify-between items-center text-[#8d8d8d]`}
              >
                <span
                  className={tw`cursor-pointer hover:text-underline hover:text-frc-300`}
                  onClick={() => {
                    navigate("/author");
                  }}
                >
                  {"--"}
                </span>
                <span>{"--"}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExhibitionNews;
