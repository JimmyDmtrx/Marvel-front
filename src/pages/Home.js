import { Link } from "react-router-dom";
import "../assets/css/home.css";

const Home = () => {
  return (
    <div className="contain-home-button">
      <div>
        <p className="text-home-button">COMICS</p>
        <Link to={"/comics"}>
          <div className="div-home-comics"></div>
        </Link>
      </div>
      <div>
        <p className="text-home-button">HERO(E)S</p>
        <Link to={"/characters"}>
          <div className="div-home-charac"></div>
        </Link>
      </div>
    </div>
  );
};
export default Home;
