import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setverifyPassword] = useState("");

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post("./http://localhost:3000/user_routes", {
        username,
        email,
        password,
      });
    } catch (error) {
      if (error.response.status === 400 || error.response.status === 401) {
        setErrorMessage("Mauvais email et/ou mot de passe");
      }
    }
  };
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <h1>Créez un compte</h1>
          <input
            value={username}
            type="text"
            placeholder="username"
            onChange={(event) => setUsername(event.target.value)}
          />
          <input
            value={email}
            type="text"
            placeholder="email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(event) => setverifyPassword(event.target.value)}
          />
          <input type="submit" value={"Valider"} />
          <span>{errorMessage}</span>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
