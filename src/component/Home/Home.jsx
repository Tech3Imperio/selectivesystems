// import React, { useEffect, useRef } from "react";
// import SelectingSystem from "../../assets/HeroVideo/SelectingSystem.mp4";
// import HeroImageSlider from "../HeroImageSlider/HeroImageSlider";
// // import { motion } from "framer-motion";
// // import image1 from "../../assets/SliderImages/image1.jpg";
// // import image2 from "../../assets/SliderImages/image2.jpg";
// // import image3 from "../../assets/SliderImages/image3.jpg";
// // import image4 from "../../assets/SliderImages/image4.jpg";
// // import image5 from "../../assets/SliderImages/image5.jpg";

// // const images = [image1, image2, image3, image4, image5];

// const Home = () => {
//   const videoRef = useRef(null);

//   useEffect(() => {
//     const video = videoRef.current;

//     // Try to play the video muted initially
//     const playVideo = async () => {
//       try {
//         await video.play();
//       } catch (error) {
//         console.error("Autoplay failed:", error);
//       }
//     };

//     playVideo();
//   }, []);

//   const handlePlayWithSound = () => {
//     const video = videoRef.current;
//     video.muted = false;
//     video.play();
//   };
//   return (
//     <>
//       {/* <div className="relative col-start-12 h-screen w-full -mt-[4.5rem]"> */}
//       {/* <video
//           className="absolute top-0 left-0 w-full h-full object-cover"
//           src={SelectingSystem}
//           autoPlay
//           loop
//           muted
//         /> */}
//       <div
//         className="bg-gray-100 flex items-center justify-center h-screen"
//         onClick={handlePlayWithSound}
//       >
//         <video
//           ref={videoRef}
//           className="w-full h-full object-cover"
//           muted
//           autoPlay
//           loop
//           playsInline
//         >
//           <source src={SelectingSystem} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         {/* <button
//           className="absolute bottom-4 left-4 bg-blue-500 text-white px-4 py-2 rounded"
//           onClick={handlePlayWithSound}
//         >
//           Unmute
//         </button> */}
//       </div>
//       {/* <div className="bg-[#e4e4e4] w-full h-[45rem] mt-28">
//         <h1 className="font-semibold text-3xl  ml-32 py-10">Product Gallery</h1>
//         <div className="flex flex-row justify-center m-[16rem]">
//           {images.map((image, index) => (
//             <motion.a
//               href="/"
//               key={index}
//               className="relative group"
//               initial={{ opacity: 0, x: "100%" }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 1.2, delay: index * 0.3 }}
//               style={{ zIndex: images.length - index }}
//             >
//               <img
//                 className="h-[25rem] w-[15rem] -mt-[14rem] object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110 rounded-[2.2rem] group-hover:h-[30rem] -ml-[5rem] group-hover:w-[33rem]"
//                 src={image}
//                 alt={`image-${index}`}
//               />
//             </motion.a>
//           ))}
//         </div>
//       </div> */}
//       <HeroImageSlider />
//     </>
//   );
// };

// export default Home;

import React, { useEffect, useRef } from "react";
import SelectingSystem from "../../assets/HeroVideo/SelectingSystem.mp4";
import HeroImageSlider from "../HeroImageSlider/HeroImageSlider";

const Home = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const playVideo = async () => {
      try {
        await video.play();
      } catch (error) {
        console.error("Autoplay failed:", error);
      }
    };

    playVideo();

    const handleVisibilityChange = () => {
      if (document.hidden) {
        video.pause();
      } else {
        playVideo();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.muted = false;
            playVideo();
          } else {
            video.muted = true;
          }
        });
      },
      { threshold: 0.5 } // Adjust this threshold as needed
    );

    observer.observe(video);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      observer.unobserve(video);
    };
  }, []);

  const handlePlayWithSound = () => {
    const video = videoRef.current;
    video.muted = false;
    video.play();
  };

  return (
    <>
      <div
        className="bg-gray-100 flex items-center justify-center h-screen"
        onClick={handlePlayWithSound}
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          muted
          autoPlay
          loop
          playsInline
        >
          <source src={SelectingSystem} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <HeroImageSlider />
    </>
  );
};

export default Home;
