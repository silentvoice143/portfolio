import React from "react";
import "./navbar.css";
import { FaGithub } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const pathName=location.pathname;
  console.log(pathName)
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="md:h-[8vh] flex flex-col md:block relative z-[100] bg-[#ecf0f3]">
      <nav className="flex flex-row justify-between items-center text-[1.2rem] w-[80%] m-auto nav">
        <Link to="/">
          <div className="brand">
            <h1 className="text-[3rem] font-semibold text-[#1e2125]  head-name">
              Sat<span className="text-[#ff014f]">y</span>am
            </h1>
          </div>
        </Link>
        <ul className="hidden nav-list md:flex md:gap-4 max-[882px]:text-[1rem] lg:gap-6 child:relative child:hover:cursor-pointer">
          <Link to="/" className={`p-2`}>
            <li className={`text-base font-medium text-[#3c3e41] list-item ${pathName==="/"?"active":""}`}>HOME</li>
          </Link>
          <Link to="/service" className="p-2">
            <li className={`text-base font-medium text-[#3c3e41] list-item ${pathName==="/service"?"active":""}`}>SERVICES</li>
          </Link>
          <Link to="/about" className="p-2">
            <li className={`text-base font-medium text-[#3c3e41] list-item ${pathName==="/about"?"active":""}`}>ABOUT</li>
          </Link>
          <Link to="/skills" className="p-2">
            <li className={`text-base font-medium text-[#3c3e41] list-item ${pathName==="/skills"?"active":""}`}>SKILLS</li>
          </Link>
          <Link to="/work" className="p-2">
            <li className={`text-base font-medium text-[#3c3e41] list-item ${pathName==="/work"?"active":""}`}>WORKS</li>
          </Link>
          <Link to="/contact" className="p-2">
            <li className={`text-base font-medium text-[#3c3e41] list-item ${pathName==="/contact"?"active":""}`}>CONTACT</li>
          </Link>
        </ul>
        <div>
          <div className="nav-icons hidden md:inline-block border-2  px-4 py-2 rounded-full hover:border-[#ff014f] duration-200  max-[882px]:border-0 mr-4 max-[882px]:mr-0 max-[882px]:px-2">
            <Link
              to="https://github.com/silentvoice143"
              target="_blank"
              className="flex gap-1 items-center"
            >
              <FaGithub />
            </Link>
          </div>
          <div className="nav-icons hidden md:inline-block border-2 px-4 py-2 rounded-full hover:border-[#ff014f] duration-200 max-[882px]:border-0 max-[882px]:px-2">
            <Link
              to="https://www.linkedin.com/in/satyam-kumar-550b4025a/"
              target="_blank"
              className="flex gap-1 items-center"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>

        <button className="md:hidden hambar" onClick={toggle}>
          {isOpen ? (
            <IoMdClose className="md:hidden text-[2rem] text-[#1e2125]" />
          ) : (
            <IoIosMenu className="md:hidden text-[2rem] text-[#1e2125]" />
          )}
        </button>
      </nav>
      <div id="nav-links"
        className={isOpen ? "px-8 block duration-400 ease" : "hidden"}
      >
        <ul className="w-full flex flex-col nav-list md:hidden md:gap-4 lg:gap-8 child:relative">
          <Link to="/" className="p-5 pl-0">
            <li className="border-b-2 border-[#ff014f] pb-2">Home</li>
          </Link>
          <Link to="/service" className="p-5 pl-0">
            <li className="border-b-2 border-[#ff014f] pb-2">Services</li>
          </Link>
          <Link to="/about" className="p-5 pl-0">
            <li className="border-b-2 border-[#ff014f] pb-2">About</li>
          </Link>
          <Link to="/skills" className="p-5 pl-0">
            <li className="border-b-2 border-[#ff014f] pb-2">Skills</li>
          </Link>
          <Link to="/work" className="p-5 pl-0">
            <li className="border-b-2 border-[#ff014f] pb-2">Works</li>
          </Link>
          <Link to="/contact" className="p-5 pl-0">
            <li className="border-b-2 border-[#ff014f] pb-2">Contact</li>
          </Link>
        </ul>
        <br />
        <div className="md:hidden mb-5 mt-4">
          <div className="nav-icons px-4 py-2 inline-block rounded-full border-[2px] border-[#ff014f] mr-4">
            <Link
              to="https://github.com/silentvoice143"
              target="_blank"
              className="flex gap-1 items-center"
            >
              <FaGithub className="w-6 h-6" />
            </Link>
          </div>
          <div className="nav-icons inline-block  px-4 py-2 rounded-full border-[2px] border-[#ff014f]">
            <Link
              to="https://www.linkedin.com/in/satyam-kumar-550b4025a/"
              target="_blank"
              className="flex gap-1 items-center"
            >
              <FaLinkedin className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
