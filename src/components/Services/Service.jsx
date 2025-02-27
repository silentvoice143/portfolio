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
      <div className="intro py-[6rem] px-[15%] bg-[#ecf0f3] relative">
        <h1 className="text-4xl font-mont text-[#1e2125]">
          {" "}
          With a commitment to excellence,{" "}
          <span className="text-[#ff014f] underline">innovation</span>, and client
          satisfaction, I bring a wealth of experience to every project I
          undertake.
        </h1>

        <h1 className="text-6xl text-[#ff014f] my-[4rem]">Why Choose Me?</h1>
        <ul className="flex flex-col gap-8">
          <li>
            <h1 className="text-3xl text-[#1e2125] mb-4">Dedicated to My Goal</h1>
            <p className="text-sm text-[#3c3e41] lg:pr-[22rem]">
              As a developer, I explore different technology like React.js,
              Node.js, TypeScript etc. And still eager to learn different
              technology and honing my skills to become one of the best
              developer.
            </p>
          </li>
          <li>
            <h1 className="text-3xl text-[#1e2125] mb-4 ">
              Not an Expert yet, But a Good learner
            </h1>
            <p className="text-sm text-[#3c3e41] lg:pr-[22rem]">
              I am still on a journey to becoming a best developer. I learn from
              Youtube and Internet, best teacher for me. And ofcourse my mistake
              at the time of developing something new teaches me a lot.
            </p>
          </li>
          <li>
            <h1 className="text-3xl text-[#1e2125] mb-4">Become a Solver</h1>
            <p className="text-sm text-[#3c3e41] lg:pr-[22rem]">
              As a self learner, If I stuck somewhere I go through documentation
              and explore stackoverflow for the solution. Now a day using
              chatGPT as a personal guide.
            </p>
          </li>
        </ul>
      </div>


      {/* service section */}
      <div className="services-box py-[5rem] px-[15%] bg-[#ecf0f3] relative text-white">
        <h2 className="font-bold text-6xl text-[#ff014f] mb-[4rem]">Services</h2>
        <div className="flex">
          <div className="servicesw-full min-[990px]:w-[50%] child:min-h-[165px] child:my-4 child:outline-2 child:outline-double child:outline-[#1e2125] child:p-6">
            <div className="service-card hover:py-[3rem] duration-300 hover:bg-[#ff014f]" data-aos="fade-right">
              <div className="service-card-content">
                <h2 className="text-[1.5rem] font-semibold mb-4 text-[#1e2125]">Front-End</h2>
                <p className="text-[#3c3e41]">
                  I develop frontend with effecient code structure.
                </p>
              </div>
            </div>
            <div className="service-card hover:py-[3rem] duration-300 hover:bg-[#ff014f]" data-aos="fade-right">
              <div className="service-card-content">
                <h2 className="text-[1.5rem] font-semibold mb-4 text-[#1e2125]">Back-End</h2>
                <p className="text-[#3c3e41]">
                  Turn ideas into robust, scalable, and high-performance digital
                  solutions.
                </p>
              </div>
            </div>
            <div className="service-card hover:py-[3rem] duration-300 hover:bg-[#ff014f]" data-aos="fade-right">
              <div className="service-card-content">
                <h2 className="text-[1.5rem] font-semibold mb-4 text-[#1e2125]">Full-stack</h2>
                <p className="text-[#3c3e41]">
                  I develop full stack web application using MERN.
                </p>
              </div>
            </div>
          </div>
          <div className="hidden min-[990px]:w-[50%] min-[990px]:flex justify-center items-center">
            <h1 className="text-6xl text-[#1e2125]">
              Create <br />{" "}
              <span className="text-[#ff014f]">Something</span> <br />{" "}
              Valuable
            </h1>
          </div>
        </div>
      </div>
      <div
        className="contact-section py-[6rem] px-[15%] bg-[#ecf0f3]   relative"
        id="Contact"
      >
        <div className="connect-box w-[40vw] max-[770px]:w-[70vw] flex flex-col gap-4">
          <h1 className="text-[#ff014f] text-[4rem] font-semibold">
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
            className=" outline-2 outline-double outline-[#1e2125] p-4 text-[#3c3e41] outline-none bg-transparent"
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
            className=" outline-2 outline-double outline-[#1e2125] p-4 text-[#3c3e41] outline-none bg-transparent"
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

export default Service;
