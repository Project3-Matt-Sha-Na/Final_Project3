import { v4 as uuidv4 } from "uuid";
import { INIT } from "./actionTypes";
const initialstate = {
  movielist: {
    id: uuidv4(),
    title: "", //movie name
    title_order: "ASC", //or "DES"
    rate_count: "",
    rate_order: "ASC", //or "DES"
    vote_avg: "",
    vote_order: "ASC", //or "DES"
    release_date: "",
    date_order: "ASC", //or "DES"
    picture: "", //url
    like: "", //-1, 0, 1
    content: "" //movie description
  }
};
const reducer = (state = initialstate, action) => {
  const newState = { ...state };
  if (action.type === INIT) {
    newState.movielist = action.movielist;
  }
  return newState;
};

export default reducer;
