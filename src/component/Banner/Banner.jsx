import React from "react";
import { FadeUp } from "../uitility/animation";
import { motion } from "framer-motion";
import qualitywhite from "../../assets/About/qualitywhite.jpg";
import endtoendservice from "../../assets/About/endtoendservice.jpg";
import customersatisfaction from "../../assets/About/customersatisfaction.jpg";
import robustpackging from "../../assets/About/robustpackging.jpg";
import ontimedilivery from "../../assets/About/ontimedilivery.jpg";

// import railing2 from "../../assets/Railing/HeroImage/railing2.jpg"

const Banner = () => {
  return (
    <section className=" bg-gray-800 w-screen">
      <motion.h1
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-lg  text-left pt-10 pb-10 font-poppins uppercase text-primary ml-4 md:ml-6 md:text-2xl md:pt-14 md:mb-4 lg:ml-4-28 lg:text-3xl lg:mb-4 xl:text-3xl xl:py-8 xl:ml-32"
      >
        Why Selective Systems ?
      </motion.h1>

      <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-1 xl:-space-x-14">
        {/* Baneer image */}
        <div className=" flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.3 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 1 }}
            viewport={{ once: true }}
            src={qualitywhite}
            alt=""
            className=" w-[8rem] h-[8rem] object-cover md:h-[10rem] md:w-[10rem] lg:h-[13rem] lg:w-[13rem] xl:h-[12rem] xl:w-[12rem] xl:ml-[12rem]"
          />
        </div>
        {/* Brand ingo */}
        <div className=" flex flex-col justify-center ">
          <div className="text-center md:text-left space-y-1 lg:max-w-[600px]">
            <motion.h1
              variants={FadeUp(1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-lg mr-10 uppercase font-poppins text-primary ml-12 md:text-xl lg:text-2xl xl:text-3xl "
            >
              <span className=" text-lg md:-ml-2 md:text-xl lg:text-2xl xl:text-4xl font-poppins">
                1.
              </span>{" "}
              Quality Assurance
            </motion.h1>
            <motion.p
              variants={FadeUp(1)}
              initial="hidden"
              animate="visible"
              viewport={{ once: true }}
              className=" text-sm px-24 text-secondary font-raleway md:text-sm md:px-10 lg:text-sm xl:text-base xl:ml-1"
            >
              Quality Assurance is not merely a checkpoint but a relentless
              pursuit of excellence at every phase. It’s the commitment to
              perfection and the precision in each step that defines true
              quality.
            </motion.p>
            <motion.p
              variants={FadeUp(1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className=" text-sm px-24 text-secondary font-raleway md:text-sm md:px-10 lg:text-sm lg:ml-0 xl:text-base xl:ml-1"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestias, pariatur eligendi aliquam iusto esse a?
            </motion.p>
            {/* <motion.div 
                    variants={FadeUp(3.1)}
                    initial="hidden"
                    animate="visible"
                    className="flex justify-center shadow-[0px_10px_14px_-7px_#14ff72cb] md:justify-centre border hover:border-black text-sm bg-[#14ff72cb] text-[#fff] w-[4rem] h-[2rem] rounded-[2rem] cursor-pointer md:font-semibold lg:h-[3.5rem] lg:w-[8rem] lg:px-2 lg:rounded-[3rem] lg:text-sm xl:h-[3.4rem] xl:w-[8.4rem] xl:text-sm hover:bg-[#e4e4e4] hover:text-[#000]">
                    <button>GET IN TOUCH</button>
                </motion.div> */}
          </div>
        </div>
      </div>

      {/* Sceond image */}
      <section>
        <div className="flex flex-col md:flex-row-reverse justify-center items-center xl:-space-x-2 xl:mt-8">
          <motion.img
            initial={{ opacity: 0, scale: 0.3 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 1 }}
            viewport={{ once: true }}
            src={endtoendservice}
            alt=""
            className="w-[8rem] h-[8rem] mt-4 object-cover md:h-[10rem] md:w-[10rem] md:mr-24 lg:h-[13rem] lg:w-[13rem] lg:ml-4 xl:h-[12rem] xl:w-[12rem]"
          />

          <div className="flex flex-col justify-center mt-4 md:mt-0 md:mr-4">
            <div className="text-center md:text-left space-y-2 lg:max-w-[600px]">
              <motion.h1
                variants={FadeUp(0.3)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-lg uppercase font-poppins text-primary md:text-xl lg:text-2xl xl:text-3xl md:ml-[5rem] lg:-ml-2 xl:-ml-[5.2rem]"
              >
                <span className=" text-lg md:-ml-2 md:text-xl lg:2xl xl:text-4xl font-poppins">
                  2.
                </span>{" "}
                End-to-End Service
              </motion.h1>

              <motion.p
                variants={FadeUp(0.3)}
                initial="hidden"
                animate="visible"
                viewport={{ once: true }}
                className="text-sm px-[5rem]  text-secondary font-raleway md:text-sm md:ml-[rem] lg:text-sm lg:w-[35rem] lg:-ml-20 xl:text-base xl:-ml-[10.6rem] xl:w-[36rem]"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt sequi tempora nam quia temporibus aut facilis deleniti!
                Dolorem asperiores, dolore facilis quisquam iure repellat
                laudantium sit nam, modi minima illum!
              </motion.p>

              <motion.p
                variants={FadeUp(0.3)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-sm px-[5rem]  text-secondary font-raleway md:text-sm md:ml-[rem] lg:text-sm lg:w-[35rem] lg:-ml-20 xl:text-base xl:-ml-[10.6rem] xl:w-[38rem]"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestias, pariatur eligendi aliquam iusto esse a?
              </motion.p>

              {/* <motion.div 
                    variants={FadeUp(3.4)}
                    initial="hidden"
                    animate="visible"
                    className="flex justify-center -ml-36 shadow-[0px_10px_14px_-7px_#14ff72cb] md:justify-centre border hover:border-black text-sm bg-[#14ff72cb] text-[#fff] w-[4rem] h-[2rem] rounded-[2rem] cursor-pointer md:font-semibold lg:h-[3.5rem] lg:w-[8rem] lg:px-2 lg:rounded-[3rem] lg:text-sm xl:h-[3.4rem] xl:w-[8.4rem] xl:text-sm hover:bg-[#e4e4e4] hover:text-[#000]">
                    <button>GET IN TOUCH</button>
                </motion.div> */}
            </div>
          </div>
        </div>
      </section>
      {/* Sceond image */}

      {/* third image */}
      <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 xl:-space-x-14">
        <div className=" flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.3 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            viewport={{ once: true }}
            src={customersatisfaction}
            alt=""
            className=" w-[8rem] h-[8rem] ml-8 rounded-[2rem] object-cover md:h-[10rem] md:w-[10rem] lg:h-[13rem] lg:w-[13rem] xl:h-[13.2rem] xl:w-[12rem] xl:ml-[12rem]"
          />
        </div>
        {/* Brand ingo */}
        <div className=" flex flex-col justify-center">
          <div className="text-center md:text-left space-y-2 lg:max-w-[600px]">
            <motion.h1
              variants={FadeUp(0.3)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-lg mr-10  uppercase font-poppins text-primary ml-12 md:text-xl md:ml-12 lg:text-2xl xl:text-3xl"
            >
              <spna className=" text-lg md:text-xl lg:text-2xl xl:text-4xl font-poppins">
                {" "}
                3.
              </spna>
              Customer Satisfaction
            </motion.h1>
            <motion.p
              variants={FadeUp(0.3)}
              initial="hidden"
              animate="visible"
              viewport={{ once: true }}
              className="text-sm px-[75px] text-secondary  font-raleway md:text-sm lg:text-sm lg:ml-14 xl:text-base xl:-ml-6"
            >
              Quality Assurance is not merely a checkpoint but a relentless
              pursuit of excellence at every phase. It’s the commitment to
              perfection and the precision in each step that defines true
              quality.
            </motion.p>
            <motion.p
              variants={FadeUp(0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-sm px-[75px] text-secondary font-raleway md:text-sm lg:text-sm lg:ml-14 xl:text-base xl:-ml-6"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestias, pariatur eligendi aliquam iusto esse a?
            </motion.p>
            {/* <motion.div 
                    variants={FadeUp(5.3)}
                    initial="hidden"
                    animate="visible"
                    className="flex justify-center shadow-[0px_10px_14px_-7px_#14ff72cb] md:justify-centre border hover:border-black text-sm bg-[#14ff72cb] text-[#fff] w-[4rem] h-[2rem] rounded-[2rem] cursor-pointer md:font-semibold lg:h-[3.5rem] lg:w-[8rem] lg:px-2 lg:rounded-[3rem] lg:text-sm xl:h-[3.4rem] xl:w-[8.4rem] xl:text-sm hover:bg-[#e4e4e4] hover:text-[#000]">
                    <button>GET IN TOUCH</button>
                </motion.div> */}
          </div>
        </div>
      </div>
      {/* third image */}

      {/* fourth image */}
      <section>
        <div className="flex flex-col md:flex-row-reverse justify-center items-center xl:-space-x-2 xl:mt-8">
          <motion.img
            initial={{ opacity: 0, scale: 0.3 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            viewport={{ once: true }}
            src={robustpackging}
            alt=""
            className="w-[8rem] h-[8rem] ml-3 rounded-[2rem] object-cover md:h-[10rem] md:w-[10rem] md:mr-14 lg:h-[13rem] lg:w-[13rem] lg:ml-4 xl:h-[12rem] xl:w-[12rem]"
          />

          <div className="flex flex-col justify-center mt-4 md:mt-0 md:mr-4">
            <div className="text-center md:text-left space-y-2 lg:max-w-[600px]">
              <motion.h1
                variants={FadeUp(0.2)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-lg uppercase font-poppins text-primary md:text-xl lg:text-2xl xl:text-3xl md:ml-[5rem] lg:-ml-2 xl:-ml-[5.5rem]"
              >
                <span className=" text-lg md:-ml-2 md:text-xl lg:text-2xl xl:text-4xl font-poppins">
                  4.
                </span>{" "}
                Robust Packaging
              </motion.h1>

              <motion.p
                variants={FadeUp(0.2)}
                initial="hidden"
                animate="visible"
                viewport={{ once: true }}
                className="text-sm px-[6rem] text-secondary font-raleway md:text-sm md:px-24 md:-ml-6 lg:text-sm lg:w-[37rem] lg:-ml-28 xl:text-base xl:-ml-[11.8rem] xl:w-[36rem]"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt sequi tempora nam quia temporibus aut facilis deleniti!
                Dolorem asperiores, dolore facilis quisquam iure repellat
                laudantium sit nam, modi minima illum!
              </motion.p>

              <motion.p
                variants={FadeUp(0.2)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-sm px-[6rem]  text-secondary font-raleway md:text-sm lg:text-sm lg:w-[35rem] lg:-ml-[89px] xl:text-base xl:-ml-[11.8rem] xl:w-[38rem]"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestias, pariatur eligendi aliquam iusto esse a?
              </motion.p>

              {/* <motion.div 
                    variants={FadeUp(3.4)}
                    initial="hidden"
                    animate="visible"
                    className="flex justify-center -ml-36 shadow-[0px_10px_14px_-7px_#14ff72cb] md:justify-centre border hover:border-black text-sm bg-[#14ff72cb] text-[#fff] w-[4rem] h-[2rem] rounded-[2rem] cursor-pointer md:font-semibold lg:h-[3.5rem] lg:w-[8rem] lg:px-2 lg:rounded-[3rem] lg:text-sm xl:h-[3.4rem] xl:w-[8.4rem] xl:text-sm hover:bg-[#e4e4e4] hover:text-[#000]">
                    <button>GET IN TOUCH</button>
                </motion.div> */}
            </div>
          </div>
        </div>
      </section>
      {/* fourt image */}

      {/* five image */}
      <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-8 xl:-space-x-14">
        <div className=" flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.3 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
            viewport={{ once: true }}
            src={ontimedilivery}
            alt=""
            className=" w-[8rem] h-[8rem] rounded-[2rem] object-cover md:h-[10rem] md:w-[10rem] lg:h-[13rem] lg:w-[13rem] lg:ml-16 xl:h-[12rem] xl:w-[12rem] xl:ml-[18rem]"
          />
        </div>
        {/* Brand ingo */}
        <div className=" flex flex-col justify-center ">
          <div className="text-center md:text-left space-y-1 lg:max-w-[600px]">
            <motion.h1
              variants={FadeUp(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-lg mr-10 uppercase font-poppins text-primary ml-12 md:text-xl lg:text-2xl xl:text-3xl "
            >
              <span className=" text-lg md:text-xl lg:text-2xl xl:text-4xl font-poppins">
                5.
              </span>{" "}
              On Time Deleivery
            </motion.h1>
            <motion.p
              variants={FadeUp(0.1)}
              initial="hidden"
              animate="visible"
              viewport={{ once: true }}
              className=" text-sm px-24 text-secondary font-raleway md:text-sm md:px-12 lg:text-sm lg:-ml-2 xl:text-base xl:-ml-0"
            >
              Quality Assurance is not merely a checkpoint but a relentless
              pursuit of excellence at every phase. It’s the commitment to
              perfection and the precision in each step that defines true
              quality.
            </motion.p>
            <motion.p
              variants={FadeUp(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className=" text-sm px-24 text-secondary font-raleway md:text-sm md:px-12 lg:text-sm lg:-ml-0 lg:px-12 xl:text-base xl:-ml-0"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestias, pariatur eligendi aliquam iusto esse a?
            </motion.p>
            {/* <motion.div 
                    variants={FadeUp(3.1)}
                    initial="hidden"
                    animate="visible"
                    className="flex justify-center shadow-[0px_10px_14px_-7px_#14ff72cb] md:justify-centre border hover:border-black text-sm bg-[#14ff72cb] text-[#fff] w-[4rem] h-[2rem] rounded-[2rem] cursor-pointer md:font-semibold lg:h-[3.5rem] lg:w-[8rem] lg:px-2 lg:rounded-[3rem] lg:text-sm xl:h-[3.4rem] xl:w-[8.4rem] xl:text-sm hover:bg-[#e4e4e4] hover:text-[#000]">
                    <button>GET IN TOUCH</button>
                </motion.div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
