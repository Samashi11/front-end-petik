import { Component } from "react";
import "./Footer.css"

// Class Component
class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <h3>Copyrignt &copy;2024 Developed By {this.props.nama}</h3>
        <span>Make with &#10084</span>
      </footer>
    );
  };
};

export default Footer;