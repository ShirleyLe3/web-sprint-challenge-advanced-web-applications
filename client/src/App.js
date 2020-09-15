import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BubblePage from "./components/BubblePage";

import Login from "./components/Login";
import "./styles.scss";

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(localStorage.getItem("banana"));
  }, []);

  return (
    <Router>
      <div className="App">
        {/**
         * This is the PrivateRoute component
         */}
        <Route exact path="/">
          {token ? <BubblePage /> : <Login setToken={setToken} />}
        </Route>
      </div>
    </Router>
  );
}

export default App;
