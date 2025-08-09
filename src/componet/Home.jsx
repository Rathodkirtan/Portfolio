import React from "react";

function Home() {
  return (
    <div
      className="h-[100vh] w-[100%] bg-[url(./public/assets/a2.jpg)]  flex flex-col justify-center items-center "
      id="home"
    >
      <h1 className="text-4xl md:text-6xl font-bold text-pink-400 text-center">
        Kirtan Rathod
      </h1>
      <h1 className="text-4xl font-bold text-white text-center">
        I'm a <span className="text-[#22e2a5]">Frontend Developer</span>.
      </h1>
      {/* <p className="text-white text-[18px] mt-3">
        Enthusiastic and detail-oriented Frontend Developer with a solid
        foundation in HTML, CSS, JavaScript, and modern libraries such as
        React.js. Passionate about building responsive and user-friendly web
        applications. Eager to contribute to team success through hard work,
        continuous learning, and strong problem-solving skills.
      </p> */}
      <div className="btn flex gap-3 my-3 justify-center">
        <button className="border p-2 rounded-4xl border-pink-300 text-white">
        <a href="/BioData.pdf"  download="resume.pdf" target="_black">Download CV</a> 
        </button>
        <button className="border p-2 rounded-4xl border-pink-300 text-white">
          <a href="#contact">Contact Me</a>
        </button>
      </div>
    </div>
  );
}

export default Home;
