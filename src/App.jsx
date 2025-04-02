import React, { useEffect, useState } from "react";
import Skills from "./components/Skills"; 
import Hero from "./Components/Hero";
import About from "./Components/About";
import Projects from "./components/Projects";
import CrownClothing from "./components/CrownClothing";
import FitHealthy from "./components/FitHealthy";
import Contact from "./components/Contact";
import ScrollIndicator from "./components/ScrollIndicator";
import ContactButton from "./components/ContactButton";
import Text from "./components/Text";
import Loader from "./components/loader/Loader";

function App() {

    // Loder
      const [isLoading, setIsLoading] = useState(true);
    // Let create async method to fetch data
    useEffect(() => {
      const fakeDataFetch = () => {
        setTimeout(() => {
          setIsLoading(false);
        }, 4000);
      };

      fakeDataFetch();
    }, [])

  const [activeSection, setActiveSection] = useState("projects");
  return isLoading ? (
    <Loader />
  ) : (
    <div className="bg-black min-h-screen">
      <ContactButton/>
      <ScrollIndicator/>
      <Hero />
      <About />
      <Text/>
      <Skills />
      <div className="h-screen flex flex-col justify-center items-center bg-black text-white">
      {/* Render only the selected section */}
      {activeSection === "projects" && <Projects setActiveSection={setActiveSection} />}
      {activeSection === "crownClothing" && <CrownClothing setActiveSection={setActiveSection} />}
      {activeSection === "fitHealthy" && <FitHealthy setActiveSection={setActiveSection} />}
    </div>
    <Contact />
    </div>
  );
}
export default App;