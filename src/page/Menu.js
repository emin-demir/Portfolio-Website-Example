import "../App.css";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FaUserTie } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { RiHomeHeartFill } from "react-icons/ri";
import { IoIosAlbums } from "react-icons/io";
import { AiFillAppstore } from "react-icons/ai";

function Menu() {
  const [active, isActive] = useState(false);
  return (
    <div>
      <ul className={active ? "menu active" : "menu"}>
        <div
          onClick={() => isActive(!active)}
          className={active ? "toggle active" : "toggle"}
        >
          <AiOutlinePlus />
        </div>
        <div className="menu-bar">
        <li>
          <a href='#home'>
            <RiHomeHeartFill />
          </a>
          Home
        </li>
        <li  >
          <a href='#about'>
            <FaUserTie />
          </a>
          About
        </li>
          <li>
          <a href='#skills'>
            <AiFillAppstore/>
          </a> 
           Skills
        </li>
          <li>
          <a href='#portfolio'>
            <IoIosAlbums/>
          </a> 
           Portfolio
        </li>
        <li>
          <a href='#contact'>
            <GrMail />
          </a>
          Contact
        </li>
          </div>       
      </ul>
    </div>
  );
}

export default Menu;
