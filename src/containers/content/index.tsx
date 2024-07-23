import { tw } from "twind";

const Content = () => {
  const imgList = [
    {
      src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      src: "https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp",
    },
    {
      src: "https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp",
    },
    {
      src: "https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp",
    },
    {
      src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      src: "https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp",
    },
    {
      src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      src: "https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp",
    },
    {
      src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      src: "https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webpg",
    },
  ];
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
            <img className={tw`rounded-[4px]`} src={item.src} />{" "}
          </div>
          <div
            className={tw`h-[48px] w-full border-t-1 border-t-frc-400 text-frc-100 flex items-center px-2`}
          >
            title
          </div>
        </div>
      ))}
    </div>
  );
};

export default Content;
