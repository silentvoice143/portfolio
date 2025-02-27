import "./Home.css";
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
    <div className="w-[100%] text-black bg-[#ecf0f3]" id="Home">
      <div className="home-section relative  w-full py-[2rem] flex px-[15%] z-[1]  items-center">
        <div className="flex-1 mt-8">
          <h1
            className="text-3xl md:text-6xl md:leading-10 font-semibold text-[#1e2125] pr-[4rem] mb-8"
            data-aos="fade-down"
            data-aos-duration="1200"
          >
            I'm a <br />
            <span className="text-[#ff014f] font-bold text-4xl md:text-7xl">
              {work}
            </span>{" "}
            <br />
            developer.
          </h1>
          <div className="intro-highlight mb-8 text-[#3c3e41] md:max-w-[50vw] text-[1rem]">
            <p>
              A Full Stack Developer is a versatile professional skilled in both
              front-end and back-end technologies. This role involves building
              and maintaining the entire spectrum of a web application—from
              crafting engaging user interfaces to developing robust server-side
              logic and managing databases.
            </p>
          </div>
          <button className="">
            <a
              className="resume py-2 px-5 flex justify-center text-sm items-center bg-transparent outline-1 outline-dashed text-[#1e2125] gap-2 hover:outline-[#ff014f] hover:px-7 duration-200"
              href={resume}
              download
            >
              <p>Download Cv</p>
              <FaDownload />
            </a>
          </button>
          {/* <h2 className="text-[1rem] text-gray-500 mt-8">
            Let me show You ...
          </h2> */}
        </div>
        <div className="line absolute w-[2px] bg-gray-400 top-[50%] translate-y-[-50%] right-[20%] h-[250px] max-[770px]:hidden">
          <div className="circle1 w-8 h-8 border-2 border-[#1e2125] bg-[#ff014f] rounded-full absolute top-0 right-[-14.8px] z-2"></div>
          <div className="circle2 w-8 h-8 border-2 border-[#ff014f] bg-[#1e2125] rounded-full absolute top-[43%] right-[-14.8px]"></div>
          <div className="circle3 w-8 h-8 border-2 border-[#ff014f] bg-[#1e2125] rounded-full absolute bottom-0 right-[-14.8px]"></div>
        </div>
      </div>

      {/* service section  */}

      <div
        className="service-container pt-[5rem] pb-[2.5rem] px-[15%] bg-[#ecf0f3]"
        id="Services"
      >
        <div className="intro-box flex flex-col-reverse min-[990px]:flex-row gap-[4rem]">
          <div className="services-container w-full min-[990px]:w-[50%] child:min-h-[165px] child:my-4 child:outline-2 child:outline-double child:outline-[#1e2125] child:p-6">
            <div
              className="service-card hover:py-[3rem] duration-300 hover:bg-[#ff014f] border hover:border-white rounded-xl group"
              data-aos="fade-right"
            >
              <div className="service-card-content">
                <h2 className="text-[1.5rem] font-semibold text-[#1e2125] mb-2 group-hover:text-white">
                  Front-End
                </h2>
                <p className="text-[#3c3e41] group-hover:text-white">
                  Building the visual elements of a website or web application
                  that users interact with directly. It involves a combination
                  of HTML, CSS, and JavaScript to create responsive,
                  user-friendly, and engaging interfaces.
                </p>
              </div>
            </div>
            <div
              className="service-card hover:py-[3rem] duration-300 hover:bg-[#ff014f] border hover:border-white rounded-xl group"
              data-aos="fade-right"
            >
              <div className="service-card-content ">
                <h2 className="text-[1.5rem] font-semibold text-[#1e2125] mb-4 group-hover:text-white">
                  Back-End
                </h2>
                <p className="text-[#3c3e41] group-hover:text-white">
                  Developer with experience in building scalable web
                  applications, RESTful APIs, and database management. I
                  specialize in Node.js, Express.js, and MongoDB, with a focus
                  on performance optimization and security.
                </p>
              </div>
            </div>
            <div
              className="service-card hover:py-[3rem] duration-300 hover:bg-[#ff014f] border hover:border-white rounded-xl group"
              data-aos="fade-right"
            >
              <div className="service-card-content">
                <h2 className="text-[1.5rem] font-semibold text-[#1e2125] group-hover:text-white mb-4">
                  Full-stack
                </h2>
                <p className="text-[#3c3e41] group-hover:text-white">
                  Full stack development involves working on both the visible
                  part of an application that users interact with (frontend) and
                  the behind-the-scenes logic that processes data and manages
                  databases (backend).
                </p>
              </div>
            </div>
          </div>
          <div className="introduction-box my-4 w-full min-[990px]:w-[50%]">
            <h3 className="text-[1rem] text-[#3c3e41]">Introduce</h3>
            <h1 className="text-[3rem] text-[#1e2125] my-4">
              <span className="mr-2">Hello!</span> I'm Satyam Kumar
            </h1>
            <p className="text-[#3c3e41] text-[1rem]">
              Hello fellow developers! I'm{" "}
              <span className="text-[#ff014f] font-bold">Satyam Kumar</span>, a
              passionate coder and problem solver to come up with a better
              solution. With a keen knowledge and interest in{" "}
              <span className="text-[#ff014f] font-bold">
                Full stack development.
              </span>
              My journey involves intern as a{" "}
              <span className="text-[#ff014f] font-bold">
                full stack developer at baoiam pvt limited
              </span>{" "}
              and some virtual internship, and my skill-set includes{" "}
              <span className="">
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
        className="skill-container py-[4rem] px-[15%] bg-[#ecf0f3] relative"
        id="Skills"
      >
        <div className="skill-set">
          <h2 className="font-bold text-[#ff014f] mb-6 text-[3rem]">
            <span className="">Skills</span>
          </h2>
          <div className="skill-box grid grid-cols-2 child:outline-2 child:outline-double child:outline-[#3c3e41] child:p-8 child:w-[300px] child:h-[200px] gap-[3rem] pr-[15%] min-[990px]:grid-cols-3 max-[770px]:pr-0 max-[600px]:grid-cols-1">
            <div
              className="skill-item hover:outline-[#ff014f]  duration-200"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <BsGlobe2 className="text-[2.5rem] text-[#ff014f] mb-2" />
              <p className="font-bold mb-2 text-[#1e2125]">Front-End</p>
              <ul className="text-[0.9rem] text-[#3c3e41] list-disc">
                <li>Html, Css, JS, JQuery</li>
                <li>React.js</li>
                <li>Tailwind Css, Bootstrap</li>
              </ul>
            </div>
            <div
              className="skill-item hover:outline-[#ff014f]  duration-200"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <FaNodeJs className="text-[2.5rem] text-[#ff014f] mb-2" />
              <p className="font-bold mb-2 text-[#1e2125]">Back-End</p>
              <ul className="text-[0.9rem] text-[#3c3e41] list-disc">
                <li>Node.js</li>
                <li>Express</li>
              </ul>
            </div>
            <div
              className="skill-item hover:outline-[#ff014f]  duration-200"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <FaGithub className="text-[2.5rem] text-[#ff014f] mb-2" />
              <p className="font-bold mb-2 text-[#1e2125]">
                Git Version Control
              </p>
              <ul className="text-[0.9rem] text-[#3c3e41] list-disc">
                <li>version control using cmd and VS Code</li>
              </ul>
            </div>
            <div
              className="skill-item hover:outline-[#ff014f]  duration-200"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <BsDatabaseFillCheck className="text-[2.5rem] text-[#ff014f] mb-2" />
              <p className="font-bold mb-2 text-[#1e2125]">Database</p>
              <ul className="text-[0.9rem] text-[#3c3e41] list-disc">
                <li>MongoDb</li>
                <li>SQL</li>
              </ul>
            </div>
            <div
              className="skill-item hover:outline-[#ff014f]  duration-200"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <FaFileCode className="text-[2.5rem] text-[#ff014f] mb-2" />
              <p className="font-bold mb-2 text-[#1e2125]">
                Programming Languages
              </p>
              <ul className="text-[0.9rem] text-[#3c3e41] list-disc">
                <li>C, C++, Typescript</li>
                <li>Java, Python(basic)</li>
              </ul>
            </div>
            <div
              className="skill-item hover:outline-[#ff014f]  duration-200"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <FaSitemap className="text-[2.5rem] text-[#ff014f] mb-2" />
              <p className="font-bold mb-2 text-[#1e2125]">DSA</p>
              <ul className="text-[0.9rem] text-[#3c3e41] list-disc">
                <li>Sorting, Searching Recursive</li>
                <li>Greedy, Dynamic and BITs etc</li>
              </ul>
            </div>
            <div
              className="skill-item hover:outline-[#ff014f]  duration-200"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <FaPerson className="text-[2.5rem] text-[#ff014f] mb-2" />
              <p className="font-bold mb-2 text-[#1e2125]">Leadership</p>
              <ul className="text-[0.9rem] text-[#3c3e41] list-disc">
                <li>Project leader at Baoiam Pvt Limited</li>
                <li>Valuable Experience</li>
              </ul>
            </div>
            <div
              className="skill-item hover:outline-[#ff014f]  duration-200"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <MdOutlineManageAccounts className="text-[2.5rem] text-[#ff014f] mb-2" />
              <p className="font-bold mb-2 text-[#1e2125]">
                Project Management
              </p>
              <ul className="text-[0.9rem] text-[#3c3e41] list-disc">
                <li>Managed Baoiam project with team</li>
                <li>Completed Frontend</li>
              </ul>
            </div>
            <div
              className="skill-item hover:outline-[#ff014f]  duration-200"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <RiSpeakFill className="text-[2.5rem] text-[#ff014f] mb-2" />
              <p className="font-bold mb-2 text-[#1e2125]">Communication</p>
              <ul className="text-[0.9rem] text-[#3c3e41] list-disc">
                <li>Verbal and Written</li>
                <li>HIndi and English</li>
              </ul>
            </div>
          </div>
          <div className="line absolute w-[2px] bg-gray-400 top-[43%] right-[20%] h-[250px] max-[770px]:hidden">
            <div className="circle1 w-8 h-8 border-2 border-[#ff014f] bg-[#1e2125] rounded-full absolute top-0 right-[-14.8px] z-2"></div>
            <div className="circle2 w-8 h-8 border-2 border-[#1e2125] bg-[#ff014f] rounded-full absolute top-[43%] right-[-14.8px]"></div>
            <div className="circle3 w-8 h-8 border-2 border-[#ff014f] bg-[#1e2125] rounded-full absolute bottom-0 right-[-14.8px]"></div>
          </div>
        </div>
      </div>
      <div
        className="contact-section py-[5rem] px-[15%] bg-[#ecf0f3] relative"
        id="Contact"
      >
        <div className="connect-box w-[40vw] max-[770px]:w-[70vw] flex flex-col gap-4">
          <h1 className="text-[#ff014f] text-[4rem] font-semibold">
            Connect With Me
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
            className=" outline-2 outline-double outline-[#1e2125] p-4 text-[#3c3e41] outline-none bg-transparent"
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
            className=" outline-2 outline-double outline-[#1e2125] p-4 text-gray-500 outline-none bg-transparent"
          />

          <textarea
            name="msg"
            id=""
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            value={message}
            placeholder="Write your message"
            className="outline-2 outline-double outline-[#1e2125] p-4 text-gray-500 outline-none bg-transparent"
          />
          <div className="flex w-full justify-end text-lightgray text-[1.2rem]">
            <button
              onClick={handleuser}
              className="outline-2 outline-dashed p-4 flex gap-4 mt-2 items-center justify-center font-bold hover:px-6 duration-300 hover:outline-[#ff014f]"
            >
              Stay Connected
              <FaRegArrowAltCircleRight />
            </button>
          </div>
        </div>
        <div className="line absolute w-[2px] bg-gray-400 top-[30%] right-[20%] h-[250px] max-[770px]:hidden">
          <div className="circle1 w-8 h-8 border-2 border-[#ff014f] bg-[#1e2125] rounded-full absolute top-0 right-[-14.8px] z-2"></div>
          <div className="circle2 w-8 h-8 border-2 border-[#ff014f] bg-[#1e2125]  rounded-full absolute top-[43%] right-[-14.8px]"></div>
          <div className="circle3 w-8 h-8 border-2 border-[#1e2125]  bg-[#ff014f] rounded-full absolute bottom-0 right-[-14.8px]"></div>
        </div>
      </div>
      <div className="copyright bg-[#ecf0f3] h-[5rem] flex justify-center items-center text-[#1e2125]">
        <p>&copy; Satyam | Developer | Programming Hunter 2025</p>
      </div>
    </div>
  );
}

export default Home;
