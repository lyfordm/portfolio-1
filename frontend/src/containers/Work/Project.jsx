import React, { useState, useEffect } from "react";
import { AiFillEye } from "react-icons/ai";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";
import { Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Project = () => {
  const isSmallScreen = window.innerWidth < 640; // You can set the breakpoint as per your needs.
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);
  const HandleWorkFilter = (item) => {
        setActiveFilter(item);
        setAnimateCard([{ y: 100, opacity: 0 }]);

        setTimeout(() => {
          setAnimateCard([{ y: 0, opacity: 1 }]);

          if (item === "All") {
            setFilterWork(works);
          } else {
            setFilterWork(works.filter((work) => work.tags.includes(item)));
          }
        }, 500);
  };
  return (
    <section id="projects" className="md:mt-[400px] pt-24 lg:mt-[280px] md:py-32 ">
      <div className="flex justify-center gap-16 ">
        <motion.div
          className="md:w-3/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold md:text-4xl sm:text-xl flex justify-center gap-1">
            MY <span className="text-red">PROJECTS</span>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4 justify-center  sm:mb-2 md:mb-0">
            {["UI/UX", "Web Apps", "Mobile Apps", "React JS", "All"].map(
              (item, index) => (
                <div
                  key={index}
                  onClick={() => HandleWorkFilter(item)}
                  className={`py-2 px-4 rounded-xl font-bold md:mx-2 md:mt-4 sm:mt-2 sm:mx-1 bg-slate-600 hover:bg-violet-600 active:bg-violet-700 focus:outline-none  focus:ring-violet-300   ${
                    activeFilter === item
                      ? "bg-violet-600 text-white"
                      : "bg-slate-600 text-black"
                  }`}
                  style={{ cursor: "pointer" }}
                >
                  {item}
                </div>
              )
            )}
          </div>
        </motion.div>
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="flex justify-center items-center"
      >
        <Swiper
          modules={[Navigation, Pagination, Scrollbar]}
          spaceBetween={30}
          centeredSlides={true}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={!isSmallScreen}
          breakpoints={{
            // when window width is >= 1024px (large screens)
            1024: {
              slidesPerView: 3,
            },
            // when window width is >= 640px (medium screens)
            640: {
              slidesPerView: 2,
            },
            // when window width is <= 639px (mobile)
            639: {
              slidesPerView: 1,
            },
          }}
        >
          {filterWork.map((work, index) => (
            <SwiperSlide key={work._id}>
              <div
                className="md:w-[270px] sm:w-full flex flex-col md:p-4 sm:p-2 md:m-8 sm:mx-auto sm:mb-8  rounded justify-center bg-slate-600 items-center "
                key={index}
              >
                <div className="md:w-full md:h-[230px]  relative justify-center items-center">
                  <img
                    className="w-full h-full rounded "
                    src={urlFor(work.imgUrl)}
                    alt={work.name}
                  />
                </div>

                <div className="p-2 w-full relative flex-col flex justify-center items-center">
                  <h4 className="text-sm font-bold text-left ">{work.title}</h4>
                  <p className="text-sm font-medium text-center w-full my-4">
                    {work.description}
                  </p>

                  <div className="flex flex-col justify-center ">
                    <p className="text-sm font-medium text-center w-full">
                      {work.tags[0]}
                    </p>

                    <a
                      href={work.projectLink}
                      className="flex flex-row text-white font-opensans justify-center items-center gap-2  py-1 px-2 rounded mt-2 bg-violet-600"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiFillEye />
                      <p>View Project</p>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default Project;
