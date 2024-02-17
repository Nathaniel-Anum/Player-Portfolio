import { useState } from "react";
import soccer from "../../assets/soccer.png";
import contactImg from "../../assets/contact.png";
import { useNavigate, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuopen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("You clicked me!");
    navigate("#Contact");
  };

  return (
    <nav>
      <img src={soccer} alt="logo" className="logo " />
      <div
        className="menu"
        onClick={() => {
          setMenuopen(!menuOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <a href="#Intro">Home</a>
        </li>
        <li>
          <a href="#About"> About</a>
        </li>
        <li>
          <a href="#Achievement">Achievements</a>
        </li>
        <li>
          <a href="#Contact">Contact Me</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
