// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import whiteLogo from "../../assets/Logo/whiteLogo.png";

// const Navbar = ({ isHome }) => {
//   const [navbarBg, setNavbarBg] = useState(
//     isHome ? "bg-transparent" : "bg-gray-900 bg-opacity-50 backdrop-blur"
//   );
//   const [isOpen, setIsOpen] = useState(false);
//   const [isProductsOpen, setIsProductsOpen] = useState(false);

//   const handleScroll = () => {
//     if (isHome && window.scrollY >= 80) {
//       setNavbarBg("bg-gray-900 bg-opacity-50 backdrop-blur");
//     } else if (isHome) {
//       setNavbarBg("bg-transparent");
//     }
//   };

//   useEffect(() => {
//     if (isHome) {
//       window.addEventListener("scroll", handleScroll);
//       return () => {
//         window.removeEventListener("scroll", handleScroll);
//       };
//     } else {
//       setNavbarBg("bg-gray-900 bg-opacity-50 backdrop-blur");
//     }
//   }, [isHome]);

//   const handleLinkClick = () => {
//     setIsOpen(false);
//     setIsProductsOpen(false);
//   };

//   const handleProductsClick = () => {
//     setIsProductsOpen(!isProductsOpen);
//   };

//   const toggleNavbar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav
//       className={`sticky top-0 left-0 w-full poppins-regular z-20 transition duration-300 rounded-b-3xl ${navbarBg}`}
//     >
//       <div className="container mx-auto px-4 flex justify-between items-center lg:px-[5rem] md:mr-[2rem]">
//         <div className="text-white font-bold text-lg">
//           <Link to="/">
//             <img
//               className={`h-20 w-48 md:ml-10 ${
//                 isOpen ? "h-20 w-48 " : ""
//               } xl:h-20 xl:w-[12rem] xl:ml-14 `}
//               src={whiteLogo}
//               alt="logo"
//             />
//           </Link>
//         </div>
//         <div className="flex items-center">
//           <div className="lg:hidden">
//             <button
//               onClick={toggleNavbar}
//               className="text-white focus:outline-none"
//             >
//               {isOpen ? (
//                 <svg
//                   className="w-10 h-10 md:w-12 md:h-12 md:mr-10"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M6 18L18 6M6 6l12 12"
//                   ></path>
//                 </svg>
//               ) : (
//                 <svg
//                   className="w-10 h-10 md:w-12 md:h-12 md:mr-10"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 6h16M4 12h16m-7 6h7"
//                   ></path>
//                 </svg>
//               )}
//             </button>
//           </div>
//           <div className={`hidden lg:flex items-center space-x-6`}>
//             <Link to="/" className="text-white">
//               Home
//             </Link>
//             <Link to="/about" className="text-white">
//               About Us
//             </Link>
//             <div className="relative group">
//               <button className="text-white">Products</button>
//               <div className="absolute left-0 mb-6 mt-0.4 w-52 rounded-2xl bg-[#e4e4e4] shadow-lg hidden group-hover:block">
//                 <Link
//                   to="/products/aluminium-windows"
//                   onClick={handleLinkClick}
//                   className="block px-4 py-2 poppins-light text-[#000] hover:bg-[#2f2c2c] hover:text-[#14ff72cb]  hover:rounded-2xl"
//                 >
//                   Aluminium Windows
//                 </Link>
//                 <Link
//                   to="/products/door-seals"
//                   onClick={handleLinkClick}
//                   className="block px-4 py-2 poppins-light text-[#000] hover:bg-[#2f2c2c] hover:text-[#14ff72cb] hover:rounded-2xl"
//                 >
//                   Door Seals
//                 </Link>
//                 <Link
//                   to="/products/railings"
//                   onClick={handleLinkClick}
//                   className="block px-4 py-2 poppins-light text-[#000] hover:bg-[#2f2c2c] hover:text-[#14ff72cb] hover:rounded-2xl"
//                 >
//                   Railings
//                 </Link>
//                 <Link
//                   to="/products/queue-manager"
//                   onClick={handleLinkClick}
//                   className="block px-4 py-2 poppins-light text-[#000] hover:bg-[#2f2c2c] hover:text-[#14ff72cb] hover:rounded-2xl"
//                 >
//                   Queue Manager
//                 </Link>
//                 <Link
//                   to="/products/invisible-grill"
//                   onClick={handleLinkClick}
//                   className="block px-4 py-2 poppins-light text-[#000] hover:bg-[#2f2c2c] hover:text-[#14ff72cb] hover:rounded-2xl"
//                 >
//                   Invisible Grill
//                 </Link>
//                 <Link
//                   to="/products/office-partitions"
//                   onClick={handleLinkClick}
//                   className="block px-4 py-2 poppins-light text-[#000] hover:bg-[#2f2c2c] hover:text-[#14ff72cb] hover:rounded-2xl"
//                 >
//                   Office Partitions
//                 </Link>
//                 <Link
//                   to="/products/bathroom-partitions"
//                   onClick={handleLinkClick}
//                   className="block px-4 py-2 poppins-light text-[#000] hover:bg-[#2f2c2c] hover:text-[#14ff72cb] hover:rounded-2xl"
//                 >
//                   Bathroom Partitions
//                 </Link>
//               </div>
//             </div>
//             <Link to="/contact" className="text-white">
//               Contact Us
//             </Link>
//             <Link to="/contact">
//               <button
//                 className="border-none text-sm bg-[#14ff72cb] text-[#fff] w-[4rem] h-[2rem] rounded-[2rem]  cursor-pointer md:font-semibold lg:h-[3.5rem] lg:w-[8rem] lg:px-2 lg:rounded-[3rem] lg:text-sm xl:h-[2.7rem] xl:w-[8rem] xl:text-sm hover:bg-[#e4e4e4] hover:text-[#000]"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 GET IN TOUCH
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//       {isOpen && (
//         <div className="lg:hidden bg-gray-900 bg-opacity-50 backdrop-blur h-[100%] px-2 pt-2 pb-3 space-y-1 sm:px-3">
//           <Link
//             to="/"
//             onClick={handleLinkClick}
//             className="block px-4 py-4 text-white"
//           >
//             Home
//           </Link>
//           <Link
//             to="/about"
//             onClick={handleLinkClick}
//             className="block px-4 py-4 text-white"
//           >
//             About Us
//           </Link>
//           <div className="relative">
//             <button
//               onClick={handleProductsClick}
//               className="block px-4 py-4 text-white w-full text-left"
//             >
//               Products
//             </button>
//             {isProductsOpen && (
//               <div className="pl-4">
//                 <Link
//                   to="/products/aluminium-windows"
//                   onClick={handleLinkClick}
//                   className="block px-4 py-2 text-gray-100 hover:bg-gray-400"
//                 >
//                   Aluminium Windows
//                 </Link>
//                 <Link
//                   to="/products/door-seals"
//                   onClick={handleLinkClick}
//                   className="block px-4 py-2 text-gray-100 hover:bg-gray-400"
//                 >
//                   Door Seals
//                 </Link>
//                 <Link
//                   to="/products/railings"
//                   onClick={handleLinkClick}
//                   className="block px-4 py-2 text-gray-100 hover:bg-gray-400"
//                 >
//                   Railings
//                 </Link>
//                 <Link
//                   to="/products/queue-manager"
//                   onClick={handleLinkClick}
//                   className="block px-4 py-2 text-gray-100 hover:bg-gray-400"
//                 >
//                   Queue Manager
//                 </Link>
//                 <Link
//                   to="/products/invisible-grill"
//                   onClick={handleLinkClick}
//                   className="block px-4 py-2 text-gray-100 hover:bg-gray-400"
//                 >
//                   Invisible Grill
//                 </Link>
//                 <Link
//                   to="/products/office-partitions"
//                   onClick={handleLinkClick}
//                   className="block px-4 py-2 text-gray-100 hover:bg-gray-400"
//                 >
//                   Office Partitions
//                 </Link>
//                 <Link
//                   to="/products/bathroom-partitions"
//                   onClick={handleLinkClick}
//                   className="block px-4 py-2 text-gray-100 hover:bg-gray-400"
//                 >
//                   Bathroom Partitions
//                 </Link>
//               </div>
//             )}
//           </div>
//           <Link
//             to="/contact"
//             onClick={handleLinkClick}
//             className="block px-4 py-4 text-white"
//           >
//             Contact Us
//           </Link>
//           <button
//             className="border-none text-sm bg-[#14ff72cb] text-[#fff] w-[7rem] h-[2.5rem] rounded-[2rem] cursor-pointer md:font-sm md:h-[2.8rem] md:px-2 md:w-[7.2rem] lg:h-[3.5rem] lg:w-[8rem] lg:px-2 lg:rounded-[3rem] lg:text-sm xl:h-[2.7rem] xl:w-[8rem] xl:text-sm hover:bg-[#e4e4e4] hover:text-[#000]"
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//           >
//             GET IN TOUCH
//           </button>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
// This code is tooggle button product is alerdy open

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import whiteLogo from "../../assets/Logo/whiteLogo.png";

