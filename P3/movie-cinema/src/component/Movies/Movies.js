import React, { useState } from "react";
import Movie from "../Movie/Movie.js";
import AddMovieForm from "../AddMovieForm/AddMovieForm.js";
import "./Movies.css";

const Movies = () => {
  const [nama, setNama] = useState("Ucup");

  // setNama("Budi");
  // console.log(nama);

  const [datas, setDatas] = useState([
    {
      poster:
        "https://upload.wikimedia.org/wikipedia/id/2/2f/Boboiboy_The_Movies.jpg",
      title: "Boboiboy The Movie",
      year: "2016",
      genre: "Action, Animation, Adventure",
    },
    {
      poster:
        "https://upload.wikimedia.org/wikipedia/id/thumb/2/26/Moana_Teaser_Poster.jpg/220px-Moana_Teaser_Poster.jpg",
      title: "Moana",
      year: "2016",
      genre: "Action, Animation, Adventure",
    },
    {
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTg5MzUxNzgxNV5BMl5BanBnXkFtZTgwMTM2NzQ3MjI@._V1_.jpg",
      title: "The Boss Baby",
      year: "2017",
      genre: "Action, Animation, Adventure",
    },
    {
      poster:
        "https://m.media-amazon.com/images/M/MV5BOTgxMDQwMDk0OF5BMl5BanBnXkFtZTgwNjU5OTg2NDE@._V1_.jpg",
      title: "Inside Out",
      year: "2019",
      genre: "Animation, Adventure",
    },
    {
      poster:
        "https://imusic.b-cdn.net/images/item/original/695/5053083156695.jpg?trolls-2018-trolls-dvd&class=scaled&v=1531158945",
      title: "Trolls",
      year: "2018",
      genre: "Animation, Adventure",
    },
    {
      poster:
        "https://upload.wikimedia.org/wikipedia/id/0/07/Smurfs_The_Lost_Village_poster.jpg",
      title: "Smurf : The Lost Village",
      year: "2017",
      genre: "Action, Animation, Adventure",
    },
    {
      poster:
        "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p13499680_v_v9_bg.jpg",
      title: "JUMANJI : Welcome To The Jungle",
      year: "2019",
      genre: "Action, Comedy, Adventure",
    },
    {
      poster:
        "https://musicart.xboxlive.com/7/90846500-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080",
      title: "The Super Mario Bros Movie",
      year: "2021",
      genre: "Action, Animation, Comedy, Adventure",
    },
    {
      poster:
        "https://m.media-amazon.com/images/M/MV5BYWQ4M2ZmODItNzZhYi00MzY1LTk2ZmItYTUwODI2NzJmN2JiXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
      title: "WISH",
      year: "2021",
      genre: "Animation, Comedy, Adventure",
    },
    {
      poster:
        "https://m.media-amazon.com/images/I/81QchPvsz0L._AC_UF894,1000_QL80_.jpg",
      title: "Puss In Boots",
      year: "2016",
      genre: "Action, Animation, Comedy, Adventure",
    },
  ]);

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
    setDatas([...datas,movie]);
  }

  console.log(datas);

  return (
    <div>
      <h2>Latest Movies</h2>
      <div className="movies-container">
        {datas.map((data, index) => {
          return (
            <Movie
              poster={data.poster}
              title={data.title}
              year={data.year}
              genre={data.genre}
            />
          );
        })}
        {/* <p>{nama}</p>
        <button onClick={handleClick}>Add Movie</button> */}
      </div>
      <AddMovieForm onAddMovie={addMovie}/>

    </div>
  );
};

export default Movies;
