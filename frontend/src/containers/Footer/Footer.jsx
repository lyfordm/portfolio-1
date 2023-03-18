import React from "react";
import { motion } from "framer-motion";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <motion.div
        className=" flex flex-col gap-2 sm:py-4 justify-center items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="text-deep-blue sm:text-sm md:text-base lg:text-xl font-opensans font-semibold">
          © 2023 Lyford Mwanza
        </p>
       
      </motion.div>
      <motion.div
        className=" flex flex-row gap-3  justify-center"
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
          className=" hover:text-deep-blue"
        >
          <AiFillGithub className="md:h-10 md:w-10" />
        </a>
        <a
          href="https://twitter.com/lyfordmwanza25"
          target="_blank"
          rel="noreferrer"
          className=" hover:text-deep-blue"
        >
          <AiFillTwitterCircle className="md:h-10 md:w-10" />
        </a>
        <a
          href="https://www.linkedin.com/in/lyford-mwanza-962224237/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-deep-blue"
        >
          <AiFillLinkedin className="md:h-10 md:w-10" />
        </a>
        <a
          href="mailto:lyfordmwanza@yahoo.com"
          className="hover:text-deep-blue"
        >
          <AiFillMail className="md:h-10 md:w-10" />
        </a>
        <a href="https://wa.me/260967803424" className="hover:text-deep-blue">
          <AiOutlineWhatsApp className="md:h-10 md:w-10" />
        </a>
      </motion.div>
    </>
  );
};

export default Footer;
