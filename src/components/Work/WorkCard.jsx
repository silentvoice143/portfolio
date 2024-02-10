import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

function WorkCard({ img, projectName, link }) {
  const ProjectCard = useRef();
  const [showName, setShowName] = useState(false);

  return (
    <div>
      <div
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
      </div>
    </div>
  );
}

export default WorkCard;
