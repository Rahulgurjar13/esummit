import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Component Imports
import Homebutton from "../components/Home";

import TeamPage from "../components/TeamPage";
import Events from "../components/Events";
import ContactUs from "../components/ContactUs";

// Icon Imports
import { Home } from "lucide-react";
import AgendaSection from "../components/AgendaSection";
import SpeakersSection from "../components/speakers";


import Sponsors from "../components/SponsorsPage";
import AboutSpark from "../components/spark";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homebutton />} />
        <Route path="/home" element={<Homebutton />} />
        <Route path="/agenda" element={<AgendaSection />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/events" element={<Events />} />
       
        <Route path="/speakers" element={<SpeakersSection />} />
        <Route path="/sponsor" element={<Sponsors/>} />
        <Route path="/contact-us" element={<ContactUs/>} />
        <Route path="/spark" element={<AboutSpark/>} />

      </Routes>
    </Router>
  );
}

export default App;