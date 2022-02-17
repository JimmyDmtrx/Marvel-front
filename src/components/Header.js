import Logo from "../assets/img/Marvel_Logo.svg.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to={"/"}>
        <img src={Logo} alt="logo" />
      </Link>

      <Link to={"/signup"}>
        <button>s'inscrire</button>
      </Link>
      <Link to={"/login"}>
        <button>se connecter</button>
      </Link>
      <div></div>
    </div>
  );
};

export default Header;
