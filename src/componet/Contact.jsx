import React, { useRef } from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

function Contact() {
  const form = useRef();
  const [formval, setformval] = useState({name:"",email:"",message:""})
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_zx14bsp",
        "template_qs2ld87",
        form.current,
        "jVwcwseGKn6oIlyHp"
      )
      .then(() => {
        toast.success("email send successfully")
        setformval({name:"",email:"",message:""})
      })
      .catch((err) => {
       
        toast.error("This didn't work.")
      });
  };
  return (
    <div className="bg-gray-950">
      <div class="flex justify-center my-5 lg:py-8" id="contact">
        <div class="flex  items-center">
          <span class="w-24 h-[2px] bg-[#1a1443]"></span>
          <span class="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Contact
          </span>
          <span class="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
        <Toaster/>
      </div>
      <section id="contact" className=" px-4">
        <div className="max-w-3xl mx-auto">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="text-white p-8 rounded-xl shadow-md space-y-6"
          >
            <div>
              <label className="block text-white font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                onChange={(e)=>setformval(e.target.value)}
                value={formval.name}
                required
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-white font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                onChange={(e)=>setformval(e.target.value)}
                value={formval.email}
                required
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-white font-medium mb-1">
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                onChange={(e)=>setformval(e.target.value)}
                value={formval.message}
                required
                className="w-full border border-gray-300 px-4 py-2 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="footer text-white pb-2">
          © Developer Portfolio by Kirtan Rathod
        </div>
      </section>
    </div>
  );
}

export default Contact;
