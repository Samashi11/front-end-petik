import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditCourse = () => {
  const [name, setName] = useState("");
  const [trainerId, setTrainerId] = useState(1);
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const navigate = useNavigate();

  let { id } = useParams();

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const getCourseById = async () => {
    const response = await axios.get(`https://api.sukmax.my.id/course/${id}`);
    setName(response.data.name);
    setDesc(response.data.desc);
    setFile(response.data.url);
  };

  useEffect(() => {
    getCourseById();
  },[]);

  const updateCourse = async (e) => {
    // e.preventDefault();
    // try {
    //   await axios.post("https://api.sukmax.my.id/course", {
    //     name: name,
    //     trainer_id: trainerId,
    //     desc: desc,
    //     file: file,
    //   }, {
    //     headers : {
    //       "Content-Type" : "multipart/form-data",
    //     }
    //   }
    // );
    // // redirect
    // navigate("/table-course")
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <Layout>
      <h2 className="title is-black">Course</h2>
      <h3 className="subtitle">Update Course</h3>
      <form onSubmit={updateCourse}>
        <div class="field">
          <label class="label is-dark" className="is-black is-bold">
            Name
          </label>
          <div class="control">
            <input
              class="input"
              type="text"
              value={name}
              placeholder="Masukkan Nama Course"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>

        <div class="field">
          <label class="label" className="is-black is-bold">
            Trainer Id
          </label>
          <div class="control">
            <input
              class="input"
              type="text"
              value={trainerId}
              placeholder="Text input"
              onChange={(e) => setTrainerId(e.target.value)}
            />
          </div>
        </div>

        <div class="field">
          <label class="label" className="is-black is-bold">
            Description
          </label>
          <div class="control">
            <textarea
              class="input"
              type="text"
              value={desc}
              placeholder="Text input"
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
          </div>
        </div>

        <div class="file">
          <label class="file-label">
            <input
              class="file-input"
              type="file"
              name="resume"
              onChange={loadImage}
            />
            <span class="file-cta">
              <span class="file-icon">
                <i class="fas fa-upload"></i>
              </span>
              <span class="file-label"> Choose a file… </span>
            </span>
          </label>
        </div>

        {preview ? (
          <figure className="image is-128x128">
            <img src={file} alt=""/>
          </figure>
        ) : (
          ""
        )}

        <div class="field is-grouped">
          <div class="control">
            <button type="submit" class="button is-link">Submit</button>
          </div>
          <div class="control">
          <Link to={"/table-course"} className="button is-link is-light">
            Cancel
            </Link>
          </div>
        </div>
      </form>
    </Layout>
  );
}

export default EditCourse;
