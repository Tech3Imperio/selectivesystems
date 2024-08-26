import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../src/component/Navbar/Navbar.jsx";
import Home from "../src/component/Home/Home.jsx";
import About from "../src/component/About/About.jsx";
import Contact from "../src/component/Contact/Contact.jsx";
import AluminiumWindows from "../src/component/Products/AluminiumWindows/AluminiumWindows.jsx";
import DoorSeals from "../src/component/Products/DoorSeals/DoorSeals.jsx";
import Railings from "../src/component/Products/Railings/Railings.jsx";
import QueueManager from "../src/component/Products/QueueManager/QueueManager.jsx";
import InvisibleGrill from "../src/component/Products/InvisibleGrill/InvisibleGrill.jsx";
import OfficePartitions from "../src/component/Products/OfficePartitions/OfficePartitions.jsx";
import BathroomPartitions from "../src/component/Products/BathroomPartitions/BathroomPartitions.jsx";
import { Footer } from "./component/Footer/Footer.jsx";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar /> {/* Navbar will be included on all pages */}
        <FloatingWhatsApp
          phoneNumber="+91111111111"
          accountName="Selective-Systems"
          messageDelay={2}
          darkMode={true}
          // avatar={favicon}
          statusMessage="Online"
          chatMessage="Hello there! How can I assist you?"
        />
        {/* {showContactForm && <ContactForm onClose={handleCloseForm} />} */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/products/aluminium-windows"
            element={<AluminiumWindows />}
          />
          <Route path="/products/doorseals" element={<DoorSeals />} />
          <Route path="/products/railings" element={<Railings />} />
          <Route path="/products/queuemanager" element={<QueueManager />} />
          <Route path="/products/invisiblegrill" element={<InvisibleGrill />} />
          <Route
            path="/products/officepartitions"
            element={<OfficePartitions />}
          />
          <Route
            path="/products/bathroompartitions"
            element={<BathroomPartitions />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
