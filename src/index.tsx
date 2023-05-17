import { render } from "react-dom";
import { HashRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";

const container = document.getElementById("root");
render(
  <Router>
    <App />
  </Router>,
  container
);
