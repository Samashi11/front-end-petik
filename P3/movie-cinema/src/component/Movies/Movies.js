import React, { useEffect, useState } from "react";
import Movie from "../Movie/Movie.js";
import AddMovieForm from "../AddMovieForm/AddMovieForm.js";
import { getMovieList } from "../../api.js";
import "./Movies.css";

const Movies = () => {
  const [nama, setNama] = useState("Ucup");

  // setNama("Budi");
  // console.log(nama);

  const [datas, setDatas] = useState([]);

  const handleClick = () => {
    const movie = {
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeC2VEirfVuW_rglNwGcjhQ3cCniQD4_cqdQ&usqp=CAU",
      title: "Amazing spiderman",
      year: 2012,
      genre: "Action, Adventure",
    };
    setDatas("Budi");
  };

  const addMovie = (movie) => {
    setDatas([...datas, movie]);
  };

  useEffect(() => {
    // menangkap data result API
    getMovieList().then((result) => {
      setDatas(result);
    });
  }, []);

  console.log(datas);

  return (
    <div>
      <h2>Latest Movies</h2>
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
      <AddMovieForm onAddMovie={addMovie} />
    </div>
  );
};

export default Movies;
