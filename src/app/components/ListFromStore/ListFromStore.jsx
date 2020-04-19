/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { sortList } from "../../../redux-stuff";


import "./ListFromStore.css";

const ListFromStore = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.list.items);

  const handleClicked = () => {
    dispatch(sortList());
  };

  return (
    <ol className="list" onClick={handleClicked}>
      {list.map((item) => <li key={item}>{`Item - ${item}`}</li>)}
    </ol>
  );
};

export default ListFromStore;
