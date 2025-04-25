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
import { } from "react-icons/fa6";
import { MdOutlineManageAccounts } from "react-icons/md";
import { RiSpeakFill } from "react-icons/ri";
import adduser from "../email";

import bharatinternlogo from "./companylogo/bharatintern.jpeg";
import baoiamlogo from "./companylogo/baoiam.jpeg";
import atticbitslogo from "./companylogo/atticbits.jpg"

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
      <div className="intro py-[6rem] px-[15%] bg-[#ecf0f3] relative text-white">
        <h3 className="text-[0.9rem] text-[#3c3e41]">Introduce</h3>
        <h1 className="text-[3rem] my-8 text-[#1e2125]">
          <span className="mr-2">Hello!</span> I'm Satyam Kumar
        </h1>
        <p className="text-[#3c3e41]">
          Hello fellow developers! I'm{" "}
          <span className="text-[#ff014f] font-bold">Satyam Kumar</span>, a
          passionate coder and problem solver to come up with a better solution.
          With a keen knowledge and interest in{" "}
          <span className="text-[#ff014f]">Full stack development.</span>
          My journey involves intern as a{" "}
          <span className="text-[#ff014f] font-bold">
            full stack developer at baoiam pvt limited
          </span>{" "}
          and some virtual internship, and my skill-set includes{" "}
          <span className="">
            html, css, js and React.js for frontend and Express, node.js for
            backend
          </span>
          . I also do competitive coding to improve my logical thinking using
          c++.
        </p>
      </div>

      <div className="education py-[5rem] px-[15%] bg-[#ecf0f3] relative">
        <h1 className="text-[3rem] my-8 mb-[5rem] text-[#1e2125]">Education Qualification</h1>
        <div className="pl-12">
          <div className="edu-content mb-12">
            <h1 className="text-sm text-[#ff014f]">MATRICULATION /></h1>
            <h1 className="text-2xl font-mono font-semibold text-[#3c3e41] mt-4">
              Jack And Jill School <br />
              Singhani Korrah Hazaribagh
            </h1>
            <p className="text-sm mb-4 text-[#1e2125]">2018</p>
          </div>
          <div className="edu-content mb-12">
            <h1 className="text-sm text-[#ff014f]">INTERMEDIATE /></h1>
            <h1 className="text-2xl font-mono font-semibold text-[#3c3e41] mt-4">
              Inter Science College <br />
              Hazaribagh
            </h1>
            <p className="text-sm mb-4 text-[#1e2125]">2018-2020</p>
          </div>
          <div className="edu-content">
            <h1 className="text-sm text-[#ff014f]">
              Bachelor of Computer Application />
            </h1>
            <h1 className="text-2xl font-mono font-semibold text-[#3c3e41] mt-4">
              Annada College <br />
              Hazaribagh
            </h1>
            <p className="text-sm mb-4 text-[#1e2125]">2021-2024</p>
          </div>
        </div>
      </div>

      <div className="experience intro py-[6rem] px-[15%] bg-[#ecf0f3] relative text-white">
        <h3 className="text-[0.9rem] text-[#3c3e41]">Experience</h3>
        <h1 className="text-[3rem] my-8 mb-[5rem] text-[#1e2125]">
          <span className="mr-2">Talk!</span> About Experience
        </h1>
        <div className="internship flex flex-col gap-20">
          <div className="bharatintern">
            <div className="flex gap-4 mb-8">
              <img
                className="w-12 h-12 rounded-lg"
                src={atticbitslogo}
                alt=""
                srcset=""
              />
              <h1 className="font-semibold mt-auto text-[1.6rem]  text-[#3c3e41]">
                Atticbits Private Limited
              </h1>
            </div>
            <div className="pl-20">
              <h1 className="text-[1.2rem] text-[#ff014f] font-bold">Role:</h1>
              <p className="font-bold text-sm mb-12 text-[#3c3e41]">Software developer</p>
              <h1 className="text-[1.2rem] text-[#ff014f] font-bold">
                Worked On Projects:
              </h1>
              <div>
                <h1 className="font-semibold text-[1.6rem] mt-4 text-[#1e2125]">Wavework</h1>
                <ul className="text-[#1e2125] list-disc child:my-8">
                  <li>
                    <span className=" text-[#ff014f] font-semibold">
                      Description:{" "}
                    </span>
                    <p>
                      An android application for a company used for internal operation management and device management.
                    </p>
                  </li>
                  <li>
                    <span className=" text-[#ff014f] font-semibold">
                      Technology learned:{" "}
                    </span>
                    <ul className="list-inside list-decimal child:mb-2">
                      <li>ReactJS, React-NAtive, Redux: Frontend development</li>
                      <li>Node.js : Backend development</li>
                      <li>MongoDB : Database</li>
                      <li>JWT token for user authentication</li>
                      <li>ReactHooks for state management.</li>
                    </ul>
                  </li>
                </ul>
                
              </div>
              <div>
                <h1 className="font-semibold text-[1.6rem] mt-[3rem] text-[#1e2125]">
                  Hiry
                </h1>
                <ul className="text-[#1e2125] list-disc child:my-8">
                  <li>
                    <span className=" text-[#ff014f] font-semibold">
                      Description:{" "}
                    </span>
                    <p>
                      A job posting platfor and job finding platform.
                    </p>
                  </li>
                  <li>
                    <span className=" text-[#ff014f] font-semibold">
                      Technology learned:{" "}
                    </span>
                    <ul className="list-inside list-decimal child:mb-2">
                      <li>ReactJs, ReactHooks, Redux, NextJs, TailwindCss: Frontend development</li>
                      <li>ReactHooks for state management.</li>
                    </ul>
                  </li>
                </ul>
                <Link
                  to="https://hiry.com/"
                  target="_blank"
                  className="px-4 py-2 border-2 border-[#ff014f] rounded-full inline-flex gap-2 text-[#1e2125] items-center hover:px-5 duration-200"
                >
                  <p>Hiry website</p>
                  <FaExternalLinkAlt />
                </Link>
              </div>
              <div>
                <h1 className="font-semibold text-[1.6rem] mt-[3rem] text-[#1e2125]">
                  Athena
                </h1>
                <ul className="text-[#1e2125] list-disc child:my-8">
                  <li>
                    <span className=" text-[#ff014f] font-semibold">
                      Description:{" "}
                    </span>
                    <p>
                     Athena is a data visualization project that dynamically creates a network graph based on real-time suggestions from the Google search engine. Upon entering a keyword, the app fetches relevant suggestions and visualizes them as interconnected nodes, offering an intuitive way to explore related search trends and topics.
                    </p>
                  </li>
                  <li>
                    <span className=" text-[#ff014f] font-semibold">
                      Technology learned:{" "}
                    </span>
                    <ul className="list-inside list-decimal child:mb-2">
                      <li>Developed the network graph using d3 library</li>
                      <li>Optimized for responsiveness and scalability across various datasets</li>
                      <li>Designed intuitive UI for user input and real-time updates</li>
                      <li>ReactHooks for state management.</li>
                    </ul>
                  </li>
                </ul>
                
              </div>
            </div>
          </div>
          <div className="bharatintern">
            <div className="flex gap-4 mb-8">
              <img
                className="w-12 h-12 rounded-lg"
                src={bharatinternlogo}
                alt=""
                srcset=""
              />
              <h1 className="font-semibold mt-auto text-[1.6rem]  text-[#3c3e41]">
                Bharat Intern
              </h1>
            </div>
            <div className="pl-20">
              <h1 className="text-[1.2rem] text-[#ff014f] font-bold">Role:</h1>
              <p className="font-bold text-sm mb-12 text-[#3c3e41]">Full Stack Developer</p>
              <h1 className="text-[1.2rem] text-[#ff014f] font-bold">
                Worked On Projects:
              </h1>
              <div>
                <h1 className="font-semibold text-[1.6rem] mt-4 text-[#1e2125]">BlogSpot</h1>
                <ul className="text-[#1e2125] list-disc child:my-8">
                  <li>
                    <span className=" text-[#ff014f] font-semibold">
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
                    <span className=" text-[#ff014f] font-semibold">
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
                  className="px-4 py-2 border-2 border-[#ff014f] rounded-full inline-flex gap-2 text-[#1e2125] items-center hover:px-5 duration-200"
                >
                  <p>Blogspot repo</p>
                  <FaExternalLinkAlt />
                </Link>
              </div>
              <div>
                <h1 className="font-semibold text-[1.6rem] mt-[3rem] text-[#1e2125]">
                  Chatapp
                </h1>
                <ul className="text-[#1e2125] list-disc child:my-8">
                  <li>
                    <span className=" text-[#ff014f] font-semibold">
                      Description:{" "}
                    </span>
                    <p>
                      A Simple chat app using Node.js, where group of people can
                      connect and send or receive text messages at a particular
                      time.Also they can assign task to any person in a group.
                    </p>
                  </li>
                  <li>
                    <span className=" text-[#ff014f] font-semibold">
                      Technology learned:{" "}
                    </span>
                    <ul className="list-inside list-decimal child:mb-2">
                      <li>Node.js : Backend development</li>
                      <li>MongoDB : Database for task collection</li>
                      <li>Socket.io for connecting people in realtime</li>

                      <li>ReactHooks for state management.</li>
                    </ul>
                  </li>
                </ul>
                <Link
                  to="https://github.com/silentvoice143/chatapp"
                  target="_blank"
                  className="px-4 py-2 border-2 border-[#ff014f] rounded-full inline-flex gap-2 text-[#1e2125] items-center hover:px-5 duration-200"
                >
                  <p>Blogspot repo</p>
                  <FaExternalLinkAlt />
                </Link>
              </div>
            </div>
          </div>
          <div className="baoiamintern ">
            <div className="flex gap-4 mb-8">
              <img
                className="w-12 h-12 rounded-lg"
                src={baoiamlogo}
                alt=""
                srcset=""
              />
              <h1 className="font-semibold mt-auto text-[1.6rem] text-[#3c3e41]">
                Baoiam Pvt Limited
              </h1>
            </div>
            <div className="pl-20">
              <h1 className="text-[1.2rem] text-[#ff014f] font-bold">Role:</h1>
              <p className="font-bold text-sm mb-12 text-[#3c3e41]">Full Stack Developer</p>
              <h1 className="text-[1.2rem] text-[#ff014f] font-bold">
                Worked On Projects:
              </h1>
              <div>
                <h1 className="font-semibold text-[1.6rem] mt-4 text-[#1e2125]">
                  BAoiam Pvt Limited official site
                </h1>
                <ul className="text-[#3c3e41] list-disc child:my-8">
                  <li>
                    <span className=" text-[#ff014f] font-semibold">
                      Description:{" "}
                    </span>
                    <p>An e-learning platform for students to learn.</p>
                  </li>
                  <li>
                    <span className=" text-[#ff014f] font-semibold">
                      Technology learned:{" "}
                    </span>
                    <ul className="list-inside list-decimal child:mb-2">
                      <li>Worked on responsiveness in Frontend.</li>
                      <li>Content update.</li>
                      <li>Make carosel designs.</li>
                      <li>Html, Css, Vanilla js used in the whole project.</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div>
                <h1 className="font-semibold text-[1.6rem] mt-4 text-[#1e2125]">Divueens</h1>
                <ul className="text-[#3c3e41] list-disc child:my-8">
                  <li>
                    <span className=" text-[#ff014f] font-semibold">
                      Description:{" "}
                    </span>
                    <p>A cosmetic product e-commerce site.</p>
                  </li>
                  <li>
                    <span className=" text-[#ff014f] font-semibold">
                      Technology learned:{" "}
                    </span>
                    <ul className="list-inside list-decimal child:mb-2">
                      <li>Develop homepage of the webiste.</li>
                      <li>Make carosel designs.</li>
                      <li>
                        Tailwind Css: For designing I used tailwind in it using
                        node configuration.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              {/* baoiam end  */}
            </div>
          </div>
        </div>
      </div>

      <div
        className="contact-section py-[6rem] px-[15%] bg-[#ecf0f3]  relative"
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
            className="outline-2 outline-double outline-[#1e2125] p-4 text-[#3c3e41] outline-none bg-transparent"
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
            className="outline-2 outline-double outline-[#1e2125] p-4 text-[#3c3e41] outline-none bg-transparent"
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
            className="outline-2 outline-double outline-[#1e2125] p-4 text-[#3c3e41] outline-none bg-transparent"
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
          <div className="circle2 w-8 h-8 border-2 border-[#ff014f] bg-[#1e2125] rounded-full absolute top-[43%] right-[-14.8px]"></div>
          <div className="circle3 w-8 h-8 border-2 border-[#1e2125]  bg-[#ff014f] rounded-full absolute bottom-0 right-[-14.8px]"></div>
        </div>
      </div>
      <div className="copyright bg-[#ecf0f3] h-[5rem] flex justify-center items-center text-[#1e2125]">
        <p>&copy; Satyam | Developer | Programming Hunter 2025</p>
      </div>
    </div>
  );
}

export default About;
