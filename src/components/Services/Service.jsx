import React, { useState, useEffect } from "react";
import { FaDatabase, FaDownload, FaPerson } from "react-icons/fa6";
import { BsGlobe2 } from "react-icons/bs";
import { BsDatabaseFillCheck } from "react-icons/bs";
import {
  FaSitemap,
  FaRegArrowAltCircleRight,
  FaFileCode,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";
import {} from "react-icons/fa6";
import { MdOutlineManageAccounts } from "react-icons/md";
import { RiSpeakFill } from "react-icons/ri";
import adduser from "../email";

function Service() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function handleuser() {
    adduser(name, email, message);
    setEmail("");
    setName("");
    setMessage("");
  }
  return (
    <div className="service-container text-white">
      <div className="intro py-[6rem] px-[15%] bg-lightgray font-roboto relative text-gray-500">
        <h1 className="text-4xl font-mont">
          {" "}
          With a commitment to excellence,{" "}
          <span className="text-pred underline">innovation</span>, and client
          satisfaction, I bring a wealth of experience to every project I
          undertake.
        </h1>

        <h1 className="text-6xl text-pred my-[4rem]">Why Choose Me?</h1>
        <ul className="flex flex-col gap-8">
          <li>
            <h1 className="text-3xl text-white mb-4">Dedicated to My Goal</h1>
            <p className="text-sm">
              As a developer, I explore different technology like React.js,
              Node.js, TypeScript etc. And still eager to learn different
              technology and honing my skills to become one of the best
              developer.
            </p>
          </li>
          <li>
            <h1 className="text-3xl text-white mb-4">
              Not an Expert yet, But a Good learner
            </h1>
            <p className="text-sm">
              I am still on a journey to becoming a best developer. I learn from
              Youtube and Internet, best teacher for me. And ofcourse my mistake
              at the time of developing something new teaches me a lot.
            </p>
          </li>
          <li>
            <h1 className="text-3xl text-white mb-4">Become a Solver</h1>
            <p className="text-sm">
              As a self learner, If I stuck somewhere I go through documentation
              and explore stackoverflow for the solution. Now a day using
              chatGPT as a personal guide.
            </p>
          </li>
        </ul>
      </div>
      <div className="services-box py-[6rem] px-[15%] bg-lightgray font-roboto relative text-white">
        <h2 className="font-bold text-6xl text-pred mb-[4rem]">Services</h2>
        <div className="flex">
          <div className="services w-full min-[990px]:w-[50%] child:min-h-[165px] child:my-4 child:bg-lightergray child:p-8">
            <div className="service-card">
              <div className="service-card-content">
                <h2 className="text-[1.5rem] font-semibold mb-4">Front-End</h2>
                <p className="text-gray-500">
                  I develop frontend with effecient code structure.
                </p>
              </div>
            </div>
            <div className="service-card ">
              <div className="service-card-content">
                <h2 className="text-[1.5rem] font-semibold mb-4">Back-End</h2>
                <p className="text-gray-500">
                  Turn ideas into robust, scalable, and high-performance digital
                  solutions.
                </p>
              </div>
            </div>
            <div className="service-card">
              <div className="service-card-content">
                <h2 className="text-[1.5rem] font-semibold mb-4">Full-stack</h2>
                <p className="text-gray-500">
                  I develop full stack web application using MERN.
                </p>
              </div>
            </div>
          </div>
          <div className="hidden min-[990px]:w-[50%] min-[990px]:flex justify-center items-center">
            <h1 className="text-6xl">
              Create <br />{" "}
              <span className="text-pred font-paci">Something</span> <br />{" "}
              Valuable
            </h1>
          </div>
        </div>
      </div>
      <div
        className="contact-section py-[6rem] px-[15%] bg-lightgray font-roboto relative"
        id="Contact"
      >
        <div className="connect-box w-[40vw] max-[770px]:w-[70vw] flex flex-col gap-4">
          <h1 className="text-pred text-[4rem] font-semibold">
            Connect with me
          </h1>
          <input
            type="text"
            name="name"
            id=""
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
            placeholder="Name"
            className="bg-lightergray p-4 text-gray-500 outline-none"
          />
          <input
            type="email"
            name="email"
            id=""
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            placeholder="Email"
            className="bg-lightergray p-4 text-gray-500 outline-none"
          />

          <input
            type="text"
            name="msg"
            id=""
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            value={message}
            placeholder="Message"
            className="bg-lightergray p-4 text-gray-500 outline-none"
          />
          <div className="flex w-full justify-end text-lightgray text-[1.2rem]">
            <button
              onClick={handleuser}
              className="bg-pred p-4 flex gap-4 items-center justify-center font-bold"
            >
              Stay Connected
              <FaRegArrowAltCircleRight />
            </button>
          </div>
        </div>

        <div className="line absolute w-[2px] bg-gray-400 top-[30%] right-[20%] h-[250px] max-[770px]:hidden">
          <div className="circle1 w-8 h-8 border-2 border-pred bg-lightgray rounded-full absolute top-0 right-[-14.8px] z-2"></div>
          <div className="circle2 w-8 h-8 border-2 border-pred bg-lightgray  rounded-full absolute top-[43%] right-[-14.8px]"></div>
          <div className="circle3 w-8 h-8 border-2 border-pred  bg-pred rounded-full absolute bottom-0 right-[-14.8px]"></div>
        </div>
      </div>
      <div className="copyright bg-black h-[3rem] flex justify-center items-center">
        <p>&copy; Satyam | Developer | Programming Hunter 2023</p>
      </div>
    </div>
  );
}

export default Service;
