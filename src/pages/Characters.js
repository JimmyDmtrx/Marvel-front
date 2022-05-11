import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../assets/css/characters.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Characters = ({ token }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [dataCharac, setDataCharac] = useState();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const limit = 30;
  // console.log("characters -->", characters);
  // console.log("token", token);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://marvel-back-jimmy.herokuapp.com/characters?name=${search}&limit=${limit}&page=${page}`
        // `http://localhost:4000/characters?name=${search}&limit=${limit}&page=${page}`
      );
      setDataCharac(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, [search, limit, page]);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearch(value);

    // console.log(value);
  };
  const handleAddTofav = async (elem, event) => {
    alert('added to fav')
    // console.log("elem==>", elem);
    try {
      event.preventDefault();
      const response = await axios.post(
        "https://marvel-back-jimmy.herokuapp.com/favorites",
        // "http://localhost:4000/favorites",

        {
          characters: elem,
          token: token,
        }
      );
    } catch (error) {}
  };

  return isLoading ? (
    <div className="load-gif">
      <p>en cours de marvellement</p>
    </div>
  ) : (
    <div>
      <div>
        <input
          className="search-comics"
          value={search}
          type="text"
          placeholder="Votre recherche"
          onChange={handleSearch}
        />
      </div>
      <div>
        <div className="contain-button-comics">
          <button className="btn-pagi" onClick={() => setPage(page - 1)}>
            Page précédente
          </button>
          <button className="btn-pagi" onClick={() => setPage(page + 1)}>
            Page suivante
          </button>
          <button className="btn-pagi" onClick={() => setPage(1)}>
            Retour à la page 1
          </button>
        </div>
      </div>
      <div className="what">
        {dataCharac.results.map((elem, index) => {
          // console.log("elem===> charac", elem);
          return (
            <div key={index}>
              {elem.thumbnail.path !==
              "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" ? (
                <div className="card-comics" key={elem._id}>
                  <div className="titre-comics-div">
                    <p className="titre-comics">{elem.name}</p>
                  </div>
                  <Link to={`/comics/${elem._id}`}>
                    <img
                      src={`${elem.thumbnail.path}.${elem.thumbnail.extension}`}
                      alt="characters"
                    />
                  </Link>
                  <div className="btn-fav">
                    favoris
                    {token ? (
                      <FontAwesomeIcon
                        className="icone"
                        icon="heart"
                        onClick={(event) => handleAddTofav(elem, event)}
                      />
                    ) : (
                      // <FontAwesomeIcon
                      //   className="icone"
                      //   icon={["regular", "heart"]}
                      // />
                      <span>connect to add favorites</span>
                    )}
                  </div>
                  {/* <div>
                    <p className="descrip-comics">{elem.description}</p>
                  </div> */}
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
export default Characters;
