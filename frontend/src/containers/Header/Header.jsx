import React from "react";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const Header = ({ setSelectedPage }) => {
  return (
    <section id="home" className="flex flex-col mt-28 sm:mt-20 w-4/5 sm:w-full">
      <div className="z-30 basis-2/5 mt-12 md:mt-32 sm:items-center md:items-start md:justify-start">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="md:text-6xl sm:text-3xl font-playfair z-10 sm:text-center md:text-start sm:mt-10">
            Hi! I am <br></br>
            Lyford Mwanza
          </p>

          <p className="sm:mt-4 md:mt-10 md:mb-7 md:text-base lg:text-xl  md:text-start sm:text-center font-opensans">
            I'm a Fullstack Developer, UI/UX Designer and Social Media Manager based in Zambia
            with an industrial engineering background. <br></br>
            In other words I went to engineering school and returned as a
            programmer.
          </p>
        </motion.div>
        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 sm:justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500 sm:text-xs md:text-sm"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="bg-deep-blue hover:text-red transition sm:text-xs md:text-sm duration-500 w-full h-full flex items-center justify-center px-4 font-playfair">
              Let's create magic.
            </div>
          </AnchorLink>
        </motion.div>
        <motion.div
          className="md:py-6 flex flex-row gap-2 sm:py-4 sm:justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <a
            href="https://github.com/lyfordm"
            target="_blank"
            rel="noreferrer"
            className="bg-deep-blue hover:text-red"
          >
            <AiFillGithub className="md:h-10 md:w-10" />
          </a>
          <a
            href="https://twitter.com/lyfordmwanza25"
            target="_blank"
            rel="noreferrer"
            className="bg-deep-blue hover:text-red"
          >
            <AiFillTwitterCircle className="md:h-10 md:w-10" />
          </a>
          <a
            href="https://www.linkedin.com/in/lyford-mwanza-962224237/"
            target="_blank"
            rel="noreferrer"
            className="bg-deep-blue hover:text-red"
          >
            <AiFillLinkedin className="md:h-10 md:w-10" />
          </a>
          <a
            href="mailto:lyfordmwanza@yahoo.com"
            className="bg-deep-blue hover:text-red"
          >
            <AiFillMail className="md:h-10 md:w-10" />
          </a>
          <a
            href="https://wa.me/260967803424"
            className="bg-deep-blue hover:text-red"
          >
            <AiOutlineWhatsApp className="md:h-10 md:w-10" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Header;
