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
import tastehood from "./workimg/main.png";
import spotify from "./workimg/spotifyy.jpg";
import chatapp from "./workimg/chatapp.jpg";
import musicapp from "./images/Screenshot 2024-03-18 225255.png";
import secretkeeper from "./images/Screenshot 2024-03-18 230346.png";

import WorkCard from "./WorkCard";

function Work() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function handleuser() {
    adduser(name, email, message);
    setEmail("");
    setName("");
    setMessage("");
  }

  const data = [
    {
      key: 1,
      img: spotify,
      projectName: "Spotify clone",
      detail: {
        description: `It is a clone of spotify web music player having all minimum required features. MERN Stack is used to develop this project.
          In frontend, We are using "Vite + React" and tailwind css for styling.
          In backend, We are using node.js and mongodb.`,
        feature: [
          "Admin signup/login.",
          "Add new song to database for admin.",
          "Create Playlist, add song to it, edit playlist details.",
          "Public and private playlist toggle.",
          "User Dashboard.",
          "Play/Pause and track song progress.",
        ],
      },
      links: [
        "https://github.com/silentvoice143/spotify",
        "https://spotify-khvq.onrender.com/",
      ],
    },
    {
      key: 2,
      img: musicapp,
      projectName: "Music Player",
      detail: {
        description: `Simple music app using npm howler package.
        Select and play music from list and all music related function.`,
        feature: [
          "Play/pause song.",
          "Play next/prev song.",
          "Music progress bar and skip music clicking on progress bar.",
        ],
      },
      links: [
        "https://github.com/silentvoice143/musicApp",
        "",
        "https://codethedestiny.blogspot.com/2024/03/music-app-using-react.html",
      ],
    },
    {
      key: 2,
      img: secretkeeper,
      projectName: "Secret Keeper",
      detail: {
        description: `It generates QR Code for any text message which you can share and download as png.`,
        feature: [
          "Create QR Code for text message.",
          "Download QR Code as png",
          "Share QR Code using Web Share API",
        ],
      },
      links: [
        "https://github.com/silentvoice143/secretkeeper",
        "https://secretkeeper-jnp5.onrender.com",
        "https://codethedestiny.blogspot.com/2024/03/build-secretkeeper-app-and-generate-qr.html",
      ],
    },
  ];
  return (
    <>
      <div className="work-container max-[800px]:px-4 py-[6rem] px-[15%] bg-lightgray font-roboto relative">
        <div className="work-wrapper">
          <h1 className="text-pred text-[4rem] font-semibold">My Works</h1>
          <div className="mt-12 works gap-x-8 gap-y-16">
            {data.map((item) => {
              console.log(item);
              return (
                <WorkCard
                  key={item.key}
                  img={item.img}
                  detail={item.detail}
                  projectName={item.projectName}
                  links={item.links}
                />
              );
            })}
            {/* <WorkCard
              img={tastehood}
              projectName={"Tastehood"}
              link={"https://silentvoice143.github.io/TasteHood/"}
            />
            <WorkCard
              img={tastehood}
              projectName={"Tastehood"}
              link={"https://silentvoice143.github.io/TasteHood/"}
            />
            <WorkCard
              img={tastehood}
              projectName={"Tastehood"}
              link={"https://silentvoice143.github.io/TasteHood/"}
            /> */}
          </div>
        </div>
      </div>
      <div className="contact-container">
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
              className="p-4 text-gray-500 outline-none bg-lightergray"
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
              className="p-4 text-gray-500 outline-none bg-lightergray"
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
              className="p-4 text-gray-500 outline-none bg-lightergray"
            />
            <div className="flex w-full justify-end text-lightgray text-[1.2rem]">
              <button
                onClick={handleuser}
                className="flex items-center justify-center gap-4 p-4 font-bold bg-pred"
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
    </>
  );
}

export default Work;
