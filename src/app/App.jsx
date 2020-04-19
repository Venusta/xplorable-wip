import React from "react";
import Header from "./components/Header/Header";
import "./App.css";
import ListFromStore from "./components/ListFromStore/ListFromStore";

const App = () => (
  <div>
    <Header text="Hello, world." />
    <ListFromStore />
  </div>
);

export default App;
