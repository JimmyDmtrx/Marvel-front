import Logo from "../assets/img/Marvel_Logo.svg.png";
const Header = () => {
  return (
    <div>
      <img src={Logo} alt="logo" />
      <input type="text" placeholder="Votre recherche..." />
      <button>s'inscrire</button>
      <button>se connecter</button>
    </div>
  );
};

export default Header;
