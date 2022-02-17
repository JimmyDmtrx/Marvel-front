import { useEffect, useState } from "react";
import axios from "axios";

const Comics = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dataComics, setDatacomics] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:3000/comics`);
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
          <img
            src={`${elem.thumbnail.path}.${elem.thumbnail.extension}`}
            alt="comics"
            key={index}
          />
        );
      })}
    </div>
  );
};
export default Comics;
