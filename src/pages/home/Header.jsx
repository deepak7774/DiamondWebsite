import { Link, NavLink } from "react-router-dom";
// import "../Style.css";
import samaLogo from "../../images/samaLogo.png";
import { BsBag, BsFillBellFill } from "react-icons/bs";
import { AiOutlineSearch, AiOutlineHeart, AiOutlineUser } from "react-icons/ai";

export const Header = () => {
  return (
    <>
    <header className="header container">
      <div className="header-top">
        <div className="header-contact-us">
          <Link className="button" to="/">Contact Us</Link>
        </div>
        <div className="header-logo">
          <Link to="/">
            <img src={samaLogo} alt="" />
          </Link>
        </div>

        <div className="header-icons">
          <div className="bell-icon">
            <Link to="/">
              <BsFillBellFill />
              <span>01</span>
            </Link>
          </div>
          <div className="search-icon">
            <Link to="/">
              <AiOutlineSearch />
            </Link>
          </div>
          <div className="bag-icon">
            <Link to="/">
              <BsBag />
            </Link>
          </div>
          <div className="heart-icon">
            <Link to="/">
              <AiOutlineHeart />
            </Link>
          </div>
          <div className="user-icon">
            <Link to="/">
              <AiOutlineUser />
            </Link>
          </div>
        </div>
      </div>

      <nav className="nav">
        <ul>
          <li>
            <NavLink to="/">ENGAGEMENT RINGS</NavLink>
          </li>
          <li>
            <NavLink to="/"> WEDDING RINGS</NavLink>
          </li>
          <li>
            <NavLink to="/">DIAMONDS</NavLink>
          </li>
          <li>
            <NavLink to="/">GEMSTONES</NavLink>
          </li>
          <li>
            <NavLink to="/">ABOUT</NavLink>
          </li>
        </ul>
      </nav>
    </header>
    </>
  );
};
export default Header;