// const Navbar = ({ isHome }) => {
//   const [navbarBg, setNavbarBg] = useState(
//     isHome ? "bg-transparent" : "bg-gray-900 bg-opacity-50 backdrop-blur"
//   );
//   const [isOpen, setIsOpen] = useState(false);

//   const handleScroll = () => {
//     if (isHome && window.scrollY >= 80) {
//       setNavbarBg("bg-gray-900 bg-opacity-50 backdrop-blur");
//     } else if (isHome) {
//       setNavbarBg("bg-transparent");
//     }
//   };

//   useEffect(() => {
//     if (isHome) {
//       window.addEventListener("scroll", handleScroll);
//       return () => {
//         window.removeEventListener("scroll", handleScroll);
//       };
//     } else {
//       setNavbarBg("bg-gray-900 bg-opacity-50 backdrop-blur");
//     }
//   }, [isHome]);

//   const handleLinkClick = () => {
//     setIsOpen(false);
//   };

//   return (
//     <nav
//       className={sticky top-0 left-0 w-full z-20 transition duration-300 ${navbarBg}}
//     >
//       <div className="container mx-auto px-4 py-2 flex justify-between items-center">
//         <div className="text-white font-bold text-lg">
//           <Link to="/">
//             <img className="h-18 w-28" src={whiteLogo} alt="logo" />
//           </Link>
//         </div>
//         <div className="flex items-center">
//           <div className="lg:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-white focus:outline-none"
//             >
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16m-7 6h7"
//                 ></path>
//               </svg>
//             </button>
//           </div>
//           <div className={hidden lg:flex items-center space-x-6}>
//             <Link to="/" className="text-white">
//               Home
//             </Link>
//             <Link to="/about" className="text-white">
//               About Us
//             </Link>
//             <div className="relative group">
//               <button className="text-white">Products</button>
//               <div className="absolute left-0 mt-0.3 w-48 bg-white rounded-lg shadow-lg hidden group-hover:block">
//                 <Link
//                   to="/products/aluminium-windows"
//                   onClick={handleLinkClick}
//                   className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
//                 >
//                   Aluminium Windows
//                 </Link>
//                 <Link
//                   to="/products/door-seals"
//                   onClick={handleLinkClick}
//                   className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
//                 >
//                   Door Seals
//                 </Link>
//                 <Link
//                   to="/products/railings"
//                   onClick={handleLinkClick}
//                   className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
//                 >
//                   Railings
//                 </Link>
//                 <Link
//                   to="/products/queue-manager"
//                   onClick={handleLinkClick}
//                   className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
//                 >
//                   Queue Manager
//                 </Link>
//                 <Link
//                   to="/products/invisible-grill"
//                   onClick={handleLinkClick}
//                   className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
//                 >
//                   Invisible Grill
//                 </Link>
//                 <Link
//                   to="/products/office-partitions"
//                   onClick={handleLinkClick}
//                   className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
//                 >
//                   Office Partitions
//                 </Link>
//                 <Link
//                   to="/products/bathroom-partitions"
//                   onClick={handleLinkClick}
//                   className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
//                 >
//                   Bathroom Partitions
//                 </Link>
//               </div>
//             </div>
//             <Link to="/contact" className="text-white">
//               Contact Us
//             </Link>
//           </div>
//         </div>
//       </div>
//       {isOpen && (
//         <div className="lg:hidden bg-gray-900 bg-opacity-50 backdrop-blur px-2 pt-2 pb-3 space-y-1 sm:px-3">
//           <Link
//             to="/"
//             onClick={handleLinkClick}
//             className="block px-4 py-2 text-white"
//           >
//             Home
//           </Link>
//           <Link
//             to="/about"
//             onClick={handleLinkClick}
//             className="block px-4 py-2 text-white"
//           >
//             About Us
//           </Link>
//           <div className="relative">
//             <button className="block px-4 py-2 text-white w-full text-left">
//               Products
//             </button>
//             <div className="pl-4">
//               <Link
//                 to="/products/aluminium-windows"
//                 onClick={handleLinkClick}
//                 className="block px-4 py-2 text-gray-100 hover:bg-gray-800"
//               >
//                 Aluminium Windows
//               </Link>
//               <Link
//                 to="/products/door-seals"
//                 onClick={handleLinkClick}
//                 className="block px-4 py-2 text-gray-100 hover:bg-gray-800"
//               >
//                 Door Seals
//               </Link>
//               <Link
//                 to="/products/railings"
//                 onClick={handleLinkClick}
//                 className="block px-4 py-2 text-gray-100 hover:bg-gray-800"
//               >
//                 Railings
//               </Link>
//               <Link
//                 to="/products/queue-manager"
//                 onClick={handleLinkClick}
//                 className="block px-4 py-2 text-gray-100 hover:bg-gray-800"
//               >
//                 Queue Manager
//               </Link>
//               <Link
//                 to="/products/invisible-grill"
//                 onClick={handleLinkClick}
//                 className="block px-4 py-2 text-gray-100 hover:bg-gray-800"
//               >
//                 Invisible Grill
//               </Link>
//               <Link
//                 to="/products/office-partitions"
//                 onClick={handleLinkClick}
//                 className="block px-4 py-2 text-gray-100 hover:bg-gray-800"
//               >
//                 Office Partitions
//               </Link>
//               <Link
//                 to="/products/bathroom-partitions"
//                 onClick={handleLinkClick}
//                 className="block px-4 py-2 text-gray-100 hover:bg-gray-800"
//               >
//                 Bathroom Partitions
//               </Link>
//             </div>
//           </div>
//           <Link
//             to="/contact"
//             onClick={handleLinkClick}
//             className="block px-4 py-2 text-white"
//           >
//             Contact Us
//           </Link>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

