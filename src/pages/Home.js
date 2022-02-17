import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div>
        <Link to={"/comics"}>
          <button>COMICS</button>
        </Link>
      </div>
      <div>
        <Link to={"/characters"}>
          <button>CHARATERS</button>
        </Link>
      </div>
    </div>
  );
};
export default Home;
