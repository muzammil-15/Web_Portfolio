"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");


  

  const handleSubmit = async (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xwage55",
        "template_gczh8k6",
        e.target,
        "yPYIatWehdsEiy1Al"
      )
      .then(
        (result) => {
          alert("Thank for Contact Us");
          setEmail('')
          setName('')
          setMessage('')
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 bg-[#1F1E28] py-14 rounded-lg px-10">
      <h2 className="para text-left ">Name</h2>
      <input
        required
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        className="mb-3 p-4 input focus:outline-none text-white "
        placeholder="NAME*"
      />
      <h2 className="para text-left ">Email</h2>
      <input
        required
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        name="email"
        className="mb-3 p-4 input focus:outline-none text-white "
        placeholder="EMAIL*"
      />
        <h2 className="para text-left ">Message</h2>
      <textarea
        required
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="mb-3 p-4 input focus:outline-none text-white h-[120px]"
        placeholder="MESSAGE*"
      ></textarea>

      <button
        type="submit"
        className="input para text-lg font-medium rounded-md py-4"
      >
        Send Message
      </button>
    </form>
  );
}

export default ContactForm;
