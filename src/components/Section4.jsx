import React, { useEffect, useRef, useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
// import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from "embla-carousel-autoplay";
import { FaUser, FaUsers } from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";

// importing components
import CardCarousel from "./card_carousel";
import ClickHereArrow from "../assets/clickHere_arrow.svg";
//  Importing Images
import DuoImage1 from "../assets/duo-carousel-image1.svg";
import DuoImage2 from "../assets/duo-carousel-image2.svg";
import DuoImage3 from "../assets/duo-carousel-image3.svg";
import SoloImage1 from "../assets/solo-carousel-image1.svg";
import MobileDuoImage1 from "../assets/mobile_duo_1.svg";
import MobileDuoImage2 from "../assets/mobile_duo_2.svg";
import MobileDuoImage3 from "../assets/mobile_duo_3.svg";
import MobileSoloImage1 from "../assets/mobile_single_1.svg";
import ClickHereLarge from "../assets/click_here_large.svg";
import SoloImage2 from "../assets/solo-carousel-image2.svg";
import ClickHere from "../assets/click_here.svg";
import MobileSoloImage2 from "../assets/mobile_single_2.svg";
import MobileSoloImage3 from "../assets/mobile_single_3.svg";
import SoloImage3 from "../assets/solo-carousel-image3.svg";
import SoloImage4 from "../assets/solo-carousel-image4.svg";
import SoloIcon from "../assets/solo-icon-image.svg";
import DuoIcon from "../assets/duo-icon-image.svg";
import ChallengeCarousel from "../assets/Section4_Image2.svg";
import ChallengeCarouselSolo from "../assets/challenger_solo.svg";

// Importing css files
import "../css/Section4.css";
import "../css/AutoCarousel.css";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url("${DuoIcon}")`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "#aab4be",
        ...theme.applyStyles("dark", {
          backgroundColor: "#8796A5",
        }),
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: "#FFFFF",
    width: 32,
    height: 32,
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url("${SoloIcon}")`,
    },
    ...theme.applyStyles("dark", {
      backgroundColor: "#003892",
    }),
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: "#aab4be",
    borderRadius: 20 / 2,
    ...theme.applyStyles("dark", {
      backgroundColor: "#8796A5",
    }),
  },
}));

