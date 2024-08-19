import React from "react";
import { motion } from "framer-motion";
// import { aboutData } from "../../Data/About";
import { FadeRight } from "../uitility/animation";
// import { ImageData } from "../HeroImageSlider/ImageData";
import circle from "../../assets/SliderImages/circle.jpg";
// import image2 from "../../assets/SliderImages/image2.jpg";
// import image3 from "../../assets/SliderImages/image3.jpg";
// import image4 from "../../assets/SliderImages/image4.jpg";
// import image5 from "../../assets/SliderImages/image5.jpg";
// import image6 from "../../assets/SliderImages/image6.jpg";
import OurProducts from "../OurProducts/OurProducts";
import Banner from "../Banner/Banner";
import { Link } from "react-router-dom";

// const images = [image1, image2, image3, image4, image5, image6];

const HeroImageSlider = () => {
  return (
    <>
      {/* <div className="bg-[#e4e4e4] w-full py-5 h-full mt-24 md:h-[70rem] lg:h-screen xl:h-screen">
        <h1 className="font-semibold text-2xl ml-6 py-4 lg:ml-2 md:pt-24 md:px-12 lg:py-24 xl:py-10">
          General showcase of all products
        </h1> */}

      {/* Motion Animation for Medium and Larger Devices  */}

      {/* <motion.div
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
                alt={image-${index}}
                className="w-[12rem] h-[12rem] object-cover -mt-[15rem] transition-transform duration-300 ease-in-out mr-[-20%] rounded-3xl hover:scale-150 hover:z-20 md:h-[24rem] md:w-[24rem] md:mr-[-27%] md:hover:scale-110 md:z-10 lg:h-[25rem] lg-w-[28rem] lg:-mt-[25rem] lg:mr-[-20%] lg:hover:scale-125 lg:hover:z-20 xl:h-[23rem] xl:w-[23rem] xl:-mr-[20%] xl:-mt-24 xl:hover:scale-125 xl:hover:z-20 2xl:h-[25rem] 2xl:w-[25rem] 2xl:hover:h-[30rem] 2xl:hover:w-[30rem] 2xl:-mr-[20%]"
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
              />
            ))}
          </div>
        </motion.div> */}

      {/* Grid Layout for Smaller Devices  */}

      {/* <div className="grid grid-cols-2 gap-4 ml-2 mr-10 p-4 md:hidden">
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
                alt={image-${index}}
              />
            </motion.div>
          ))}
        </div>
      </div> */}

      {/* About data start */}

      <section>
        <div className="container bg-gray-800 mt-36 w-[22rem] h-[45rem] rounded-[3rem] grid gris-cols-1 md:grid-cols-2 relative  font-poppins overflow-hidden md:w-[46rem] md:h-[28rem] md:rounded-[5rem] lg:w-[60rem] lg:h-[31rem] lg:rounded-[5rem] xl:w-[91rem] xl:h-[32rem] xl:rounded-[6rem]">
          {/* product info */}
          <div className="flex flex-col justify-center py-14 mb-4 md:py-0 relative z-10">
            <div className=" text-center md:text-left space-y-2 lg:max-w-[25rem]">
              <motion.h1
                variants={FadeRight(0.6)}
                initial="hidden"
                animate="visible"
                className="text-4xl -mt-8 text-primary poppins-regular  leading-relaxed xl:leading-loose md:mb- md:ml-12 md:text-3xl md:-mb-[25px] lg:mb-2 lg:text-3xl lg:ml-14 lg:mt-12 xl:text-5xl xl:ml-36 xl:-mb-8"
              >
                Aluminum
              </motion.h1>
              <br />
              <motion.h1
                variants={FadeRight(0.9)}
                initial="hidden"
                animate="visible"
                className="text-xl px-4 text-secondary font-raleway md:ml-8 lg:ml-8 xl:-px-14 xl:ml-[8rem] xl:w-[29rem] xl:-px-14"
              >
                Modern Glass Windows{" "}
              </motion.h1>
              {/* <motion.h3
                variants={FadeRight(1.0)}
                initial="hidden"
                animate="visible"
                className="text-xl text-secondary tracking-wide px-8 md:ml-1 lg:ml-4 lg:text-2xl xl:ml-28 xl:-px-14"
              >
                Aluminum frame and Laminated Glass
              </motion.h3> */}
              <motion.p
                variants={FadeRight(1.3)}
                initial="hidden"
                animate="visible"
                className="text-gray-300 w-[16rem] ml-12  text-[0.800rem] font-raleway md:text-[0.860rem] md:w-[28rem] lg:ml-11 lg:w-[35rem] lg:text-sm xl:ml-36 xl:text-sm xl:w-[38rem] xl:py-2"
              >
                Upgrade your home or office with modern glass windows featuring
                durable aluminum frames. Our glass door windows are designed for
                energy efficiency, providing excellent insulation while allowing
                natural light to flood your space. The sleek aluminum frames
                offer a contemporary look, enhancing both the interior and
                exterior aesthetics. Perfect for any architectural style, these
                windows are low-maintenance, resistant to corrosion, and built
                to last. Whether you're looking to improve your view or boost
                property value, our glass door windows with aluminum frames
                deliver on performance and style. Ideal for residential and
                commercial applications, they combine the best of form and
                function.
              </motion.p>

              {/* button section */}
              <Link to="/contact">
                <motion.div
                  variants={FadeRight(1.5)}
                  initial="hidden"
                  animate="visible"
                  className="flex justify-center font-raleway md:justify-centre border-none ml-10 text-[0.700rem] bg-[#14ff72cb] text-[#fff] w-[6rem] h-[2.5rem] mt-4 px-1 rounded-[2rem] cursor-pointer md:h-[3rem] md:w-[8rem] md:ml-12 md:mt-4 md:font-semibold lg:h-[3rem] lg:w-[8rem] lg:px-2 lg:rounded-[3rem] lg:ml-11 lg:mt-4 lg:text-sm xl:h-[3rem] xl:w-[8.4rem] xl:text-sm xl:ml-36 xl:py-4  hover:bg-[#e4e4e4] hover:text-[#000]"
                >
                  <button>GET IN TOUCH</button>
                </motion.div>
              </Link>
            </div>
          </div>
          {/* image section */}
          <div className="flex justify-center items-center">
            <motion.img
              initial={{ opacity: 0, x: 200, rotate: 75 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 3, delay: 1.2 }}
              src={circle}
              alt=""
              className=" h-[18rem] w-[18rem] -mt-10 rounded-full md:mt-2 md:ml-28 md:h-[14rem] md:w-[14rem] lg:h-[20rem] lg:w-[20rem] xl:h-[23rem] xl:w-[23rem] "
            />
          </div>
        </div>
      </section>
      {/* Our product */}
      <OurProducts />
      {/* banner */}
      <Banner />

      {/* <div
        className="grid -ml-2 -mr-2 mb-5 px-5 grid-cols-2 py-14 md:ml-10 md:mr-14 lg:-ml-[0.5rem] lg:-mr-[0.5rem]  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 justify-items-center"
        data-aos="slide-up"
        style={{ gap: "15px" }}
      >
        {aboutData.map((item, index) => (
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
    </>
  );
};

export default HeroImageSlider;
