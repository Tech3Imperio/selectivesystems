// // src/ContactForm.js
// import React, { useState } from "react";

// const ContactForm = ({ onClose }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     whatsapp: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log("Form data submitted:", formData);
//     onClose(); // Close the form after submission
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-80 relative">
//         <button
//           className="absolute top-2 right-2 text-red-500 hover:text-red-700"
//           onClick={onClose}
//         >
//           &times;
//         </button>
//         <h2 className="text-xl font-bold mb-4">Product Enquiry</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium mb-1">Name:</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="w-full p-2 border border-gray-300 rounded-md"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium mb-1">Email:</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full p-2 border border-gray-300 rounded-md"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium mb-1">
//               Whatsapp No:
//             </label>
//             <input
//               type="tel"
//               name="whatsapp"
//               value={formData.whatsapp}
//               onChange={handleChange}
//               required
//               pattern="[0-9]{10}" // Optional pattern for basic validation
//               className="w-full p-2 border border-gray-300 rounded-md"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium mb-1">Message:</label>
//             <textarea
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               required
//               className="w-full p-2 border border-gray-300 rounded-md"
//             ></textarea>
//           </div>
//           <button
//             type="submit"
//             className="w-full py-2 bg-[#e4e4e4] text-white rounded-md hover:bg-[#14ff72cb] text-base font-semibold"
//           >
//             Send
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;

// src/ContactForm.js
import React, { useState } from "react";

const ContactForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form data submitted:", formData);
    onClose(); // Close the form after submission
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 relative">
        <button
          className="absolute top-2 right-2 text-red-500 hover:text-red-700"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4">Product Enquiry</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Whatsapp No:
            </label>
            <input
              type="tel"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              required
              pattern="[0-9]{10}" // Optional pattern for basic validation
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-[#e4e4e4] text-white rounded-md hover:bg-[#14ff72cb] text-base font-semibold"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

// // src/ContactFormWrapper.js
// import React, { useState, useEffect } from "react";
// import ContactForm from "../ContactForm/ContactForm ";

// const ContactFormWrapper = () => {
//   // Set initial state to true to show form by default
//   const [isFormVisible, setIsFormVisible] = useState(true);

//   useEffect(() => {
//     // Check local storage to see if the form was previously closed
//     const saved = localStorage.getItem("contactFormVisible");
//     if (saved !== null) {
//       setIsFormVisible(JSON.parse(saved));
//     }
//   }, []);

//   useEffect(() => {
//     // Save the form visibility state to local storage
//     localStorage.setItem("contactFormVisible", JSON.stringify(isFormVisible));
//   }, [isFormVisible]);

//   const handleOpenForm = () => {
//     setIsFormVisible(true);
//   };

//   const handleCloseForm = () => {
//     setIsFormVisible(false);
//   };

//   return (
//     <>
//       {isFormVisible && <ContactForm onClose={handleCloseForm} />}
//       {!isFormVisible && (
//         <button
//           className={`fixed px-2 py-4 bg-black text-white rounded-3xl shadow-lg z-40 transition-transform ${
//             isFormVisible
//               ? "bottom-8 left-1/2 transform -translate-x-1/2 rotate-0"
//               : "bottom-8 left-4 transform rotate-90"
//           }`}
//           onClick={handleOpenForm}
//         >
//           ENQUIRE NOW
//         </button>
//       )}
//     </>
//   );
// };

// export default ContactFormWrapper;
