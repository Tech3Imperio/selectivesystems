import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import invisiblegrill from "../../../assets/InvisibleGrill/invisiblegrill.png";
import slider from "../../../assets/InvisibleGrill/slider.png";
import Invisiblebacony from "../../../assets/InvisibleGrill/Invisiblebacony.webp";
import Invisiblebaconyimg from "../../../assets/InvisibleGrill/Invisiblebaconyimg.png";
import InvisibleData from "../../../Data/InvisibleGrill/InvisibleGrill";
import { Link } from "react-router-dom";

const InvisibleGrill = () => {
  const [sliderItems, setSliderItems] = useState([
    {
      imgSrc: invisiblegrill,
      title: "Alumimium",
      type: "Rope",
      description:
        " Lightweight and durable aluminum rope designed for various applications, including construction, rigging, and outdoor activities. Offers excellent strength-to-weight ratio and corrosion resistance, ensuring reliable performance in demanding conditions. Ideal for use in both industrial and recreational settings.",
    },
    {
      imgSrc: slider,
      title: "Invisible",
      type: "Grill",
      description:
        "Modern safety solution featuring thin, stainless steel wires that provide robust protection without obstructing views. Ideal for windows, balconies, and staircases, it offers a sleek and secure way to enhance safety while maintaining aesthetic appeal. Perfect for both residential and commercial properties.",
    },
    {
      imgSrc: Invisiblebacony,
      title: "Invisible grill",
      type: "Balcony",
      description:
        "Secure your balcony with our sleek invisible grill, featuring thin stainless steel wires that provide safety without blocking the view. Perfect for modern homes and commercial spaces, this durable solution ensures both security and style. Ideal for enhancing balcony safety while maintaining an unobtrusive appearance.",
    },
    {
      imgSrc: Invisiblebaconyimg,
      title: "Invisible grill",
      type: "Terrace",
      description:
        "Secure your terrace with our sleek invisible grill, featuring slim stainless steel wires that ensure safety while preserving your view. Ideal for both residential and commercial spaces, it combines durability with modern aesthetics.",
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
                  className="description text-[1em]"
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
        <div className="thumbnail absolute bottom-2 xl4:bottom-12 left-1/1 gap-1 ml- transform -translate-x-2/7 flex z-10 md:-translate-x-[-10rem] md:gap-3 lg:gap-4 lg:left-[12%] lg:-translate-x-[-1rem] xl:gap-5 xl:translate-x-60 xl:left-[32%] xl4:mx-[15%] 2xl:-mb-8">
          {sliderItems.map((item, index) => (
            <div
              key={index}
              className="item w-[5rem] h-[10rem] ml-2 hover:scale-110 flex-shrink-0 relative cursor-pointer md:h-[14rem] md:w-[8.3rem] lg:h-[18rem] lg:w-[12rem] xl:h-[200px] xl:w-[7rem] xl:mb-8  xl4:h-[16rem] xl4:w-[10rem]"
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
        <div className="nextPrevArrows absolute top-[65%] right-[65%] z-10 w-[300px] max-w-[30%] flex gap-2.5 items-center md:mr- md:top-[78%] md:right-[65%] md:gap-5 lg:mr-24 lg:top-[70%] lg:right-[45%] xl:top-[70%] xl:gap-5 xl:right-[36%] xl4:top-[70%] ">
          <button
            className="prev w-10 h-10 rounded-full bg-[#14ff72cb] border-none text-white font-mono font-bold transition-all duration-500 cursor-pointer hover:bg-white hover:text-black sm:h-[2rem] sm:w-[2rem] md:h-[3rem] md:w-[3rem] lg:h-[3.5rem] lg:w-[3.5rem] xl:h-[3rem] xl:w-[3rem] xl4:ml-[8rem]"
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
      <div className="grid grid-cols-1 -ml-28 md:grid-cols-2 lg:grid-cols-3 poppins-regular px-32 md:justify-center md:mt-8 md:gap-20 lg:justify-center lg:-ml-20 lg:gap-16 xl:ml-12 xl:mr-12 xl:mt-3 xl:mb-10">
        {InvisibleData.map((item, index) => (
          <div
            key={index}
            className="relative group h-[23.4rem] w-[20rem] ml-5 mt-14 mb-8 bg-white hover:border hover:shadow-black rounded-[1rem] cursor-pointer overflow-hidden text-center flex flex-col items-center transition-transform duration-700 ease-in-out md:mt-7 md:h-[30rem] md:w-[20rem] md:text-sm lg:h-[28rem] lg:-pt-[5rem] lg:w-[17rem] xl:h[18rem] xl:w-[20rem]"
          >
            <div className="flex items-center justify-center h-[116%] mr-2 w-[116%] overflow-hidden md:-mb-20 xl:-mb-40">
              <img
                src={item.img}
                title={item.title}
                alt={item.alt}
                className="transition-transform duration-700 ease-in-out group-hover:scale-90 object-cover mb-12 md:mb-10 lg:mb-8 xl:mb-14 "
              />
            </div>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 flex items-center justify-center flex-col p-4 transition-opacity duration-300 ease-in-out">
              <div className="text-center">
                <p className="text-lg font-semibold mb-2 py-2 lg:text-[0.740rem] xl:text-[0.850rem]">
                  {item.title}
                </p>
                <p className="text-gray-600 text-[0.620rem] md:text-[0.650rem] lg:text-[0.600rem] xl:text-[0.730rem]">
                  {item.desc}
                </p>
                <table className="mt-4 text-left w-full text-[0.700rem] md:text-[0.700rem] lg:text-[0.650rem] xl:text-[0.750rem]">
                  <tbody>
                    <tr>
                      <td className="font-semibold pr-2"> Grade Field:</td>
                      <td>{item.GradeField}</td>
                    </tr>
                    <tr>
                      <td className="font-semibold pr-2">Technique:</td>
                      <td>{item.Technique}</td>
                    </tr>
                    <tr>
                      <td className="font-semibold pr-2">Material:</td>
                      <td>{item.Material}</td>
                    </tr>
                    <tr>
                      <td className="font-semibold pr-2">Product Type:</td>
                      <td>{item.ProductType}</td>
                    </tr>
                    <tr>
                      <td className="font-semibold pr-2">UsageApplication:</td>
                      <td>{item.UsageApplication}</td>
                    </tr>
                    <tr>
                      <td className="font-semibold pr-2">GrillDesign:</td>
                      <td>{item.GrillDesign}</td>
                    </tr>
                    <tr>
                      <td className="font-semibold pr-2">WireDiameter:</td>
                      <td>{item.WireDiameter}</td>
                    </tr>
                    <tr>
                      <td className="font-semibold pr-2">SurfaceFinish:</td>
                      <td>{item.SurfaceFinish}</td>
                    </tr>
                    <tr>
                      <td className="font-semibold pr-2">WireSpacing:</td>
                      <td>{item.WireSpacing}</td>
                    </tr>
                    <tr>
                      <td className="font-semibold pr-2">Color:</td>
                      <td>{item.Color}</td>
                    </tr>
                    <tr>
                      <td className="font-semibold pr-2">Feature:</td>
                      <td>{item.Feature}</td>
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

export default InvisibleGrill;
