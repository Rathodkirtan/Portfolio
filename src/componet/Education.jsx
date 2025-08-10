import React from "react";

function Education() {
  return (
    <div className="bg-gray-950">
      <div class="flex justify-center my-5 lg:py-8" id="education">
        <div class="flex  items-center">
          <span class="w-24 h-[2px]"></span>
          <span class="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Education
          </span>
          <span class="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>
      <section id="education" className="p-6 text-white">
        <h2 className="text-3xl font-bold mb-6">Education</h2>

        <div className="mb-4">
          <h3 className="text-xl font-semibold">
            Bachelor of Computer Application- BCA
          </h3>
          <p className="text-gray-600">Maharaja Krishnakumarsinhji Bhavnagar University| 2022 - 2025</p>
          <p className="text-gray-700">Percentage:71.76%</p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold">Higher Secondary Education</h3>
          <p className="text-gray-600">M D Shah Vidhyalaya,botad | 2021 - 2022</p>
          <p className="text-gray-700">Percentage: 78.87%</p>
        </div>

        <div className="mt-8 text-center">
          <p className="text-lg font-medium text-white">
            My educational journey has laid a solid foundation for my career in
            web development.
          </p>

          {/* Resume Download (optional) */}
          <a
            href="/BioData.pdf"
            download
            className="inline-block mt-4 px-5 py-2 border border-pink-900 text-white rounded hover:bg-pink-900 hover:text-white transition"
          >
            Download Resume
          </a>
        </div>
      </section>
    </div>
  );
}

export default Education;
