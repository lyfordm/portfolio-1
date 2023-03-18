import React from 'react'
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import {
  AiFillMail,
  AiOutlineWhatsApp,
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

import LineGradient from '../components/LineGradient';

const Contact = () => {
    const {
      register,
      trigger,
      formState: { errors },
    } = useForm();

    const onSubmit = async (e) => {
      console.log("~ e", e);
      const isValid = await trigger();
      if (!isValid) {
        e.preventDefault();
      }
    };
  return (
    <section id="contact" className="md:pt-10 sm:mt-10 md:mt-0 lg:pt-28 sm:py-5 sm:pt-24">
      <div className="flex justify-start flex-col ">
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
          <p className="font-playfair font-semibold md:text-3xl sm:text-xl">
            CONTACT ME
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
          <p className="md:mt-5 sm:mt-3 md:mb-7 lg:mb-0 sm:text-sm md:text-base lg:text-xl font-opensans">
            You can use the following ways to communicate with me.
          </p>
        </motion.div>
        <motion.div
          className=" flex flex-row gap-2 sm:py-4 md:pb-2 sm:justify-center md:justify-start"
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
            <AiFillGithub className="md:h-10 md: w-10" />
          </a>
          <a
            href="https://twitter.com/lyfordmwanza25"
            target="_blank"
            rel="noreferrer"
            className="bg-deep-blue hover:text-red"
          >
            <AiFillTwitterCircle className="md:h-10 md: w-10" />
          </a>
          <a
            href="https://www.linkedin.com/in/lyford-mwanza-962224237/"
            target="_blank"
            rel="noreferrer"
            className="bg-deep-blue hover:text-red"
          >
            <AiFillLinkedin className="md:h-10 md: w-10" />
          </a>
        </motion.div>
      </div>
      <div className="flex md:flex-row sm:flex-col sm:justify-center sm:items-center font-opensans gap-4">
        <div className="md:w-2/4 sm:w-full flex flex-col gap-5">
          <div className="flex justify-center items-center flex-col sm:w-full gap-2 py-4 border-2 border-gray-600">
            <AiFillMail className="" />
            <p> Email</p>
            <a
              href="mailto:lyfordmwanza@yahoo.com"
              className="px-4 py-2 bg-yellow font-semibold text-deep-blue md:mt-5 sm:mt-0 hover:bg-red hover:text-white transition duration-500"
            >
              Send an Email
            </a>
          </div>
          <div className="flex justify-center items-center sm:w-full flex-col gap-2 py-4 border-2 border-gray-600">
            <AiOutlineWhatsApp className="" />
            <p> WhatsApp</p>
            <a
              href="https://wa.me/260967803424"
              className="px-4 py-2 bg-yellow font-semibold text-deep-blue mt-5 hover:bg-red hover:text-white transition duration-500 sm:m-2 font-opensans"
            >
              Send a message on Whatsapp
            </a>
          </div>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="md:basis-1/2 md:w-2/4 sm:w-full sm:justify-center sm:items-center"
        >
          <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/9ed2f74d713514b405b91a5121570836"
            method="POST"
          >
            <input
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3"
              type="text"
              placeholder="NAME"
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="text-red mt-1">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Max length is 100 char."}
              </p>
            )}

            <input
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5"
              type="text"
              placeholder="EMAIL"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="text-red mt-1">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}

            <textarea
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5"
              name="message"
              placeholder="MESSAGE"
              rows="4"
              cols="50"
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className="text-red mt-1">
                {errors.message.type === "required" &&
                  "This field is required."}
                {errors.message.type === "maxLength" &&
                  "Max length is 2000 char."}
              </p>
            )}

            <button
              className="md:px-3 md:py-2 sm:px-2 sm:py-1 bg-yellow font-semibold text-deep-blue md:mt-5 hover:bg-red hover:text-white transition duration-500 sm:flex 
              sm:justify-center sm:items-center md:text-base sm:text-base"
              type="submit"
            >
              SEND ME A MESSAGE
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact