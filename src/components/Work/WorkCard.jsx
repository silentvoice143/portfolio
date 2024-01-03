import React from "react";

function WorkCard({ img, projectName }) {
  return (
    <div
      className="workcard rounded-lg overflow-hidden text-gray-200 border-[1px] border-white hover:scale-105 duration-200"
      style={{ boxShadow: "rgb(239 239 239 / 15%) 0px 7px 29px 0px" }}
    >
      <div className="workimg">
        <img src={img} alt="" srcset="" />
      </div>
      <div className="workcontent bg-lightergray p-4 font-bold text-sm">
        {projectName}
      </div>
    </div>
  );
}

export default WorkCard;
