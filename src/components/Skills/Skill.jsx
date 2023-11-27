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
import { IoMdClose } from "react-icons/io";
import {} from "react-icons/fa6";
import { MdOutlineManageAccounts } from "react-icons/md";
import { RiSpeakFill } from "react-icons/ri";
import adduser from "../email";
import codingninja from "./Screenshot 2023-11-27 203025.png";
import leetcode from "./Screenshot 2023-11-27 203057.png";

function Skill() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [showimg1, setShowimg1] = useState(false);
  const [showimg2, setShowimg2] = useState(false);

  function handleimg(e) {
    if (e.target.name === "leetcode") {
      setShowimg1(true);
    }
    if (e.target.name === "codingninja") {
      setShowimg2(true);
    }
  }

  function handleuser() {
    adduser(name, email, message);
    setEmail("");
    setName("");
    setMessage("");
  }
  return (
    <div className="skills-container">
      <div className="skill-intro py-[6rem] px-[15%] bg-lightgray font-roboto relative text-gray-500">
        <h1 className="text-[10vw] max-[700px]:text-[14vw]">
          Talk is <span className="text-pred">Cheap.</span>
        </h1>
        <h1 className="text-[8vw] max-[700px]:text-[10vw]">
          Show me the <span className="text-pred underline">code.</span>
        </h1>
      </div>
      {/* skill sets */}

      <div
        className="skill-container py-[6rem] px-[15%] bg-darkgray font-roboto relative text-white"
        id="Skills"
      >
        <div className="skill-set">
          <h2 className="font-bold text-pred mb-6 text-[3.5rem]">
            <span className="underline">Skill</span>-Set
          </h2>
          <div className="skill-box grid grid-cols-2  child:bg-lightergray child:p-6 child:w-[200px] child:h-[200px] gap-[3rem] min-[990px]:grid-cols-3 max-[770px]:pr-0 max-[600px]:grid-cols-1 child:m-auto">
            <div className="skill-item">
              <BsGlobe2 className="text-[2.5rem] text-pred mb-2" />
              <p className="font-bold mb-2">Front-End</p>
              <ul className="text-[0.9rem] text-gray-500 list-disc">
                <li>Html, Css, JS, JQuery</li>
                <li>React.js</li>
                <li>Tailwind Css, Bootstrap</li>
              </ul>
            </div>
            <div className="skill-item">
              <FaNodeJs className="text-[2.5rem] text-pred mb-2" />
              <p className="font-bold mb-2">Back-End</p>
              <ul className="text-[0.9rem] text-gray-500 list-disc">
                <li>Node.js</li>
                <li>Express</li>
              </ul>
            </div>
            <div className="skill-item">
              <FaGithub className="text-[2.5rem] text-pred mb-2" />
              <p className="font-bold mb-2">Git Version Control</p>
              <ul className="text-[0.9rem] text-gray-500 list-disc">
                <li>version control using cmd and VS Code</li>
              </ul>
            </div>
            <div className="skill-item">
              <BsDatabaseFillCheck className="text-[2.5rem] text-pred mb-2" />
              <p className="font-bold mb-2">Database</p>
              <ul className="text-[0.9rem] text-gray-500 list-disc">
                <li>MongoDb</li>
                <li>SQL</li>
              </ul>
            </div>
            <div className="skill-item">
              <FaFileCode className="text-[2.5rem] text-pred mb-2" />
              <p className="font-bold mb-2">Programming Languages</p>
              <ul className="text-[0.9rem] text-gray-500 list-disc">
                <li>C, C++, Typescript</li>
                <li>Java, Python(basic)</li>
              </ul>
            </div>
            <div className="skill-item">
              <FaSitemap className="text-[2.5rem] text-pred mb-2" />
              <p className="font-bold mb-2">DSA</p>
              <ul className="text-[0.9rem] text-gray-500 list-disc">
                <li>Sorting, Searching Recursive</li>
                <li>Greedy, Dynamic and BITs etc</li>
              </ul>
            </div>
            <div className="skill-item">
              <FaPerson className="text-[2.5rem] text-pred mb-2" />
              <p className="font-bold mb-2">Leadership</p>
              <ul className="text-[0.9rem] text-gray-500 list-disc">
                <li>Project leader at Baoiam Pvt Limited</li>
                <li>Valuable Experience</li>
              </ul>
            </div>
            <div className="skill-item">
              <MdOutlineManageAccounts className="text-[2.5rem] text-pred mb-2" />
              <p className="font-bold mb-2">Project Management</p>
              <ul className="text-[0.9rem] text-gray-500 list-disc">
                <li>Managed Baoiam project with team</li>
                <li>Completed Frontend</li>
              </ul>
            </div>
            <div className="skill-item">
              <RiSpeakFill className="text-[2.5rem] text-pred mb-2" />
              <p className="font-bold mb-2">Communication</p>
              <ul className="text-[0.9rem] text-gray-500 list-disc">
                <li>Verbal and Written</li>
                <li>HIndi and English</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="cooding-platforms skill-container py-[6rem] px-[15%] bg-darkgray font-roboto relative text-white">
        <h1 className="text-pred text-[4rem] font-semibold">Coding Profiles</h1>
        <div>
          <div className="leetcode mb-[5rem]">
            <a href="https://leetcode.com/silent_voice143/">
              <h1 className="text-[2rem] font-semibold my-8 underline">
                Leetcode
              </h1>
            </a>
            <div className="code-content-box">
              <div className="profile-img rounded-lg overflow-hidden">
                <img
                  name="leetcode"
                  className="cursor-pointer"
                  src={leetcode}
                  alt=""
                  srcset=""
                  onClick={handleimg}
                />
              </div>
            </div>
          </div>
          <div className="codingninjs">
            <a href="https://www.codingninjas.com/studio/profile/b98b17bb-c9e8-4c90-b732-437e9c265b2f">
              <h1 className="text-[2rem] font-semibold my-8 underline">
                Coding Ninjas
              </h1>
            </a>
            <div className="code-content-box">
              <div className="profile-img rounded-lg overflow-hidden">
                <img
                  name="codingninja"
                  className="cursor-pointer"
                  src={codingninja}
                  alt=""
                  srcset=""
                  onClick={handleimg}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="leetcode-fullscreenModal"
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 ${
          showimg1 ? "block" : "hidden"
        }`}
      >
        <button
          onClick={() => {
            setShowimg1(false);
          }}
          className=" absolute top-6 right-10 close-img text-[3rem] text-white"
        >
          <IoMdClose />
        </button>
        <div class="flex justify-center items-center h-full">
          <img
            src={leetcode}
            alt=""
            class="max-h-full max-w-full"
            id="modalImage"
          />
        </div>
      </div>
      <div
        id="codingninja-fullscreenModal"
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 ${
          showimg2 ? "block" : "hidden"
        }`}
      >
        <button
          onClick={() => {
            setShowimg2(false);
          }}
          className=" absolute top-6 right-10 close-img text-[3rem] text-white"
        >
          <IoMdClose />
        </button>
        <div class="flex justify-center items-center h-full">
          <img
            src={codingninja}
            alt=""
            class="max-h-full max-w-full"
            id="modalImage"
          />
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

export default Skill;
