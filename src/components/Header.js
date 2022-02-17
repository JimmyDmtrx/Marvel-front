import Logo from "../assets/img/Marvel_Logo.svg.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to={"/"}>
        <img src={Logo} alt="logo" />
      </Link>

      <input type="text" placeholder="Votre recherche..." />
      <Link to={"/signup"}>
        <button>s'inscrire</button>
      </Link>
      <Link to={"/login"}>
        <button>se connecter</button>
      </Link>
    </div>
  );
};

export default Header;
