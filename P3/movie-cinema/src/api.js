import axios from "axios";
import { useParams } from "react-router-dom";

const apiKey = "8e465ff28280979967a70c1462d19f7f";

export const getMovieList = async () => {
  const movie = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
  );
  return movie.data.results;
};

export const getMovieListPop = async () => {
  const movie = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
  );
  return movie.data.results;
};

export const getMovieListTop = async () => {
  const movie = await axios.get(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`
  );
  return movie.data.results;
};

export const getDetailMovie = async (id) => {
  const movie = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
  );
  return movie.data;
};

const Token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZTQ2NWZmMjgyODA5Nzk5NjdhNzBjMTQ2MmQxOWY3ZiIsInN1YiI6IjY0NTFjNmE2YzA0NDI5MDEwMTYwZGI5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gii0KPV-65j2V9Ia18UkoPLDoe6CpIGXtGM-XBT-wg4";
