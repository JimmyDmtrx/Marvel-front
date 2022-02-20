import { useState } from "react";
import axios from "axios";
import "../assets/css/signup.css";
import { useNavigate } from "react-router-dom";

const SignUp = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setverifyPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    if (username && email && password && verifyPassword) {
      if (password === verifyPassword) {
        try {
          event.preventDefault();
          const response = await axios.post(
            "https://marvel-back-request.herokuapp.com/signup",
            {
              username,
              email,
              password,
            }
          );
          if (response.data.token) {
            setUser(response.data.token);
            navigate("/");
          } else {
            alert("Une erreur est survenue, veuillez réssayer.");
          }
          console.log("when signup =>", response.data);
        } catch (error) {
          if (error.response.status === 400 || error.response.status === 401) {
            setErrorMessage("Mauvais email et/ou mot de passe");
          }
        }
      }
    }
  };
  return (
    <div className="-signup-contain">
      <div className="form-contain">
        <form className="form" onSubmit={handleSubmit}>
          <h1>Créez un compte</h1>
          <input
            className="inputForm"
            value={username}
            type="text"
            placeholder="username"
            onChange={(event) => setUsername(event.target.value)}
          />
          <input
            className="inputForm"
            value={email}
            type="text"
            placeholder="email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            className="inputForm"
            type="password"
            placeholder="password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <input
            className="inputForm"
            type="password"
            placeholder="password"
            onChange={(event) => setverifyPassword(event.target.value)}
          />
          <input className="btn-grad" type="submit" value={"Valider"} />
          <span>{errorMessage}</span>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
