import "../css/Section6.css";

import background4 from "../assets/section5-background4.svg";
import background5 from "../assets/section5-background5.svg";
import background6 from "../assets/section5-background6.svg";
import background7 from "../assets/section5-background7.svg";

import tickImage from "../assets/tick-image.svg";
import archerImage from "../assets/archer-image.svg";
import handImage from "../assets/hand-image.svg";
import graphImage from "../assets/graph-image.svg";
import { useEffect, useState } from "react";

import Disclaimer from "./Disclaimer.jsx";

export default function Section6() {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 760);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 760);
    };

    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isWideScreen ? <Section6Tailwind /> : <Section6CSS />;
}
function Section6Tailwind() {
  return (
    <section className="w-full bg-[#f7f3ff] font-sora px-6 md:px-10 lg:px-24 py-10 md:py-16">
      {/* Header */}
      <div className="text-left mb-10 max-w-[50%]">
        <h1 className="text-[#1b184f] text-[2rem] lg:text-[50px] font-semibold mb-2 tracking-[0]  leading-none">
          Features Aise, Jo Banaye Skills Ko Power Play!
        </h1>
        <p className="text-[#3f3f3f] text-[16px] pt-8 lg:text-[26px] leading-6 font-light tracking-[0] font-satoshi ">
          Discover a smarter way to grow, earn,<br />and win with your skills!
        </p>
      </div>

      {/* Feature Image Grid */}
      <div className="grid grid-cols-[2fr_1.5fr] grid-rows-[repeat(3,250px)] gap-6 mt-5 relative">
        {/* Item 1 */}
        <div className="relative col-start-1 row-start-1 rounded-[20px] overflow-hidden">
          <img
            src={background5}
            alt="Background"
            className="absolute inset-0 object-cover w-full h-full rounded-[20px] z-0"
          />

          <div className="relative z-10 p-4 sm:p-5 text-white w-[90%] h-full flex flex-col justify-between">
            <h2 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[36px] font-bold">
              Trust & Safety
            </h2>

            <p className="mt-4 sm:mt-6 text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] w-[85%] sm:w-[80%] md:w-[70%] font-normal">
              KYC-backed identity checks and real-time moderation to keep every
              challenge honest and every user protected
            </p>
          </div>

          <img
            src={tickImage}
            alt="tick"
            className="absolute bottom-[10%] right-0 w-[60px] sm:w-[80px] md:w-[170px] lg:w-[170px] xl:w-[200px] z-10"
          />
        </div>

        {/* Item 2 */}
        <div className="relative col-span-2 row-start-3 rounded-[20px] overflow-hidden">
          {/* Background Image */}
          <img
            src={background6}
            alt="Skill Portfolio"
            className="absolute inset-0 object-cover w-full h-full rounded-[20px] z-0"
          />

          {/* Foreground Content */}
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4 w-full h-full px-4 sm:px-6 md:px-8 lg:px-10 py-6 text-white">
            {/* Text Block */}
            <div className="flex justify-between w-full">
              <div className="flex w-[60%] flex flex-col justify-center items-start text-left">
                <h2 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[36px] font-bold">
                  Your Skill Portfolio
                </h2>
                <p className="mt-4 sm:mt-6 text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-normal max-w-[90%] sm:max-w-[80%]">
                  Track your progress, showcase completed challenges, and build
                  a powerful portfolio that reflects your real-world skills.
                </p>
              </div>

              {/* Image Block */}
              
                <img
                  src={graphImage}
                  alt="graph"
                  className="absolute right-0 top-[10%] xl:top-[-10%] w-[70%] sm:w-[60%] md:w-[50%] lg:w-[40%] h-auto max-w-[300px] sm:max-w-[400px] lg:max-w-[500px]"
                />
            </div>
          </div>
        </div>

        {/* Item 3 */}
        <div className="relative col-start-1 row-start-2 rounded-[20px] overflow-hidden">
          <img
            src={background4}
            alt="Sharpen Skills"
            className="absolute inset-0 object-cover w-full h-full rounded-[20px] z-0"
          />

          <div className="relative z-10 p-4 sm:p-5 text-white w-[90%] h-full flex flex-col justify-between text-right">
            <h2 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[36px] font-bold">
              Sharpen Your Skills!
            </h2>

            <p className="mt-4 sm:mt-6 text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] w-[85%] sm:w-[80%] md:w-[70%] ml-auto font-normal">
              Level up your skills by playing more challenges! Compete & win
              daily.
            </p>
          </div>

          <img
            src={archerImage}
            alt="archer"
            className="absolute bottom-[5%] -left-5 w-[60px] sm:w-[80px] md:w-[170px] lg:w-[170px] xl:w-[200px] z-10"
          />
        </div>

        {/* Item 4 */}
        <div className="relative col-start-2 row-span-2 rounded-[20px] overflow-hidden">
          <img
            src={background7}
            alt="Not playing? Still earning"
            className="absolute inset-0 object-cover w-full h-full rounded-[20px] z-0"
          />

          <div className="relative z-10 p-4 sm:p-5 text-white w-[100%] h-full flex flex-col justify-between ">
            <div className="flex flex-col justify-between h-full">
              <h2 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[36px] font-bold leading-snug mb-2">
                Not playing?
                <br />
                Still earning
              </h2>

              <p className="text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] leading-[1.4] px-8 mx-auto font-normal">
                Join as a Motivator. Predict the Challenger’s success with a Yes
                or No and earn if you're right!
              </p>
            </div>
          </div>

          <img
            src={handImage}
            alt="hand"
            className="absolute top-[25%] right-0 w-[100px] sm:w-[140px] md:w-[270px] lg:w-[300px] h-auto z-10"
          />
        </div>
      </div>

      <br />
      <Disclaimer />
    </section>
  );
}
function Section6CSS() {
  return (
    <section className="features-section">
      <div className="features-header">
        <h1>Features Aise, Jo Banaye Skills Ko Power Play!</h1>
        <br />
        <p>Discover a smarter way to grow, earn, and win with your skills!</p>
        <br />
      </div>

      {/* Feature Image Container */}
      <div className="feature-image-container">
        {/* Image Container 1 */}
        <div className="feature-image feature-image-item1">
          <img src={background5} alt="Background not found" />
          <div>
            <div className="feature-image-text">
              <h2 className="feature-heading feature-heading1">
                Trust & Safety
              </h2>
              <p className="feature-description feature-description1">
                KYC-backed identity checks and real-time moderation to keep
                every challenge honest and every user protected
              </p>
            </div>

            <div className="feature-tick-icon">
              <img src={tickImage} alt="tick" />
            </div>
          </div>
        </div>

        {/* Image Container 2 */}
        <div className="feature-image feature-image-item2 ">
          <img src={background6} alt="Your Skill Portfolio" />
          <div>
            <div className="feature-image-text">
              <h2 className="feature-heading feature-heading2">
                Your Skill Portfolio
              </h2>
              <p className="feature-description feature-description2 ">
                Track your progress, showcase completed challenges, and build a
                powerful portfolio that reflects your real-world skills.
                
              </p>
              <img
                className="feature-growthChart-icon"
                src={graphImage}
                alt="graphImage not found"
              />
            </div>
          </div>
        </div>

        {/* Image Container 3 */}
        <div className="feature-image feature-image-item3">
          <img src={background4} alt="Sharpen Your Skills" />
          <div>
            <div className="feature-image-text pr-8">
              <h2 className="feature-heading feature-heading3">
                Sharpen Your Skills!
              </h2>
              <p className="feature-description feature-description3">
                Level up your skills by playing more challenges! Compete &amp;
                win daily.
              </p>
            </div>
            <div className="feature-archer-icon">
              <img src={archerImage} alt="tick" />
            </div>
          </div>
        </div>

        {/* Image Container 4 */}
        <div className="feature-image feature-image-item4">
          <img src={background7} alt="Not playing? Still earning" />
          <div className="">
            <div className="feature-image-text">
              <h2 className="feature-heading feature-heading4">
                Not playing?
                <br />
                Still earning
              </h2>
              <div className="feature-description feature-description4">
                Join as a Motivator. Predict the Challenger’s success with a Yes
                or No and earn if you're right!
              </div>
            </div>
            <div className="feature-hand-icon">
              <img src={handImage} alt="tick" />
            </div>
          </div>
        </div>
      </div>
      <br />
      <Disclaimer />
    </section>
  );
}
