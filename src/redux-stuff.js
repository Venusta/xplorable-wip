import {
  combineReducers, configureStore, createSlice, getDefaultMiddleware,
} from "@reduxjs/toolkit";
import logger from "redux-logger";

const listInitialState = {
  items: ["1", "2", "3", "4"],
  asc: true,
};

const listSlice = createSlice({
  name: "list",
  initialState: listInitialState,
  reducers: {
    sort: (state) => {
      state.items.sort((a, b) => (state.asc ? b - a : a - b));
      state.asc = !state.asc;
    },
  },
});

// const uiInitialState = {
//   infobox: true,
// };

// const uiSlice = createSlice({
//   name: "ui",
//   initialState: uiInitialState,
//   reducers: {
//     toggleInfobox: (state) => {
//       state.infobox = !state.infobox;
//     },
//   },
// });

export const {
  sort: sortList,
} = listSlice.actions;

// export const {
//   toggleInfobox,
// } = uiSlice.actions;

const reducer = combineReducers({
  list: listSlice.reducer,
  // ui: uiSlice.reducer,
});

const middleware = [...getDefaultMiddleware(), logger];
export default configureStore({
  reducer,
  middleware,
});
