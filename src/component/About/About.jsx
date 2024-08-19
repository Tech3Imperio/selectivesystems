import React from "react";
import { Link } from "react-router-dom";
import Invisiblebaconyimg from "../../assets/InvisibleGrill/Invisiblebaconyimg.png";
const About = () => {
  return (
    <div className="pt-24 pb-32">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          {/* Left Section */}
          <div className="lg:w-1/2 flex justify-center items-center">
            <div className="relative">
              <img
                src={Invisiblebaconyimg}
                alt="video popup bg image"
                className=" ml-12 h-[35rem] w-[65rem] rounded-3xl"
              />
              {/* <a
                href="tel:7028064827"
                className="absolute inset-0 flex items-center justify-center bg-secondary bg-opacity-50 text-white rounded-none"
              >
                <i className="fa fa-phone text-4xl"></i>
              </a> */}
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2 flex flex-col justify-center font-raleway">
            <div className="max-w-xl mx-auto">
              <h6 className="text-secondary mb-4">
                <span className="inline-block mr-2">
                  <i className="fas fa-square-full"></i>
                </span>
                {/* Great Experience */}
              </h6>
              <h1 className="text-4xl font-bold mb-6 poppins-regular text-primary">
                About Us
              </h1>
              <p className="mb-6">
                Selective Systems are #1 Manufacturers & Supplier of
                High-Quality INVISIBLE GRILLE & Pleated Mosquito Net, Roller
                Mosquito Net. Raw Materials. Maximum Safety | Easy Installation
                & Maintenance | Sleek & Stylish.
              </p>
              <p className="mb-6">
                Selective Systems are best Invisible Grill, Pleated Mosquito
                Net, Roller Mosquito Net Manufacturers in Mumbai. In today’s
                time, installing invisible grills is common in high-rise
                residential apartments and commercial buildings to secure small
                children and pets. The Invisible Grill is a wonderful
                alternative for safety purposes. It is mainly designed for
                enhancing the interior and exterior decors of your home so that
                you can enjoy the unobstructed view of nature. As we are
                advancing into a new era with higher demand from the end-user,
                We are proud to present Invisible Grill which offers end users
                better visibility as compared to traditional grills without
                compromising safety concerns. As a plus point, it provides a
                safe environment for your loved ones while enjoying see-through
                panoramic views. With anything else, the facade and design of
                most homes are greatly compromised. Being invisible, looking
                into this new grill means you are now able to enjoy the outside
                view in a totally non-obscured manner.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 font-raleway">
          <div className=" lg:flex-row lg:space-x-12">
            <p className="mb-6 lg:mb-0 ml-12">
              We Selective Systems offer different varieties of pleated & Roller
              mosquito nets in customized designs. Our designs are prompt as
              specified by customer needs.
            </p>
            <p className="mb-6 lg:mb-0">
              A sliding mosquito net for sliding windows is a smart solution to
              ward off mosquitoes and other bugs. Unlike the regular net that
              hangs over the doorway, a sliding mosquito net for the sliding
              window is customized as per the size of your window. Our mosquito
              mesh is made from durable and strong wire. A sliding mosquito net
              is very easy to put up and down. We as installers of mosquito nets
              for sliding windows, customize them as per the color of your home
              and the size of your windows. We design very sleek-looking
              mosquito nets and merge them with the décor of your home. Our
              mosquito nets allow a constant flow of air and create a pleasant
              atmosphere in your home. Let’s look at the striking features of
              our Mosquito nets:
            </p>
          </div>
          <div className="flex flex-wrap mt-6 ml-12">
            <ul className="flex-1 space-y-2">
              <li>Sleek design</li>
              <li>Ensures air circulation and natural light enter</li>
              <li>Easy to operate</li>
              <li>Low-maintenance</li>
            </ul>
            <ul className="flex-1 space-y-2">
              <li>Blends with the décor of the home</li>
              <li>Made of special polyester mesh</li>
              <li>Provides maximum safety and durability</li>
            </ul>
          </div>

          <div className=" ml-12 mt-12 justify-center">
            <Link
              to=""
              className="btn theme-btn-2 btn-effect-1 bg-primary text-white py-2 px-4 rounded-full"
            >
              About Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
