import React from "react";
import Header from "./components/Header/Header";
import "./App.css";
import ListFromStore from "./components/ListFromStore/ListFromStore";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => (
  <div className="app">
    <Sidebar />
    <Header text="Hello, world." />
    <ListFromStore />
  </div>
);

export default App;
