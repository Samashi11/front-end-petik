import React from "react";
import "./Movie.css"
import { NavLink } from "react-router-dom";

const Movie = (props) => {
  const { title, genre, year, poster, id, vote_count, vote_average, overview } = props;
  return (
    <div className="movie">
      <img
        src={`https://image.tmdb.org/t/p/w300${poster}`}
        alt="poster"
        width={264}
      />
      <h3 className="title">
        <NavLink to={`/detail/${id}`}>{title}</NavLink>
      </h3>
      <p class="year">{year}</p>
      <p class="genre">{genre}</p>
      <p class="genre">{vote_average}</p>
      <p class="genre">{vote_count}</p>
      <p class="genre">{overview}</p>
    </div>
  );
};

export default Movie;