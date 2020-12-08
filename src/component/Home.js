import homeppic from "../homeppic.png";
//style
import { TextHeader, TextBeforeTheLineHeader, ImgLogo } from "../styles";

const Home = () => {
  return (
    <div>
      <TextHeader>Insite Design</TextHeader>
      <TextBeforeTheLineHeader>
        "Explore luxury furniture and accessories from the world's finest brands
        and artisans"
      </TextBeforeTheLineHeader>
      <ImgLogo src={homeppic} alt="logo" />
    </div>
  );
};

export default Home;
