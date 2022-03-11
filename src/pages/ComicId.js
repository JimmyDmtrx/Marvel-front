import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "../assets/css/comicId.css";

const Comic_id = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        // `https://marvel-back-jimmy.herokuapp.com/comics/${id}`
        `http://localhost4000/comics/${id}`
      );
      // console.log("log id", id);
      // console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [id]);
  return isLoading ? (
    <div>
      <p>en cours de marvellement</p>
    </div>
  ) : (
    <div className="contain">
      <p className="titre-comics-id">{data.name}</p>

      <img
        className="contain-img "
        src={data.thumbnail.path + "." + data.thumbnail.extension}
        alt="comicId"
      />
      <div>
        <div>
          <p> comics avec ce character</p>
        </div>

        {data.comics.map((comic, index) => {
          return (
            <div className="contain" key={comic._id}>
              <div className="titre-div-comicid">
                <p className="titre-comics-id">{comic.title}</p>
              </div>

              <img
                className="contain-img "
                src={comic.thumbnail.path + "." + comic.thumbnail.extension}
                alt="comicbyid"
              />

              {/* <div className="descrip-comic-id">
                <p className="descrip-comics">{comic.description}</p>
              </div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Comic_id;
