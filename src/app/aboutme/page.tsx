import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default function AboutMe() {
  return (
    <>
      <Header />
      <div className="h-1/4  w-max font-black text-6xl ml-8 my-16 animate-slidein3">
        About Me<span className="text-6xl text-highlight ml-2">.</span>
      </div>

      <div className="animate-slidein3">
        <div className="h-max w-full flex items-center my-4 ">
          <span className="inline-block h-40 w-2 ml-12 rounded-lg bg-purple-700 sm:h-24 md:h-22"></span>
          <span className="inline-block h-fit ml-4 text-center text-base w-11/12 md:text-xl">
            <div className="text-justify  w-5/6">
              Hello !! 👋🏼 <span className=" text-highlight">,</span>I am{" "}
              <span className="text-highlight font-bold">
                Sandeep Mohapatra{" "}
              </span>
              an aspiring Full Stack Developer with a passion for building
              robust and innovative web applications. While I may be new to the
              world of professional development, I am eager to dive head first
              into the exciting realm of Full Stack Development.
              <span className=" text-highlight">.</span>
              <div></div>
            </div>
          </span>
        </div>
        <div className="h-max w-full flex items-center my-4">
          <span className="inline-block h-12 w-2 ml-12 rounded-lg bg-purple-700 sm:h-8 md:h-10"></span>
          <span className="inline-block h-fit ml-4 text-center text-base w-11/12 md:text-xl">
            <div className="text-left sm:w-4/5">
              I am a B.tech graduate in stream of{" "}
              <span className=" text-highlight font-semibold">CSE</span> fom
              GIET University, Gunupur.
              <span className=" text-highlight">.</span>
            </div>
            <div></div>
          </span>
        </div>
        <div className="h-max w-full flex items-center my-4">
          <span className="inline-block h-40 w-2 ml-12 rounded-lg bg-purple-700 sm:h-24 md:h-20"></span>
          <span className="inline-block h-fit ml-4 text-center text-base w-11/12 md:text-xl">
            <div className="sm:w-4/5 text-justify">
              My journey into the world of coding began with a curiosity for
              technology and a desire to create impactful solutions. Over time,
              I have taught myself various programming languages , frameworks,
              and tools, honing my skills in both front-end and back-end
              development.
              <span className=" text-highlight">.</span>
            </div>
            <div></div>
          </span>
        </div>
        <div className="h-max w-full flex items-center my-4">
          <span className="inline-block h-44 w-2 ml-12 rounded-lg bg-purple-700 sm:h-24 md:h-20 "></span>
          <span className="inline-block h-fit ml-4 text-center text-base w-11/12 md:text-xl">
            <div className="sm:w-4/5  text-justify">
               I am dedicated to
              continuous learning and improvement. I am currently exploring
              web3 and App devlopment using React Native. I am
              excited about the possibilities they offer for building dynamic
              and responsive web applications.
              <span className=" text-highlight">.</span>
            </div>
            <div></div>
          </span>
        </div>
      </div>

      <div className="w-full h-screen p-2 flex flex-col items-center justify-evenly animate-slidein4">
        <div className=" text-left w-11/12 font-black text-6xl animate-slidein3">
          Technical Skills
          <span className="text-6xl text-highlight ml-2">.</span>
        </div>
        <div className="w-11/12 h-fit flex justify-around items-start bg-gray-200 rounded-xl">
          <div className="w-1/5 h-4/5 text-center ">
            <div className="text-base font-black md:text-xl">
              Language Known
            </div>
            <div className="font-medium h-max text-nowrap text-sm md:text-lg">
              <div>c</div>
              <div>c++</div>
              <div>SQL</div>
              <div>java</div>
              <div>Kotlin</div>
              <div>Python</div>
              <div>javascript</div>
            </div>
          </div>
          <div className="text-center w-1/5 h-1/2 flex items-start justify-evenly flex-col self-baseline	">
            <div className="h-full w-full ">
              <div className="text-base font-black md:text-xl">DataBase</div>
              <div className="font-medium  text-sm md:text-lg">
                <div>MySql</div>
                <div>No-sql</div>
                <div>Mongodb</div>
              </div>
            </div>
          </div>

          <div className="h-full w-1/5 text-center ">
            <div className="text-base font-black md:text-xl">
              Web Development
            </div>
            <div className="font-medium text-nowrap text-sm md:text-lg">
              <div>HTML5</div>
              <div>CSS3</div>
              <div>Flask</div>
              <div>Django</div>
              <div>Node.js</div>
              <div>Express.js</div>
              <div>React.js</div>
              <div>React Native</div>
              <div>Next.js</div>
              <div>tailwind css</div>
            </div>
          </div>
          <div className="text-center w-1/5 h-1/2 flex items-start justify-evenly flex-col self-baseline	">
            <div className="h-full w-full ">
              <div className="text-base font-black md:text-xl">DevOps</div>
              <div className="font-medium  text-sm md:text-lg">
                <h1>Docker</h1>
                <h1>Kubernates</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
