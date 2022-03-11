import { useState, useEffect } from "react";

const Favorites = (token) => {
  const [loading, isLoading] = useState(true);

  // useEffect(() => {
  //   const fetchData
  //   try {
  //   } catch (error) {}
  // }, []);

  console.log(token);

  return isLoading ? (
    <p>En chargement</p>
  ) : (
    <div>
      <div> My favorites</div>
    </div>
  );
};

export default Favorites;
