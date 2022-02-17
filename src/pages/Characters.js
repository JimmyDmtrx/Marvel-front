import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Characters = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dataCharac, setDataCharac] = useState();
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:3000/characters?name=${search}`
      );
      setDataCharac(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, [search]);
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
    </div>
  );
};
export default Characters;
