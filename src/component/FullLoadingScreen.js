import LoadingScreen from "react-loading-screen";
import logoL from "../logoL.png";
const FullLoadingScreen = () => {
  return (
    <LoadingScreen
      loading={true}
      bgColor="#f1f1f1"
      spinnerColor="#8d6e63"
      textColor="#5d4037"
      logoSrc={logoL}
      text="Loading"
    ></LoadingScreen>
  );
};

export default FullLoadingScreen;
