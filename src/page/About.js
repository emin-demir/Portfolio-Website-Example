import { BsDownload } from "react-icons/bs";
import { SiFreelancer } from "react-icons/si";
import { FaProjectDiagram } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import { MdOutlineSupportAgent,
  MdMobileFriendly,
  MdTravelExplore,
  MdOutlineWeb,
  MdDraw,} from "react-icons/md";
import { FiAperture } from "react-icons/fi";
import { GiGamepad, GiBrain } from "react-icons/gi";
import { RiBookletFill } from "react-icons/ri";
import "../App.css"
export default function About() {
  return (
    <div className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>
      <div className="about__container container grid">
        <div className="about__data">
          <p className="about__description">
            Web developer , python programming and hacker.Willing to research,
            loves to work and fast worker.I've developed a lot of projects and
            won some nice Awards.
          </p>
          <div className="about__info">
            <div className="about__info-head">
              <span className="about__info-icon ">
                <MdTravelExplore  />
              </span>
              <span className="about__info-title">1 Years</span>
              <span className="about__info-title">Experience</span>
            </div>
            <div className="about__info-head">
              <span className="about__info-icon">
                <FaProjectDiagram />
              </span>
              <span className="about__info-title">+20 Projects</span>
              <span className="about__info-title">completed</span>
            </div>
            <div className="about__info-head">
              <span className="about__info-icon">
                <SiFreelancer />
              </span>
              <span className="about__info-title">Freelance</span>
              <span className="about__info-title">Available</span>
            </div>
          </div>
          <div className="about__buttons">
            <a download="Profile.pdf" href="https://github.com/0xloading/My-Website/raw/main/public/Profile.pdf"className="button button--flex">
              Download CV
              <BsDownload className="button__icon icon" />
            </a>
          </div>
        </div>
        <div className="interest_ section">
        <div className="about__interest">
          <h2 className="section__title">My Interests</h2>
          <div className="row interests">
            <div className="col interest">
              <BiCodeAlt className="interest-icon icon" />
              <p className="interest-paragraph">Design</p>
            </div>
            <div className="col interest">
              <FiAperture className="interest-icon icon" />
              <p className="interest-paragraph">Photos</p>
            </div>
            <div className="col interest">
              <MdDraw className="interest-icon icon" />
              <p className="interest-paragraph">Drawing</p>
            </div>
            <div className="col interest">
              <GiGamepad className="interest-icon icon" />
              <p className="interest-paragraph">Video Games</p>
            </div>
            <div className="col interest">
              <GiBrain className="interest-icon icon" />
              <p className="interest-paragraph">Philosophy</p>
            </div>
            <div className="col interest">
              <RiBookletFill className="interest-icon icon" />
              <p className="interest-paragraph">Books</p>
            </div>
          </div>
        </div>
        </div>
        <div className="about__services">
          <h2 className="section__title">Services</h2>
          <div className="row-services">
            <div className="col services">
              <BiCodeAlt className="services-icon icon" />
              <p className="services-paragraph title">Web Design</p>
              <p className="services-paragraph">
                I usually use ReactJS, HTML5, CSS3 and Bootstrap for awesome
                project.
              </p>
            </div>
            <div className="col services">
              <MdOutlineWeb className="services-icon icon" />
              <p className="services-paragraph title">Web Development</p>
              <p className="services-paragraph">
                I ❤️ Node JS. I use Node JS in my projects.
              </p>
            </div>
            <div className="col services">
              <MdMobileFriendly className="services-icon icon" />
              <p className="services-paragraph title">Responsive Design</p>
              <p className="services-paragraph">
                Everyone has responsibility. I'm in favour of projects having a
                responsibility to screens as well and I love Bootstrap.
              </p>
            </div>
            <div className="col services">
              <MdOutlineSupportAgent className="services-icon icon" />
              <p className="services-paragraph title">Technical Support</p>
              <p className="services-paragraph">
                I provide free technical support service for 3 months against
                any errors that may occur in the projects I have developed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
