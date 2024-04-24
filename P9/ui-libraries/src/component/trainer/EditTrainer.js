import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditTrainer = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [skill, setSkill] = useState("");
  const [file, setFile] = useState("");
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  
  const loadImage = (e) => {
    const image = e.target.files[0];
    setImage(image);
    setFile(URL.createObjectURL(image));
  };

  const getTrainerById = async () => {
    const response = await axios.get(`https://api.sukmax.my.id/trainer/${id}`);
    setName(response.data.name);
    setAddress(response.data.address);
    setSkill(response.data.skill);
    setFile(response.data.url);
  };

  useEffect(() => {
    getTrainerById();
  },[]);

  const updateTrainer = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://api.sukmax.my.id/trainer/${id}`, {
        name: name,
        address: address,
        skill: skill,
        file: file,
        image : image,
      }, {
        headers : {
          "Content-Type" : "multipart/form-data",
        }
      }
    );
    // redirect
    navigate("/table-trainer")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <h2 className="title is-black">Trainer</h2>
      <h3 className="subtitle">Update Trainer</h3>
      <form onSubmit={updateTrainer}>
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
            Address
          </label>
          <div class="control">
            <input
              class="input"
              type="text"
              value={address}
              placeholder="Text input"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>

        <div class="field">
          <label class="label" className="is-black is-bold">
            Skill
          </label>
          <div class="control">
            <textarea
              class="input"
              type="text"
              value={skill}
              placeholder="Text input"
              onChange={(e) => setSkill(e.target.value)}
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

        {file ? (
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
          <Link to={"/table-trainer"} className="button is-link is-light">
            Cancel
            </Link>
          </div>
        </div>
      </form>
    </Layout>
  );
}

export default EditTrainer;
