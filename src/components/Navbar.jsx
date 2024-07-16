import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import logo1 from "../assets/logo1.png";
import sig from "../assets/signature4.png";
import {
  FaBars,
  FaTimes,
  FaLinkedin,
  FaGithub,
  FaFacebook,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
import resume from "../assets/projects/AshishKumarResume.pdf";

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(true);
  function handleHidden() {
    setIsHidden((prev) => !prev);
  }
  return (
    <div
      name="navbar"
      className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0A192f] text-gray-300 z-10"
    >
      <div>
        <img src={sig} alt="" style={{ width: "250px", marginLeft: "0" }} />
      </div>

      {/* menu */}
      <ul className={"hidden md:flex"}>
        <li>
          <Link to="home" smooth={true}>
            Home
          </Link>
        </li>
        <li>
          <Link to="achievements" smooth={true}>
            Achievements
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="works" smooth={true}>
            Works
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true}>
            Contact
          </Link>
        </li>
      </ul>
      <div onClick={handleHidden} className="md:hidden z-10">
        {isHidden ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile-menu */}
      <ul
        className={
          isHidden
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-2xl">
          <Link to="home" smooth={true} onClick={handleHidden}>
            Home
          </Link>
        </li>
        <li className="py-6 text-2xl">
          <Link to="achievements" smooth={true} onClick={handleHidden}>
            Achievements
          </Link>
        </li>
        <li className="py-6 text-2xl">
          <Link to="about" smooth={true} onClick={handleHidden}>
            About
          </Link>
        </li>
        <li className="py-6 text-2xl">
          <Link to="skills" smooth={true} onClick={handleHidden}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-2xl">
          <Link to="works" smooth={true} onClick={handleHidden}>
            Works
          </Link>
        </li>
        <li className="py-6 text-2xl">
          <Link to="contact" smooth={true} onClick={handleHidden}>
            Contact
          </Link>
        </li>
      </ul>
      {/* social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex flex-row justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/ashish-kumar-7b211523b/"
              target="_blank"
            >
              LinkedIn
            </a>
            <FaLinkedin size={30} />
          </li>
          <li className="w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex flex-row justify-between items-center w-full text-gray-300"
              href="https://github.com/AshishAshishA"
              target="_blank"
            >
              Github
            </a>
            <FaGithub size={30} />
          </li>
          <li className="w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex flex-row justify-between items-center w-full text-gray-300"
              href="mailto: ashishkr9214aicte@gmail.com"
              target="_blank"
            >
              Email
            </a>
            <HiOutlineMail size={30} />
          </li>
          <li className="w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex flex-row justify-between items-center w-full text-gray-300"
              href={resume}
              download="resume"
            >
              Resume
            </a>
            <BsFillPersonLinesFill size={30} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
