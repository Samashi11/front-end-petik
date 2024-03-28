import React, { useState } from "react";
import "./AddMovieForm.css";

const AddMovieForm = ({ onAddMovie }) => {
  const [formData, setFormData] = useState({
    title: "",
    year: "",
    genre: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // console.log(formData);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMovie(formData);
  };

  return (
    <div className="container">
      <section className="form">
        <div className="form-left">
          <img
            src="https://m.media-amazon.com/images/I/81QchPvsz0L._AC_UF894,1000_QL80_.jpg"
            alt="img-form"
            className="form-image"
            width={264}
          />
        </div>
        <div className="form-right">
          <h1 className="form-title">Add Movie</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-inputgroup">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                className="form-input"
                onChange={handleChange}
              />
            </div>
            <div className="form-inputgroup">
              <label htmlFor="year" className="form-label">
                Year
              </label>
              <input
                type="number"
                name="year"
                id="year"
                className="form-input"
                onChange={handleChange}
              />
            </div>
            <div className="form-inputgroup">
              <label htmlFor="genre" className="form-label">
                Genre
              </label>
              <select
                onChange={handleChange}
                name="genre"
                id="genre"
                className="form-input"
              >
                <option value="" hidden></option>
                <option value="Action">Action</option>
                <option value="Adventure">Adventure</option>
                <option value="Horror">Horror</option>
                <option value="Animation">Animation</option>
                <option value="Romance">Romance</option>
                <option value="Sci-fi">Sci-fi</option>
              </select>
            </div>
            <div className="form-inputgroup">
              <label htmlFor="poster" className="form-label">
                Image
              </label>
              <input
                type="text"
                name="poster"
                id="poster"
                className="form-input"
                onChange={handleChange}
              />
            </div>
            <button className="form-button">Submit</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AddMovieForm;
