import React, { useState, useEffect } from "react";
// const apiUrl = process.env.REACT_APP_API_URL;
import { BASE_URL } from "../../Service/Api/Api";
import email from "../../assets/Contact/email.png";
import location from "../../assets/Contact/location.png";
import contact from "../../assets/Contact/contact.png";
import { FadeDown, FadeUp } from "../uitility/animation";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [isLoader, setIsLoader] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsappno: "",
    message: "",
  });
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoader(true);
    
    try {
      const response = await axios.post(`${BASE_URL}/contact`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.status > 199 && response.status < 300) {
        setFormData({
          name: "",
          email: "",
          whatsappNo: "",
          message: "",
        });
        navigate("/contact/thankyou");
      } else {
        alert("Error sending message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert(`An unexpected error occurred: ${error.message}`);
    } finally {
      setIsLoader(false);
    }
  
    console.log("API URL:", BASE_URL);
  };
  

  // const handleSubmit = async (e) => {
  //   setIsLoader(true);
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post(`${BASE_URL}/contact`, formData, {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     // const response = await fetch(`${BASE_URL}/contact`, {
  //     //   method: "POST",
  //     //   headers: {
  //     //     "Content-Type": "application/json",
  //     //   },
  //     //   body: JSON.stringify(formData),
  //     // });
  //     console.log("Response: ", response);
  //     // if (response.ok) {
  //     //   alert("Message sent successfully!");
  //     //   setFormData({
  //     //     name: "",
  //     //     email: "",
  //     //     whatsappNo: "",
  //     //     message: "",
  //     //   });
  //     // } else {
  //     //   alert("Error sending message.");
  //     // }
  //     if (response.status > 199 && response.status < 400) {
  //       navigate("/thankyou")
  //       alert("Message sent successfully!");
  //       setFormData({
  //         name: "",
  //         email: "",
  //         whatsappNo: "",
  //         message: "",
  //       });
  //       setIsLoader(false);
        
  //     } else {
  //       setIsLoader(false);
  //       // Handle non-2xx status codes
  //       alert("Error sending message.");
  //     }
  //   } catch (error) {
  //     setIsLoader(false);
  //     alert("An unexpected error occurred.");
  //     console.log("Error", error);
  //   } finally {
  //     setIsLoader(false);
  //   }

  //   console.log("API URL:", BASE_URL);
  //   setIsLoader(false);
  // };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <section className=" bg-gray-800 ">
      {/* info open */}
      <motion.div
        variants={FadeDown(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="pt-24 mb-24 -mt-5 rounded-b-[2rem] overflow-hidden"
      >
        <div className="container mx-auto">
          <div className="flex justify-center mb-12">
            <div className="text-center">
              <h6 className="text-primary mb-2 poppins-regular flex justify-center items-center text-4xl">
                Selective Systems
              </h6>
              <h1 className="text-2xl text-secondary font-raleway font-bold">
                CONTACT US
              </h1>
            </div>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/3 p-4">
              <motion.div
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="bg-secondary border p-6 shadow-lg rounded-[2rem]"
              >
                <div className="flex justify-center mb-4">
                  <img src={email} alt="EmailIco" className="w-12 h-12" />
                </div>
                <h3 className="text-xl poppins-regular font-semibold text-center mb-2">
                  Email Address
                </h3>
                <p className="text-center font-raleway">
                  info@selectivesystems.in
                </p>
              </motion.div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-secondary  p-6 shadow-lg border rounded-[2rem]">
                <div className="flex justify-center mb-4">
                  <img src={contact} alt="PhoneIco" className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold poppins-regular text-center mb-2">
                  Phone Number
                </h3>
                <p className="text-center poppins-light">+91 9372593981</p>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="w-full md:w-1/3 p-4"
            >
              <div className="bg-secondary p-6 border shadow-lg rounded-[2rem]">
                <div className="flex justify-center mb-4">
                  <img src={location} alt="AddressIco" className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold poppins-regular text-center mb-2">
                  Office Address
                </h3>
                <p className="text-center font-raleway">
                  Aman Chambers Charni Road East, Mumbai 400004
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
      {/* info close */}

      <motion.div
        variants={FadeUp(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className=" h-[40rem] rounded-t-[5rem] -mt-[3rem] md:rounded-[6rem] md:w-[46rem] md:ml-[1rem] py-10 mx-auto  md:py-14 md:mb-4 md:h-[28rem] lg:py-14 lg:px-14 lg:w-full lg:h-[31rem]  lg:ml-[1rem] xl:w-full xl4:w-full xl4:mx-[300px] xl:ml-[7rem]"
      >
        <div className="border h-[35rem] w-[22.3rem] mx-auto bg-secondary mb-14 py-4 rounded-[4rem] backdrop-blur-44 md:h-[21rem] md:w-[44rem] md:ml-[1rem] lg:h-[24rem] lg:w-[51rem] lg:ml-[1.7rem] xl:w-[75rem] xl:-ml-[2px] xl4:[75rem] xl4:ml-[1rem]">
          <div className="max-w-lg mx-auto p-4">
            <h2 className="text-3xl font-bold mb-6 ml-[5rem] text-[#25D366] md:text-2xl md:-ml-24 lg:text-3xl xl:text-4xl xl:-ml-[20rem]">
              Get in Touch
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-[12rem] justify-center">
                <div className="w-full md:w-1/2 md:-ml-[12rem]">
                  <label
                    htmlFor="name"
                    className="block text-base ml-3 font-medium text-gray-800 md:ml-24 md:text-base lg:text-xl xl:-ml-[6.8rem]"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block h-[3rem] w-full px-3 py-2 border border-gray-300 rounded-[2rem] shadow-sm md:h-[2.5rem] md:w-[19rem] md:ml-24 lg:h-[2.8rem] lg:w-[20rem] xl:h-[3rem] xl:w-[30rem] xl:-ml-[7rem] focus:outline-none focus:ring-[#25D366] focus:border-[#25D366]"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <label
                    htmlFor="email"
                    className="block text-base ml-3 font-medium text-gray-800 md:text-base lg:text-xl"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block h-[3rem] w-full px-3 py-2 border border-gray-300 rounded-[2rem] md:h-[2.5rem] md:w-[19rem] lg:h-[2.8rem] lg:w-[20rem] xl:h-[3rem] xl:w-[30rem] shadow-sm focus:outline-none focus:ring-[#25D366] focus:border-[#25D366]"
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-[14rem]">
                <div className="w-full md:w-1/2 md:-ml-[12rem]">
                  <label
                    htmlFor="whatsappNo"
                    className="block text-base ml-3 font-medium text-gray-800 md:ml-24 md:text-base lg:text-xl xl:-ml-[6.8rem]"
                  >
                    Whatsapp No
                  </label>
                  <input
                    type="tel"
                    id="whatsappNo"
                    name="whatsappNo"
                    value={formData.whatsappNo}
                    onChange={handleChange}
                    required
                    className="mt-1 block h-[3rem] w-full px-3 py-2 border border-gray-300 rounded-[2rem] md:h-[2.5rem] md:w-[19rem] md:ml-24 lg:h-[2.8rem] lg:w-[20rem] xl:h-[3rem] xl:w-[30rem] xl:-ml-[7rem] shadow-sm focus:outline-none focus:ring-[#25D366] focus:border-[#25D366]"
                  />
                </div>
                <div className="w-full md:w-1/2 md:-ml-[1rem] ">
                  <label
                    htmlFor="message"
                    className="block text-base ml-3 font-medium text-gray-800 md:text-base md:-ml-[2rem] lg:text-xl"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="mt-1 block h-[3rem] w-full px-3 py-2 border border-gray-300 rounded-[2rem] md:-ml-[2rem]  md:h-[2.5rem] md:w-[19rem] lg:h-[2.8rem] lg:w-[20rem] xl:h-[3rem] xl:w-[30rem] resize-none shadow-sm focus:outline-none focus:ring-[#25D366] focus:border-[#25D366]"
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-[#25D366] w-[9rem] h-[3rem] mt-[2rem] poppins-regular text-xl text-white px-2 font-semibold rounded-[3rem] md:mt-3 lg:mt-6 xl:-ml-14 shadow-sm hover:text-black hover:bg-secondary hover:border hover:border-black hover:scale-110 transition duration-500 focus:outline-none focus:ring-[#25D366] focus:border-[#25D366]"
                >
                  {isLoader ? "Sending..." : "Send"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
      </section>
    </>
  );
};

export default Contact;
