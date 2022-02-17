import { useEffect, useState } from "react";
import axios from "axios";

const Comics = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dataComics, setDatacomics] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:3000/comics`);
      console.log(response.data);
      setDatacomics(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return isLoading ? (
    <p>en chargement</p>
  ) : (
    <div>
      Comics
      {dataComics.results.map((elem, index) => {
        return (
          <div key={elem._id}>
            {elem.thumbnail.path !==
              "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" &&
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
