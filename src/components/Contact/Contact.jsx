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
import { } from "react-icons/fa6";
import { MdOutlineManageAccounts } from "react-icons/md";
import { RiSpeakFill } from "react-icons/ri";
import adduser from "../email";

function Contact() {
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
    <div className="contact-container text-white">
      <div className="contact-intro py-[6rem] px-[15%] bg-[#ecf0f3]  relative text-[10vw]  max-[770px]:child:text-[14vw]  font-bold text-gray-500">
        <h1 className="text-[#3c3e41]">Connect</h1>
        <h1 className="text-[#3c3e41]">Collaborate</h1>
        <h1 className="text-[#3c3e41]">Cheer Up</h1>
      </div>
      <div
        className="contact-section py-[6rem] px-[15%] bg-[#ecf0f3]  relative"
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
          <div className="circle2 w-8 h-8 border-2 border-[#ff014f] bg-[#1e2125]  rounded-full absolute top-[43%] right-[-14.8px]"></div>
          <div className="circle3 w-8 h-8 border-2 border-[#1e2125]  bg-[#ff014f] bg-pred rounded-full absolute bottom-0 right-[-14.8px]"></div>
        </div>
      </div>
      <div className="copyright bg-[#ecf0f3] h-[5rem] flex justify-center items-center text-[#1e2125]">
        <p>&copy; Satyam | Developer | Programming Hunter 2023</p>
      </div>
    </div>
  );
}

export default Contact;
