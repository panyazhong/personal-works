import { tw } from "twind";
import { useNavigate } from "react-router-dom";
import ArticleDetail from "./article-detail";

const PersonalWorks = () => {
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
      className={tw`flex flex-col items-center w-full h-full pt-[100px] py-[20px] px-4 overflow-y-scroll`}
    >
      {list.map((item) => (
        <div
          className={tw`flex flex-col flex-start w-full p-[20px] text-sm bg-frc-200 mb-[20px] max-w-[800px]`}
          onClick={() => {
            navigate("/detail/1");
          }}
        >
          <div className={tw`text-lg font-bold`}>{item.title}</div>
          <div className={tw`text-sm text-frc-600`}>{item.desc}</div>
          <div className={tw`w-full flex justify-between items-center`}>
            <span>{item.publishDate}</span>
            <span>{item.author}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PersonalWorks;
