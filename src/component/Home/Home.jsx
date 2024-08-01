import React from "react";
import SelectingSystem from "../../assets/HeroVideo/SelectingSystem.mp4";
import HeroImageSlider from "../HeroImageSlider/HeroImageSlider";
// import { motion } from "framer-motion";
// import image1 from "../../assets/SliderImages/image1.jpg";
// import image2 from "../../assets/SliderImages/image2.jpg";
// import image3 from "../../assets/SliderImages/image3.jpg";
// import image4 from "../../assets/SliderImages/image4.jpg";
// import image5 from "../../assets/SliderImages/image5.jpg";

// const images = [image1, image2, image3, image4, image5];

const Home = () => {
  return (
    <>
      <div className="relative h-screen w-full -mt-[4.5rem]">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={SelectingSystem}
          autoPlay
          loop
          muted
        />
        {/* <div className="absolute inset-0 bg-black opacity-50 z-10"></div>{" "} */}
      </div>
      {/* <div className="bg-[#e4e4e4] w-full h-[45rem] mt-28">
        <h1 className="font-semibold text-3xl  ml-32 py-10">Product Gallery</h1>
        <div className="flex flex-row justify-center m-[16rem]">
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
                className="h-[25rem] w-[15rem] -mt-[14rem] object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110 rounded-[2.2rem] group-hover:h-[30rem] -ml-[5rem] group-hover:w-[33rem]"
                src={image}
                alt={`image-${index}`}
              />
            </motion.a>
          ))}
        </div>
      </div> */}
      <HeroImageSlider />
    </>
  );
};

export default Home;
