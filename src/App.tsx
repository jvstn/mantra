import React from "react";
import ReactDOM from "react-dom";
import './App.css'
import { CenterPanel } from "./components/CenterPanel";

export const App = () => {
  return (
    <CenterPanel />
    )
};

ReactDOM.render(<App />, document.querySelector("#root"));
