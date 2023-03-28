import React, { useState, useEffect } from "react";
import { urlFor, client } from "../../client";
import { Navigation, Pagination, Scrollbar} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



const Testimonial = () => {
  const isSmallScreen = window.innerWidth < 640; // You can set the breakpoint as per your needs.
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const query = '*[_type == "testimonials"]';

    client.fetch(query).then((data) => {
      setTestimonials(data);
    });
  }, []);

  return (
    <section id="testimonials" className="md:mt-[250px] sm:pt-28 lg:pt-28">
      <div className="container mx-auto ">
        <p className="font-playfair font-semibold md:text-3xl sm:text-xl flex justify-center gap-2">
          MY <span className="text-red">TESTIMONIALS</span>
        </p>
      </div>
      <div className="mx-auto mb-7">
        <p className="flex justify-center pt-2 font-opensans sm:text-sm md:text-base lg:text-xl">
          This is what people are saying about my work
        </p>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={!isSmallScreen}
      >
        {testimonials.map((testimonials) => (
          <SwiperSlide key={testimonials._id}>
            <div class="md:m-4 md:mx-auto md:mb-8 md:w-full sm:mx-auto rounded-lg bg-white p-6 shadow-lg mt-20 mx-20 my-10 flex md:flex-row gap-3 sm:flex-col sm:w-full ">
              <div class="mx-auto mb-6 flex sm:w-36 items-center justify-center md:mx-0 md:w-96 lg:mb-0">
                <img
                  class="rounded-full shadow-md md:w-36 md:h-36 absolute top-10 z-[10] sm:h-[70px] sm:w-[70px]"
                  src={urlFor(testimonials.imgurl)}
                  alt={testimonials.name}
                />
              </div>
              <div class="md:ml-6 flex flex-col  sm:justify-center">
                <p class="md:mb-6 sm:mb-2 font-light md:h-20 md:w-full text-black font-opensans sm:text-sm md:text-base lg:text-xl ">
                  {testimonials.feedback}
                </p>
                <p class="sm:text-sm md:text-base lg:text-xl font-semibold text-neutral-800 capitalize font-playfair ">
                  {testimonials.name}
                </p>
                <p class="mb-0 font-semibold text-neutral-500 md:text-sm lg:text-xl sm:text-xs font-opensans ">
                  {testimonials.company}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
