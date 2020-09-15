import React, { useState } from "react";
import axios from "axios";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    axios
      .post("http://localhost:5000/api/login", {
        username,
        password,
      })
      .then((response) => {
        const token = response.data.payload;
        // https://www.npmjs.com/package/axios#config-defaults
        // axios with Auth
        // axios.defaults.headers.common["Authorization"] = token;
        // props.setToken(token);

        // save token to local storage
        props.setToken(token);
        localStorage.setItem("banana", token);
      });
  };

  return (
    <form>
      <label>
        Username
        <input
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
      </label>

      <label>
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </label>

      <button type="button" onClick={handleSubmit}>
        Log in
      </button>
    </form>
  );
};

export default Login;
