import React, { useEffect, useState } from "react";
import Movie from "../../component/Movie/Movie.js";
import { getDetailMovie } from "../../api.js";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [datas, setDatas] = useState(null);

  // useParanms tuk menangkap parameter id dari URL
  let { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Panggil getDetailMovie dengan meneruskan ID film
        const result = await getDetailMovie(id);
        // Set state datas dengan hasil dari getDetailMovie
        setDatas(result);
      } catch (error) {
        console.error("Error fetching movie detail:", error);
      }
    };

    // Panggil fungsi fetchData
    fetchData();
  }, []);

  console.log(datas);
  if (datas) {
    return (
      <div class="container">
        <section class="hero">
          <div class="hero-left">
            <h2 class="hero-title">Title : {datas.title}</h2>
            {/* <h3 class="hero-genre">Genre :</h3> */}
            <p class="hero-description">"{datas.overview}"</p>
            <button class="hero-button">Watch</button>
          </div>
          <div class="hero-right">
            <img
              className="hero-image"
              src={`https://image.tmdb.org/t/p/w300${datas.poster_path}`}
              alt="hero-img"
            />
          </div>
        </section>
      </div>
    );
  } else {
    // Tampilkan indikator loading atau pesan lainnya saat menunggu data
    return <p>Loading...</p>;
  }

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // Panggil getDetailMovie dengan meneruskan ID film
  //       const result = await getDetailMovie(id);
  //       // Set state datas dengan hasil dari getDetailMovie
  //       setDatas(result);
  //     } catch (error) {
  //       console.error('Error fetching movie detail:', error);
  //     }
  //   };

  //   // Panggil fungsi fetchData
  //   fetchData();
  // }, [id]); // id harus dimasukkan dalam array dependensi untuk memicu pengambilan data saat id berubah

  // // Lakukan sesuatu ketika datas telah di-set, misalnya:
  // if (datas) {
  //   return (
  //     <div>
  //       {/* Tampilkan detail film */}
  //       <h1>{datas.title}</h1>
  //       <p>{datas.overview}</p>
  //       {/* Dan lain-lain */}
  //     </div>
  //   );
  // } else {
  //   // Tampilkan indikator loading atau pesan lainnya saat menunggu data
  //   return <p>Loading...</p>;
  // }
};

export default Detail;
