"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Header from "@/components/Header";
import Link from "next/link";
import Footer from "@/components/Footer";
import profile from "@/image/profile.png";
import Image from "next/image";

export default function Home() {
  const downloadFile = () => {
    const link = document.createElement("a");
    link.href = "https://drive.google.com/file/d/12xuGdYZ1XMOfGrL2LtyHatba88Va3tVc/view?usp=drive_link"; // Update this path to your actual file
    link.download = "Sandeep_Mohapatra_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Header />
      <>
        <div className="h-fit w-full flex flex-col-reverse md:flex-row md:h-screen justify-evenly items-center font-serif">
          <div className="w-full flex justify-center md:w-1/2 items-center flex-wrap">
            <div className="w-full md:w-1/2 h-auto text-left">
              <div className="text-2xl font-bold animate-slidein2 flex justify-center items-center flex-col">
                <div className="text-left">Hey 👋, I am </div>
                <div className="text-3xl text-purple-600 text-nowrap">
                  Sandeep Mohapatra
                </div>
                <div className="text-nowrap">and I am passionate about</div>
                <div className="w-full h-min text-nowrap">
                  <Typewriter
                    words={[
                      " Web Development",
                      "Problem Solving",
                      "Machine Learning",
                    ]}
                    loop={false}
                    cursor
                    cursorStyle="|"
                    typeSpeed={100}
                    deleteSpeed={60}
                    delaySpeed={1000}
                  />
                </div>
              </div>
              <div className="h-full flex justify-center items-center">
                <button className="inline-flex items-center rounded-md px-2 py-1 text-sm md:text-xl text-purple-600 font-bold mr-2 hover:text-xl hover:border-2 hover:border-black animate-slidein2">
                  <Link href="./connectwme">Get in Touch</Link>
                </button>
                <button
                  className="inline-flex items-center rounded-md px-2 py-1 text-sm md:text-xl text-purple-600 font-bold hover:text-xl hover:border-2 hover:border-black animate-slidein2"
                  onClick={downloadFile}
                >
                  My Resume
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex items-center justify-center w-80 h-80 rounded-full ring-1 ring-inset ring-black hover:border-2 hover:border-black animate-slidein2">
              <Image src={profile} alt="Profile Image" />
            </div>
          </div>
        </div>

        <div className="animate-slidein3 font-serif text-lg leading-8 flex justify-center items-center flex-col">
          <div className="w-10/12 text-6xl font-semibold">
            Projects<span className="text-highlight text-6xl">.</span>
          </div>
          <div className="w-9/12 my-12">
            <div className="flex justify-between items-center">
              <h1 className="font-semibold text-xl text-highlight">
                Order Now
              </h1>
              <span>
                <Link href={"https://github.com/sandeep002-Hidden/Food-Order"}>
                  LINK
                </Link>
              </span>
            </div>
            <div className="text-xl text-zinc-950">
              Tech Stack ▶️ React js,Express js,MongoDB,Node js<span></span>
            </div>
            <div>
              <p className="text-justify my-2 text-emerald-900">
                This MERN stack-based food delivery website offers a dynamic
                platform for online food ordering. It includes user
                authentication for profile management and saved addresses. Users
                can search items and can add to their cart for secure checkout.
                Real-time order tracking enhances the experience, providing a
                seamless and efficient food delivery process from start to
                finish.
              </p>
            </div>
          </div>
          <div className="w-9/12 my-4">
            <div className="flex justify-between items-center">
              <h1 className="font-semibold text-xl text-highlight">
                Steller Forge
              </h1>
              <span>
                {" "}
                <Link
                  href={"https://github.com/sandeep002-Hidden/stellerForge"}
                >
                  LINK
                </Link>
              </span>
            </div>
            <div>
              <h1 className="text-xl text-zinc-950">
                Tech stack ▶️ HTML,CSS,Tailwind, EJS, Javascript, Multer,
                MongoDB, Express js, Socket.io, Multer
              </h1>
              <p className="text-justify my-2 text-emerald-900">
                This project is a dynamic online platform for student
                collaboration, built using HTML, CSS, Tailwind, EJS, JavaScript,
                Multer, MongoDB, and Express.js. It enables global students to
                connect, form groups, and collaborate on projects with real-time
                chat powered by "socket.io." Tailwind ensures a responsive UI,
                while JavaScript enhances project search and filtering. Multer
                handles file uploads, and MongoDB with Express.js provides a
                strong backend for user and project management, fostering a
                collaborative and engaging student community.
              </p>
            </div>
          </div>
          <div className="w-9/12 my-4">
            <div className="flex justify-between items-center">
              <h1 className="font-semibold text-xl text-highlight">
                Tic-Tac-Toe Multiplayer Game
              </h1>
              <span>
                {" "}
                <Link href={"https://github.com/sandeep002-Hidden/TictacToeMP"}>
                  LINK
                </Link>
              </span>
            </div>
            <div>
              <h1 className="text-xl text-zinc-950">
                Tech stack ▶️ Next.js,tailwind,TypeScript,JWT,Socket.io,
              </h1>
              <p className="text-justify my-2 text-emerald-900">
                The project aims to create a platform in which one can play
                Tic-tac-Toe game with his friend , with people ground globe,or
                may with computer. Next.js and tailwind provides semless ui to
                and give the best user Experience while
              </p>
            </div>
          </div>
          <div className="w-9/12 my-4">
            <div className="flex justify-between items-center">
              <h1 className="font-semibold text-xl text-highlight">
                Search Engine
              </h1>
              <span>
                {" "}
                <Link href={"https://github.com/sandeep002-Hidden/search002"}>
                  LINK
                </Link>
              </span>
            </div>
            <div>
              <h1 className="text-xl text-zinc-950">
                Tech stack ▶️ Python,Flask,SqlLite
              </h1>
              <p className="text-justify my-2 text-emerald-900">
                This search engine, built with Flask, Python, and SQLite,
                provides a fast and efficient platform for retrieving and
                displaying information. Users can enter search queries and
                receive relevant results in a user-friendly interface,
                showcasing the seamless integration of Python and a relational
                database for smooth search functionality.
              </p>
            </div>
          </div>
          <div className="w-9/12 my-4">
            <div className="flex justify-between items-center">
              <h1 className="font-semibold text-xl text-highlight">
                Next.js Authentication
              </h1>
              <span>
                {" "}
                <Link href={"https://github.com/sandeep002-Hidden/nextAuth"}>
                  LINK
                </Link>
              </span>
            </div>
            <div>
              <h1 className="text-xl text-zinc-950">
                Tech stack ▶️ Next.js,MongoDB,JWT,Typescript,Nodemailer
              </h1>
              <p className="text-justify my-2 text-emerald-900">
                This Next.js authentication app uses MongoDB, JWT, TypeScript,
                and Nodemailer to provide secure user registration and login.
                JWT handles authentication, while MongoDB stores user data.
                Nodemailer is used for sending verification emails and password
                recovery links, ensuring a safe and seamless experience.
              </p>
            </div>
          </div>
        </div>
      </>

      <Footer />
    </>
  );
}
