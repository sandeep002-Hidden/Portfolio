import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

import steller1 from "@/image/steller1.png";
import sfLogin from "@/image/sfLogin.png";
import sfProfile from "@/image/steller3.png";
import on1 from "@/image/on1.png"
import on2 from "@/image/on2.png"
import on3 from "@/image/on3.png"
import on4 from "@/image/on4.png"
import on5 from "@/image/on5.png"
import on6 from "@/image/on6.png"
import ttt1 from "@/image/ttt1.png"
import ttt2 from "@/image/ttt2.png"
import ttt3 from "@/image/ttt3.png"
import st1 from "@/image/st1.png"
import st2 from "@/image/st2.png"

export default function Projects() {
  return (
    <>
      <Header />
      <div className="  relative font-serif animate-slidein2 flex justify-around">
        <div className="w-10/12 h-fit">
          <div className="h-max text-2xl font-semibold">
            Ord<span className="text-2xl text-purple-600">e</span>r Now
          </div>
          <div className="p-6 sm:p-12 flex flex-col md:flex-row items-center justify-around sticky top-0 bg-slate-100 rounded-3xl gap-6 md:gap-0">
  <Image
    src={on1}
    alt="Steller Forge"
    className="w-3/4 sm:w-1/2 md:w-1/4 hover:scale-150 transition-transform duration-500 ease-in-out"
  />

  <Image
    src={on2}
    alt="Steller Forge"
    className="w-3/4 sm:w-1/2 md:w-1/4 hover:scale-150 transition-transform duration-500 ease-in-out"
  />
  
  <Image
    src={on3}
    alt="Steller Forge"
    className="w-3/4 sm:w-1/2 md:w-1/4 hover:scale-150 transition-transform duration-500 ease-in-out"
  />
</div>

<div className="p-6 sm:p-12 flex flex-col md:flex-row items-center justify-around sticky top-0 bg-slate-100 rounded-3xl gap-6 md:gap-0">
  <Image
    src={on4}
    alt="Steller Forge"
    className="w-3/4 sm:w-1/2 md:w-1/4 hover:scale-150 transition-transform duration-500 ease-in-out"
  />

  <Image
    src={on5}
    alt="Steller Forge"
    className="w-3/4 sm:w-1/2 md:w-1/4 hover:scale-150 transition-transform duration-500 ease-in-out"
  />
  
  <Image
    src={on6}
    alt="Steller Forge"
    className="w-3/4 sm:w-1/2 md:w-1/4 hover:scale-150 transition-transform duration-500 ease-in-out"
  />
</div>

          <div className="h-fit text-justify text-emerald-800 p-8">
            A food delivery website built using the MERN stack (MongoDB,
            Express, React, Node.js) offers a comprehensive and dynamic platform
            for ordering food online. User authentication and authorization are
            seamlessly integrated, allowing users to sign up or log in with
            their email or social media accounts, and manage their profiles and
            saved addresses. The restaurant and menu management features enable
            users to browse a diverse list of restaurants, view detailed
            information about each one, including its menu, location, and hours
            of operation, and customize their orders with options such as extra
            toppings. Search and filter functionalities enhance the user
            experience by allowing customers to quickly find specific
            restaurants or dishes based on criteria like cuisine type, price
            range, rating, and distance. The order management system includes
            the ability to add items to a cart, proceed through a secure
            checkout process, and receive an order confirmation with an
            estimated delivery time. Additionally, users can track their orders
            in real time to see the status and delivery progress. Payment
            integration ensures a secure and smooth transaction experience,
            allowing users to choose from various payment methods. This
            combination of features provides a user-friendly and efficient
            platform for managing food delivery from start to finish.
          </div>
        </div>
      </div>
      <div className="  relative font-serif animate-slidein2 flex justify-around">
        <div className="w-10/12 h-fit">
          <div className="h-max text-2xl font-semibold">
            Tic-Tac-To<span className="text-2xl text-purple-600">e</span>{" "}
            Multiplayer Game.
          </div>
          <div className="p-6 sm:p-12 flex flex-col md:flex-row items-center justify-around sticky top-0 bg-slate-100 rounded-3xl gap-6 md:gap-0">
  <Image
    src={ttt1}
    alt="Steller Forge"
    className="w-3/4 sm:w-1/2 md:w-1/4 hover:scale-150 transition-transform duration-500 ease-in-out"
  />

  <Image
    src={ttt2}
    alt="Steller Forge"
    className="w-3/4 sm:w-1/2 md:w-1/4 hover:scale-150 transition-transform duration-500 ease-in-out"
  />
  
  <Image
    src={ttt3}
    alt="Steller Forge"
    className="w-3/4 sm:w-1/2 md:w-1/4 hover:scale-150 transition-transform duration-500 ease-in-out"
  />
</div>

          <div className="h-fit text-justify text-emerald-800 p-8">
            The project aims to create a platform in which one can play
            Tic-tac-Toe game with his friend , with people ground globe,or may
            with computer. Next.js and tailwind provides semless ui to and give
            the best user Experience while
          </div>
        </div>
      </div>
      <div className="  relative font-serif animate-slidein2 flex justify-around">
        <div className="w-10/12 h-fit">
          <div className="h-max text-2xl font-semibold">
            St<span className="text-2xl text-purple-600">e</span>llar Forg
            <span className="text-2xl text-purple-600">e</span>
          </div>
          <div className="p-6 sm:p-12 flex flex-col md:flex-row items-center justify-around sticky top-0 bg-slate-100 rounded-3xl gap-6 md:gap-0">
  <Image
    src={steller1}
    alt="Steller Forge"
    className="w-3/4 sm:w-1/2 md:w-1/4 hover:scale-150 transition-transform duration-500 ease-in-out"
  />

  <Image
    src={sfLogin}
    alt="Steller Forge"
    className="w-3/4 sm:w-1/2 md:w-1/4 hover:scale-150 transition-transform duration-500 ease-in-out"
  />
  
  <Image
    src={sfProfile}
    alt="Steller Forge"
    className="w-3/4 sm:w-1/2 md:w-1/4 hover:scale-150 transition-transform duration-500 ease-in-out"
  />
</div>

          <div className="h-fit text-justify text-emerald-800 p-8">
            The project is designed to create an online integrated platform for
            student projects, utilizing a tech stack of HTML, CSS, Tailwind,
            EJS, JavaScript, Multer, MongoDB, and Express.js. This platform not
            only allows students to submit and showcase their projects but also
            fosters a collaborative community. Users can connect with each
            other, make friends, and join groups to work together on projects.
            The platform features real-time chat functionality, enabling users
            to communicate and collaborate seamlessly. Tailwind CSS ensures a
            responsive and visually appealing design, while JavaScript enables
            dynamic interactions for searching and filtering projects. Multer
            facilitates the efficient upload of project files, and MongoDB,
            along with Express.js, supports a robust backend for managing user
            profiles, project submissions, and group collaborations. This
            comprehensive system promotes a vibrant community where students can
            engage, collaborate, and advance their projects collectively.
          </div>
        </div>
      </div>
      <div className="  relative font-serif animate-slidein2 flex justify-around">
        <div className="w-10/12 h-fit">
          <div className="h-max text-2xl font-semibold">
            Stock Tr<span className="text-2xl text-purple-600">e</span>nd Pr
            <span className="text-2xl text-purple-600">e</span>dection
          </div>
          <div className="p-6 sm:p-12 flex flex-col md:flex-row items-center justify-around sticky top-0 bg-slate-100 rounded-3xl gap-6 md:gap-0">
  <Image
    src={st1}
    alt="Steller Forge"
    className="w-3/4 sm:w-1/2 md:w-1/4 hover:scale-150 transition-transform duration-500 ease-in-out"
  />

  <Image
    src={st2}
    alt="Steller Forge"
    className="w-3/4 sm:w-1/2 md:w-1/4 hover:scale-150 transition-transform duration-500 ease-in-out"
  />
</div>

          <div className="h-fit text-justify text-emerald-800 p-8">
            The stock trend prediction project utilizes machine learning
            techniques to forecast future stock prices based on historical data.
            By implementing a layered Long Short-Term Memory (LSTM) neural
            network, the model analyzes past stock trends and makes predictions
            with a high degree of accuracy. The project demonstrates advanced
            knowledge of time series analysis, deep learning, and predictive
            modeling, providing insights into market behavior and helping users
            make informed investment decisions. Additionally, the project
            incorporates Python libraries like TensorFlow and Keras for model
            development, training, and evaluation.
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
