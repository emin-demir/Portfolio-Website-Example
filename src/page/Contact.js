import "../App.css"
import { FaPaperPlane } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
export default function Menu() {
  return (
    <div className="contact section" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Get in touch</span>

      <div className="contact__container container">

        <div className="contact__information">
          <FaPaperPlane className="contact__icon icon" />
            <h3 className="contact__title">E-Mail</h3>
            <span className="contact__subtitle">0xloading@gmail.com</span>
        </div>

        <div className="contact__information">
          <MdLocationOn className="contact__icon icon" />
            <h3 className="contact__title">Address</h3>
            <span className="contact__subtitle">Turkey</span>
          </div>

        <div className="contact__information">
          <MdEmail className="contact__icon icon" />
            <h3 className="contact__title">Security</h3>
            <span className="contact__subtitle">To the Curious...</span>
        </div>
        
      </div>
    </div>
  );
}
