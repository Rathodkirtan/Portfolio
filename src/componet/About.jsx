import React from "react";
import img from "../public/assets/my.jpg";

function About() {
  return (
    <div className="bg-gray-950 px-[10px]" id="about">
      <div class="flex justify-center my-5 lg:py-8" id="about">
        <div class="flex  items-center">
          <span class="w-24 h-[2px] bg-[#1a1443]"></span>
          <span class="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            About
          </span>
          <span class="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>
      <div className="container flex items-center justify-center gap-14 flex-wrap-reverse mx-auto my-10">
        <p className="text-start text-white w-[500px]">
          <span className="text-2xl">I’</span>m a passionate and detail-oriented Frontend Developer with a strong
          foundation in HTML, CSS, JavaScript, and React.js. As a recent learner
          and hands-on practitioner, I enjoy building responsive and
          user-friendly web interfaces that focus on performance and
          accessibility. I’m continuously learning modern web technologies and
          best practices to stay up-to-date with industry trends. My goal is to
          contribute to real-world projects, collaborate with teams, and grow as
          a professional developer.
        </p>
        <img
          src={img}
          alt="myimg"
          className="w-[300px] h-[400px] object-cover rounded-full hover:scale-110 transition-all duration-300 hover:shadow-sm p-2 bg-white hover:bg-gray-800 shadow-xs"
        />
      </div>
    </div>
  );
}
 
export default About;
