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
import resume from "../resume.pdf";

function Home() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function handleuser() {
    adduser(name, email, message);
    setEmail("");
    setName("");
    setMessage("");
  }

  let workarr = ["Frontend", "Backend", "Full Stack"];

  const [work, setWork] = useState("Frontend");
  useEffect(() => {
    let i = 0;
    const intervalId = setInterval(() => {
      // Update the state value every 2 seconds
      setWork(workarr[i++]);
      if (i >= 3) {
        i = 0;
      }
    }, 2000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="w-[100%] text-white" id="Home">
      <div className="home-section relative font-roboto pb-[4rem] px-[15%] bg-lightgray">
        <div className="intro-section  pt-[8rem]">
          {/* <h1 className="text-[4rem] font-semibold ">
            Hi, my name is{" "}
            <div className="text-pred text-[5rem]">Satyam Kumar.</div>
          </h1> */}
          <h1 className="text-[4rem] font-semibold pr-[4rem]">
            I'm a <br />
            <span className="text-pred font-bold text-[5rem]">{work}</span>{" "}
            developer.
          </h1>
          <div className="intro-highlight mb-8 text-gray-500 max-w-[50vw]">
            <p>
              Fond of creating web application design and bring them to life
              using code. <br />
              Welcome to my digital space, where I showcase my journey, skills,
              and projects.
            </p>
          </div>
          <button className="">
            <a
              className="resume py-1 px-4 flex justify-center items-center bg-white text-black rounded-md gap-2"
              href={resume}
              download
            >
              <p>Resume</p>
              <FaDownload />
            </a>
          </button>
          <h2 className="text-[1rem] text-gray-500 mt-8">
            Let me show You ...
          </h2>
        </div>
        <div className="line absolute w-[2px] bg-gray-400 top-[8rem] right-[20%] h-[250px] max-[770px]:hidden">
          <div className="circle1 w-8 h-8 border-2 border-pred bg-pred rounded-full absolute top-0 right-[-14.8px] z-2"></div>
          <div className="circle2 w-8 h-8 border-2 border-pred bg-lightgray rounded-full absolute top-[43%] right-[-14.8px]"></div>
          <div className="circle3 w-8 h-8 border-2 border-pred bg-lightgray rounded-full absolute bottom-0 right-[-14.8px]"></div>
        </div>
      </div>

      {/* service section  */}

      <div
        className="service-container py-[4rem] px-[15%] bg-lightgray font-roboto"
        id="Services"
      >
        <div className="intro-box flex flex-col-reverse min-[990px]:flex-row gap-[4rem]">
          <div className="services-container w-full min-[990px]:w-[50%] child:min-h-[165px] child:my-4 child:bg-lightergray child:p-8">
            <div className="service-card">
              <div className="service-card-content">
                <h2 className="text-[1.5rem] font-semibold mb-4">Front-End</h2>
                <p className="text-gray-500">
                  I develop frontend with effecient code structure.
                </p>
              </div>
            </div>
            <div className="service-card">
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
          <div className="introduction-box my-4 w-full min-[990px]:w-[50%]">
            <h3 className="text-[0.9rem] text-gray-500">Introduce</h3>
            <h1 className="text-[3rem] my-8">
              <span className="mr-2">Hello!</span> I'm Satyam Kumar
            </h1>
            <p className="text-gray-500">
              Hello fellow developers! I'm{" "}
              <span className="text-pred font-bold">Satyam Kumar</span>, a
              passionate coder and problem solver to come up with a better
              solution. With a keen knowledge and interest in{" "}
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
              . I also do competitive coding to improve my logical thinking
              using c++.
            </p>
          </div>
        </div>
      </div>

      {/* skill sets */}

      <div
        className="skill-container py-[6rem] px-[15%] bg-darkgray font-roboto relative"
        id="Skills"
      >
        <div className="skill-set">
          <h2 className="font-bold text-pred mb-6 text-[3.5rem]">
            <span className="underline">Skill</span>-Set
          </h2>
          <div className="skill-box grid grid-cols-2  child:bg-lightergray child:p-6 child:w-[200px] child:h-[200px] gap-[3rem] pr-[15%] min-[990px]:grid-cols-3 max-[770px]:pr-0 max-[600px]:grid-cols-1">
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
          <div className="line absolute w-[2px] bg-gray-400 top-[43%] right-[20%] h-[250px] max-[770px]:hidden">
            <div className="circle1 w-8 h-8 border-2 border-pred bg-lightgray rounded-full absolute top-0 right-[-14.8px] z-2"></div>
            <div className="circle2 w-8 h-8 border-2 border-pred bg-pred rounded-full absolute top-[43%] right-[-14.8px]"></div>
            <div className="circle3 w-8 h-8 border-2 border-pred bg-lightgray rounded-full absolute bottom-0 right-[-14.8px]"></div>
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

export default Home;
