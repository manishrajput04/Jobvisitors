import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useRef } from "react";
import Navbar from "./components/NavBar";
import HeroSection from "./components/Herosection";
import Brands from "./components/brands";
import JobSection from "./components/jobsection";
import OurNumbers from "./components/OurNumbers";
import Interview from "./components/interview";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs"; // NEW

// Job Pages
import AiIntern from "./components/jobsPages/AiIntern";
import FullStackDeveloper from "./components/jobsPages/FullStackDeveloper";

// Interview Pages
import TechnicalCoding from "./components/interviewsPages/TechnicalCoding";
import TechnicalInterview from "./components/interviewsPages/TechnicalInterview";
import HRInterview from "./components/interviewsPages/HRInterview";
import BehavioralInterview from "./components/interviewsPages/BehavioralInterview";

function App() {
  const [searchText, setSearchText] = useState("");
  const [searchClicked, setSearchClicked] = useState(false);

  const jobRef = useRef(null);
  const interviewRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSearch = () => {
    setSearchClicked(true);
    if (jobRef.current) {
      jobRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Router>
      <Navbar
        onJobClick={() => scrollToSection(jobRef)}
        onInterviewClick={() => scrollToSection(interviewRef)}
      />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection
                searchText={searchText}
                setSearchText={setSearchText}
                onSearch={handleSearch}
              />
              <Brands />
              <JobSection
                ref={jobRef}
                searchText={searchText}
                searchClicked={searchClicked}
              />
              <OurNumbers />
              <Interview ref={interviewRef} />
              <Footer />
            </>
          }
        />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/jobs/ai-intern" element={<AiIntern />} />
        <Route path="/jobs/full-stack-developer" element={<FullStackDeveloper />} />
        <Route path="/interviews/technical-coding" element={<TechnicalCoding />} />
        <Route path="/interviews/technical" element={<TechnicalInterview />} />
        <Route path="/interviews/hr" element={<HRInterview />} />
        <Route path="/interviews/behavioral" element={<BehavioralInterview />} />
      </Routes>
    </Router>
  );
}

export default App;
