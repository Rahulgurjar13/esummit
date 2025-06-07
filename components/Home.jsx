import AboutGES from "./aboutbennovate";
import AboutGES2 from "./aboutbennovate2";
import HubVisionaries from "./aboutbennovate3";
import Footer from "./Footer";
import LandingPage from "./LandingPage";
import { useState } from "react";
import StartupEvents from "./StartupEvents";
import KeyFeatures from "./KeyFeatures";
import AgendaSection from "./AgendaSection";
import Partners from "./partners";
import Hero from "./herosection";

const Homebutton = () => {
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  return (
    <div className="bg-black min-h-screen flex flex-col">
      {/* Landing Page Section */}
      <LandingPage setShowRegisterForm={setShowRegisterForm} />

      {/* AboutGES Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <AboutGES />
      </section>

      {/* HubVisionaries Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 mt-0 sm:mt-[-80px] lg:mt-[-120px]">
        <HubVisionaries />
      </section>

      {/* AboutGES2 Section */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 mt-0 sm:mt-[-80px] lg:mt-[-120px]">
        <AboutGES2 />
      </section>

      {/* StartupEvents Section */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 mt-0 sm:mt-[-80px] lg:mt-[-120px]">
        <StartupEvents />
      </section>

      {/* KeyFeatures Section */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <KeyFeatures />
      </section>

      {/* Partners Section */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Partners />
      </section>

      {/* Footer Section */}
      <footer className="w-full mt-12 sm:mt-16 lg:mt-20">
        <Footer />
      </footer>
    </div>
  );
};

export default Homebutton;