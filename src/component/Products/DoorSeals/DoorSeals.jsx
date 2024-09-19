import React, { useState, useRef, useEffect } from "react";
import SelectingSystemDesktop from "../../../assets/HeroVideo/SelectingSystemDesktop.mp4"; // Video for screens above 1024px
import SelectingSystemMobile from "../../../assets/HeroVideo/SelectingSystemmobile.mp4"; // Video for screens up to 1024px

import DoorData from "../../../Data/DoorSeals/Doorseals";

const DoorSeals = () => {


  const videoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 1024);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch((error) => {
              console.error("Video play failed:", error);
            });
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(video);

    return () => {
      if (video) {
        observer.unobserve(video);
      }
    };
  }, []);

  return (
    <>
      <div className="bg-gray-100 flex items-center justify-center h-screen -mt-[5rem]">
        <video
          ref={videoRef}
          className="w-full h-full object-cover sm:min-h-screen sm:min-w-min md:h-[100%] md:w-[65rem] lg:h-[100%] lg:w-[100%] xl:h-screen xl:w-screen"
          autoPlay
          loop
          playsInline
          muted // Always mute the video
        >
          <source
            src={isMobile ? SelectingSystemMobile : SelectingSystemDesktop}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* product start */}
      <div className="grid grid-cols-1 -ml-28 md:grid-cols-2 lg:grid-cols-3 poppins-regular px-32 md:justify-center md:mt-8 md:gap-20 lg:justify-center lg:-ml-20 lg:gap-16 xl:ml-12 xl:mr-12 xl:mt-3 xl:mb-10 select-none">
        {DoorData.map((item, index) => (
          <div
            key={index}
            className="relative group h-[23.4rem] w-[20rem] ml-5 mt-14 mb-8 bg-white hover:border hover:shadow-black rounded-[1rem] cursor-pointer overflow-hidden text-center flex flex-col items-center transition-transform duration-700 ease-in-out md:mt-7 md:h-[30rem] md:w-[20rem] md:text-sm lg:h-[28rem] lg:-pt-[5rem] lg:w-[17rem] xl:h[18rem] xl:w-[20rem]"
          >
            <div className="flex items-center justify-center h-[116%] mr-2 w-[116%] overflow-hidden md:-mb-20 xl:-mb-40">
              <img
                src={item.img}
                title={item.title}
                alt={item.alt}
                className="transition-transform duration-700 ease-in-out group-hover:scale-90 object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 flex items-center justify-center flex-col p-2 transition-opacity duration-300 ease-in-out">
              <div className="text-center">
                <p className="text-lg font-semibold mb-2 py-2">{item.title}</p>
                <p className="text-gray-600 text-[0.700rem] lg:text-[0.700rem] xl:text-[0.800rem]">
                  {item.desc}
                </p>
                <table className="mt-4 text-left w-full text-[0.750rem] lg:text-[0.700rem] xl:text-[0.800rem]">
                  <tbody>
                    <tr>
                      <td className="font-semibold pr-2">Profile Type:</td>
                      <td>{item.ProfileType}</td>
                    </tr>
                    <tr>
                      <td className="font-semibold pr-2">Dimensions:</td>
                      <td>{item.Dimensions}</td>
                    </tr>
                    <tr>
                      <td className="font-semibold pr-2">Finish:</td>
                      <td>{item.Finish}</td>
                    </tr>
                    <tr>
                      <td className="font-semibold pr-2">Maximum Length:</td>
                      <td>{item.MaximumLength}</td>
                    </tr>
                    <tr>
                      <td className="font-semibold pr-2">Cutting:</td>
                      <td>{item.Cutting}</td>
                    </tr>
                    <tr>
                      <td className="font-semibold pr-2">
                        Sound absorption value:
                      </td>
                      <td>{item.Soundabsorptionvalue}</td>
                    </tr>
                    <tr>
                      <td className="font-semibold pr-2">Fastening:</td>
                      <td>{item.Fastening}</td>
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

export default DoorSeals;
