import React from "react";
import petalExpress from "../assets/portfolio/petalExpress.png";
import budgetBuddy from "../assets/portfolio/budgetBuddy.png";
import marsApp from "../assets/portfolio/MarsApp.png";
import recipeApp from "../assets/portfolio/RecipeApp.png";
import { BsGithub, BsLink } from "react-icons/bs";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: petalExpress,
      name: "Petal Express",
      desc: "An e-commerce platform tailored for floral products provides functionalities such as user authentication, product details display, order processing, and shopping cart management. The backend of the platform is built using ExpressJS and NodeJS, and it utilizes MongoDB for its database. Additionally, there are two distinct front-end interfaces: one developed using ReactJS and the other using AngularJS",
      demo: [
        "https://petal-express-fe.vercel.app/flowers",
        "https://angular-project-web-warriors.vercel.app/home",
      ],
      code: [
        "https://github.com/2023-Summer-ITE-5425-IGA/react-project-web-warriors/tree/main/petal_express_backend",
        "https://github.com/2023-Summer-ITE-5425-IGA/react-project-web-warriors/tree/main/petal_express_frontend",
        "https://github.com/2023-Summer-ITE-5425-IGA/angular-project-web_warriors",
      ],
    },
    {
      id: 2,
      src: budgetBuddy,
      name: "Budget Buddy",
      desc: "Budget Buddy is a web-based financial management application. Its backend is powered by Spring Boot with integrated Spring Security, while the frontend is built using ReactJS. MongoDB serves as the database for this application. Budget Buddy encompasses a range of functionalities, including user authentication, tracking personal expenses and income, as well as facilitating collaborative group finance management.",
      code: ["https://github.com/miraphilip5/BudgetBuddyApp"],
    },
    {
      id: 3,
      src: marsApp,
      name: "Mars Photo App",
      desc: "This iOS application retrieves Martian photos using an API that allows filtering by date and rover selection. You can also save your favorite images to Firebase. The app is developed using Swift, and it relies on Firebase for persistent storage.",
      code: ["https://github.com/miraphilip5/iosMarsPhotoApp"],
    },
    {
      id: 4,
      name: "Recipe App",
      desc: "This iOS app fetches recipes via an API and offers the option to save your preferred recipes to Firebase. It's developed using Swift and leverages Firebase for storing data persistently.",
      src: recipeApp,
      code: ["https://github.com/miraphilip5/iosRecipeApp"],
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-full"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code, name, desc }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <div className="text-xl flex flex-row justify-center items-center font-bold">
                  {name}
                </div>
                <div className="flex flex-row justify-center items-center duration-200 hover:scale-105">
                  {demo &&
                    demo.map((link, i) => (
                      <a href={link} key={i} className="p-2" target="_blank">
                        <BsLink />
                      </a>
                    ))}
                </div>

                <div className="flex flex-row justify-center items-center duration-200 hover:scale-105">
                  {code.map((link, i) => (
                    <a href={link} key={i} className="p-2" target="_blank">
                      <BsGithub />
                    </a>
                  ))}
                </div>
              </div>
              <div className="p-4 flex items-center justify-center">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
