import React, { useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import RainbowConfettiSticker from "../../assets/Thankyou/RainbowConfettiSticker.gif";

const ThankYou = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 -mt-7">
      <div className="relative inline-block mb-8">
        {/* Confetti SVG */}
        <div className="relative z-10 bg-center bg-cover w-[152px] h-[152px]">
          <svg
            width="159px"
            height="159px"
            viewBox="0 0 159 159"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <defs>
              <circle
                id="path-1"
                cx="77.4718771"
                cy="77.4718771"
                r="77.4718771"
              ></circle>
              <filter
                x="-4.5%"
                y="-4.5%"
                width="109.0%"
                height="109.0%"
                filterUnits="objectBoundingBox"
                id="filter-2"
              >
                <feGaussianBlur
                  stdDeviation="5"
                  in="SourceAlpha"
                  result="shadowBlurInner1"
                ></feGaussianBlur>
                <feOffset
                  dx="0"
                  dy="0"
                  in="shadowBlurInner1"
                  result="shadowOffsetInner1"
                ></feOffset>
                <feComposite
                  in="shadowOffsetInner1"
                  in2="SourceAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                  result="shadowInnerInner1"
                ></feComposite>
                <feColorMatrix
                  values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.13 0"
                  type="matrix"
                  in="shadowInnerInner1"
                ></feColorMatrix>
              </filter>
            </defs>
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g id="success3" transform="translate(-532.000000, -283.000000)">
                <g
                  id="check-confetti"
                  transform="translate(534.000000, 285.000000)"
                >
                  <path
                    d="M155,0 L155,155 L77.5,155 L77.5,155 C120.302068,155 155,120.302068 155,77.5 C155,34.6979319 120.302068,0 77.5,0 C34.6979319,0 0,34.6979319 0,77.5 C0,120.302068 34.6979319,155 77.5,155 L0,155 L0,0 L155,0 Z"
                    id="Combined-Shape"
                  ></path>
                  <g id="check">
                    <g id="Mask">
                      <use
                        fill="black"
                        fillOpacity="1"
                        filter="url(#filter-2)"
                        xlinkHref="#path-1"
                      ></use>
                      <use
                        stroke="#37BB91"
                        strokeWidth="4"
                        xlinkHref="#path-1"
                      ></use>
                    </g>
                    <polygon
                      id="î¢"
                      stroke="#37BB91"
                      strokeWidth="7"
                      fill="#37BB91"
                      fillRule="nonzero"
                      points="66.78 99.86 106.78 59.86 102.06 55.14 66.78 90.5 52.86 76.58 48.22 81.3"
                    ></polygon>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
        {/* Overlay Confetti GIF */}
        <div
          className="absolute top-0 left-0 bg-center bg-no-repeat w-[9.9rem] h-[9.5rem] rounded-full"
          style={{
            backgroundImage: `url(${RainbowConfettiSticker})`,
            backgroundSize: "97% 97%",
          }}
        ></div>
      </div>

      <div className="text-center ">
        <p className="font-raleway font-semibold text-3xl  text-secondary">
          Fantastic! Your form was submitted correctly.
        </p>
        <p className="short-msg text-secondary poppins-extralight">
          Thank you for visiting{" "}
          <span className=" text-[#25D366]">Selective Systems</span> website.{" "}
          <br />
          Will contact you within 24 hours.
        </p>
        {/* <p>You'll hear from us soon.</p> */}
        <button className="w-[11rem] h-[3.8rem] poppins-regular border rounded-[2rem] hover:bg-[#25D366] hover:scale-110 text-[#25D366] hover:text-white transition-transform duration-700 flex items-center justify-center mx-auto mt-7">
          <Link
            to="/contact/thankyou"
            className="text-xl flex items-center justify-center space-x-2 "
          >
            <FaArrowLeft />
            <span>Back Home</span>
          </Link>
        </button>
        <div>
          <p className="issue-msg text-secondary font-raleway">
            If you have any issue{" "}
            <Link to="/contact">
              <b className=" text-[#25D366]">Contact Us</b>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
