import React from "react";
import BannerPng from "../../assets/banner.png";
import { GrUserExpert } from "react-icons/gr";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";
import { FadeUp } from "../hero/hero";
import { motion } from "framer-motion";

const banner2 = () => {
  return (
    <section>
      <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
        {/*banner text*/}
        <motion.div
        initial={{opacity: 0, x: -50}}
        whileInView={{opacity: 1, x: 0}}
        className="flex flex-col justify-center">
            <div className="text-center md:text-left space-y-4 lg:max-w-[450px]">
          <h1 className="text-4xl font-bold !leading-snug">Join Our Community to start your journey</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            debitis excepturi sequi repellat quas rem et ratione qui, deserunt
            nostrum, fugit vel officiis voluptas aut alias eum esse vero iure!
          </p>
          <a href="" className="primary-btn !mt-8">Join Now</a>
            </div>
        </motion.div>
        {/*banner img*/}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            src={BannerPng}
            alt=""
            className="w-[350px] md:max-w-[450px] object-cover drop-shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default banner2;
