import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailCourse = () => {
  const [courses, setCourses] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    getCourses();
  });

  const getCourses = async () => {
    const response = await axios.get(`https://api.sukmax.my.id/course/${id}`);
    setCourses(response.data);
  };

  return (
    <section className="section mt-5">
      <div class="container">
        <div class="columns">
          <div class="column is-half">
            <figure className="image is4by3">
              <img src={courses.url} alt="" />
            </figure>
          </div>
          <div class="column">
            <div class="content">
              <div class="is-title is-4">{courses.name}</div>
              <p>
                {courses.desc}
              </p>
              <div class="field p-5">
                <button className="button is-primary is-fullwidth has-text-white mb-3">
                  Add to Cart
                </button>
                <button className="button is-primary is-outlined is-fullwidth">
                  Buy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailCourse;
