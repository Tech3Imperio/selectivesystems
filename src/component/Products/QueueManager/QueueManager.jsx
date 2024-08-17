import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import queuemanager from "../../../assets/QueueManager/HeroQueue-manager/queuemanager.png";
import queuemanager2 from "../../../assets/QueueManager/HeroQueue-manager/queuemanager2.png";
import queuemanager3 from "../../../assets/QueueManager/HeroQueue-manager/queuemanager3.png";
import queuemanager4 from "../../../assets/QueueManager/HeroQueue-manager/queuemanager4.png";
import QueueData from "../../../Data/QueueManager/QueueManager";
import { Link } from "react-router-dom";

const QueueManager = () => {
  const [sliderItems, setSliderItems] = useState([
    {
      imgSrc: queuemanager,
      title: "Bathroom Partitions",
      type: "DOORS",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aut.",
    },
    {
      imgSrc: queuemanager2,
      title: "ALUMINIUM",
      type: "WINDOWS",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aut.",
    },
    {
      imgSrc: queuemanager3,
      title: "ALUMINIUM",
      type: "SLIDER",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aut.",
    },
    {
      imgSrc: queuemanager4,
      title: "ALUMINIUM",
      type: "PARTITION",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aut.",
    },
  ]);

  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const aluminiumRef = useRef(null); // Create a ref for the Aluminium component

  const moveSlider = (direction) => {
    if (direction === "next") {
      setCurrentItemIndex((currentItemIndex + 1) % sliderItems.length);
    } else {
      setCurrentItemIndex(
        (currentItemIndex - 1 + sliderItems.length) % sliderItems.length
      );
    }
  };

  const handleThumbnailClick = (index) => {
    setCurrentItemIndex(index);
  };

  useEffect(() => {
    // Scroll to the top of the component when it comes into view
    if (aluminiumRef.current) {
      aluminiumRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentItemIndex]);

  return (
    <>
      <div
        ref={aluminiumRef}
        className="slider h-screen -mt-10 w-screen overflow-hidden relative"
      >
        <div className="list relative w-full h-full">
          {sliderItems.map((item, index) => (
            <motion.div
              key={index}
              className={`item absolute inset-0 transition-opacity duration-500 ease-in-out ${
                index === currentItemIndex ? "opacity-100" : "opacity-0"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentItemIndex ? 1 : 0 }}
              transition={{ duration: 1 }}
            >
              <img
                src={item.imgSrc}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="gradient-overlay absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              <div className="content absolute top-[14%]  text-[0.700rem] w-[100%] left-[60%] transform -translate-x-1/2 pr-[30%] box-border text-[#e4e4e4] text-shadow poppins-regular md:top-[20%] md:text-sm lg:top-[10%] lg:text-2xl xl:top-[14%] xl:text-base">
                <motion.div
                  className="title text-[3em] font-bold leading-[1.3em]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: index === currentItemIndex ? 1 : 0,
                    y: index === currentItemIndex ? 0 : 20,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {item.title}
                </motion.div>
                <motion.div
                  className="type text-[3em] font-bold leading-[1.3em] text-[#14ff72cb]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: index === currentItemIndex ? 1 : 0,
                    y: index === currentItemIndex ? 0 : 20,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {item.type}
                </motion.div>
                <motion.div
                  className="description text-[1.2em]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: index === currentItemIndex ? 1 : 0,
                    y: index === currentItemIndex ? 0 : 20,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {item.description}
                </motion.div>
                <motion.div
                  className="button grid grid-cols-1 mt-5"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: index === currentItemIndex ? 1 : 0,
                    y: index === currentItemIndex ? 0 : 20,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <Link to="/contact">
                    <motion.button
                      className="border-none text-sm bg-[#e4e4e4] text-black w-[8rem] h-[3rem] rounded-[2rem] poppins-regular cursor-pointer transition-all duration-400 md:font-semibold lg:h-[4.5rem] lg:w-[11rem] lg:rounded-[3rem] lg:text-base xl:h-[3.4rem] xl:w-[10rem] xl:text-base"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      GET IN TOUCH
                    </motion.button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="thumbnail absolute bottom-14 left-1/1 gap-2 ml-1 transform -translate-x-2/7 flex z-10 md:-translate-x-[-8rem] md:gap-3 lg:gap-4 lg:-translate-x-[-15rem] xl:gap-5 xl:translate-x-60 xl:left-[34%]">
          {sliderItems.map((item, index) => (
            <div
              key={index}
              className="item w-[5.4rem] h-[10rem] hover:scale-110 flex-shrink-0 relative cursor-pointer md:h-[15rem] md:w-[9rem] lg:h-[18rem] lg:w-[11rem] xl:h-[200px] xl:w-[160px]"
              onClick={() => handleThumbnailClick(index)}
            >
              <img
                src={item.imgSrc}
                alt=""
                className="w-full h-full object-cover rounded-[20px] shadow-md"
              />
            </div>
          ))}
        </div>
        <div className="nextPrevArrows absolute top-[58%] right-[4%] z-10 w-[300px] max-w-[30%] flex gap-2.5 items-center md:mr-24 md:top-[60%] md:right-[54%] md:gap-5 lg:mr-24 lg:top-[80%] lg:right-[54%] xl:top-[70%] xl:gap-5 xl:right-[36%]">
          <button
            className="prev w-10 h-10 rounded-full bg-[#14ff72cb] border-none text-white font-mono font-bold transition-all duration-500 cursor-pointer hover:bg-white hover:text-black sm:h-[2rem] sm:w-[2rem] md:h-[3rem] md:w-[3rem] lg:h-[3.5rem] lg:w-[3.5rem] xl:h-[3rem] xl:w-[3rem]"
            onClick={() => moveSlider("prev")}
          >
            {"<"}
          </button>
          <button
            className="next w-10 h-10 rounded-full bg-[#14ff72cb] border-none text-white font-mono font-bold transition-all duration-500 cursor-pointer hover:bg-white hover:text-black sm:h-[2rem] sm:w-[2rem]  md:h-[3rem] md:w-[3rem] lg:h-[3.5rem] lg:w-[3.5rem] xl:h-[3rem] xl:w-[3rem]"
            onClick={() => moveSlider("next")}
          >
            {">"}
          </button>
        </div>
      </div>
      {/* product start */}
      <div className="grid grid-cols-1 -ml-28  md:grid-cols-3 poppins-regular px-32 lg:justify-center md:-ml-32 md:gap-24 lg:-ml-20 lg:gap-16 xl:ml-12 xl:mr-12 xl:mt-10 xl:mb-10">
        {QueueData.map((item, index) => (
          <div
            key={index}
            className="relative group h-[23rem] w-[20rem] m-2 bg-white hover:border shadow hover:shadow-black rounded-[1rem] cursor-pointer overflow-hidden text-center flex flex-col items-center transition-transform duration-300 ease-in-out  md:mt-7 md:h-[30rem] md:w-[15rem] lg:h-[28rem] lg:w-[17rem]  xl:h[25rem] xl:w-[20rem]"
          >
            <div className="flex items-center justify-center h-full w-full overflow-hidden">
              <img
                src={item.img}
                title={item.title}
                alt={item.alt}
                className="transition-transform duration-300 ease-in-out group-hover:scale-90 object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 flex items-center justify-center flex-col p-4 transition-opacity duration-300 ease-in-out md:py-4 xl:py-10 xl:text-sm">
              <div className="text-center">
                <p className="text-lg font-semibold mb-2 py-2">{item.title}</p>
                <p className="text-gray-600 text-sm">{item.desc}</p>
                <table className="mt-4 text-left w-full">
                  <tbody>
                    <tr>
                      <td className="font-semibold pr-2">Color:</td>
                      <td>{item.color}</td>
                    </tr>
                    <tr>
                      <td className="font-semibold pr-2">Height:</td>
                      <td>{item.heights}</td>
                    </tr>
                    <tr>
                      <td className="font-semibold pr-2">Base Diameter:</td>
                      <td>{item.Basediameter}</td>
                    </tr>
                    <tr>
                      <td className="font-semibold pr-2">Frame Material:</td>
                      <td>{item.frameMaterial}</td>
                    </tr>
                    <tr>
                      <td className="font-semibold pr-2">Weight:</td>
                      <td>{item.weight}</td>
                    </tr>
                    <tr>
                      <td className="font-semibold pr-2">Usage Application:</td>
                      <td>{item.UsageApplication}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="absolute bottom-2 w-full px-4 transition-opacity duration-300 ease-in-out group-hover:opacity-0">
              <p className="text-lg font-medium">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default QueueManager;
