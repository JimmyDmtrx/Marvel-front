import Logo from "../assets/img/Marvel_Logo.svg.png";
import { Link } from "react-router-dom";
import "../assets/css/header.css";
import { Navigate } from "react-router-dom";

const Header = ({ token, setUser }) => {
  return (
    <div className="header">
      <div className="container-header">
        <div className="button-container-header">
          <Link to={"/signup"}>
            <button className="btn-grad">S'INSCRIRE</button>
          </Link>
        </div>
        <div className="sous-countain-header">
          <Link to={"/"}>
            <img className="header-logo" src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="button-container-header">
          {token ? (
            <button
              className="submitButton"
              onClick={() => {
                setUser(null);
                Navigate("/");
              }}
            >
              Se déconnecter
            </button>
          ) : (
            <Link to={"/login"}>
              <button className="btn-grad">se connecter</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
