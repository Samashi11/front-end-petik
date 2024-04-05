import React from "react";
import "bulma/css/bulma.min.css";
import Logo from "../../images/spotify.png";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <section className="hero has-backgorund-grey-light is-fullheight is-fullwidth">
      <div className="hero-body">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-4">
              <form className="box">
                <div class="field has-text-centered">
                  <NavLink to={"/"}>
                    <img src={Logo} width={120} alt="" />
                  </NavLink>
                  <h3 className="title has-text-primary">Login</h3>
                </div>
                <div class="field">
                  <label for="email" className="label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="input"
                    placeholder="Masukkan Email"
                  />
                </div>
                <div class="field">
                  <label for="password" className="label">
                    Password
                  </label>
                  <input
                    type="pasword"
                    id="password"
                    className="input"
                    placeholder="********"
                  />
                </div>
                <div class="field">
                  <button className="button is-success has-text-white is-fullwidth ">
                    Login
                  </button>
                </div>
                <div class="field">
                  <p>
                    Belum Punya Akun ?{" "}
                    <NavLink to={"/register"} className="text-decoraiton-none">
                      Daftar
                    </NavLink>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
