import React from "react";
import "./navbar.css";
import { FaGithub } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="md:h-[5rem] bg-darkgray text-white flex flex-col md:block relative z-[100]">
      <nav className="flex flex-row justify-between items-center text-[1.2rem] w-[92%] m-auto">
        <Link to="/">
          <div className="brand">
            <h1 className="text-[3rem] font-paci">
              Sat<span className="text-pred">y</span>am
            </h1>
          </div>
        </Link>
        <ul className="hidden nav-list md:flex md:gap-4 max-[882px]:text-[1rem] lg:gap-8 child:relative child:hover:cursor-pointer">
          <Link to="/" className="p-2">
            <li className="list-item">Home</li>
          </Link>
          <Link to="/service" className="p-2">
            <li className="list-item">Services</li>
          </Link>
          <Link to="/about" className="p-2">
            <li className="list-item">About</li>
          </Link>
          <Link to="/skills" className="p-2">
            <li className="list-item">Skills</li>
          </Link>
          <Link to="/work" className="p-2">
            <li className="list-item">Works</li>
          </Link>
          <Link to="/contact" className="p-2">
            <li className="list-item">Contact</li>
          </Link>
        </ul>
        <div className="nav-icons hidden md:inline-block border-2 px-4 py-2 rounded-full hover:border-pred">
          <Link
            to="https://github.com/silentvoice143"
            target="_blank"
            className="flex gap-1 items-center"
          >
            <FaGithub />
            <p className="text-[0.7rem] max-[882px]:hidden">GitHub</p>
          </Link>
        </div>
        <button className="md:hidden" onClick={toggle}>
          {isOpen ? (
            <IoMdClose className="md:hidden text-[2rem]" />
          ) : (
            <IoIosMenu className="md:hidden text-[2rem]" />
          )}
        </button>
      </nav>
      <div
        className={isOpen ? "px-8 block duration-200 ease-linear" : "hidden"}
      >
        <ul className="w-full flex flex-col nav-list md:hidden md:gap-4 lg:gap-8 child:relative">
          <Link to="/" className="p-2 pl-0">
            <li className="border-b-2 border-lightergray">Home</li>
          </Link>
          <Link to="/service" className="p-2 pl-0">
            <li className="border-b-2 border-lightergray">Services</li>
          </Link>
          <Link to="/about" className="p-2 pl-0">
            <li className="border-b-2 border-lightergray">About</li>
          </Link>
          <Link to="/skills" className="p-2 pl-0">
            <li className="border-b-2 border-lightergray">Skills</li>
          </Link>
          <Link to="/work" className="p-2 pl-0">
            <li className="border-b-2 border-lightergray">Works</li>
          </Link>
          <Link to="/contact" className="p-2 pl-0">
            <li className="border-b-2 border-lightergray">Contact</li>
          </Link>
        </ul>
        <br />
        <div className="nav-icons px-4 py-2 border-2 border-white inline-block rounded-full md:hidden mb-8 mt-4">
          <Link
            to="https://github.com/silentvoice143"
            target="_blank"
            className="flex gap-1 items-center"
          >
            <FaGithub />
            <p className="text-[0.7rem]">GitHub</p>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