// This code is toggle button product is Clickable
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import whiteLogo from "../../assets/Logo/whiteLogo.png";

// const Navbar = ({ isHome }) => {
//   const [navbarBg, setNavbarBg] = useState(
//     isHome ? "bg-transparent" : "bg-gray-900 bg-opacity-50 backdrop-blur"
//   );
//   const [isOpen, setIsOpen] = useState(false);
//   const [isProductsOpen, setIsProductsOpen] = useState(false); // State for Products dropdown

//   const handleScroll = () => {
//     if (isHome && window.scrollY >= 80) {
//       setNavbarBg("bg-gray-900 bg-opacity-50 backdrop-blur");
//     } else if (isHome) {
//       setNavbarBg("bg-transparent");
//     }
//   };

//   useEffect(() => {
//     if (isHome) {
//       window.addEventListener("scroll", handleScroll);
//       return () => {
//         window.removeEventListener("scroll", handleScroll);
//       };
//     } else {
//       setNavbarBg("bg-gray-900 bg-opacity-50 backdrop-blur");
//     }
//   }, [isHome]);

//   const handleLinkClick = () => {
//     setIsOpen(false);
//     setIsProductsOpen(false); // Close the Products dropdown on link click
//   };

//   const handleProductsClick = () => {
//     setIsProductsOpen(!isProductsOpen); // Toggle Products dropdown visibility
//   };

