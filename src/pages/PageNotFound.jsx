import React from "react";
import scare from "../assets/Images/Scarecrow.png";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row justify-center items-center translate-y-[10%] transition-all duration-200">
      <div className="m-12 flex">
        <img src={scare} height="600px" width="600px" />
        <div className="bg-white flex flex-col justify-center p-10 rounded-md">
          <h1 className="font-bold text-7xl font-serif">
            I have bad news
            <br /> for you.
          </h1>
          <p className="my-5 opacity-70">
            The page you are looking for might be removed <br /> or is
            temporarily unavailable. <br/> Error Code: 404
          </p>
          <button
            onClick={() => {
              navigate(-1);
            }}
            className="text-center text-white w-fit self-center text-[13px] sm:text-[16px] px-6 py-3 rounded-md font-bold bg-richblack-800 hover:scale-95 transition-all duration-200 drop-shadow-[2px_2px_rgba(255,255,255,0.18)] hover:drop-shadow-none hover:text-opacity-70"
          >
            {" "}
            Back{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
