import React, { useState } from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import redux from "../assets/redux.svg";
import express from "../assets/express.svg";
import mongo from "../assets/mongodb.svg";
import angular from "../assets/angularjs.svg";
import node from "../assets/node.png";
import vsCode from "../assets/visual-studio-code.svg";
import webstorm from "../assets/webstorm.svg";
import eclipse from "../assets/eclipse.svg";
import jira from "../assets/jira.svg";
import github from "../assets/github.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
      rating: 90,
    },
    {
      id: 2,
      src: redux,
      title: "Redux",
      style: "shadow-purple-500",
      rating: 80,
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
      rating: 85,
    },
    {
      id: 5,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
      rating: 80,
    },
    {
      id: 6,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
      rating: 75,
    },
    {
      id: 7,
      src: angular,
      title: "AngularJS",
      style: "shadow-red-500",
      rating: 60,
    },
    {
      id: 8,
      src: node,
      title: "NodeJS",
      style: "shadow-green-500",
      rating: 50,
    },
    {
      id: 9,
      src: express,
      title: "Express",
      style: "shadow-gray-500",
      rating: 50,
    },
    {
      id: 10,
      src: mongo,
      title: "MongoDb",
      style: "shadow-green-500",
      rating: 60,
    },
    {
      id: 11,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
      rating: 80,
    },
    {
      id: 12,
      src: vsCode,
      title: "VS Code",
      style: "shadow-blue-400",
      rating: 90,
    },
    {
      id: 13,
      src: webstorm,
      title: "Webstorm",
      style: "shadow-blue-400",
      rating: 80,
    },
    {
      id: 14,
      src: eclipse,
      title: "Eclipse",
      style: "shadow-violet-400",
      rating: 70,
    },
    {
      id: 15,
      src: jira,
      title: "Jira",
      style: "shadow-blue-400",
      rating: 70,
    },
  ];

  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-full"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">
            These are the technologies and tools I've had experience with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style, rating }) => (
            <div
              key={id}
              onMouseEnter={() => setHoveredTech(id)}
              onMouseLeave={() => setHoveredTech(null)}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
              {hoveredTech === id && (
                <div className="p-2 rounded-md mt-2">
                  <p>Progress: {rating}%</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
