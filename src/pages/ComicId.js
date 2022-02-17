import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Comic_id = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:4000/comics/${id}`);
      // console.log("log id", id);
      // console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [id]);
  return isLoading ? (
    <div>en cours de marvellement</div>
  ) : (
    <div>
      <p>{data.name}</p>
      <p>{data.description}</p>
      <img
        src={data.thumbnail.path + "." + data.thumbnail.extension}
        alt="comicId"
      />
      <div>
        comics avec ce character
        {data.comics.map((comic, index) => {
          return (
            <div key={comic._id}>
              <img
                src={comic.thumbnail.path + "." + comic.thumbnail.extension}
                alt="comicbyid"
              />
              <p>{comic.title}</p>
              <p>{comic.description}</p>
              <div></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Comic_id;
