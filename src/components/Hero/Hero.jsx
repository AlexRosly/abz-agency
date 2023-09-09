import Link from "react-scroll/modules/components/Link";
import "./Hero.scss";

export const Hero = () => {
  return (
    <div className="hero__section">
      <h1 className="hero__title">Test assignment for front-end developer</h1>
      <p className="hero__text">
        What defines a good front-end developer is one that has skilled
        knowledge of HTML, CSS, JS with a vast understanding of User design
        thinking as they'll be building web interfaces with accessibility in
        mind. They should also be excited to learn, as the world of Front-End
        Development keeps evolving.
      </p>
      <Link
        className="hero__btn"
        activeClass="active"
        to="singup"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Sign up
      </Link>
    </div>
  );
};
