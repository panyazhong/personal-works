import { tw } from "twind";
import home from "@/assets/IMG_1927.png";

const Home = () => {
  return (
    <div
      className={tw`flex justify-center py-[20px] items-center w-full h-full`}
    >
      <img src={home} className={tw`h-full`} />
    </div>
  );
};

export default Home;