//   return (
//     <nav
//       className={sticky top-0 left-0 w-full z-20 transition duration-300 ${navbarBg}}
//     >
//       <div className="container mx-auto px-4 py-2 flex justify-between items-center">
//         <div className="text-white font-bold text-lg">
//           <Link to="/">
//             <img className="h-20 w-44" src={whiteLogo} alt="logo" />
//           </Link>
//         </div>
//         <div className="flex items-center">
//           <div className="lg:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-white focus:outline-none"
//             >
//               <svg
//                 className="w-9 h-9"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16m-7 6h7"
//                 ></path>
//               </svg>
//             </button>
//           </div>
//           <div className={hidden lg:flex items-center space-x-6}>
//             <Link to="/" className="text-white">
//               Home
//             </Link>
//             <Link to="/about" className="text-white">
//               About Us
//             </Link>
//             <div className="relative group">
//               <button className="text-white">Products</button>
//               <div className="absolute left-0 mt-0.4 w-48 bg-white rounded-lg shadow-lg hidden group-hover:block">
//                 <Link
//                   to="/products/aluminium-windows"
//                   onClick={handleLinkClick}
//                   className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
//                 >
//                   Aluminium Windows
//                 </Link>
//                 <Link
//                   to="/products/door-seals"
//                   onClick={handleLinkClick}
//                   className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
//                 >
//                   Door Seals
//                 </Link>
//                 <Link
//                   to="/products/railings"
//                   onClick={handleLinkClick}
//                   className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
//                 >
//                   Railings
//                 </Link>
//                 <Link
//                   to="/products/queue-manager"
//                   onClick={handleLinkClick}
//                   className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
//                 >
//                   Queue Manager
//                 </Link>
//                 <Link
//                   to="/products/invisible-grill"
//                   onClick={handleLinkClick}
//                   className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
//                 >
//                   Invisible Grill
//                 </Link>
//                 <Link
//                   to="/products/office-partitions"
//                   onClick={handleLinkClick}
//                   className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
//                 >
//                   Office Partitions
//                 </Link>
//                 <Link
//                   to="/products/bathroom-partitions"
//                   onClick={handleLinkClick}
//                   className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
//                 >
//                   Bathroom Partitions
//                 </Link>
//               </div>
//             </div>
//             <Link to="/contact" className="text-white">
//               Contact Us
//             </Link>
//           </div>
//         </div>
//       </div>
//       {isOpen && (
//         <div className="sm:hidden bg-gray-900 bg-opacity-50 backdrop-blur px-2 pt-2 pb-3 space-y-1 sm:px-3">
//           <Link
//             to="/"
//             onClick={handleLinkClick}
//             className="block px-4 py-2 text-white"
//           >
//             Home
//           </Link>
//           <Link
//             to="/about"
//             onClick={handleLinkClick}
//             className="block px-4 py-2 text-white"
//           >
//             About Us
//           </Link>
//           <div className="relative">
//             <button
//               onClick={handleProductsClick}
//               className="block px-4 py-2 text-white w-full text-left"
//             >
//               Products
//             </button>
//             {isProductsOpen && (
//               <div className="pl-4 ">
//                 <Link
//                   to="/products/aluminium-windows"
//                   onClick={handleLinkClick}
//                   className="block px-4 py-2 text-gray-100 hover:bg-gray-400"
//                 >
//                   Aluminium Windows
//                 </Link>
//                 <Link
//                   to="/products/door-seals"
//                   onClick={handleLinkClick}
//                   className="block px-4 py-2 text-gray-100 hover:bg-gray-400"
//                 >
//                   Door Seals
//                 </Link>
//                 <Link
//                   to="/products/railings"
//                   onClick={handleLinkClick}
//                   className="block px-4 py-2 text-gray-100 hover:bg-gray-400"
//                 >
//                   Railings
//                 </Link>
//                 <Link
//                   to="/products/queue-manager"
//                   onClick={handleLinkClick}
//                   className="block px-4 py-2 text-gray-100 hover:bg-gray-400"
//                 >
//                   Queue Manager
//                 </Link>
//                 <Link
//                   to="/products/invisible-grill"
//                   onClick={handleLinkClick}
//                   className="block px-4 py-2 text-gray-100 hover:bg-gray-400"
//                 >
//                   Invisible Grill
//                 </Link>
//                 <Link
//                   to="/products/office-partitions"
//                   onClick={handleLinkClick}
//                   className="block px-4 py-2 text-gray-100 hover:bg-gray-400"
//                 >
//                   Office Partitions
//                 </Link>
//                 <Link
//                   to="/products/bathroom-partitions"
//                   onClick={handleLinkClick}
//                   className="block px-4 py-2 text-gray-100 hover:bg-gray-400"
//                 >
//                   Bathroom Partitions
//                 </Link>
//               </div>
//             )}
//           </div>
//           <Link
//             to="/contact"
//             onClick={handleLinkClick}
//             className="block px-4 py-2 text-white"
//           >
//             Contact Us
//           </Link>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import whiteLogo from "../../assets/Logo/whiteLogo.png";

