import React from "react";

function Project() {
  const projects = [
    {
      title: "Quiz App",
      description:
        "The Quiz App is a responsive, interactive web application built with React.js that allows users to answer multiple-choice questions and get their scores instantly.",
      tech: ["React"],
      image: "/h1.png", 
      github: "https://github.com/Rathodkirtan/quizApp",
      demo: "https://quizcom23.netlify.app/",
    },
    {
      title: "Weather App",
      description:
        "City-based weather search Real-time temperature,humidity,wind speed & condition icons",
      tech: ["React", "Tailwind CSS"],
      image: "/whether.png",
      github: "https://github.com/Rathodkirtan/WhetherApp",
      demo: "https://whethera.netlify.app/",
    },{
      
      title: "REST COUNTRIES API WITH COLOR THEME SWITCHER",
      description:
        "Fetch countries (name, flag,population, region, capital) from REST Countries API.Search by name and filter by region.Color theme switcher: light / dark + optional accent color picker.",
      tech: ["React", "Tailwind CSS"],
      image: "/a1.png",
      github: "https://github.com/Rathodkirtan/countriesWebsite",
      demo: "https://fantastic-strudel-4f8a9b.netlify.app/",
    },
    
  ];
  return (
    <div className="bg-gray-950">
      <div className="flex justify-center my-5 lg:py-8" id="project">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Projects
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>
      <section id="projects" className="py-16 px-4 ">
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-800 px-2 py-1 text-sm rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:underline"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Project;
