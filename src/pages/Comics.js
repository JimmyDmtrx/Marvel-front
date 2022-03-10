import { useEffect, useState } from "react";
import axios from "axios";
import "../assets/css/comics.css";
const Comics = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dataComics, setDatacomics] = useState();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const limit = 30;
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://marvel-back-request.herokuapp.com/comics?title=${search}&limit=${limit}&page=${page}`
      );
      //   console.log(response.data);
      setDatacomics(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, [search, limit, page]);
  const handleSearch = (event) => {
    const value = event.target.value;
    setSearch(value);

    // console.log(value);
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

      <div className="what">
        {dataComics.results.map((elem, index) => {
          // console.log(elem);
          return (
            <div key={elem._id} className="contain-comics-card">
              {elem.thumbnail.path !==
              "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" ? (
                <div className="card-comics">
                  <div className="titre-comics-div">
                    <p className="titre-comics">{elem.title}</p>
                  </div>
                  <div className="img-contain-div-comics">
                    <img
                      src={`${elem.thumbnail.path}.${elem.thumbnail.extension}`}
                      alt="comics"
                      key={index}
                    />
                  </div>
                  {/* {elem.description ? (
                    <div className="descrp-div">
                      <p className="descrip-comics">{elem.description}</p>
                    </div>
                  ) : (
                    ""
                  )} */}
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
export default Comics;
