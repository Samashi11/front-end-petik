import { getMovieListTop } from "../../api.js";
import React, { useEffect, useState } from "react";
import Movie from "../../component/Movie/Movie.js";

const TopRated = () => {

  const [datas, setDatas] = useState([]);

  useEffect(() => {
    // menangkap data result API
    getMovieListTop().then((result) => {
      setDatas(result);
    });
  }, []);

  return (
    <div>
      <h2>Top Rated Movies</h2>
      <div className="movies-container">
        {datas.map((data, index) => {
          const convertToPercentage = (voteAverage) => {
            return (voteAverage * 10).toFixed(2) + "%";
          };

          const addSeparator = (voteCount) => {
            return voteCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          };

          const formatDate = (dateString) => {
            const options = { month: "short", day: "2-digit", year: "numeric" };
            return new Date(dateString).toLocaleDateString("en-US", options);
          };

          return (
            <Movie
              id={data.id}
              poster={data.poster_path}
              title={data.title}
              year={formatDate(data.release_date)}
              vote_average={convertToPercentage(data.vote_average)}
              vote_count={`${addSeparator(data.vote_count)} Ratings`}
            />
          );
        })}
        {/* <p>{nama}</p>
        <button onClick={handleClick}>Add Movie</button> */}
      </div>
    </div>
  );
};

export default TopRated;
