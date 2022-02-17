import { useEffect, useState } from "react";
import axios from "axios";

const Characters = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dataCharac, setDataCharac] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:3000/characters`);
      setDataCharac(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return isLoading ? (
    <p>en chargement</p>
  ) : (
    <div>
      Characters
      {dataCharac.results.map((elem, index) => {
        return (
          <div>
            {elem.thumbnail.path && elem.thumbnail.extension ? (
              <img
                src={`${elem.thumbnail.path}.${elem.thumbnail.extension}`}
                alt="comics"
                key={index}
              />
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
