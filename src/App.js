import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Comics from "./pages/Comics";
import Characters from "./pages/Characters";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ComicsId from "./pages/ComicId";
import { useState } from "react";
import Cookies from "js-cookie";

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
        <Route path="/comics" element={<Comics />}></Route>
        <Route path="/characters" element={<Characters />}></Route>
        <Route path="/login" element={<Login setUser={setUser} />}></Route>
        <Route path="/signup" element={<SignUp setUser={setUser} />}></Route>
        <Route path="/comics/:id" element={<ComicsId />} />
      </Routes>
    </Router>
  );
}
export default App;
