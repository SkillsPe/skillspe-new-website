import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Importing CSS File
import "../css/card_carousel.css";

// Importing Images
import LeftArrowBtn from "../assets/left-arrow-btn.svg";
import RightArrowBtn from "../assets/right-arrow-btn.svg";
import Challenger1 from "../assets/challenger1.svg";
import InviteChallenger from "../assets/invite-challenger-image.svg";
import InviteProfileIcon from "../assets/invite_profile.svg";

import VsImage from "../assets/vs-image.svg";
import ProfileIcon1 from "../assets/animate_profile_icon1.svg";
import Check from "../assets/check.svg";

import ProfileIcon2 from "../assets/animate_profile_icon2.svg";
import ProfileIcon5 from "../assets/animate_profile_icon5.svg";
import ProfileIcon6 from "../assets/animate_profile_icon6.svg";
import ProfileIcon3 from "../assets/animate_profile_icon3.svg";
import ProfileIcon4 from "../assets/animate_profile_icon4.svg";
import InviteMotivatorsImage from "../assets/invite-motivators-image.svg";
import InviteModeratorImage from "../assets/invite-moderators-image.svg";

const Card2 = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [xOffset, setXOffset] = useState(0);
  const [filled, setFilled] = useState(false);
  const [iconsVisible, setIconsVisible] = useState(false);
  const [showIcons, setShowIcons] = useState(false);
  const [icon2Moved, setIcon2Moved] = useState(false);
  const [yOffset, setYOffset] = useState(0);
  const [icon2AtCenter, setIcon2AtCenter] = useState(false);
  const [resetInvite, setResetInvite] = useState(false);
  const [isAnimating, setIsAnimating] = useState(true); // ✅ animation controller
  const containerRef = useRef(null);
  const inviteRef = useRef(null);

  const activateTheIcons = () => {
    setIconsVisible(true);
    setTimeout(() => setShowIcons(true), 700);
    setTimeout(() => setIcon2Moved(true), 3000);
  };

  useEffect(() => {
    if (!isAnimating) return;

    setFadeOut(false);
    setFilled(false);
    setIconsVisible(false);
    setShowIcons(false);
    setIcon2Moved(false);
    setIcon2AtCenter(false);
    setResetInvite(false);
    setXOffset(0);
    setYOffset(0);

    const startTimeout = setTimeout(() => {
      if (containerRef.current && inviteRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const inviteRect = inviteRef.current.getBoundingClientRect();
        const containerCenter = containerRect.left + containerRect.width / 2;
        const inviteCenter = inviteRect.left + inviteRect.width / 2;

        const distanceToCenter = containerCenter - inviteCenter;
        const containerCenterY = containerRect.top + containerRect.height / 2;
        const inviteCenterY = inviteRect.top + inviteRect.height / 2;
        const distanceToCenterY = containerCenterY - inviteCenterY;

        setXOffset(distanceToCenter);
        setYOffset(distanceToCenterY);
      }

      setTimeout(() => setFilled(true), 1300);
      setFadeOut(true);
    }, 1000);

    return () => clearTimeout(startTimeout);
  }, [isAnimating]);

  useEffect(() => {
    if (icon2AtCenter) {
      const timeout = setTimeout(() => {
        setResetInvite(true);
        setFadeOut(false);
        setFilled(false);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [icon2AtCenter]);

  useEffect(() => {
    if (!fadeOut && resetInvite) {
      const resetTimeout = setTimeout(() => {
        setIsAnimating(false);
        setTimeout(() => {
          setIsAnimating(true);
        }, 100);
      }, 2000);
      return () => clearTimeout(resetTimeout);
    }
  }, [fadeOut, resetInvite]);

  return (
    <div className="vs-card w-[280px] sm:w-[350px] bg-white rounded-lg flex items-center justify-center ">
      <div
        className="w-[100%] flex items-center justify-between px-6 relative"
        ref={containerRef}
      >
        <motion.img
          src={Challenger1}
          alt="Player 1"
          className="avatar"
          animate={{
            opacity: fadeOut ? 0 : 1,
            visibility: fadeOut ? "hidden" : "visible",
          }}
          transition={{ duration: 0.5 }}
        />
        <motion.img
          src={VsImage}
          alt="VS"
          animate={{
            opacity: fadeOut ? 0 : 1,
            visibility: fadeOut ? "hidden" : "visible",
          }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          ref={inviteRef}
          animate={{ x: fadeOut ? xOffset : 0 }}
          transition={{ type: "spring", duration: 1.4 }}
          className="flex flex-col items-center gap-2 mt-2 "
        >
          <AnimatePresence mode="wait">
            {!filled ? (
              <motion.div
                key="outlined"
                initial={{ opacity: 1, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0.6, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-center border-2 border-dotted border-[#7E56DA] rounded-full w-12 h-12 text-xl font-bold text-[#7E56DA]"
              >
                +
              </motion.div>
            ) : (
              <motion.div
                key="filled"
                onAnimationComplete={() => activateTheIcons()}
                initial={{ opacity: 1, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0.6, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="p-1 border border-[#7E56DA]/50 rounded-full"
              >
                <div className="flex items-center justify-center bg-[#7E56DA] border-2 border-dotted border-[#7E56DA] rounded-full w-12 h-12 text-xl font-bold text-white">
                  +
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="text-[16px] text-[#7E56DA] leading-tight flex flex-col items-center">
            <div>{resetInvite ? "Elaine" : "Invite"}</div>
            <div>{resetInvite ? "Montgomery" : "Challenger"}</div>
          </div>
        </motion.div>

        {showIcons && (
          <>
            <AnimatePresence>
              {!icon2AtCenter && (
                <motion.img
                  key="icon1"
                  className="absolute right-10 bottom-30"
                  src={ProfileIcon1}
                  height={40}
                  width={40}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.4 }}
                />
              )}
            </AnimatePresence>

            <motion.img
              className="absolute left-10 top-20 z-20"
              src={ProfileIcon4}
              height={40}
              width={40}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1.15,
                x: resetInvite
                  ? -(2 * xOffset + 4)
                  : icon2Moved
                  ? -xOffset + 2
                  : 0,
                y: resetInvite ? yOffset - 64 : icon2Moved ? yOffset - 60 : 0,
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              onUpdate={(latest) => {
                const targetX = -xOffset + 2;
                const targetY = yOffset - 60;

                if (
                  icon2Moved &&
                  !icon2AtCenter &&
                  Math.abs(latest.x - targetX) < 2 &&
                  Math.abs(latest.y - targetY) < 2
                ) {
                  setTimeout(() => setIcon2AtCenter(true), 500);
                }
              }}
            />
          </>
        )}
      </div>
    </div>
  );
};

const Card3 = () => {
  const [moderatorInviteFill, setModeratorInviteFill] = useState(false);
  const [moderatorProfileFill, setModeratorProfileFill] = useState(false);
  const [showModeratorInfo, setShowModeratorInfo] = useState(false);
  const [showCheckModerator, setShowCheckModerator] = useState(false);
  const [showModeratorSelected, setShowModeratorSelected] = useState(false);

  const [hideInviteMotivators, setHideInviteMotivators] = useState(false);
  const [showMotivatorsImages, setShowMotivatorsImages] = useState(false);
  const [showMotivatorSelected, setMotivatorSelected] = useState(false);
  const [showMotivatorInvited, setShowMotivatorInvited] = useState(false);
  const [displayMotivatorText, setDisplayMotivatorText] = useState(false);
  const [nextInvite, setNextInvite] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setModeratorInviteFill(true);
    }, 100);
  }, [moderatorInviteFill]);

  useEffect(() => {
    if (moderatorInviteFill) {
      setTimeout(() => {
        setModeratorProfileFill(true);
        setHideInviteMotivators(true); 
      }, 1500);
    }
  }, [moderatorInviteFill]);

  useEffect(() => {
    if (moderatorProfileFill) {
      const timer = setTimeout(() => {
        setShowModeratorInfo(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [moderatorProfileFill]);

  useEffect(() => {
    if (showModeratorInfo) {
      const timer = setTimeout(() => {
        setShowCheckModerator(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showModeratorInfo]);

  useEffect(() => {
    if (showCheckModerator) {
      const timer = setTimeout(() => {
        setShowModeratorSelected(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showCheckModerator]);

  useEffect(() => {
    if (showModeratorSelected) {
      const resetTimer = setTimeout(() => {
        setModeratorInviteFill(false);
        setModeratorProfileFill(false);
        setShowModeratorInfo(false);
        setShowCheckModerator(false);
        setShowModeratorSelected(false);

        setTimeout(() => {
          setModeratorInviteFill(true);
        }, 100);
      }, 4000);

      return () => clearTimeout(resetTimer);
    }
  }, [showModeratorSelected]);


  useEffect(() => {
    if (hideInviteMotivators) {
      const timer = setTimeout(() => {
        setShowMotivatorsImages(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [hideInviteMotivators]);

  useEffect(() => {
    if (showMotivatorsImages) {
      const timer = setTimeout(() => {
        setMotivatorSelected(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showMotivatorsImages]);

  useEffect(() => {
    if (showMotivatorSelected) {
      const timer = setTimeout(() => {
        setShowMotivatorInvited(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showMotivatorSelected]);

  useEffect(() => {
    if (showMotivatorInvited) {
      const timer = setTimeout(() => {
        setDisplayMotivatorText(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showMotivatorInvited]);

  useEffect(() => {
    if (displayMotivatorText) {
      const timer = setTimeout(() => {
        setNextInvite(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [displayMotivatorText]);

  useEffect(() => {
    if (nextInvite) {
      const timer = setTimeout(() => {
        setHideInviteMotivators(false);
        setShowMotivatorsImages(false);
        setMotivatorSelected(false);
        setShowMotivatorInvited(false);
        setDisplayMotivatorText(false);
        setNextInvite(false);

        setTimeout(() => {
          setHideInviteMotivators(true);
        }, 100);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [nextInvite]);

  return (
<div className="card3   w-[280px] sm:w-[350px]">
{/* Header */}
      <div className="flex items-center justify-between">
        <AnimatePresence>
          {!hideInviteMotivators ? (
            <motion.div
              key="invite-default"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.6 } }}
            >
              <div className="text-[#7E56DA] text-[16px] font-medium">
                Invite
                <br />
                Motivator
              </div>
            </motion.div>
          ) : nextInvite ? (
            <motion.div
              key="invite-next"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.6 } }}
            >
              <div className="text-[#7E56DA] text-[16px] font-medium">
                Invite
                <br />
                Motivator
              </div>
            </motion.div>
          ) : displayMotivatorText ? (
            <motion.div
              key="invite-motivator"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.6 } }}
            >
              <div className="text-[#7E56DA] text-[16px] font-medium">
                Motivator
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>

        {/* Icon section */}
        <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="flex">
            <AnimatePresence mode="wait">
              {!hideInviteMotivators &&
                (!moderatorProfileFill ? (
                  <motion.div
                    key="outlined"
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center justify-center border-2 border-dotted border-[#7E56DA] rounded-full w-10 h-10 text-xl font-bold text-[#7E56DA]"
                  >
                    +
                  </motion.div>
                ) : (
                  <motion.div
                    key="filled"
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center justify-center bg-[#7E56DA] border-2 border-dotted border-[#7E56DA] rounded-full w-12 h-12 text-xl font-bold text-white"
                  >
                    +
                  </motion.div>
                ))}
            </AnimatePresence>

            {/* Group 1 */}
            <div className="flex items-center w-full">
              <div className="flex items-center">
                <AnimatePresence>
                  {!nextInvite ? (
                    <motion.img
                      key="icon1a"
                      src={ProfileIcon1}
                      height={40}
                      width={40}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3 }}
                    />
                  ) : (
                    <motion.img
                      key="icon1a"
                      src={InviteProfileIcon}
                      height={40}
                      width={40}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </AnimatePresence>
                <motion.img
                  key="icon2a"
                  src={ProfileIcon2}
                  height={40}
                  width={40}
                  className="-ml-[10px]"
                />
                {showMotivatorInvited && (
                  <motion.img
                    key="icon1a"
                    src={ProfileIcon1}
                    height={40}
                    width={40}
                    className="-ml-[10px]"
                  />
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Motivator Group 2 */}
        {showMotivatorsImages && (
          <AnimatePresence mode="wait">
            {!displayMotivatorText && (
              <motion.div
                className="flex items-center"
                exit={{ opacity: 0, duration: 0.6 }}
              >
                <div className="w-[2px] h-[30px] bg-[#8A8A8A]/20 mx-4"></div>
                <motion.div className="flex items-center ">
                  <div className="flex items-center gap-2">
                    <AnimatePresence mode="wait">
                      {!nextInvite && !showMotivatorInvited && (
                        <motion.div
                          key={showMotivatorSelected ? "check" : "icon1b"}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{
                            opacity: 0,
                            x: showMotivatorSelected ? 30 : 0,
                            transition: { duration: 0.3 },
                          }}
                        >
                          <motion.img
                            src={showMotivatorSelected ? Check : ProfileIcon1}
                            height={40}
                            width={40}
                            alt="Motivator Icon"
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <motion.img
                      key="icon2b"
                      src={ProfileIcon2}
                      height={40}
                      width={40}
                    />
                    <motion.img
                      key="icon3b"
                      src={ProfileIcon1}
                      height={40}
                      width={40}
                    />
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>

      {/* Separator */}
      <div className="h-[2px] bg-[#8A8A8A]/20"></div>

      {/* Moderator Bottom Section */}
      <div>
        {moderatorInviteFill && !showModeratorInfo && (
          <div className="flex items-center justify-between">
            <div className="text-[#7E56DA] text-[16px] font-medium">
              Invite
              <br />
              Moderator
            </div>
            <div className="flex">
              {!moderatorProfileFill ? (
                <motion.div
                  key="outlined"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="flex items-center justify-center border-2 border-dotted border-[#7E56DA] rounded-full w-12 h-12 text-xl font-bold text-[#7E56DA]"
                >
                  +
                </motion.div>
              ) : (
                <motion.div
                  key="filled"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="flex items-center justify-center bg-[#7E56DA] border-2 border-dotted border-[#7E56DA] rounded-full w-12 h-12 text-xl font-bold text-white"
                >
                  +
                </motion.div>
              )}
            </div>
          </div>
        )}

        {showModeratorInfo && (
          <div className="mt-4 flex items-center justify-between">
            {showModeratorSelected ? (
              <div className="text-[#7E56DA] text-[16px] font-medium">
                Moderator
              </div>
            ) : (
              <p className="text-[#929292] text-[12px]">
                There is only one slot, choose <br />
                your moderator wisely.
              </p>
            )}

            <div className="flex gap-2">
              <AnimatePresence>
                <motion.img
                  key="icon5"
                  animate={{
                    opacity: showModeratorSelected ? 0 : 1,
                    x: showModeratorSelected ? 30 : 0,
                    duration: 0.6,
                  }}
                  src={ProfileIcon5}
                  height={40}
                  width={40}
                />
              </AnimatePresence>
              <div>
                {showModeratorSelected && (
                  <motion.img
                    key="icon4"
                    src={ProfileIcon4}
                    height={40}
                    width={40}
                    exit={{ opacity: 0 }}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0, scale: 1.3 }}
                    transition={{ duration: 1 }}
                  />
                )}
              </div>
              <AnimatePresence mode="wait">
                {!showCheckModerator ? (
                  <motion.img
                    key="icon4"
                    src={ProfileIcon4}
                    height={40}
                    width={40}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                  />
                ) : (
                  <motion.img
                    key="Check"
                    src={Check}
                    height={40}
                    width={40}
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: showModeratorSelected ? 0 : 1,
                      x: showModeratorSelected ? 30 : 0,
                      duration: 0.6,
                    }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                  />
                )}
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const TypingText = ({ isNotActive }) => {
  const fullText = "The first one to finish 5Kms wins to finish 5Kms wins!";
  const words = fullText.split(" ");
  const [displayedWords, setDisplayedWords] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < words.length) {
        setDisplayedWords((prev) => [...prev, words[index]]);
        setIndex((prev) => prev + 1);
      }
    }, 500);

    if (index === words.length) {
      const resetTimeout = setTimeout(() => {
        setDisplayedWords([]);
        setIndex(0);
      }, 2000);

      return () => clearTimeout(resetTimeout);
    }

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="text-[#7E56DA] text-[20px] font-medium leading-relaxed">
      {displayedWords.join(" ")}
      <span className="animate-blink inline-block">|</span>
    </div>
  );
};

const sampleCards = [
  <div className=" p-8 w-[280px] sm:w-[350px]">
    <div className="flex flex-col justify-between h-full  space-y-6 ">
      <div className="flex w-max items-center justify-center rounded-[8px] p-[8px] border border-[#7E56DA]/20">
        🏃
      </div>

      <div className="text-[16px] text-[#3F3F3F]/60 ">
        Let’s create a new challenge!
      </div>
      <div className="flex flex-col space-y-2">
        <TypingText />

        <div className="bg-[#8A8A8A]/25 h-[2px] rounded-full"></div>
      </div>

      <div className="text-white bg-[#7E56DA] text-[14px] px-2 py-1 rounded-[4px] flex gap-[11px] justify-center ">
        Create Challenge
        <p>→</p>
      </div>
    </div>
  </div>,

  <Card2 />,
  <Card3 />,

  // <div className="min-w-full min-h-full">Step 4: Moderator Reviews</div>,
  // <div>Step 5: Winner Declared</div>,
  // <div>Step 6: Share your Badge</div>,
];

// const ActiveCards = ({cards}) =>{
//   const [startIndex,setStartIndex] = useState(0);
//   const totalCards = cards.length;
//   const handleNext = () => {
//     setStartIndex((prev) => (prev + 1) % totalCards);
//   };

//   const handlePrev = () => {
//     setStartIndex((prev) => (prev - 1 + totalCards) % totalCards);
//   };

// }

const CardCarousel = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const rotatedCards = [
    ...cards.slice(currentIndex),
    ...cards.slice(0, currentIndex),
  ];

  return (
    <div className="carousel-container overflow-hidden w-full ">
      <div className="carousel-container w-full">
        <div className="grid grid-flow-col auto-cols-max gap-4 items-stretch max-w-[200px] md:max-w-[200px]">
          {/* Active Card - Always First */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0.8 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0.8 }}
              transition={{ duration: 0.2 }}
              className="col-span-1 h-full"
            >
              <div className="bg-white rounded-lg h-full p-4">
                {cards[currentIndex]}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Remaining Cards */}
          <AnimatePresence mode="wait" initial={false}>
            {rotatedCards.slice(1).map((card, index) => (
              <motion.div
                key={`${currentIndex}-${index}`}
                custom={direction}
                initial={{
                  opacity: 0,
                  x: direction === 1 ? 100 : -100,
                  scale: 1,
                }}
                animate={{ opacity: 0.4, x: 0, scale: 1 }}
                exit={{
                  opacity: index === 0 ? 0.3 : 0.4,
                  scale: index === 0 ? 0.9 : 1,
                  transition: {
                    duration: 0.05,
                    ease: "easeInOut",
                  },
                }}
                transition={{
                  duration: 0.1,
                  type: "spring",
                  stiffness: 200,
                  damping: 10,
                  mass: 0.4,
                }}
                className="col-span-1 h-full"
              >
                <div className="bg-white rounded-lg h-full p-4">{card}</div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <div className="nav-container">
        <div className="nav-description">
          <span>
            Create a skill-based private challenge around something you’re great
            at like running, gaming, or anything!
          </span>
        </div>
        <div className="nav-buttons-wrapper">
          <button onClick={handlePrev} className="nav-btn">
            <img src={LeftArrowBtn} alt="left arrow" />
          </button>
          <button onClick={handleNext} className="nav-btn">
            <img src={RightArrowBtn} alt="right arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default function CardCarouselPreview() {
  return (
    <div className="card-carousel-container">
      <h1>
        Step 1 <br />
        Create a Duo Private Challenge
      </h1>
      <CardCarousel cards={sampleCards} />
    </div>
  );
}
