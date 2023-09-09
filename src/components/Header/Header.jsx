import { Link, animateScroll as scroll } from "react-scroll";
import "./Header.scss";
import Logo from "../../assets/images/logo.svg";

export const Header = () => {
  return (
    <div className="header__block">
      <div className="header__logo">
        <img src={Logo} alt="logo" />
        <span className="header__text">Testtask</span>
      </div>
      <nav className="nav__block">
        <Link
          className="nav__link"
          activeClass="active"
          to="users"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Users
        </Link>
        <Link
          className="nav__link"
          activeClass="active"
          to="singup"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Sign up
        </Link>
      </nav>
    </div>
  );
};
