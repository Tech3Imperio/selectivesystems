import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
import terracefloor from "../../assets/About/terracefloor.webp";
import primage from "../../assets/About/AboutpageImage/primage.png";
import rightsideimage from "../../assets/About/AboutpageImage/rightsideimage.png";
import { motion } from "framer-motion";
import { FadeUp } from "../uitility/animation";
// import image1 from "../../assets/About/Carousel/Image1.webp";
// import image2 from "../../assets/About/Carousel/Image2.webp";
// import image3 from "../../assets/About/Carousel/Image3.webp";
// import { motion } from "framer-motion";

const About = () => {
  // const [sliderItems] = useState([
  //   {
  //     imgSrc: image1,
  //     title: "High-Durability Glass",
  //     type: "Unmatched Strength & Clarity",
  //     description:
  //       "Discover our high-durability glass solutions, designed for superior impact resistance and long-lasting performance. Perfect for architectural and industrial applications, it combines strength with exceptional clarity.",
  //   },
  //   {
  //     imgSrc: image2,
  //     title: "Invisible Grill",
  //     type: "Sleek Safety Solution for Modern Homes",
  //     description:
  //       "Enhance your home's security with our invisible grill systems, offering robust protection while maintaining an elegant, unobstructed view. Ideal for contemporary spaces, these grills blend seamlessly with your décor.",
  //   },
  //   {
  //     imgSrc: image3,
  //     title: "Aluminum Grill Rope",
  //     type: "Durable and Stylish Safety Solutions",
  //     description:
  //       "Explore our premium aluminum grill rope, engineered for durability and aesthetic appeal. Perfect for creating secure and stylish grill installations, this high-quality rope offers strength and flexibility for any design. Ideal for modern security and decorative applications.",
  //   },
  //   // {
  //   //   imgSrc: queuemanager,
  //   //   title: "QUEUE",
  //   //   type: "ALUMINIUM STAND",
  //   //   description:
  //   //     "Enhance crowd control with our robust aluminium queue manager stands. Designed for durability and elegance, these stands provide a reliable solution for guiding foot traffic in any environment. Ideal for both indoor and outdoor settings, they combine strength with a sleek, modern appearance.",
  //   // },
  // ]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* Carousel with auto-swipe, no dots, and no arrows */}
      {/* <Carousel
        autoPlay
        interval={2000}
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        className="relative w-screen h-full overflow-hidden justify-center text-center -mt-5"
      >
        {sliderItems.map((item, index) => (
          <div key={index} className="relative w-full h-full">
            <img
              src={item.imgSrc}
              alt={item.title}
              className="w-full h-[28rem] object-cover"
            />
            <div className="gradient-overlay absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            <div className="content absolute top-[20%] text-[0.700rem] w-[100%] left-[60%] transform -translate-x-1/2 pr-[30%] box-border text-[#e4e4e4] text-shadow poppins-regular md:top-[20%] md:text-sm lg:top-[28%] lg:text-2xl xl:top-[20%] xl:text-base">
              <motion.div
                className="title text-base poppins-regular font-bold leading-[1.3em] md:text-3xl lg:text-4xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {item.title}
              </motion.div>
              <motion.div
                className="type text-sm py-1 font-bold poppins-regular leading-[1.3em] text-[#14ff72cb] md:text-3xl lg:text-3xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {item.type}
              </motion.div>
              <motion.div
                className="description text-[0.700rem] w-[18rem] font-raleway py-2 md:text-base md:w-[30rem] md:ml-10 lg:text-2xl lg:w-[45rem] lg:ml-10 xl:text-base xl:ml-44"
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
      </Carousel> */}

      {/* Carousel end */}

      {/* Rest of your content */}
      <div className="pt-14 pb-32 overflow-hidden">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            {/* Left Section */}
            <div className="lg:w-1/2 flex justify-center items-center">
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <img
                  src={terracefloor}
                  alt="terracseimage"
                  className=" px-2 h-[27rem] -mt-6 w-full rounded-3xl md:h-[40rem] md:w-[45rem] md:ml-6 lg:h-[25rem] lg:w-full xl:h-[35rem] xl:-ml-2 xl:w-[45rem] xl4:w-full xl4:h-[38rem] xl4:w-screen xl4:ml-8 "
                />
              </motion.div>
            </div>

            {/* Right Section */}
            <div className="lg:w-1/2 flex flex-col justify-center font-raleway ">
              <div className="max-w-xl mx-auto">
                <h6 className="text-secondary mb-4">
                  <span className="inline-block mr-2">
                    <i className="fas fa-square-full"></i>
                  </span>
                </h6>
                <motion.h1
                  variants={FadeUp(0.2)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="text-2xl ml-4 font-bold mb-6 poppins-regular text-primary md:text-3xl lg:text-3xl lg:ml-10 xl:text-4xl xl:w-[48rem] xl:-ml-24 xl:-mt-[2rem]"
                >
                  About Us
                </motion.h1>
                <motion.p
                  variants={FadeUp(0.3)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="mb-4 text-[0.700rem] px-4 md:text-base poppins-extralight md:w-[49rem] lg:text-sm lg:w-[33rem] lg:px-8  xl:w-[52rem] xl:-ml-32 xl4:w-[56rem] xl4:text-base"
                >
                  Selective Systems is a leading manufacturer and supplier of
                  premium high-durable glass railings, balcony windows, and
                  invisible grilles. Our products are designed for maximum
                  safety, easy installation, and low maintenance, all while
                  offering a sleek and stylish finish. We use top-quality raw
                  materials to ensure long-lasting performance and a modern
                  aesthetic that complements any architectural design.
                </motion.p>
                <motion.p
                  variants={FadeUp(0.4)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="mb-4 text-[0.700rem] px-4 poppins-extralight md:text-base md:w-[48.2rem] lg:text-sm lg:w-[33rem] lg:px-8 xl:w-[142%] xl:-ml-32 xl4:text-base xl4:w-[159%]"
                >
                  Selective Systems is a premier provider based in Mumbai,
                  specializing in high-quality glass railings, aluminum windows,
                  queue managers, bathroom partitions, door seals, and office
                  partitions crafted from high-durable glass. We deliver
                  innovative architectural solutions that enhance safety and
                  aesthetics across residential, commercial, and industrial
                  spaces. Our glass railings offer a modern, sleek look with
                  unmatched safety for balconies, staircases, and terraces,
                  while our aluminum windows combine durability, style, and
                  energy efficiency. Our queue managers streamline customer flow
                  in public spaces, and our bathroom partitions blend
                  functionality with a clean, modern design. Door seals improve
                  insulation and reduce noise, and our office partitions create
                  flexible, customizable work environments. Committed to
                  excellence, Selective Systems uses top-grade materials and
                  cutting-edge technology to ensure each product meets the
                  highest standards of quality and durability. Trust us for all
                  your architectural and design needs, and discover the perfect
                  balance of innovation and quality.
                  <br />
                  {/* <br /> At Selective Systems, we specialize in providing a
                  diverse range of stainless steel and invisible grill
                  solutions, tailored to meet your specific design needs. Our
                  expertise in customized stainless steel designs ensures that
                  you receive high-quality products that enhance the safety and
                  aesthetics of your property. Whether you're looking for sleek
                  and modern stainless steel railings, durable invisible grills,
                  or other architectural elements, we deliver prompt and precise
                  solutions to match your requirements. At Selective Systems, we
                  prioritize customer satisfaction by offering customized
                  designs that align with your unique vision. Our team of
                  skilled professionals works closely with you to ensure that
                  every detail is addressed, resulting in products that not only
                  meet but exceed your expectations. We use top-grade materials
                  and cutting-edge technology to deliver solutions that are both
                  functional and aesthetically pleasing. */}
                </motion.p>
              </div>
            </div>
          </div>

          <motion.div
            variants={FadeUp(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className=" font-raleway"
          >
            <div className=" lg:flex-row">
              {/* <p className="mb-2 text-[0.700rem] poppins-extralight lg:mb-0 px-4 md:text-base md:w-[48.2rem] lg:text-sm lg:w-full xl:w-auto xl:mt-8 xl4:text-base">
                Choose Selective Systems for your stainless steel and invisible
                grill needs, and experience the perfect blend of innovation,
                quality, and design. Trust us to provide exceptional products
                that enhance the beauty and safety of your space, all while
                adhering to the highest standards of craftsmanship and service.
                Selective Systems is renowned for its excellence in providing
                top-quality solutions across various architectural needs,
                including glass railings, queue managers, office partitions,
                aluminum windows, and door seals. As specialists in glass
                railings, we offer sleek, modern designs that enhance the safety
                and aesthetic appeal of your space. Our queue managers are
                expertly crafted to streamline customer flow in public and
                commercial spaces, ensuring efficient organization and a
                professional look.
              </p> */}
              <br />
              <p className="mb-6 text-[0.700rem]  poppins-extralight px-4 lg:mb-0 md:text-base md:w-[48.2rem] lg:text-sm lg:w-full xl:w-auto xl4:text-base">
                We provide customized aluminum windows with a range of color
                frame options to meet your specific design requirements,
                combining durability with stylish aesthetics. Our office
                partitions offer flexible and functional solutions for creating
                productive work environments, with designs tailored to fit any
                layout. In addition, our door seals are crafted from
                high-quality materials to improve insulation and energy
                efficiency, contributing to a more comfortable indoor
                environment. At Selective Systems, all our products, including
                glass railings, queue managers, office partitions, aluminum
                windows, and door seals, are manufactured using stainless steel
                and rubber components. We ensure that our solutions are not only
                durable but also integrate seamlessly with your existing décor.
                Our commitment to quality and customization guarantees that each
                product meets the highest standards and perfectly suits your
                specific needs. With our expertise in aluminum, stainless steel,
                and glass railings, Selective Systems stands out as the leading
                provider of innovative and reliable architectural solutions.
                Trust us to deliver exceptional products that combine
                functionality, style, and durability, tailored to enhance every
                aspect of your space.
              </p>
            </div>
            {/* <div className="flex flex-wrap mt-6 px-4 text-[0.700rem] gap-4 md:text-base lg:text-base xl:text-sm xl:-space-x-14">
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
            </div> */}

            {/* <div className=" ml-6 mt-12 justify-center">
              <Link
                to=""
                className="btn theme-btn-2 btn-effect-1 bg-secondary text-black hover:bg-primary hover:text-white poppins-regular py-2 px-4 rounded-full"
              >
                About Us
              </Link>
            </div> */}
          </motion.div>
        </div>
      </div>
      <div className=" -mt-[4rem] relative flex items-center bg-gray-800 h-[33rem]">
        <div className="absolute top-0 left-0 bottom-0 w-1/3 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <img
              src={primage}
              alt="Flex Image"
              className="object-cover flex md:h-[17rem] lg:h-[22rem] xl:h-[32rem] xl4:h-[35rem]"
            />
          </motion.div>
        </div>
        <div className="container mx-auto flex flex-col items-center text-center z-10 ">
          <div className=" mb-8">
            <h6 className="text-sm w-[13rem] text-secondary poppins-regular md:text-sm md:w-auto lg:text-base lg:w-full xl:text-xl xl:w-auto">
              If you have any inquiries, please feel free to reach out.
            </h6>
            <h1 className="text-base py-2 text-primary poppins-regular md:text-2xl lg:text-2xl xl:text-4xl">
              9372593981
            </h1>
          </div>
          <div className="flex gap-5 md:gap-10 lg:gap-12 xl:gap-14 poppins-regular">
            <a
              href="tel: 9372593981"
              className="border-white  border p-2 rounded-[2rem] hover:scale-110  transition-colors text-primary duration-300 hover:bg-[#14ff72cb] hover:text-white "
            >
              MAKE A CALL
            </a>
            <Link
              to="/contact"
              className="border border-white p-2 rounded-[2rem] text-primary hover:scale-110 transition-colors duration-300 hover:bg-[#14ff72cb] hover:text-white"
            >
              CONTACT US
            </Link>
          </div>
        </div>
        <div className="absolute top-0 right-0 bottom-0 w-1/3 flex items-center justify-center overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <img
              src={rightsideimage}
              alt="Human Image"
              className=" h-10 object-cover md:h-[17rem] lg:h-[22rem] xl:h-[32rem] xl4:h-[34rem]"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
