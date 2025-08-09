import React from "react";

function Skill() {
  const skills = [
    {
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "Express",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "Bootstrap",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
  ];
  return (
    <div
      className="bg-[url(./public/assets/black-particles-background.avif)] bg-cover bg-center w-[100%]"
      id="skill"
    >
      <div class="flex justify-center lg:pt-8" id="about">
        <div class="flex  items-center">
          <span class="w-24 h-[2px] bg-[#1a1443]"></span>
          <span class="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Skill
          </span>
          <span class="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>
      <section className="mb-10" id="skills">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="h-12 mx-auto mb-4"
                />
                <p className="text-lg font-medium">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skill;
