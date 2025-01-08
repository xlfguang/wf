import { HomeBody, LeftImg, RightImg } from "./style"
import leftImg from "@/assets/left.png"
import rightImg from "@/assets/right.png"

const Home = () => {
  

  return (
    <HomeBody>
      <LeftImg src={leftImg}/>
      <RightImg src={rightImg}/>
    </HomeBody>
  );
};

export default Home;