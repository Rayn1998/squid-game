import Carousel from "../Carousel/Carousel";
import Header from "../Header/Header";

const Layout = ({ props }) => {
  return (
    <div className="layout">
      <Header />
      <Carousel click={props.popupHandle} />
    </div>
  );
};

export default Layout;
