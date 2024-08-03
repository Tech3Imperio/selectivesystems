import React from "react";
import { motion } from "framer-motion";
import { aboutData } from "../../Data/About";
// import { ImageData } from "../HeroImageSlider/ImageData";
import image1 from "../../assets/SliderImages/image1.jpg";
import image2 from "../../assets/SliderImages/image2.jpg";
import image3 from "../../assets/SliderImages/image3.jpg";
import image4 from "../../assets/SliderImages/image4.jpg";
import image5 from "../../assets/SliderImages/image5.jpg";
import image6 from "../../assets/SliderImages/image6.jpg";

const images = [image1, image2, image3, image4, image5, image6];

const HeroImageSlider = () => {
  return (
    <>
      {/* <div className="bg-[#e4e4e4] w-full h-[30rem] mt-24 md:h-[70rem] lg:h-screen xl:h-screen">
        <h1 className="font-semibold text-2xl ml-8 px-2 lg:ml-2 py-7 md:px-14 lg:py-24 xl:py-24">
          General showcase of all products
        </h1>
        <motion.div
          className="flex justify-center items-center -ml-24 min-h-screen overflow-hidden"
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <div className="image-container flex relative -ml-[10rem] justify-center md:-mr-[7rem] lg:-ml-28 xl:mr-[20rem]">
            {images.map((image, index) => (
              <motion.img
                key={index}
                src={image}
                alt={`image-${index}`}
                className="w-[12rem] h-[12rem] object-cover -mt-[15rem] transition-transform duration-300 ease-in-out mr-[-20%] rounded-3xl hover:scale-150 hover:z-20 md:h-[20rem] md:w-[20rem] md:mr-[-20%] md:hover:scale-110 md:z-10 lg:h-[25rem] lg-w-[28rem] lg:-mt-[25rem] lg:mr-[-16%] lg:hover:scale-125 lg:hover:z-20 xl:h-[30rem] xl:w-[30rem] xl:mr-[-22%] xl:hover:scale-150 xl:hover:z-20"
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
              />
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-3 gap-4 p-4 md:hidden">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: index * 0.3 }}
            >
              <img
                className="h-[10rem] w-[10rem] object-cover rounded-3xl transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                src={image}
                alt={`image-${index}`}
              />
            </motion.div>
          ))}
        </div>
      </div> */}
      <div className="bg-[#e4e4e4] w-full py-5 h-full mt-24 md:h-[70rem] lg:h-screen xl:h-screen">
        <h1 className="font-semibold text-2xl ml-6 py-4 lg:ml-2 md:pt-24 md:px-12 lg:py-24 xl:py-10">
          General showcase of all products
        </h1>

        {/* Motion Animation for Medium and Larger Devices  */}

        <motion.div
          className="hidden md:flex justify-center items-center -ml-24 min-h-screen overflow-hidden"
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <div className="image-container overflow-none flex relative -ml-[10rem] justify-center md:-mr-[2rem] lg:-ml-28 xl:mr-[20rem]">
            {" "}
            {images.map((image, index) => (
              <motion.img
                key={index}
                src={image}
                alt={`image-${index}`}
                className="w-[12rem] h-[12rem] object-cover -mt-[15rem] transition-transform duration-300 ease-in-out mr-[-20%] rounded-3xl hover:scale-150 hover:z-20 md:h-[24rem] md:w-[24rem] md:mr-[-27%] md:hover:scale-110 md:z-10 lg:h-[25rem] lg-w-[28rem] lg:-mt-[25rem] lg:mr-[-20%] lg:hover:scale-125 lg:hover:z-20 xl:h-[23rem] xl:w-[23rem] xl:-mr-[20%] xl:-mt-24 xl:hover:scale-125 xl:hover:z-20 2xl:h-[25rem] 2xl:w-[25rem] 2xl:hover:h-[30rem] 2xl:hover:w-[30rem] 2xl:-mr-[20%]"
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
              />
            ))}
          </div>
        </motion.div>

        {/* Grid Layout for Smaller Devices  */}

        <div className="grid grid-cols-2 gap-4 ml-2 mr-10 p-4 md:hidden">
          {" "}
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: index * 0.3 }}
            >
              <img
                className="h-[11.5rem] w-full -mr-10 ml-3  object-cover rounded-3xl transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                src={image}
                alt={`image-${index}`}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* About data start */}
      <div
        className="grid -ml-2 -mr-2 mb-5 px-5 grid-cols-2 py-14 md:ml-10 md:mr-14 lg:-ml-[0.5rem] lg:-mr-[0.5rem]  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 justify-items-center"
        data-aos="slide-up"
        style={{ gap: "15px" }}
      >
        {aboutData.map((item, index) => (
          <div
            key={index}
            className=" h-[23.2rem] w-[11rem] bg-white hover:border shadow hover:shadow-black rounded-3xl cursor-pointer overflow-hidden text-center flex flex-col items-center md:h-[28rem] md:w-[17rem] lg:h-[32rem] lg:w-[20rem] xl:h-[27rem] xl:w-[17rem]"
            // style={{
            //   height: "32rem",
            // }} // Fixed height for all cards
          >
            <div className="flex items-center justify-center h-[17rem] w-full">
              <img
                src={item.img}
                title={item.title}
                alt={item.alt}
                className="h-[5.rem] w-[5rem] py-1 md:h-[9.rem] md:w-[10rem] lg:h-[11.rem] lg:w-[11rem] xl:h-[6.rem] xl:-py-4 xl:w-[7rem] object-cover"
              />
            </div>
            <div className="p-2 flex-grow">
              <h3 className="mt-4 text-xl md:text-2xl font-semibold">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm md:text-base pt-4 pb-4">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HeroImageSlider;
