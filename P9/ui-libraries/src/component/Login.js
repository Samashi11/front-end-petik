import React from "react";
import "bulma/css/bulma.min.css";

const Login = () => {
  return (
    <section className="hero has-backgorund-grey-light is-fullheight is-fullwidth">
      <div className="hero-body">
        <div class="container">
          <div class="column is-centered">
            <div class="column is-4">
              <form className="box">
                <h3 className="title has-text-primary">Login</h3>
                <div class="field">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    className="input"
                    placeholder="Masukkan Email"
                  />
                </div>
                <div class="field">
                  <label for="pasword">Password</label>
                  <input
                    type="pasword"
                    className="input"
                    placeholder="Masukkan Pasword"
                  />
                </div>
                <div class="field">
                  <button className="button is-success is-fullwidth">
                    Login
                  </button>
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
