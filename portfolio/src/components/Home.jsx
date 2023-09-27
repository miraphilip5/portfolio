import React from "react";
import ProfilePic from "../assets/profilePic.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { useTypewriter } from "react-simple-typewriter";

const Home = () => {
  const [text] = useTypewriter({
    words: ["I'm a Frontend Developer"],
    delaySpeed: 20,
  });
  return (
    <div
      name="home"
      className="h-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">{text}</h2>
          <p className="text-gray-500 py-4 max-w-md">
            Hello, I'm Mira Philip, a Frontend Developer With 7.5 years of
            experience in UI frameworks, my passion lies in creating stunning
            user interfaces. Over the past 3-4 years, I've specialized in React
            JS. I'm enthusiastic about all things frontend, and I thrive on
            bringing ideas to life. Explore my portfolio to see how I've
            transformed concepts into engaging digital experiences. Let's
            connect and work together to create something amazing!
          </p>
          <div>
            <Link
              to={"portfolio"}
              smooth
              duration={400}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-green-500 cursor-pointer"
            >
              My Portfolio{" "}
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={ProfilePic}
            className="rounded-2xl mx-auto w-2/3 md:w-full"
            alt="my prpfile picture"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
