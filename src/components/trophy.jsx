import React from "react";
import trophy from "../assets/—Pngtree—golden cartoon trophy sport and_8995884.png";
import ribbon from "../assets/realistic-colorful-confetti-background_52683-26886.avif";
import bcard from "../assets/birthday-celebration-banner-with-gold-ribbon_51486-112.avif";
import { HiArrowNarrowRight } from "react-icons/hi";
import { useState } from "react";
import achievementData from "../data/achievementData";

const Trophy = () => {
  const [isTrophy, setIsTrophy] = useState(true);
  const [currIndex, setCurrIndex] = useState(0);
  const handleHover = () => {
    setIsTrophy((prev) => !prev);
  };

  return (
    <div
      name="achievements"
      className="w-full h-screen bg-[#0a192f] text-black"
    >
      <div className="max-w-[500px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="w-full grid grid-cols-2 gap-4 text-center py-4 mr-0  sm:ml-[20%]">
          <div className="flex flex-col justify-center items-center gap-4 pb-8 pl-4 pr-20">
            <p className="text-2xl font-bold inline border-b-4 border-pink-600 text-gray-300">
              Achievements
            </p>
            <div className="flex mt-10">
              <button className="text-white group border-2 px-4 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
                Hover On
                <span className="rotate-180  group-hover:rotate-0 duration-300">
                  <HiArrowNarrowRight className="ml-4" />
                </span>
              </button>
            </div>
          </div>
          <div
            onMouseEnter={() => handleHover()}
            onMouseLeave={() => handleHover()}
            className="flex flex-col justify-center items-center shadow-md shadow-[#040c16] hover:scale-110 duration-500 relative overflow-hidden"
          >
            <div className="flex flex-col justify-center items-center text-box font-extrabold">
              <p
                onMouseEnter={() => setCurrIndex(1)}
                onMouseLeave={() => setCurrIndex(0)}
              >
                LeetCode 450Q
              </p>
              <p
                onMouseEnter={() => setCurrIndex(2)}
                onMouseLeave={() => setCurrIndex(0)}
              >
                Degree
              </p>
              <p
                onMouseEnter={() => setCurrIndex(3)}
                onMouseLeave={() => setCurrIndex(0)}
              >
                React
              </p>
              <p
                onMouseEnter={() => setCurrIndex(4)}
                onMouseLeave={() => setCurrIndex(0)}
              >
                Something
              </p>
            </div>
            {isTrophy ? (
              <img className="mx-auto" src={trophy} alt="Trophy Icon" />
            ) : (
              <img src={bcard} alt="" />
            )}
          </div>
        </div>
        {achievementData.map((data) => (
          <div
            className={
              currIndex == data.id ? "w-full h-[200px] py-4 static" : "hidden"
            }
          >
            <p className="text-3xl font-bold border-b-2 border-pink-500 inline">
              {data.heading}
            </p>
            <p className="text-black font-bold py-4">
              {data.description.d1}
              <span className="text-pink-600">{data.description.span}</span>
              {data.description.d2}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trophy;
