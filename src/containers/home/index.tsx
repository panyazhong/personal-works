import { tw } from "twind";
import home from "@/assets/bg.jpg";

const Home = () => {
  return (
    <div
      className={tw`flex justify-center flex-col py-[20px] items-center w-full h-full min-w-[400px]`}
    >
      <img src={home} className={tw`sm:w-[60%] w-[90%]`} />

      <div
        className={tw`text-frc-100 flex flex-col items-end sm:w-[60%] w-[90%] w-full`}
      >
        <div className={tw`text-[32px]`}>旅法画家 - 南方</div>
        <div className={tw`text-[32px]`}>Artiste peintre - NAN Fang</div>

        <div className={tw`text-[30px]`}>UAFC中法艺术家协会会长</div>
        <div className={tw`text-[30px]`}>Union des Artistes Franco-Chinois</div>
      </div>
    </div>
  );
};

export default Home;
