import React, { useEffect, useRef, useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
// import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from "embla-carousel-autoplay";

// importing components
import CardCarousel from "./card_carousel";
import ClickHereArrow from "../assets/clickHere_arrow.svg";
//  Importing Images
import DuoImage1 from "../assets/duo-carousel-image1.svg";
import DuoImage2 from "../assets/duo-carousel-image2.svg";
import DuoImage3 from "../assets/duo-carousel-image3.svg";
import SoloImage1 from "../assets/solo-carousel-image1.svg";
import SoloImage2 from "../assets/solo-carousel-image2.svg";
import SoloImage3 from "../assets/solo-carousel-image3.svg";
import SoloImage4 from "../assets/solo-carousel-image4.svg";
import SoloIcon from "../assets/solo-icon-image.svg";
import DuoIcon from "../assets/duo-icon-image.svg";
import ChallengeCarousel from "../assets/Section4_Image2.svg";

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
const soloSlides = [SoloImage1, SoloImage2, SoloImage3, SoloImage4];
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
      opacity: 0.1,
      filter: "blur(2px)",
      // zIndex: 2,
    },
    right: {
      scale: 0.7,
      x: "100%",
      opacity: 0.1,
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
      <div className="relative max-w-screen-lg mx-auto w-full h-[140px] sm:h-[280px] md:h-[320px] lg:h-[380px] flex items-center justify-center">
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
              duration: 0.5,
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

// const AutoCarousel = (props) => {
//   const [emblaRef, emblaApi] = useEmblaCarousel(
//     { loop: true, align: 'center' },
//     [Autoplay({ delay: 4000 })]
//   );
//   const [selectedIndex, setSelectedIndex] = useState(0);

//   const slides = props.slides || [];

//   const onSelect = useCallback(() => {
//     if (!emblaApi) return;
//     setSelectedIndex(emblaApi.selectedScrollSnap());
//   }, [emblaApi]);

//   useEffect(() => {
//     if (!emblaApi) return;
//     emblaApi.on('select', onSelect);
//     onSelect();
//   }, [emblaApi, onSelect]);

//   return (
//     <div className='embla'>
//       <div className='embla__viewport' ref={emblaRef}>
//         <div className='embla__container'>
//           {slides.map((img, index) => (
//             <div
//               className={`embla__slide ${
//                 selectedIndex === index ? 'is-active' : 'is-fade'
//               }`}
//               key={index}
//             >
//               <img
//                 src={img}
//                 alt={`slide-${index}`}
//                 className='embla__slide__img'
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

export default function Section4() {
  const [isDuo, setIsDuo] = useState(true);

  return (
    <section className='challenge-section'>
      {/* Top Text Block */}
      <div className="challenge-header px-4 py-6 md:px-10 md:py-8 lg:px-[100px] lg:py-[50px]">
      <h1>
          Kar Le Challenge,
          <br />
          Khud Se Ya Apne Dost Se!
        </h1>
        <div className='highlight'>
          Prove your Skills either way, Play
          <span className={isDuo ? 'faded' : 'highlighted'}>SOLO</span>
          <span className='mode-switch-image'>
            <FormGroup>
              <FormControlLabel
                control={
                  <MaterialUISwitch
                    sx={{ m: 1 }}
                    checked={isDuo}
                    onChange={() => setIsDuo((prev) => !prev)}
                  />
                }
                label=''
              />
            </FormGroup>
          </span>
          <span className={isDuo ? 'highlighted' : 'faded'}>DUO</span>
          {/* <img
            className='click-here-arrow'
            src={ClickHereArrow}
            alt='Click Here Arrow'
          /> */}
        </div>
        <p className='subtext'>
          <span>
            Create personal skill-based challenges, invite others, and get
            judged by your trusted circle. Compete solo or go head-to-head in
            Duo mode.
          </span>
        </p>
      </div>

      {/* Carousel Autoplay */}

      <div className=''>
        <div className='carousel'>
        <AutoCarousel1 slides={isDuo ? duoSlides : soloSlides} />

        </div>
      </div>
      <img
        className='challenge-image hidden sm:block'
        src={ChallengeCarousel}
        alt='Challenge Carousel'
      />
      <div className='-mx-[100px] p-8 sm:p-0'>
      </div>

      {/* <CardCarousel /> */}
    </section>
  );
}