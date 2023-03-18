import React from 'react';
import Navbar from './components/Navbar';
import { Footer, Header, Skills, Testimonial, Project, DotGroup, Contact} from './containers';
import useMediaQuery from "./constants/UseMediaQuery";
import { useEffect, useState } from "react";

import { motion } from "framer-motion";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-deep-blue">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="md:w-5/6 mx-auto md:h-full sm:w-full sm:px-3 xl:h-5/6">
        {isDesktop && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("home")}
        >
          <Header />
        </motion.div>
      </div>

      <div className="md:w-5/6 mx-auto md:h-full lg:h-full md:mb-10 sm:w-full sm:px-3">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("skills")}
        >
          <Skills />
        </motion.div>
      </div>

      <div className="md:w-5/6 mx-auto md:h-full lg:h-full sm:w-full sm:px-3">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("projects")}
        >
          <Project />
        </motion.div>
      </div>

      <div className="md:w-5/6 mx-auto md:h-4/6 sm:w-full sm:px-3">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("testimonials")}
        >
          <Testimonial />
        </motion.div>
      </div>
      <div className="md:w-5/6 mx-auto md:h-full sm:w-full sm:px-3">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("contact")}
        >
          <Contact />
        </motion.div>
      </div>
      <div className="md:h-32 w-full sm:h-20 bg-red sm:px-3">
        <Footer />{" "}
      </div>
    </div>
  );
}

export default App;