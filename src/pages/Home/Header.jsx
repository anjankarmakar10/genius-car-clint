import images from "../../assets/images";
import Slide from "./Slide";

const Header = () => {
  return (
    <div>
      <section className="carousel w-full h-[95vh]">
        <Slide image={images.b1} slide={1} prev={6} next={2} />
        <Slide image={images.b2} slide={2} prev={1} next={3} />
        <Slide image={images.b3} slide={3} prev={2} next={4} />
        <Slide image={images.b4} slide={4} prev={3} next={5} />
        <Slide image={images.b5} slide={5} prev={4} next={6} />
        <Slide image={images.b6} slide={6} prev={5} next={1} />
      </section>
    </div>
  );
};

export default Header;
