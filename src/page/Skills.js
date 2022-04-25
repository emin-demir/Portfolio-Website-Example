import "../App.css";
import { FaRegCalendarAlt } from "react-icons/fa";
import { AiFillAppstore } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
export default function Skills() {
  return (
    <div className="Skills-container section" id="skills">
      <div className="skills container ">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My technical level</span>

        <div className="skills__container container grid">
          <div className="skills__content">
            <div className="skills__header">
              <AiFillAppstore className="skills__icon" />
              <div>
                <h1 className="skills__title">Frontend Developer</h1>
                <span className="skills__subtitle">More than 1 years</span>
              </div>
              <MdOutlineKeyboardArrowDown className="skills__arrow" />
            </div>
            <div className="skills__list">
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">HTML5</h3>
                  <span className="skills__number">90%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__html"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">CSS3</h3>
                  <span className="skills__number">80%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__css"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Javascript</h3>
                  <span className="skills__number">80%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__js"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">React Native</h3>
                  <span className="skills__number">80%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__react"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="skills__content">
            <div className="skills__header">
              <AiFillAppstore className="skills__icon" />
              <div>
                <h1 className="skills__title">Software Developer</h1>
              </div>
            </div>
            <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Python</h3>
                  <span className="skills__number">80%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__react"></span>
                </div>
              </div>
          </div>
        </div>
      </div>
      <h2 className="section__title">Resume</h2>
      <div className="experience container grid">
        <div className="experience-box">
          <div className="item">
            <div className="main">
              <h2 className="main__title">White Hat Hacker</h2>
              <p className="main__subtitle">
                <FaRegCalendarAlt className="left-icon" />
                2021 - 2022 | Cyber Security Researcher
              </p>
            </div>
            <p>
              #linux, #offensive, #defensive, #forensic-research, #python,
              #tools, #security
            </p>
          </div>

          <div className="item">
            <div className="main">
              <h2 className="main__title">Senior Mobile Developer</h2>
              <p className="main__subtitle">
                <FaRegCalendarAlt className="left-icon" />
                2021 - 2022 | Art-in Systems, Mobile Application Projects
              </p>
            </div>
            <p>#react-native, #reactjs</p>
          </div>

          <div className="item">
            <div className="main">
              <h2 className="main__title">Full Stack Developer</h2>
              <p className="main__subtitle">
                <FaRegCalendarAlt className="left-icon" />
                2021 - 2022 | Freelance service
              </p>
            </div>
            <p>#react-native, #nodejs, #python, #javascript, #html5, #css3</p>
          </div>
        </div>
        <div className="experience-box">
          <div className="item">
            <h2 className="main__title">Graduation</h2>
            <div className="main">
              <p className="main__subtitle">
                <FaRegCalendarAlt className="left-icon" />
                2021 - 2022 | various resources | hundreds of courses I have
                completed and valid certificates
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