const duoSlides = [DuoImage1, DuoImage2, DuoImage3];
const soloSlides = [SoloImage1, SoloImage2, SoloImage3];
const mobileDuoSlides = [MobileDuoImage1, MobileDuoImage2, MobileDuoImage3];
const mobileSingleSlides = [
  MobileSoloImage1,
  MobileSoloImage2,
  MobileSoloImage3,
];
const AutoCarousel1 = ({ slides = [], delay = 4000 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, delay);
    return () => clearInterval(interval);
  }, [delay, slides.length]);

  const getSlideState = (i) => {
    if (i === index) return "center";
    if (i === (index + 1) % slides.length) return "right";
    if (i === (index - 1 + slides.length) % slides.length) return "left";
    return "hidden";
  };

  const slideVariants = {
    center: {
      scale: 1,
      x: 0,
      opacity: 1,
      // filter: "blur(0px)",
      // zIndex: 3,
    },
    left: {
      scale: 0.7,
      x: "-100%",
      opacity: 0.02,
      filter: "blur(2px)",
      // zIndex: 2,
    },
    right: {
      scale: 0.7,
      x: "100%",
      opacity: 0.02,
      filter: "blur(2px)",
      // zIndex: 2,
    },
    hidden: {
      scale: 0.7,
      opacity: 0,
      x: 0,
      filter: "blur(400px)",
      // zIndex: 1,
    },
  };

  return (
    <div className="w-full overflow-hidden  bg-transparent">
      <div className="relative max-w-screen-lg mx-auto w-full h-[356px] sm:h-[280px] md:h-[320px] lg:h-[380px] flex items-center justify-center">
        {slides.map((slide, i) => (
          <motion.div
            key={i}
            className="absolute w-[100%] sm:w-[70%] rounded-2xl md:w-[74%] h-full  shadow-xl overflow-hidden"
            variants={slideVariants}
            animate={getSlideState(i)}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 20,
              duration: 1,
            }}
          >
            <img
              src={slide}
              alt={`Slide ${i}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default function Section4({ isDuo, setIsDuo }) {

  return (
    <section className="challenge-section">
      {/* Top Text Block */}
      <div className="challenge-header px-4 py-6 md:px-10 md:py-8 lg:px-[100px] lg:py-[50px]">
        <h1 className="text-[#1b184f] text-[20px] lg:text-[50px] font-bold mb-2 tracking-[0]">
          Kar Le Challenge,
          <br />
          Khud Se Ya Apne Dost Se!
        </h1>
        <div className="highlight">
          <p className="text-[16px] lg:text-[36px] font-semibold text-[#7E56DA]">
            {" "}
            Prove your Skills either way, Play
          </p>
          <span
            className={`text-[16px] lg:text-[36px] text-semibold ${
              isDuo ? "faded" : "highlighted"
            }`}
          >
            Solo
          </span>
          <div>
            <img />
          </div>
          <span className="mode-switch-image">
            <div className="relative inline-block w-fit">
              <div
                onClick={() => setIsDuo(!isDuo)}
                className="w-[78px] h-[40px] relative bg-[#7E56DA] border-2 border-white px-[8px] py-[5px] rounded-full flex items-center justify-between mr-1 cursor-pointer relative transition-all duration-300"
                style={{
                  boxShadow: `
          0 2px 4px rgba(255, 52, 193, 0.1),
          0 2px 6px rgba(255, 255, 255, 0.1),
          0 4px 8px rgba(0, 0, 0, 0.25),
          0 6px 12px rgba(255, 255, 255, 0.25)
        `,
                }}
              >
                {/* Toggle Circle Behind Icons */}
                <div
                  className={` w-[32px] h-[32px]  bg-white rounded-full shadow-md top-1 left-1 transition-transform duration-300 ${
                    isDuo ? "translate-x-[30px]" : "translate-x-[0px]"
                  }`}
                />

                {/* Icons ABOVE the toggle */}
                <div className="absolute z-10 flex w-full gap-4 items-center px-2 text-[16px]">
                  <FaUser
                    className={
                      !isDuo
                        ? "opacity-100 text-[#7E56DA] "
                        : "opacity-40 text-white"
                    }
                  />
                  <MdPeopleAlt
                    className={
                      isDuo
                        ? "opacity-100 text-[#7E56DA] "
                        : "opacity-40 text-white "
                    }
                  />
                </div>
              </div>

              {/* Large Click Image: Only visible on lg and up */}
              <img
                src={ClickHereLarge}
                alt="Click here large"
                className="hidden lg:block absolute -top-20 left-[160%] -translate-x-1/2 h-auto w-[200px] max-w-none"
              />

              <img
                src={ClickHereArrow}
                alt="Click here arrow"
                className="block lg:hidden absolute top-1 left-[90%] ml-2 h-auto w-[120px] max-w-none"
              />
            </div>
          </span>
          <div className="w-[120px] lg:hidden"></div>
          <span
            className={`text-[16px] lg:text-[36px] text-semibold ${
              !isDuo ? "faded" : "highlighted"
            }`}
          >
            Duo
          </span>
        </div>
        <p className="text-[#3F3F3F] text-[13px] lg:text-[26px] md:w-[70%] lg:w-[70%] pt-2">
          <span>
            Create personal skill-based challenges, invite others, and get
            judged
            <br /> by your trusted circle. Compete solo or go head-to-head in
            Duo mode.
          </span>
        </p>
      </div>

      {/* Carousel Autoplay */}

      <div className="">
        <div className="carousel">
          <div className="hidden w-full md:block">
            <AutoCarousel1 slides={isDuo ? duoSlides : soloSlides} />
          </div>

          {/* Mobile Carousel */}
          <div className="block w-full md:hidden">
            <AutoCarousel1
              slides={isDuo ? mobileDuoSlides : mobileSingleSlides}
            />
          </div>
        </div>
      </div>
      <img
        className="challenge-image hidden sm:block"
        src={isDuo ? ChallengeCarousel : ChallengeCarouselSolo}
        alt="Challenge Carousel"
      />
      <div className="-mx-[100px] p-8 sm:p-0"></div>

      {/* <CardCarousel /> */}
    </section>
  );
}
