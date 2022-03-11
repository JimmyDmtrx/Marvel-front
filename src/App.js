import "./App.css";
import { useState } from "react";
import Cookies from "js-cookie";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import pages et compo
import Header from "./components/Header";
import Home from "./pages/Home";
import Comics from "./pages/Comics";
import Characters from "./pages/Characters";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ComicsId from "./pages/ComicId";
import Favorites from "./pages/Favorites";

//import icones
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart as fasFaHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farFaHeart } from "@fortawesome/free-regular-svg-icons";
library.add(fasFaHeart, farFaHeart);

function App() {
  const [token, setToken] = useState(Cookies.get("userToken") || null);

  const setUser = (token) => {
    if (token) {
      // Gestion de cookie
      Cookies.set("userToken", token, { expires: 10 });
      //
    } else {
      Cookies.remove("userToken");
    }

    setToken(token);
  };
  return (
    <Router>
      <Header setUser={setUser} token={token} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/comics" element={<Comics token={token} />}></Route>
        <Route
          path="/characters"
          element={<Characters token={token} />}
        ></Route>
        <Route path="/favorites" element={<Favorites token={token} />}></Route>
        <Route path="/login" element={<Login setUser={setUser} />}></Route>
        <Route path="/signup" element={<SignUp setUser={setUser} />}></Route>
        <Route path="/comics/:id" element={<ComicsId />} />
      </Routes>
    </Router>
  );
}
export default App;
