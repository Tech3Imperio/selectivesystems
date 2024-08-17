import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import railing1 from "../../../assets/Railing/HeroImage/railing1.png";
import railing2 from "../../../assets/Railing/HeroImage/railing2.jpg";
import railing3 from "../../../assets/Railing/HeroImage/railing3.jpg";
import railing4 from "../../../assets/Railing/HeroImage/railing4.jpg";
import RailingData from "../../../Data/Railing/RailingData";
import { Link } from "react-router-dom";

const Railings = () => {
  const [sliderItems, setSliderItems] = useState([
    {
      imgSrc: railing1,
      title: "Glass Railing",
      type: "Terrace",
      description:
        "Transform your terrace with our elegant glass railings, designed for both style and safety. Offering unobstructed views and modern aesthetics, they enhance the look of your outdoor space while ensuring robust protection. Durable and low-maintenance, our railings are the ideal choice for a sophisticated terrace upgrade.",
    },
    {
      imgSrc: railing2,
      title: "Glass Railing",
      type: "Door",
      description:
        "Elevate your space with our stylish door windows glass railings, crafted to blend modern aesthetics with robust functionality. These railings provide unobstructed views and a sleek design, enhancing the visual appeal of your door windows. Durable and low-maintenance, our high-quality glass railings offer both sophistication and security, perfect for contemporary interiors.",
    },
    {
      imgSrc: railing3,
      title: "Glass Railing",
      type: "Balcony",
      description:
        "Upgrade your balcony with our sleek glass railings, combining style and safety. Designed to provide unobstructed views and a modern touch, these railings enhance your balcony's aesthetic appeal while offering strong, reliable protection. Perfect for contemporary homes, our durable glass railings are easy to maintain and elevate the overall look of your outdoor space.",
    },
    {
      imgSrc: railing4,
      title: "Glass Railing",
      type: "C Balcony",
      description:
        "Enhance your balcony with our custom C-shaped glass railings, designed to provide both style and safety. These railings offer a modern, unobstructed view and seamlessly integrate with your balcony's architecture. Crafted from durable materials, our C-shaped glass railings ensure robust protection while adding a sleek, contemporary touch to your outdoor space.",
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
              <div className="content absolute top-[14%]  text-[0.700rem] w-[100%] left-[60%] transform -translate-x-1/2 pr-[30%] box-border text-[#e4e4e4] text-shadow poppins-regular md:top-[20%] md:text-sm lg:top-[10%] lg:text-2xl xl:top-[14%] xl:text-base ">
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
                className="w-full h-full object-cover rounded-[20px] mt-10 shadow-md"
              />
            </div>
          ))}
        </div>
        <div className="nextPrevArrows absolute top-[60%] right-[4%] z-10 w-[300px] max-w-[30%] flex gap-2.5 items-center md:mr-24 md:top-[60%] md:right-[54%] md:gap-5 lg:mr-24 lg:top-[80%] lg:right-[54%] xl:top-[70%] xl:gap-5 xl:right-[36%]">
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
      <div className="grid grid-cols-1 -ml-28  md:grid-cols-2 lg:grid-cols-3 poppins-regular px-32 lg:justify-center md:-ml-32 md:gap-24 lg:-ml-20 lg:gap-16 xl:ml-12 xl:mr-12 xl:mt-10 xl:mb-10">
        {RailingData.map((item, index) => (
          <div
            key={index}
            className="relative group h-[24rem] w-[20rem] ml-2 mt-10 mb-14  bg-white hover:border hover:shadow-black rounded-[1rem] cursor-pointer overflow-hidden text-center flex flex-col items-center transition-transform duration-300 ease-in-out md:mb-10 md:ml-8 md:mt-7 md:h-[30rem] md:w-[20rem] md:text-sm lg:h-[28rem] lg:-ml-0 lg:-pt-[5rem] lg:w-[19rem] lg:mb-14 xl:h[22rem] xl:w-[22rem]"
          >
            <div className="flex items-center justify-center mb-8 h-[116%] mr-2 w-[116%] md:-mb-16 lg:-mb-5 xl:-mb-4 overflow-hidden">
              <img
                src={item.img}
                title={item.title}
                alt={item.alt}
                className="transition-transform duration-700 ease-in-out group-hover:scale-90 object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 flex items-center justify-center flex-col p-4 transition-opacity duration-300 ease-in-out md:py-4 xl:-m-2">
              <div className="text-center">
                <p className="text-lg font-semibold mb-2 py-2">{item.title}</p>
                <p className="text-gray-600 text-sm lg:text-sm lg:px-3 xl:text-sm xl:px-10">
                  {item.desc}
                </p>
                <table className="mt-4 text-left w-full px-14 text-[0.680rem] md:text-[0.600rem] md:px-14 lg:text-[0.500rem] xl:ml-10 xl:mr-24 xl:px-14 xl:text-[0.620rem]">
                  <tbody>
                    <tr>
                      <td className="font-semibold pr-2">Color:</td>
                      <td>{item.color}</td>
                    </tr>
                    <tr>
                      <td className="font-semibold pr-2">Appearance:</td>
                      <td>{item.appearance}</td>
                    </tr>
                    <tr>
                      <td className="font-semibold pr-2">Glass Thickness:</td>
                      <td>{item.glassThickness}</td>
                    </tr>
                    <tr>
                      <td className="font-semibold pr-2">Frame Material:</td>
                      <td>{item.frameMaterial}</td>
                    </tr>
                    <tr>
                      <td className="font-semibold pr-2">Surface Finishing:</td>
                      <td>{item.surfaceFinishing}</td>
                    </tr>
                    <tr>
                      <td className="font-semibold pr-2">Click to Visit:</td>
                      <td>
                        <Link to="https://www.imperiorailing.com/products">
                          {item.visit}
                        </Link>
                      </td>
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

export default Railings;
