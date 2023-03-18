import React from "react";
import { motion } from "framer-motion";
import LineGradient from "../../components/LineGradient";
import { urlFor, client } from "../../client";
import { useEffect, useState } from "react";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);
  return (
    <section id="skills" className="pt-24  md:mb-[20px]  sm:pb-5 ">
      <div className="flex justify-start flex-col gap-2 ">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold md:text-4xl sm:text-xl md:mt-12">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
        </motion.div>
        <motion.div
          className="md:w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className=" sm:mt-5 md:mt-0 sm:text-sm md:text-base lg:text-xl  font-opensans ">
            I create responsive websites with various tools. However, I
            specialise in the tools and technologies below.
          </p>
        </motion.div>
      </div>
      {/* SKILLS ICONS */}
      <div>
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 flex-wrap justify-start items-start   sm:mx-auto">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="flex justify-center items-center flex-col text-center m-5 "
              key={skill.name}
            >
              <div
                className=" flex justify-center flex-col items-center"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img
                  className="w-2/5 h-2/5 sm:w-[38px] sm:h-[38px]"
                  src={urlFor(skill.icon)}
                  alt={skill.name}
                />
                <p className="text-xl uppercase sm:text-base sm:lowercase">
                  {skill.name}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      {/* SKILLS */}
      <div className="md:flex md:justify-between lg:gap-32 md:gap-10">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative sm:h-20 md:h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold md:text-3xl sm:text-2xl ">
                01
              </p>
              <p className="font-playfair font-semibold md:text-2xl mt-3 sm:text-2xl">
                Experience
              </p>
            </div>
            <div className="w-3/4 sm:h-20 md:h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="md:mt-5 sm:mt-2 md:text-sm lg:text-xl font-opensans sm:text-xs">
            They say the perfect way to build something is to do and I have
            worked on a lot of projects to perfect my craft. I always aim to
            deliver the best product that is possible.
          </p>
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative sm:h-20 md:h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold md:text-3xl sm:text-2xl">
                02
              </p>
              <p className="font-playfair font-semibold md:text-2xl mt-3 sm:text-2xl ">
                Innovative
              </p>
            </div>
            <div className="w-3/4 sm:h-20 md:h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="md:mt-5 sm:mt-2 md:text-sm lg:text-xl font-opensans sm:text-xs">
            I am a very innovative person equipped with the skills to solve
            problems by using the right methods to ensure maximum performance.
          </p>
        </motion.div>
        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative sm:h-20 md:h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold md:text-3xl sm:text-2xl ">
                03
              </p>
              <p className="font-playfair font-semibold md:text-2xl sm:text-2xl  mt-3">
                Imaginative
              </p>
            </div>
            <div className="w-3/4 sm:h-20 md:h-32  bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="md:mt-5 sm:mt-2 md:text-sm lg:text-xl font-opensans sm:text-xs">
            As a developer I don't limit myself to what can be achieved in this
            world. My grandpa always told me that if you can imagine it then you
            can build it.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
