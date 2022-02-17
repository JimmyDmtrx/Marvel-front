import Logo from "../assets/img/Marvel_Logo.svg.png";
import { Link } from "react-router-dom";
import "../assets/css/header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="container-header">
        <div className="button-container-header">
          <Link to={"/signup"}>
            <button className="header-button">S'INSCRIRE</button>
          </Link>
        </div>
        <div className="sous-countain-header">
          <Link to={"/"}>
            <img className="header-logo" src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="button-container-header">
          <Link to={"/login"}>
            <button className="header-button">se connecter</button>
          </Link>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Header;
