import React from "react";
import { motion } from "framer-motion";
import { aboutData } from "../../Data/About";
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
      <div className="bg-[#e4e4e4] w-full h-auto mt-28 md:h-[70rem] lg:h-[80rem] xl:h-[38rem]">
        <h1 className="font-semibold text-2xl ml-8 lg:ml-2 py-10 md:px-14">
          General showcase of all products
        </h1>
        <div className="hidden md:flex flex-wrap justify-center m-8 lg:grid-cols-2 lg:gap-10 lg:p-4">
          {images.map((image, index) => (
            <motion.a
              href="/"
              key={index}
              className="relative group"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: index * 0.3 }}
              style={{ zIndex: images.length - index }}
            >
              <img
                className="-mt-44 object-cover rounded-3xl transition-transform duration-300 ease-in-out transform group-hover:scale-110 hover:rounded-[2.2rem] md:h-[17rem] md:w-[17rem] md:mt-4 md:ml-12 lg:h-[20rem] lg:w-[25rem] lg:-mt-[2rem] lg:mb-14 lg:space-y-24 lg:-ml-2 lg:mr-5  xl:h-[22rem] xl:w-[10rem] xl:-ml-[7rem] xl:mr-[7rem] xl:group-hover:h-[22rem] xl:group-hover:w-[22rem]"
                src={image}
                alt={`image-${index}`}
              />
            </motion.a>
          ))}
        </div>
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
      </div>
      <div
        className="grid mb-5 px-[18rem] m-24 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center"
        style={{ gap: "15px" }}
      >
        {aboutData.map((item, index) => (
          <div
            key={index}
            className="bg-white border shadow-lg hover:shadow-black rounded-3xl
        cursor-pointer overflow-hidden text-center w-full md:w-[20rem] lg:w-[22rem] pb-10 transform transition-transform duration-700
        hover:scale-105 flex flex-col items-center"
            style={{ height: "32rem" }} // Fixed height for all cards
          >
            <div className="flex items-center justify-center h-[17rem] w-full">
              <img
                src={item.img}
                title={item.title}
                alt={item.alt}
                className="h-[15rem] w-[13rem] object-cover"
              />
            </div>
            <div className="p-4 flex-grow">
              <h3 className="mt-4 text-xl md:text-2xl font-semibold">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm md:text-base">
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
