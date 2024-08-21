import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Invisiblebaconyimg from "../../assets/InvisibleGrill/Invisiblebaconyimg.png";
import image1 from "../../assets/About/Carousel/Image1.webp";
import image2 from "../../assets/About/Carousel/Image2.webp";
import image3 from "../../assets/About/Carousel/Image3.webp";
import { motion } from "framer-motion";

const About = () => {
  const [sliderItems] = useState([
    {
      imgSrc: image1,
      title: "High-Durability Glass",
      type: "Unmatched Strength & Clarity",
      description:
        "Discover our high-durability glass solutions, designed for superior impact resistance and long-lasting performance. Perfect for architectural and industrial applications, it combines strength with exceptional clarity.",
    },
    {
      imgSrc: image2,
      title: "Invisible Grill",
      type: "Sleek Safety Solution for Modern Homes",
      description:
        "Enhance your home's security with our invisible grill systems, offering robust protection while maintaining an elegant, unobstructed view. Ideal for contemporary spaces, these grills blend seamlessly with your décor.",
    },
    {
      imgSrc: image3,
      title: "Aluminum Grill Rope",
      type: "Durable and Stylish Safety Solutions",
      description:
        "Explore our premium aluminum grill rope, engineered for durability and aesthetic appeal. Perfect for creating secure and stylish grill installations, this high-quality rope offers strength and flexibility for any design. Ideal for modern security and decorative applications.",
    },
    // {
    //   imgSrc: queuemanager,
    //   title: "QUEUE",
    //   type: "ALUMINIUM STAND",
    //   description:
    //     "Enhance crowd control with our robust aluminium queue manager stands. Designed for durability and elegance, these stands provide a reliable solution for guiding foot traffic in any environment. Ideal for both indoor and outdoor settings, they combine strength with a sleek, modern appearance.",
    // },
  ]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* Carousel with auto-swipe, no dots, and no arrows */}
      <Carousel
        autoPlay
        interval={2000}
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        className="relative w-screen h-[33rem] overflow-hidden justify-center text-center -mt-7"
      >
        {sliderItems.map((item, index) => (
          <div key={index} className="relative w-full h-full md:mb-14">
            <img
              src={item.imgSrc}
              alt={item.title}
              className="w-screen h-screen object-cover"
            />
            <div className="gradient-overlay absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            <div className="content absolute top-[20%] text-[0.700rem] w-[100%] left-[60%] transform -translate-x-1/2 pr-[30%] box-border text-[#e4e4e4] text-shadow poppins-regular md:top-[20%] md:text-sm lg:top-[28%] lg:text-2xl xl:top-[20%] xl:text-base">
              <motion.div
                className="title text-2xl poppins-regular font-bold leading-[1.3em] md:text-3xl lg:text-4xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {item.title}
              </motion.div>
              <motion.div
                className="type text-xl py-1 font-bold poppins-regular leading-[1.3em] text-[#14ff72cb] md:text-3xl lg:text-3xl "
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {item.type}
              </motion.div>
              <motion.div
                className="description text-[1rem] w-[18rem] font-raleway py-2 md:text-base md:w-[30rem] md:ml-10 lg:text-2xl lg:w-[45rem] lg:ml-10 xl:text-base xl:ml-44"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {item.description}
              </motion.div>
              <motion.div
                className="button grid grid-cols-1 mt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Link to="/contact">
                  <motion.button
                    className="border-none text-[0.700rem] ml-14 bg-[#e4e4e4] hover:bg-[#14ff72cb] hover:text-white text-black w-[6rem] h-[2rem] rounded-[2rem] poppins-regular cursor-pointer transition-all duration-400 md:h-[3rem] md:w-[8rem] md:font-semibold lg:h-[4rem] lg:w-[10rem] lg:rounded-[3rem] lg:text-base xl:h-[3rem] xl:w-[8rem] xl:text-base"
                    whileHover={{ scale: 1.0 }}
                    whileTap={{ scale: 0.1 }}
                  >
                    GET IN TOUCH
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>
        ))}
      </Carousel>

      {/* Carousel end */}

      {/* Rest of your content */}
      <div className="pt-24 pb-32 overflow-hidden">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            {/* Left Section */}
            <div className="lg:w-1/2 flex justify-center items-center">
              <div className="relative">
                <img
                  src={Invisiblebaconyimg}
                  alt="video popup bg image"
                  className=" ml-[4px] h-[30rem] w-[23rem] rounded-3xl md:h-[40rem] md:w-[45rem] md:ml-4 lg:h-[37rem] lg:w-[32rem] lg:mt-4 xl:h-[30rem] xl:w-screen "
                />
              </div>
            </div>

            {/* Right Section */}
            <div className="lg:w-1/2 flex flex-col justify-center font-raleway ">
              <div className="max-w-xl mx-auto">
                <h6 className="text-secondary mb-4">
                  <span className="inline-block mr-2">
                    <i className="fas fa-square-full"></i>
                  </span>
                </h6>
                <h1 className="text-2xl ml-4 font-bold mb-6 poppins-regular text-primary md:text-3xl lg:text-3xl lg:ml-10 xl:text-4xl xl:w-[48rem] xl:-ml-12">
                  About Us
                </h1>
                <p className="mb-6 text-[0.700rem] px-4 md:text-base md:w-[49rem] lg:text-base lg:w-[33rem] lg:px-8 xl:text-sm xl:w-[48rem] xl:-ml-20">
                  Selective Systems are #1 Manufacturers & Supplier of
                  High-Quality INVISIBLE GRILLE & Pleated Mosquito Net, Roller
                  Mosquito Net. Raw Materials. Maximum Safety | Easy
                  Installation & Maintenance | Sleek & Stylish.
                </p>
                <p className="mb-6 text-[0.700rem] px-4 md:text-base md:w-[49rem] lg:text-base lg:w-[33rem] lg:px-8 xl:w-[48rem] xl:-ml-20">
                  Selective Systems are best Invisible Grill, Pleated Mosquito
                  Net, Roller Mosquito Net Manufacturers in Mumbai. In today’s
                  time, installing invisible grills is common in high-rise
                  residential apartments and commercial buildings to secure
                  small children and pets. The Invisible Grill is a wonderful
                  alternative for safety purposes. It is mainly designed for
                  enhancing the interior and exterior decors of your home so
                  that you can enjoy the unobstructed view of nature. As we are
                  advancing into a new era with higher demand from the end-user,
                  We are proud to present Invisible Grill which offers end users
                  better visibility as compared to traditional grills without
                  compromising safety concerns. As a plus point, it provides a
                  safe environment for your loved ones while enjoying
                  see-through panoramic views. With anything else, the facade
                  and design of most homes are greatly compromised. Being
                  invisible, looking into this new grill means you are now able
                  to enjoy the outside view in a totally non-obscured manner.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 font-raleway">
            <div className=" lg:flex-row">
              <p className="mb-6 text-[0.700rem] lg:mb-0 px-4 md:text-base md:w-[49rem] lg:text-base lg:w-full xl:text-sm  xl:w-screen">
                We Selective Systems offer different varieties of pleated &
                Roller mosquito nets in customized designs. Our designs are
                prompt as specified by customer needs.
              </p>
              <p className="mb-6 text-[0.700rem]   px-4 lg:mb-0 md:text-base md:w-[49rem] lg:text-base lg:w-full xl:text-sm xl:w-screen">
                A sliding mosquito net for sliding windows is a smart solution
                to ward off mosquitoes and other bugs. Unlike the regular net
                that hangs over the doorway, a sliding mosquito net for the
                sliding window is customized as per the size of your window. Our
                mosquito mesh is made from durable and strong wire. A sliding
                mosquito net is very easy to put up and down. We as installers
                of mosquito nets for sliding windows, customize them as per the
                color of your home and the size of your windows. We design very
                sleek-looking mosquito nets and merge them with the décor of
                your home. Our mosquito nets allow a constant flow of air and
                create a pleasant atmosphere in your home. Let’s look at the
                striking features of our Mosquito nets:
              </p>
            </div>
            <div className="flex flex-wrap mt-6 px-4 text-[0.700rem] gap-4 md:text-base lg:text-base xl:text-sm xl:-space-x-14">
              <ul className="flex-1 space-y-2">
                <li>Sleek design</li>
                <li>Ensures air circulation and natural light enter</li>
                <li>Easy to operate</li>
                <li>Low-maintenance</li>
              </ul>
              <ul className="flex-1 space-y-2">
                <li className=" xl:-ml-60">
                  Blends with the décor of the home
                </li>
                <li className=" xl:-ml-60">Made of special polyester mesh</li>
                <li className=" xl:-ml-60">
                  Provides maximum safety and durability
                </li>
              </ul>
            </div>

            <div className=" ml-6 mt-12 justify-center">
              <Link
                to=""
                className="btn theme-btn-2 btn-effect-1 bg-secondary text-black hover:bg-primary hover:text-white poppins-regular py-2 px-4 rounded-full"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
