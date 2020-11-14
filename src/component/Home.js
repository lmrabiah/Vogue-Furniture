import {
  GlobalStyle,
  TextHeader,
  TextBeforeTheLineHeader,
  ImgLogo,
} from "../styles";
import shopPic from "../shop.png";

const Home = () => {
  return (
    <div>
      <TextHeader>Vogue Furniture</TextHeader>
      <TextBeforeTheLineHeader>
        "Explore luxury furniture and accessories from the world's finest brands
        and artisans"
      </TextBeforeTheLineHeader>
      <ImgLogo src={shopPic} alt="logo" />
    </div>
  );
};

export default Home;