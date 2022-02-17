import { useEffect, useState } from "react";
import axios from "axios";
import "../assets/css/comics.css";
const Comics = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dataComics, setDatacomics] = useState();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const limit = 10;
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:4000/comics?title=${search}&limit=${limit}&page=${page}`
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
    <p>en chargement</p>
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
      <h1>Comics</h1>
      <div className="what">
        {dataComics.results.map((elem, index) => {
          // console.log(elem);
          return (
            <div key={elem._id} className="contain-comics-card">
              {elem.thumbnail.path !==
              "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" ? (
                <div className="card-comics">
                  <p>{elem.title}</p>
                  <img
                    src={`${elem.thumbnail.path}.${elem.thumbnail.extension}`}
                    alt="comics"
                    key={index}
                  />

                  <div>
                    <p>{elem.description}</p>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>

      <button onClick={() => setPage(page - 1)}>Page précédente</button>
      <button onClick={() => setPage(page + 1)}>Page suivante</button>
      <button onClick={() => setPage(1)}>Retour à la page 1</button>
    </div>
  );
};
export default Comics;