// const Navbar = ({ isHome }) => {
//   const [navbarBg, setNavbarBg] = useState(
//     isHome ? "bg-transparent" : "bg-gray-900 bg-opacity-50 backdrop-blur"
//   );
//   const [isOpen, setIsOpen] = useState(false);
//   const [isProductsOpen, setIsProductsOpen] = useState(false);

//   const handleScroll = () => {
//     if (isHome && window.scrollY >= 80) {
//       setNavbarBg("bg-gray-900 bg-opacity-50 backdrop-blur");
//     } else if (isHome) {
//       setNavbarBg("bg-transparent");
//     }
//   };

//   useEffect(() => {
//     if (isHome) {
//       window.addEventListener("scroll", handleScroll);
//       return () => {
//         window.removeEventListener("scroll", handleScroll);
//       };
//     } else {
//       setNavbarBg("bg-gray-900 bg-opacity-50 backdrop-blur");
//     }
//   }, [isHome]);

//   const handleLinkClick = () => {
//     setIsOpen(false);
//     setIsProductsOpen(false);
//   };

//   const handleProductsClick = () => {
//     setIsProductsOpen(!isProductsOpen);
//   };

//   const toggleNavbar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav
//       className={sticky top-0 left-0 w-full z-20 transition duration-300 ${navbarBg}}
//     >
//       <div className="container mx-auto px-4 flex justify-between items-center lg:px-[5rem] md:mr-[2rem]">
//         <div className="text-white font-bold text-lg">
//           <Link to="/">
//             <img
//               className={h-20 w-48 ${isOpen ? "h-20 w-48 " : ""}}
//               src={whiteLogo}
//               alt="logo"
//             />
//           </Link>
//         </div>
//         <div className="flex items-center">
//           <div className="lg:hidden">
//             <button
//               onClick={toggleNavbar}
//               className="text-white focus:outline-none"
//             >
//               {isOpen ? (
//                 <svg
//                   className="w-10 h-10"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M6 18L18 6M6 6l12 12"
//                   ></path>
//                 </svg>
//               ) : (
//                 <svg
//                   className="w-10 h-10"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 6h16M4 12h16m-7 6h7"
//                   ></path>
//                 </svg>
//               )}
//             </button>
//           </div>
//           <div className={hidden lg:flex items-center space-x-6}>
//             <Link to="/" className="text-white">
//               Home
//             </Link>
//             <Link to="/about" className="text-white">
//               About Us
//             </Link>
//             <div className="relative group">
//               <button className="text-white">Products</button>
//               <div className="absolute left-0 mt-0.4 w-48 bg-white rounded-lg shadow-lg hidden group-hover:block">
//                 <Link
//                   to="/products/aluminium-windows"
//                   onClick={handleLinkClick}
//                   className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
//                 >
//                   Aluminium Windows
//                 </Link>
//                 <Link
//                   to="/products/door-seals"
//                   onClick={handleLinkClick}
//                   className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
//                 >
//                   Door Seals
//                 </Link>
//                 <Link
//                   to="/products/railings"
//                   onClick={handleLinkClick}
//                   className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
//                 >
//                   Railings
//                 </Link>
//                 <Link
//                   to="/products/queue-manager"
//                   onClick={handleLinkClick}
//                   className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
//                 >
//                   Queue Manager
//                 </Link>
//                 <Link
//                   to="/products/invisible-grill"
//                   onClick={handleLinkClick}
//                   className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
//                 >
//                   Invisible Grill
//                 </Link>
//                 <Link
//                   to="/products/office-partitions"
//                   onClick={handleLinkClick}
//                   className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
//                 >
//                   Office Partitions
//                 </Link>
//                 <Link
//                   to="/products/bathroom-partitions"
//                   onClick={handleLinkClick}
//                   className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
//                 >
//                   Bathroom Partitions
//                 </Link>
//               </div>
//             </div>
//             <Link to="/contact" className="text-white">
//               Contact Us
//             </Link>
//           </div>
//         </div>
//       </div>
//       {isOpen && (
//         <div className="sm:hidden bg-gray-900 bg-opacity-50 backdrop-blur h-[100%] px-2 pt-2 pb-3 space-y-1 sm:px-3">
//           <Link
//             to="/"
//             onClick={handleLinkClick}
//             className="block px-4 py-4 text-white"
//           >
//             Home
//           </Link>
//           <Link
//             to="/about"
//             onClick={handleLinkClick}
//             className="block px-4 py-4 text-white"
//           >
//             About Us
//           </Link>
//           <div className="relative">
//             <button
//               onClick={handleProductsClick}
//               className="block px-4 py-4 text-white w-full text-left"
//             >
//               Products
//             </button>
//             {isProductsOpen && (
//               <div className="pl-4">
//                 <Link
//                   to="/products/aluminium-windows"
//                   onClick={handleLinkClick}
//                   className="block px-4 py-2 text-gray-100 hover:bg-gray-400"
//                 >
//                   Aluminium Windows
//                 </Link>
//                 <Link
//                   to="/products/door-seals"
//                   onClick={handleLinkClick}
//                   className="block px-4 py-2 text-gray-100 hover:bg-gray-400"
//                 >
//                   Door Seals
//                 </Link>
//                 <Link
//                   to="/products/railings"
//                   onClick={handleLinkClick}
//                   className="block px-4 py-2 text-gray-100 hover:bg-gray-400"
//                 >
//                   Railings
//                 </Link>
//                 <Link
//                   to="/products/queue-manager"
//                   onClick={handleLinkClick}
//                   className="block px-4 py-2 text-gray-100 hover:bg-gray-400"
//                 >
//                   Queue Manager
//                 </Link>
//                 <Link
//                   to="/products/invisible-grill"
//                   onClick={handleLinkClick}
//                   className="block px-4 py-2 text-gray-100 hover:bg-gray-400"
//                 >
//                   Invisible Grill
//                 </Link>
//                 <Link
//                   to="/products/office-partitions"
//                   onClick={handleLinkClick}
//                   className="block px-4 py-2 text-gray-100 hover:bg-gray-400"
//                 >
//                   Office Partitions
//                 </Link>
//                 <Link
//                   to="/products/bathroom-partitions"
//                   onClick={handleLinkClick}
//                   className="block px-4 py-2 text-gray-100 hover:bg-gray-400"
//                 >
//                   Bathroom Partitions
//                 </Link>
//               </div>
//             )}
//           </div>
//           <Link
//             to="/contact"
//             onClick={handleLinkClick}
//             className="block px-4 py-4 text-white"
//           >
//             Contact Us
//           </Link>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import whiteLogo from "../../assets/Logo/whiteLogo.png";

