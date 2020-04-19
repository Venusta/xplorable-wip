/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
import React from "react";
import PropTypes from "prop-types";
import Header from "./components/Header/Header";
import "./App.css";
import ListFromStore from "./components/ListFromStore/ListFromStore";
import Sidebar from "./components/Sidebar/Sidebar";


const App = () => (
  <div className="app">
    <Sidebar />
    {/* <button type="button" className="button">test</button> */}
    {/* <button type="button" className="button">testdddddddddddddddd</button> */}
    {/* <Header text="Hello, world." /> */}
    <div className="gridContainer">
      <Grid />
    </div>
    {/* <ListFromStore /> */}
  </div>
);

const Grid = () => {
  const size = [5, 5];
  const [x, y] = size;
  const grid = [];

  const renderGridCell = (i) => (
    <GridCell
      key={`square${i}`}
      value={i}
    />
  );

  const renderGrid = () => {
    for (let row = 0; row < y; row += 1) {
      const rowOfCells = [];

      for (let column = 0; column < x; column += 1) {
        rowOfCells.push(renderGridCell(row * x + column)); // index
      }
      grid.push(<div key={`row${row}`} className="row">{rowOfCells}</div>);
    }
    return grid;
  };

  console.log(grid);

  return (
    <div className="grid">
      {renderGrid()}
    </div>
  );
};

const GridCell = ({ value }) => {
  return (
    <div
      className="cell"
      style={{
        width: 50, height: 50, backgroundColor: "rgb(39, 39, 39)",
      }}
    >
      {value}
    </div>
  );
};

GridCell.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

export default App;
