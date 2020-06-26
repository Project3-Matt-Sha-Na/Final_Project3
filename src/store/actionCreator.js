import axios from "axios";
import { INIT } from "./actionTypes";

export const init = movielist => ({
  type: INIT,
  movielist
});

export const getlist = () => {
  return dispatch => {
    axios(
      `https://api.themoviedb.org/3/movie/popular?api_key=a1d1ff94c90b6204d361915f05abf298&language=en-US&page=1`
    ).then(res => {
      console.log(res.data.results);
    });
  };
};
