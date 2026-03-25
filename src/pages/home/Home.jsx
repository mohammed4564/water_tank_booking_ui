// src/pages/Home.jsx
import { useState } from "react";
import "./Home.css";
import LoginModal from "../Login";
import RegisterModal from "../Register";
import HeroBanner from "./HeroBanner";
import OurServices from "./OurServices";
import WhyChooseUs from "./WhyChooseUs";
import HowItWorks from "./HowItWorks";
import ContactUs from "./ContactUs";
import Testimonials from "./Testimonials";
import FAQ from "./FAQ";


function Home() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className="home">

      <HeroBanner />
      <OurServices />
      <WhyChooseUs />
      <HowItWorks />
      <ContactUs />
      <Testimonials />
      <FAQ/>

      {/* MODALS */}
      {showLogin && <LoginModal setShowLogin={setShowLogin} />}
      {showRegister && <RegisterModal setShowRegister={setShowRegister} />}

    </div>
  );
}

export default Home;