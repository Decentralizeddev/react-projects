import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const FORM_ENDPOINT = ""; // TODO - fill on the later step

const Contact = () => {
  const form = useRef();

  // const [submitted, setSubmitted] = useState(false);
  // const handleSubmit = () => {
  //   setTimeout(() => {
  //     setSubmitted(true);
  //   }, 100);
  // };

  // if (submitted) {
  //   return (
  //     <>
  //       <div className="text-2xl">Thank you!</div>
  //       <div className="text-md">We'll be in touch soon.</div>
  //     </>
  //   );
  // }

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ard2b6c",
        "template_ktf8w3j",
        form.current,
        "GAFU1k-ZtvHCUoh0g"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    alert("Email send!");
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="mb-3 pt-0">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring  "
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring  "
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <textarea
          placeholder="Your message"
          name="message"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring  "
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <button
          className="bg-blue-500 p-2 active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none   ease-linear transition-all duration-150"
          type="submit"
        >
          Send a message
        </button>
      </div>
    </form>
  );
};

export default Contact;
