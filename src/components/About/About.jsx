import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaDatabase, FaDownload, FaPerson } from "react-icons/fa6";
import { BsGlobe2 } from "react-icons/bs";
import { BsDatabaseFillCheck } from "react-icons/bs";
import {
  FaSitemap,
  FaRegArrowAltCircleRight,
  FaFileCode,
  FaGithub,
  FaNodeJs,
  FaExternalLinkAlt,
} from "react-icons/fa";
import {} from "react-icons/fa6";
import { MdOutlineManageAccounts } from "react-icons/md";
import { RiSpeakFill } from "react-icons/ri";
import adduser from "../email";

import bharatinternlogo from "./companylogo/bharatintern.jpeg";
import baoiamlogo from "./companylogo/baoiam.jpeg";

function About() {
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
    <div className="about-container">
      <div className="intro py-[6rem] px-[15%] bg-lightgray font-roboto relative text-white">
        <h3 className="text-[0.9rem] text-gray-500">Introduce</h3>
        <h1 className="text-[3rem] my-8">
          <span className="mr-2">Hello!</span> I'm Satyam Kumar
        </h1>
        <p className="text-gray-500">
          Hello fellow developers! I'm{" "}
          <span className="text-pred font-bold">Satyam Kumar</span>, a
          passionate coder and problem solver to come up with a better solution.
          With a keen knowledge and interest in{" "}
          <span className="text-pred">Full stack development.</span>
          My journey involves intern as a{" "}
          <span className="text-pred font-bold">
            full stack developer at baoiam pvt limited
          </span>{" "}
          and some virtual internship, and my skill-set includes{" "}
          <span className="underline">
            html, css, js and React.js for frontend and Express, node.js for
            backend
          </span>
          . I also do competitive coding to improve my logical thinking using
          c++.
        </p>
      </div>

      <div className="experience intro py-[6rem] px-[15%] bg-lightgray font-roboto relative text-white">
        <h3 className="text-[0.9rem] text-gray-500">Experience</h3>
        <h1 className="text-[3rem] my-8 mb-[5rem]">
          <span className="mr-2">Talk!</span> About Experience
        </h1>
        <div className="internship flex flex-col gap-20">
          <div className="bharatintern">
            <div className="flex gap-4 mb-8">
              <img
                className="w-12 h-12 rounded-lg"
                src={bharatinternlogo}
                alt=""
                srcset=""
              />
              <h1 className="font-semibold mt-auto text-[1.6rem] underline text-gray-500">
                Bharat Intern
              </h1>
            </div>
            <div className="pl-20">
              <h1 className="text-[1.2rem] text-pred font-bold">Role:</h1>
              <p className="font-bold text-sm mb-12">Full Stack Developer</p>
              <h1 className="text-[1.2rem] text-pred font-bold">
                Worked On Projects:
              </h1>
              <h1 className="font-semibold text-[1.6rem] mt-4">BlogSpot</h1>
              <ul className="text-gray-500 list-disc child:my-8">
                <li>
                  <span className=" text-white font-semibold">
                    Description:{" "}
                  </span>
                  <p>
                    A blog web application based on content management
                    system.Let user to post an image with some paragraph and
                    comment on a post.User can login to their account and they
                    can edit their post.
                  </p>
                </li>
                <li>
                  <span className=" text-white font-semibold">
                    Technology learned:{" "}
                  </span>
                  <ul className="list-inside list-decimal child:mb-2">
                    <li>ReactJS : Frontend development</li>
                    <li>Node.js : Backend development</li>
                    <li>MongoDB : Database</li>
                    <li>
                      Multer npm package for uploading images on database.
                    </li>
                    <li>JWT token for user authentication</li>
                    <li>ReactHooks for state management.</li>
                  </ul>
                </li>
              </ul>
              <Link
                to="https://github.com/silentvoice143/BlogSpot"
                target="_blank"
                className=" px-4 py-2 border-2 border-gray-500 rounded-full inline-flex gap-2 text-gray-500 hover:border-white hover:text-white items-center"
              >
                <p>Blogspot repo</p>
                <FaExternalLinkAlt />
              </Link>
            </div>
          </div>
          <div className="baoiamintern">
            <div className="flex gap-4">
              <img
                className="w-12 h-12 rounded-lg"
                src={baoiamlogo}
                alt=""
                srcset=""
              />
              <h1 className="font-semibold mt-auto text-[1.6rem] underline text-gray-500">
                Baoiam Pvt Limited
              </h1>
            </div>
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
      <div className="copyright bg-black h-[3rem] flex justify-center items-center text-white">
        <p>&copy; Satyam | Developer | Programming Hunter 2023</p>
      </div>
    </div>
  );
}

export default About;
