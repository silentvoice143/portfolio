import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaLink } from "react-icons/fa";

function WorkCard({ img, projectName, links, detail }) {
  const ProjectCard = useRef();
  const [showName, setShowName] = useState(false);
  // const showName = true;

  return (
    <div>
      {/* <div
        onMouseOver={() => {
          setShowName(true);
        }}
        onMouseOut={() => {
          setShowName(false);
        }}
        className="relative workcard h-[180px] rounded-lg overflow-hidden text-gray-200 hover:scale-105 duration-200 cursor-pointer"
      >
        <img
          className="absolute top-0 left-0 w-full h-full workimg"
          src={img}
          alt=""
          srcset=""
        />

        <div
          className={`${
            showName ? "" : "hidden"
          } absolute duration-200 text-white bg-black bg-opacity-70 rounded-md top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-1/2 p-4  font-extrabold text-center`}
        >
          <h1 className="text-3xl">{projectName}</h1>
          <Link
            target="_blank"
            to={link}
            className="text-sm hover:underline hover:text-pred"
          >
            <span>click to view</span>
          </Link>
        </div>
      </div> */}

      <div
        // onMouseOver={() => {
        //   setShowName(true);
        // }}
        // onMouseOut={() => {
        //   setShowName(false);
        // }}
        className="relative w-full my-12 work-container"
      >
        <div
          className="bg-black max-[800px]:py-4"
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
          }}
        >
          <img
            // style={{ width: "clamp(40rem, 40vw, 50rem)" }}
            src={img}
            alt=""
            className={``}
          />
        </div>
        <div className="flex items-center justify-between p-6 max-[800px]:px-4 max-[800px]:py-2 bg-white shortdesp">
          <h1
            className="font-bold"
            style={{ fontSize: "clamp(1.2rem, 4vw, 3rem)" }}
          >
            {projectName}
          </h1>
          <button
            onClick={() => {
              setShowName(!showName);
            }}
            className="max-[800px]:p-2 p-4  rounded-full hover:bg-[#97979754]"
          >
            {showName ? (
              <IoMdArrowDropup className="text-[2rem]" />
            ) : (
              <IoMdArrowDropdown className="text-[2rem]" />
            )}
          </button>
        </div>
        <div
          className={`${
            showName ? "" : "hidden"
          }    h-full details px-8 py-4  rounded-bl-md rounded-br-md bg-white mb-4`}
        >
          <h3 className="font-bold text-red-500">Description: </h3>
          <p className="">{detail.description}</p>
          <h3 className="mt-4 font-bold text-red-500">Features: </h3>
          <ul className="list-disc">
            {detail.feature.map((data, index) => (
              <li key={index}>{data}</li>
            ))}
          </ul>

          <div className="flex gap-2 mt-4 font-bold">
            <h1 className="">For more detail check these links. </h1>
            <span>
              <FaLink className="text-[1.2rem]" />
            </span>
          </div>
          <ul className="list-disc">
            {links[0] && (
              <li className="break-words">
                <p>Git repo: </p>
                <a className="text-red-500" href={links[0]} target="_blank">
                  {links[0]}
                </a>
              </li>
            )}
            {links[1] && (
              <li className="break-words">
                <p>Live link: </p>
                <a className="text-red-500 " href={links[1]} target="_blank">
                  {links[1]}
                </a>
              </li>
            )}
            {links[2] && (
              <li className="break-words">
                <p> Blog post: </p>
                <a className="text-red-500" href={links[2]} target="_blank">
                  {links[2]}
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;
