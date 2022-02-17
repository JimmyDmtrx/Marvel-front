import { useEffect, useState } from "react";
import axios from "axios";

const Comics = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dataComics, setDatacomics] = useState();
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:3000/comics?title=${search}`
      );
      //   console.log(response.data);
      setDatacomics(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, [search]);
  const handleSearch = (event) => {
    const value = event.target.value;
    setSearch(value);

    // console.log(value);
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
      Comics
      {dataComics.results.map((elem, index) => {
        console.log(elem);
        return (
          <div key={elem._id}>
            {elem.thumbnail.path !==
            "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" ? (
              <div>
                <img
                  src={`${elem.thumbnail.path}.${elem.thumbnail.extension}`}
                  alt="comics"
                  key={index}
                />

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
export default Comics;
