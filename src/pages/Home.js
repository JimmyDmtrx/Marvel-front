import { Link } from "react-router-dom";
import "../assets/css/home.css";

const Home = () => {
  return (
    <div className="contain-home-button">
      <div>
        <Link to={"/comics"}>
          <button className="button-character-home">
            <p className="text-home-button">COMICS</p>
          </button>
        </Link>
      </div>
      <div>
        <Link to={"/characters"}>
          <button className="button-character-home">
            <p className="text-home-button">HERO(E)S</p>
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Home;
