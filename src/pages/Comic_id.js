import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Comic_id = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`https://localhost:3000/comics/${id}`);
      console.log("log id", id);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [id]);
  return isLoading ? (
    <div>en cours de marvellement</div>
  ) : (
    <div>
      <img src={data.thumbnail.path} alt="comicId" />
    </div>
  );
};
export default Comic_id;
