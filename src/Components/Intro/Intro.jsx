import "./Intro.css";
import img from "../../assets/Nat/4.png";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import About from "../About/About";
import Achievement from "../Achievement/Achievement";
import Contact from "../Contact/Contact";

import { Typewriter } from "react-simple-typewriter";
const Intro = () => {
  return (
    <>
      <Router>
        <Navbar />
      </Router>
      <section id="Intro">
        <div className="introContent">
          <span className="hello">Hello, </span>
          <span className="introText">
            I'm <span className="introName">Nathaniel Adjei</span> <br />
          </span>
          <p className="p-text2">
            <Typewriter
              words={[
                "A",
                "Professional",
                "Footballer.",
                "A Professional Footballer.",
              ]}
              loop={0}
              cursor
              cursorStyle="I"
              typeSpeed={200}
              delaySpeed={100}
              deleteSpeed={100}
            />
          </p>
          {/* <p className="introPara">i play ball </p> */}
        </div>
        <div className="arrange-pic">
          <img src={img} alt="profile" className="bg" />
        </div>
      </section>
      <About />
      <Achievement />
      <Contact />
    </>
  );
};

export default Intro;