const Navbar = ({ isHome }) => {
  const [navbarBg, setNavbarBg] = useState(
    isHome ? "bg-transparent" : "bg-gray-900 bg-opacity-50 backdrop-blur"
  );
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const handleScroll = () => {
    if (isHome && window.scrollY >= 80) {
      setNavbarBg("bg-gray-900 bg-opacity-50 backdrop-blur");
    } else if (isHome) {
      setNavbarBg("bg-transparent");
    }
  };

  useEffect(() => {
    if (isHome) {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    } else {
      setNavbarBg("bg-gray-900 bg-opacity-50 backdrop-blur");
    }
  }, [isHome]);

  const handleLinkClick = () => {
    setIsOpen(false);
    setIsProductsOpen(false);
  };

  const handleProductsClick = () => {
    setIsProductsOpen(!isProductsOpen);
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`sticky top-0 left-0 w-screen poppins-regular z-20 transition duration-300 rounded-b-3xl ${navbarBg}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center lg:px-[5rem] md:mr-[2rem]">
        <div className="text-white font-bold text-lg relative">
          <Link to="/">
            <img
              className={`h-20 w-44 static ${isOpen ? "h-20 w-44 static" : ""}`}
              src={whiteLogo}
              alt="logo"
            />
          </Link>
        </div>
        <div className="flex items-center">
          <div className="lg:hidden">
            <button
              onClick={toggleNavbar}
              className="text-white focus:outline-none"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              )}
            </button>
          </div>
          <div className="hidden lg:flex items-center space-x-6">
            <Link to="/" className="text-white" onClick={handleLinkClick}>
              Home
            </Link>
            <Link to="/about" className="text-white" onClick={handleLinkClick}>
              About Us
            </Link>
            <div className="relative group">
              <button
                className="text-white"
                onClick={handleProductsClick}
                aria-expanded={isProductsOpen}
              >
                Products
              </button>
              <div
                className={`absolute left-0 w-52 rounded-2xl bg-[#e4e4e4] shadow-lg transform transition-opacity duration-300 ${
                  isProductsOpen ? "opacity-100" : "opacity-0"
                }`}
              >
                <Link
                  to="/products/aluminium-windows"
                  onClick={handleLinkClick}
                  className="block px-4 py-2 poppins-light text-[#000] hover:bg-[#2f2c2c] hover:text-[#14ff72cb] hover:rounded-2xl"
                >
                  Aluminium Windows
                </Link>
                <Link
                  to="/products/door-seals"
                  onClick={handleLinkClick}
                  className="block px-4 py-2 poppins-light text-[#000] hover:bg-[#2f2c2c] hover:text-[#14ff72cb] hover:rounded-2xl"
                >
                  Door Seals
                </Link>
                <Link
                  to="/products/railings"
                  onClick={handleLinkClick}
                  className="block px-4 py-2 poppins-light text-[#000] hover:bg-[#2f2c2c] hover:text-[#14ff72cb] hover:rounded-2xl"
                >
                  Railings
                </Link>
                <Link
                  to="/products/queue-manager"
                  onClick={handleLinkClick}
                  className="block px-4 py-2 poppins-light text-[#000] hover:bg-[#2f2c2c] hover:text-[#14ff72cb] hover:rounded-2xl"
                >
                  Queue Manager
                </Link>
                <Link
                  to="/products/invisible-grill"
                  onClick={handleLinkClick}
                  className="block px-4 py-2 poppins-light text-[#000] hover:bg-[#2f2c2c] hover:text-[#14ff72cb] hover:rounded-2xl"
                >
                  Invisible Grill
                </Link>
                <Link
                  to="/products/office-partitions"
                  onClick={handleLinkClick}
                  className="block px-4 py-2 poppins-light text-[#000] hover:bg-[#2f2c2c] hover:text-[#14ff72cb] hover:rounded-2xl"
                >
                  Office Partitions
                </Link>
                <Link
                  to="/products/bathroom-partitions"
                  onClick={handleLinkClick}
                  className="block px-4 py-2 poppins-light text-[#000] hover:bg-[#2f2c2c] hover:text-[#14ff72cb] hover:rounded-2xl"
                >
                  Bathroom Partitions
                </Link>
              </div>
            </div>
            <Link
              to="/contact"
              className="text-white"
              onClick={handleLinkClick}
            >
              Contact Us
            </Link>
            <button
              className="border-none text-sm bg-[#14ff72cb] text-[#fff] w-[4rem] h-[2rem] rounded-[2rem] cursor-pointer md:font-semibold lg:h-[3.5rem] lg:w-[8rem] lg:px-2 lg:rounded-[3rem] lg:text-sm xl:h-[2.7rem] xl:w-[8rem] xl:text-sm hover:bg-[#e4e4e4] hover:text-[#000]"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              GET IN TOUCH
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden bg-gray-900 bg-opacity-50 backdrop-blur h-full px-2 pt-2 pb-3 space-y-1 sm:px-3 transition-transform duration-300 transform">
          <Link
            to="/"
            onClick={handleLinkClick}
            className="block px-4 py-4 text-white"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={handleLinkClick}
            className="block px-4 py-4 text-white"
          >
            About Us
          </Link>
          <div className="relative">
            <button
              onClick={handleProductsClick}
              className="block px-4 py-4 text-white w-full text-left"
              aria-expanded={isProductsOpen}
            >
              Products
            </button>
            {isProductsOpen && (
              <div className="pl-4">
                <Link
                  to="/products/aluminium-windows"
                  onClick={handleLinkClick}
                  className="block px-4 py-2 text-gray-100 hover:bg-gray-400"
                >
                  Aluminium Windows
                </Link>
                <Link
                  to="/products/door-seals"
                  onClick={handleLinkClick}
                  className="block px-4 py-2 text-gray-100 hover:bg-gray-400"
                >
                  Door Seals
                </Link>
                <Link
                  to="/products/railings"
                  onClick={handleLinkClick}
                  className="block px-4 py-2 text-gray-100 hover:bg-gray-400"
                >
                  Railings
                </Link>
                <Link
                  to="/products/queue-manager"
                  onClick={handleLinkClick}
                  className="block px-4 py-2 text-gray-100 hover:bg-gray-400"
                >
                  Queue Manager
                </Link>
                <Link
                  to="/products/invisible-grill"
                  onClick={handleLinkClick}
                  className="block px-4 py-2 text-gray-100 hover:bg-gray-400"
                >
                  Invisible Grill
                </Link>
                <Link
                  to="/products/office-partitions"
                  onClick={handleLinkClick}
                  className="block px-4 py-2 text-gray-100 hover:bg-gray-400"
                >
                  Office Partitions
                </Link>
                <Link
                  to="/products/bathroom-partitions"
                  onClick={handleLinkClick}
                  className="block px-4 py-2 text-gray-100 hover:bg-gray-400"
                >
                  Bathroom Partitions
                </Link>
              </div>
            )}
          </div>
          <Link
            to="/contact"
            onClick={handleLinkClick}
            className="block px-4 py-4 text-white"
          >
            Contact Us
          </Link>
          <div className="px-4 py-4">
            <button
              className="border-none text-sm bg-[#14ff72cb] text-[#fff] w-[4rem] h-[2rem] rounded-[2rem] cursor-pointer md:font-semibold lg:h-[3.5rem] lg:w-[8rem] lg:px-2 lg:rounded-[3rem] lg:text-sm xl:h-[2.7rem] xl:w-[8rem] xl:text-sm hover:bg-[#e4e4e4] hover:text-[#000]"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              GET IN TOUCH
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
