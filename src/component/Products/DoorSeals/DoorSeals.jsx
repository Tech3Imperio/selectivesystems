import React, { useState, useRef, useEffect } from "react";
import SelectingSystemDesktop from "../../../assets/HeroVideo/SelectingSystemDesktop.mp4"; // Video for screens above 1024px
import SelectingSystemMobile from "../../../assets/HeroVideo/SelectingSystemmobile.mp4"; // Video for screens up to 1024px
// import { motion } from "framer-motion";
// import bathroomPartition1 from "../../../assets/BathroomPartition/bathroomPartition1.jpeg";
// import bathroomPartition2 from "../../../assets/BathroomPartition/bathroomPartition2.jpeg";
// import bathroomPartition3 from "../../../assets/BathroomPartition/bathroomPartition3.jpeg";
// import bathroomPartition4 from "../../../assets/BathroomPartition/bathroomPartition4.jpeg";
import DoorData from "../../../Data/DoorSeals/Doorseals";

const DoorSeals = () => {
  // const [sliderItems, setSliderItems] = useState([
  //   {
  //     imgSrc: bathroomPartition1,
  //     title: "Bathroom Partitions",
  //     type: "DOORS",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aut.",
  //   },
  //   {
  //     imgSrc: bathroomPartition2,
  //     title: "ALUMINIUM",
  //     type: "WINDOWS",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aut.",
  //   },
  //   {
  //     imgSrc: bathroomPartition3,
  //     title: "ALUMINIUM",
  //     type: "SLIDER",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aut.",
  //   },
  //   {
  //     imgSrc: bathroomPartition4,
  //     title: "ALUMINIUM",
  //     type: "PARTITION",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aut.",
  //   },
  // ]);

  // const [currentItemIndex, setCurrentItemIndex] = useState(0);
  // const aluminiumRef = useRef(null); // Create a ref for the Aluminium component

  // const moveSlider = (direction) => {
  //   if (direction === "next") {
  //     setCurrentItemIndex((currentItemIndex + 1) % sliderItems.length);
  //   } else {
  //     setCurrentItemIndex(
  //       (currentItemIndex - 1 + sliderItems.length) % sliderItems.length
  //     );
  //   }
  // };

  // const handleThumbnailClick = (index) => {
  //   setCurrentItemIndex(index);
  // };

  // useEffect(() => {
  //   // Scroll to the top of the component when it comes into view
  //   if (aluminiumRef.current) {
  //     aluminiumRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // }, [currentItemIndex]);

  const videoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 1024);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch((error) => {
              console.error("Video play failed:", error);
            });
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(video);

    return () => {
      if (video) {
        observer.unobserve(video);
      }
    };
  }, []);

  return (
    <>
      <div className="bg-gray-100 flex items-center justify-center h-screen -mt-[5rem]">
        <video
          ref={videoRef}
          className="w-full h-full object-cover sm:min-h-screen sm:min-w-min md:h-[100%] md:w-[65rem] lg:h-[100%] lg:w-[100%] xl:h-screen xl:w-screen"
          autoPlay
          loop
          playsInline
          muted // Always mute the video
        >
          <source
            src={isMobile ? SelectingSystemMobile : SelectingSystemDesktop}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* <div
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
              <div className="content absolute top-[12%] text-sm w-[100%] left-[60%] transform -translate-x-1/2 pr-[30%] box-border text-[#e4e4e4] text-shadow poppins-regular md:top-[20%] lg:top-[20%] xl:top-[15%] ">
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
                  <motion.button
                    className="border-none text-sm bg-[#e4e4e4] text-black w-[8rem] h-[3rem] rounded-[2rem] poppins-regular cursor-pointer transition-all duration-400 md:font-semibold lg:h-[4.5rem] lg:w-[11rem] lg:rounded-[3rem] lg:text-base xl:h-[3.4rem] xl:w-[10rem] xl:text-base"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    GET IN TOUCH
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="thumbnail absolute bottom-14 left-1/1 gap-2 ml-1 transform -translate-x-2/7 flex z-10 md:-translate-x-[-8rem] md:gap-3 lg:gap-4 lg:-translate-x-[-15rem] xl:gap-5 xl:translate-x-60 xl:left-1/3">
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
      </div> */}
      {/* product start */}
      <div className="grid grid-cols-1 -ml-28 md:grid-cols-2 lg:grid-cols-3 poppins-regular px-32 md:justify-center md:mt-8 md:gap-20 lg:justify-center lg:-ml-20 lg:gap-16 xl:ml-12 xl:mr-12 xl:mt-3 xl:mb-10">
        {DoorData.map((item, index) => (
          <div
            key={index}
            className="relative group h-[23.4rem] w-[20rem] ml-5 mt-14 mb-8 bg-white hover:border hover:shadow-black rounded-[1rem] cursor-pointer overflow-hidden text-center flex flex-col items-center transition-transform duration-700 ease-in-out md:mt-7 md:h-[30rem] md:w-[20rem] md:text-sm lg:h-[28rem] lg:-pt-[5rem] lg:w-[17rem] xl:h[18rem] xl:w-[20rem]"
          >
            <div className="flex items-center justify-center h-[116%] mr-2 w-[116%] overflow-hidden md:-mb-20 xl:-mb-40">
              <img
                src={item.img}
                title={item.title}
                alt={item.alt}
                className="transition-transform duration-700 ease-in-out group-hover:scale-90 object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 flex items-center justify-center flex-col p-2 transition-opacity duration-300 ease-in-out">
              <div className="text-center">
                <p className="text-lg font-semibold mb-2 py-2">{item.title}</p>
                <p className="text-gray-600 text-[0.700rem] lg:text-[0.700rem] xl:text-[0.800rem]">
                  {item.desc}
                </p>
                <table className="mt-4 text-left w-full text-[0.800rem] lg:text-[0.700rem] xl:text-[0.800rem]">
                  <tbody>
                    <tr>
                      <td className="font-semibold pr-2">Profile Type:</td>
                      <td>{item.ProfileType}</td>
                    </tr>
                    <tr>
                      <td className="font-semibold pr-2">Dimensions:</td>
                      <td>{item.Dimensions}</td>
                    </tr>
                    <tr>
                      <td className="font-semibold pr-2">Finish:</td>
                      <td>{item.Finish}</td>
                    </tr>
                    <tr>
                      <td className="font-semibold pr-2">Maximum Length:</td>
                      <td>{item.MaximumLength}</td>
                    </tr>
                    <tr>
                      <td className="font-semibold pr-2">Cutting:</td>
                      <td>{item.Cutting}</td>
                    </tr>
                    <tr>
                      <td className="font-semibold pr-2">
                        Sound absorption value:
                      </td>
                      <td>{item.Soundabsorptionvalue}</td>
                    </tr>
                    <tr>
                      <td className="font-semibold pr-2">Fastening:</td>
                      <td>{item.Fastening}</td>
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

export default DoorSeals;
