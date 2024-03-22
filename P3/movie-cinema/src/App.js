// import logo from './logo.svg';
// import "./App.css";

import { Component } from "react";

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Hello World</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus
        error rem cum praesentium, architecto eos? Error nisi eos, soluta et
        adipisci, consequuntur totam ipsa voluptatibus dolorem impedit officiis
        repellendus odit consequatur reprehenderit a mollitia! Asperiores
        debitis quis qui magnam in.
      </p>
      <Footer/>
    </div>
  );
}

// Nama Komponen harus diawali dengan huruf Kapital
const Header = () => {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Login</li>
      </ul>
    </nav>
  );
};

class Footer extends Component {
  render () {
    return (
      <footer>
        <h3>Copyrignt &copy;2024 Developed By Salman Maula Ash-Shidqi</h3>
        <span>Make with &#10084</span>
      </footer>
    );
  };
}

export default App;
