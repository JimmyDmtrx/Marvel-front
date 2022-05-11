import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/css/characters.css";

const Favorites = (token) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const [refresh, setRefresh] = useState(0);
  // console.log("tokenLAAAA1==>", token.token);
  const userToken = token.token;

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://marvel-back-jimmy.herokuapp.com/comics/${userToken}`
        // `http://localhost:4000/favorites?token=${userToken}`
      );
      // console.log("log id", id);
      // console.log(response.data);
      setData(response.data);
      setIsLoading(false);
      console.log("fav data", response.data);
    };
    fetchData();
  }, [refresh]);

  const handleRemoveFav = async (elem, event) => {
    try {
      event.preventDefault();
      const response = await axios.delete(
        "https://marvel-back-jimmy.herokuapp.com/favorites",
        // "http://localhost:4000/favorites",
        { data: { characterId: elem._id, token: userToken } }
      );
    } catch (error) {}
  };
  // console.log(token);

  return isLoading ? (
    <p>En chargement</p>
  ) : (
    <div>
      <div> My favorites</div>

      <div className="what">
        {data.map((elem, index) => {
          // console.log("elem===> charac", elem);
          return (
            <div key={index}>
              {elem.thumbnail.path !==
              "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" ? (
                <div className="card-comics" key={elem._id}>
                  <div className="titre-comics-div">
                    <p className="titre-comics">{elem.name}</p>
                    <div
                      onClick={(event) => {
                        handleRemoveFav(elem, event);
                        setRefresh(+1);
                      }}
                      className="suppr"
                    >
                      Supprimer des favs
                    </div>
                  </div>
                  <Link to={`/comics/${elem._id}`}>
                    <img
                      src={`${elem.thumbnail.path}.${elem.thumbnail.extension}`}
                      alt="characters"
                    />
                  </Link>
                  
                </div>
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Favorites;
