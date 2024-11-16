"use client";
import React, { useState, useEffect } from "react";
import { FormEvent } from "react";
import axios from "axios";

interface ContactMeProps {
  divRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
}

function ContactMe({ divRefs }: ContactMeProps) {
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const lastSubmissionTime = localStorage.getItem("lastSubmission");
    const currentTime = new Date().getTime();
    const coolDown = 10000;

    if (
      lastSubmissionTime &&
      currentTime - parseInt(lastSubmissionTime) < coolDown
    ) {
      setError("Please wait before submitting again");
      return;
    }
    localStorage.setItem("lastSubmission", currentTime.toString());

    try {
      await axios.post(
        `https://discord.com/api/webhooks/${process.env.NEXT_PUBLIC_discordID}/${process.env.NEXT_PUBLIC_discordToken}`,
        {
          content: `**Name**: ${formData.name}\n**Email**: ${formData.email}\n**Message**: ${formData.message}\n\n\n`,
        }
      );
      setError("Form submitted successfully");
      setFormData({ name: "", email: "", message: "" }); // Reset form data after submission
    } catch (error) {
      console.error(error);
      setError("An error occurred while submitting the form");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setError("");
    }, 5000);
  }, [error]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      className="py-10 px-6 lg:px-20 bg-[#F1FAEE] w-full flex-col flex items-center"
      id="page3"
      ref={(el) => {
        divRefs.current[2] = el;
      }}
    >
      <div className="relative inline-block mb-10">
        <div className="text-3xl lg:text-5xl z-10 relative font-bold text-[#37d299] flex justify-center items-center w-full">
          Get in Touch
        </div>
        <div className="bg-[#fde68a] absolute bottom-2 block w-full h-2 z-2"></div>
      </div>
      <div className="text-center font-bold text-md lg:text-xl text-[#141414] mb-10 lg:mb-16 w-[80%] lg:w-[30%]">
        Got a question or proposal, or just want to say hello? Go ahead
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full flex-col flex items-center justify-center"
      >
        <div className="flex lg:flex-row flex-col items-center justify-center w-full gap-10 mb-10 lg:gap-40 lg:mb-20">
          <input
            name="name"
            required
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Your Name"
            className="shadow-[#979eaa] shadow-md focus:placeholder:text-[#9ca3af] focus:text-[#d6cc99] focus:bg-[#141414] focus:border-[#37d299] text-[#141414] font-bold border-[3px] py-4 px-4 text-xl rounded-lg bg-transparent lg:w-[30%] border-[#141414] placeholder:font-bold"
          />

          <input
            name="email"
            required
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Your Email"
            className="shadow-[#979eaa] shadow-md focus:placeholder:text-[#9ca3af] focus:text-[#d6cc99] focus:bg-[#141414] focus:border-[#37d299] text-[#141414] font-bold border-[3px] px-4 py-4 text-xl rounded-lg bg-transparent lg:w-[30%] border-[#141414] placeholder:font-bold"
          />
        </div>
        <div className="w-full lg:px-60 lg:mb-20 my-5">
          <textarea
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            className="shadow-[0_4px_6px_0_rgba(151,158,170,0.5)] focus:placeholder:text-[#9ca3af] focus:bg-[#141414] focus:border-[#37d299] focus:rounded-lg focus:text-[#d6cc99] text-[#141414] font-bold border-b-[3px] rounded-none w-full px-4 py-4 text-xl bg-transparent border-[#141414] placeholder:font-bold"
            placeholder="Enter Your Message"
          />
        </div>
        <button
          type="submit"
          className="shadow-[#979eaa] shadow-md hover:text-[#d6cc99] hover:bg-[#141414] hover:border-[#37d299] text-[#141414] font-bold border-[#141414] border-[3px] lg:px-0 px-5 text-xl py-2 lg:w-[25%] rounded-lg mt-4"
        >
          Say Hello
        </button>

        {error && (
          <div className="text-red-500 font-semibold text-sm">{error}</div>
        )}
      </form>
    </div>
  );
}

export default ContactMe;
