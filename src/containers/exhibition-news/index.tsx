import { tw } from "twind";
import { useNavigate } from "react-router-dom";

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
      className={tw`grid grid-cols-1 gap-[20px] w-full h-full pt-[20px] py-[20px] px-4 overflow-y-scroll md:grid-cols-2 2xl:grid-cols-3`}
    >
      {list.map((item) => (
        <div
          className={tw`flex flex-col flex-start h-[150px] p-[20px] text-sm bg-frc-200 max-w-[800px] rounded-[5px]`}
        >
          <div className={tw`text-lg font-bold`}>{item.title}</div>
          <div
            className={tw`text-sm text-frc-600 truncate cursor-pointer hover:text-frc-300`}
            onClick={() => {
              navigate("/detail/1");
            }}
          >
            {item.desc}
          </div>
          <div className={tw`w-full flex justify-between items-center`}>
            <span>{item.publishDate}</span>
            <span
              className={tw`cursor-pointer hover:text-underline hover:text-frc-300`}
              onClick={() => {
                navigate("/author");
              }}
            >
              {item.author}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExhibitionNews;
