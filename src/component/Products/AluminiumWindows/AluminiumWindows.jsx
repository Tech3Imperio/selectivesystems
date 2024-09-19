import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import img1 from "../../../assets/AluminiumProduct/img1.jpg";
import img2 from "../../../assets/AluminiumProduct/img2.jpg";
import img3 from "../../../assets/AluminiumProduct/img3.jpg";
import img4 from "../../../assets/AluminiumProduct/img4.jpg";
import aluminumPhone from "../../../assets/AluminiumProduct/AluminiumPhoneImages/aluminumPhone.jpg";
import AluminumPhoneDoor from "../../../assets/AluminiumProduct/AluminiumPhoneImages/AluminumPhoneDoor.jpg";
import AluminumPhoneWindow from "../../../assets/AluminiumProduct/AluminiumPhoneImages/AluminumPhoneWindow.jpg";
import AluminumData from "../../../Data/Aluminium/AluminiumData";
import { Link } from "react-router-dom";

const Aluminium = () => {
  const [sliderItems, setSliderItems] = useState([
    {
      imgSrc: img1,
      phoneImgSrc: aluminumPhone,
      title: "ALUMINIUM",
      type: "DOORS",
      description:
        "Enhance your home with sleek and durable aluminium doors, crafted for modern aesthetics, superior insulation, and exceptional security. Discover our top-quality aluminium doors, offering style, energy efficiency, and long-lasting performance for both residential and commercial properties.",
    },
    {
      imgSrc: img2,
      phoneImgSrc: AluminumPhoneWindow,
      title: "ALUMINIUM",
      type: "WINDOWS",
      description:
        "Upgrade your property with premium aluminium windows, offering unmatched durability, energy efficiency, and modern design. Our aluminium windows provide superior insulation, weather resistance, and aesthetic appeal for both residential and commercial applications.",
    },
    {
      imgSrc: img3,
      phoneImgSrc: AluminumPhoneDoor,
      title: "ALUMINIUM",
      type: "SLIDER",
      description:
        "Experience seamless functionality with our aluminium sliding doors, designed for sleek aesthetics and exceptional durability. Perfect for maximizing space and natural light, our aluminium sliders offer energy efficiency, smooth operation, and modern design for residential and commercial properties.",
    },
    {
      imgSrc: img4,
      phoneImgSrc: aluminumPhone,
      title: "ALUMINIUM",
      type: "PARTITION",
      description:
        "Elevate your interior with aluminium frame and glass transparent partitions, combining sleek modern design with durability. Ideal for creating open, light-filled spaces, these partitions offer excellent visibility, privacy, and flexibility for both commercial and residential applications.",
    },
  ]);

  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [isPhoneSize, setIsPhoneSize] = useState(window.innerWidth < 768); // Track screen size
  const aluminiumRef = useRef(null);

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
    const handleResize = () => {
      setIsPhoneSize(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
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
      {/* products all */}
      {/* basic cards data */}
      {/* <div
        className="grid -ml-2 -mr-2 mb-5 px-5 grid-cols-2 py-14 md:ml-10 md:mr-14 lg:-ml-[0.5rem] lg:-mr-[0.5rem]  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-items-center"
        data-aos="slide-up"
        style={{ gap: "15px" }}
      >
        {AluminiumData.map((item, index) => (
          <div
            key={index}
            className=" h-[25.5rem] w-[11.rem] bg-white hover:border shadow hover:shadow-black rounded-3xl cursor-pointer overflow-hidden text-center flex flex-col items-center md:h-[28rem] md:w-[17rem] lg:h-[32rem] lg:w-[20rem] xl:h-[27rem] xl:w-[18.2rem]"
            // style={{
            //   height: "32rem",
            // }} // Fixed height for all cards
          >
            <div className="flex items-center justify-center h-[17rem] w-full">
              <img
                src={item.img}
                title={item.title}
                alt={item.alt}
                className="h-[5.rem] w-[5rem] mt-1 mb-2 md:h-[9.rem] md:w-[10rem] lg:h-[11.rem] lg:w-[10rem] xl:h-[7.rem] xl:w-[7rem] object-cover"
              />
            </div>
            <div className="p-2 flex-grow">
              <h3 className="mt-2 text-xl md:text-2xl font-semibold">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm md:text-base  poppins-regular">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div> */}

      {/* image hidden hover time */}
      {/* <div className="grid grid-cols-1 gap-4 py-14 px-5 md:grid-cols-3 poppins-regular">
        {AluminiumData.map((item, index) => (
          <div
            key={index}
            className="relative group h-[20rem] w-[20rem] bg-white hover:border shadow hover:shadow-black rounded-lg cursor-pointer overflow-hidden text-center flex flex-col items-center transition-transform duration-300 ease-in-out"
          >
            <div className="flex items-center justify-center h-full w-full overflow-hidden">
              <img
                src={item.img}
                title={item.title}
                alt={item.alt}
                className="transition-transform duration-300 ease-in-out group-hover:scale-90 object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 flex items-center justify-center flex-col p-4 transition-opacity duration-300 ease-in-out"> */}
      {/* <h3 className="text-xl font-semibold">{item.title}</h3> */}
      {/* <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
            </div>
            <div className="absolute bottom-2 w-full px-4">
              <p className="text-lg font-medium">{item.title}</p>
            </div>
          </div>
        ))}
      </div> */}

      {/* table data */}
      <div className="grid grid-cols-1 -ml-28 md:grid-cols-2 lg:grid-cols-3 poppins-regular px-32 md:justify-center md:mt-8 md:gap-20 lg:justify-center lg:-ml-20 lg:gap-16 xl:ml-12 xl:mr-12 xl:mt-3 xl:mb-10">
        {AluminumData.map((item, index) => (
          <div
            key={index}
            className="relative group h-[24.4rem] w-[20rem] ml-5 mt-14 mb-8 bg-white hover:border hover:shadow-black rounded-[1rem] cursor-pointer overflow-hidden text-center flex flex-col items-center transition-transform duration-700 ease-in-out md:mt-7 md:h-[28rem] md:w-[20rem] md:text-sm lg:h-[27.5rem] lg:-pt-[5rem] lg:w-[17rem] xl:h-[28rem] xl:w-[20rem]"
          >
            <div className="flex items-center justify-center h-[116%] mr-2 w-[116%] overflow-hidden md:-mb-20 xl:-mb-40">
              <img
                src={item.img}
                title={item.title}
                alt={item.alt}
                className="transition-transform duration-700 ease-in-out group-hover:scale-90 object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 flex items-center justify-center flex-col p-4 transition-opacity duration-300 ease-in-out">
              <div className="text-center">
                <p className="text-lg font-semibold mb-2 py-2 select-none">{item.title}</p>
                <p className="text-gray-600 text-sm select-none">{item.desc}</p>
                <table className="mt-4 text-left w-full select-none">
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

export default Aluminium;
