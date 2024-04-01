import { getMovieListPop } from "../../api.js";
import React, { useEffect, useState } from "react";
import Movie from "../../component/Movie/Movie.js";

const Popular = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    // menangkap data result API
    getMovieListPop().then((result) => {
      setDatas(result);
    });
  }, []);

  return (
    <div>
      <h2>Popular Movies</h2>
      <div className="movies-container">
        {datas.map((data, index) => {
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
            />
          );
        })}
        {/* <p>{nama}</p>
        <button onClick={handleClick}>Add Movie</button> */}
      </div>
    </div>
  );
};

export default Popular;
