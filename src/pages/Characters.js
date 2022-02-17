import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Characters = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dataCharac, setDataCharac] = useState();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const limit = 10;

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:4000/characters?name=${search}&limit=${limit}&page=${page}`
      );
      setDataCharac(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, [search, limit, page]);
  const handleSearch = (event) => {
    const value = event.target.value;
    setSearch(value);

    console.log(value);
  };

  return isLoading ? (
    <p>en chargement</p>
  ) : (
    <div>
      <input
        value={search}
        type="text"
        placeholder="Votre recherche"
        onChange={handleSearch}
      />
      Characters
      {dataCharac.results.map((elem, index) => {
        console.log("elem===> charac", elem);
        return (
          <div key={index}>
            {elem.thumbnail.path !==
            "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" ? (
              <div key={elem._id}>
                <Link to={`/comics/${elem._id}`}>
                  <img
                    src={`${elem.thumbnail.path}.${elem.thumbnail.extension}`}
                    alt="characters"
                  />
                </Link>

                <div>
                  <p>
                    {elem.name}
                    {elem.description}
                  </p>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        );
      })}
      <button onClick={() => setPage(page - 1)}>Page précédente</button>
      <button onClick={() => setPage(page + 1)}>Page suivante</button>
    </div>
  );
};
export default Characters;
