"use client"
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import axios from "axios";
export default function ContactMe() {
  const [message, setMessage] = useState({
    username: "",
    userEmail: "",
    message: ""
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setMessage((prevMessage) => ({
      ...prevMessage,
      [name]: value
    }));
  };

  const handleSubmit = async() => {
    try {
      await axios.post("/api/user/sendemail",message)
    } catch (error:any) {
      console.log(error.message)
    }
  };

  return (
    <>
      <Header />
      <div className="flex-col h-screen flex items-center justify-center animate-slidein3 ">
        <div className="h-1/5 flex justify-start items-center w-5/6 text-left text-5xl font-extrabold ">
          Contact Me<span className="text-6xl text-purple-600">.</span>
        </div>
        <div className="h-4/5 w-5/6 flex flex-col justify-around items-center">
          <div className="w-full 1/6 md:flex md:justify-center md:items-center block">
            <input
              name="username"
              type="text"
              placeholder="Name"
              className="md:w-2/5 h-full m-1 bg-gray-200 rounded-md mx-8 md:mx-2"
              value={message.username}
              onChange={handleChange}
              required
            />
            <input
              name="userEmail"
              type="email"
              placeholder="Email"
              className="md:w-2/5 h-full m-1  bg-gray-200 rounded-md mx-8 md:mx-2"
              value={message.userEmail}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-5/6 h-6/6">
            <textarea
              name="message"
              className="resize-none rounded-md w-full h-11/12  bg-gray-200"
              placeholder="Message"
              rows={10}
              cols={10}
              value={message.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            className="inline-flex items-center rounded-md px-2 py-1 text-lg font-medium text-black ring-1 ring-inset ring-black mr-2 hover:text-xl hover:border-2 hover:border-black animate-slidein2"
            onClick={handleSubmit}
          >
            Send
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
