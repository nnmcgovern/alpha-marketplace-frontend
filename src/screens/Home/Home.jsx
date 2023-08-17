import "./Home.css";
import Carousel from "./Carousel";
import carouselData from "./CarouselData";

export default function Home() {
  return (
    <div className="home">
      <Carousel data={carouselData} />
    </div>
  );
}
