import { useState } from "react";
import "./App.css";
import { BiLogoGmail } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiVite } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { BiSolidFileCss } from "react-icons/bi";
import { SiEslint } from "react-icons/si";
import { TiLocation } from "react-icons/ti";

function App() {
  const [count, setCount] = useState(0);
  // &#x2022;
  return (
    <div className="border">
      <div className="first-box">
        <div className="left-first">
          <h1 className="name">Niko</h1>
          <h1 className="username">Kakabadze</h1>
          <h2 className="who">React Developer</h2>
        </div>
        <div className="right-first">
          <div className="mini-border-first"></div>
          <div className="mini-div-one">
            <BiLogoGmail />
            <h3 className="information">nk360dk@gmail.com</h3>
          </div>
          <div className="mini-div-two">
            <BsFillTelephoneFill />
            <h3 className="information">579 86 42 42</h3>
          </div>
          <div className="mini-div-three">
            <FaLinkedin />
            <a href="https://www.linkedin.com/in/niko-kakabadze-154825269/" target="_blank" className="link">
              LinkedIn
            </a>
          </div>
          <div className="mini-div-four">
            <FaGithub />
            <a href="https://github.com/feraldruid1" target="_blank" className="link">
              Github
            </a>
          </div>
          <div className="mini-div-five">
            <TiLocation />
            <h3>Georgia,batumi</h3>
          </div>
        </div>
      </div>
      <div className="second-box">
        <div className="left-second">
          <div className="mini-border-left"></div>
          <h1 className="education">Education and training</h1>
        </div>
        <div className="right-second">
          <div className="mini-border-first"></div>
          <h2 className="information-second">&#x2022; N2 Public School</h2>
          <h2 className="information-second">&#x2022; Jhonas Schmedtmann's courses in react and javascript</h2>
          <h2 className="information-second">&#x2022; John Smilga's courses in javascript</h2>
        </div>
      </div>
      <div className="third-box">
        <div className="left-third">
          <div className="mini-border-left"></div>
          <h1>Skills</h1>
        </div>
        <div className="right-third">
          <div className="mini-border-first"></div>
          <p className="skills">
            <FaReact />
            <span className="skill">React</span>
          </p>
          <p className="skills">
            <IoLogoJavascript />
            <span className="skill">Javascript</span>
          </p>
          <p className="skills">
            <SiVite />
            <span className="skill">Vite</span>
          </p>
          <p className="skills">
            <FaHtml5 />
            <span className="skill">Html</span>
          </p>
          <p className="skills">
            <BiSolidFileCss />
            <span className="skill">Css</span>
          </p>
          <p className="skills">
            <SiEslint />
            <span className="skill">Eslint</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
