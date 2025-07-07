import PhoneImage from "../assets/mobile-image.svg";

export default function Section2() {
  return (
    <div className="w-full flex flex-col  lg:flex-row items-center  lg:items-start justify-between bg-[#f4efff] px-5 sm:px-8 md:px-10 lg:px-20 xl:px-24 2xl:px-32 py-12 gap-10 overflow-hidden">
      {/* Left Panel */}
      <div className="flex-1 font-[sora]  text-center lg:text-left relative top-0 md:top-10 xl:top-[90px]">
        <h1 className="text-[26px] sm:text-[28px] md:text-[36px] lg:pb-8 lg:text-[42px] xl:text-[50px] font-bold text-[#1b184f] leading-tight">
          Jo Socha Wahi <br /> Sach Nikla?
        </h1>

        <h2 className="text-[20px] sm:text-[22px] md:text-[24px] xl:text-[32px] text-[#7e56da] font-bold mt-4 tracking-wide leading-[120%]">
          Predict Like a Pro.
        </h2>

        <p className="mt-2  text-[14px] sm:text-[16px] md:text-[17px] xl:text-[27px] text-[#3f3f3f] font-[satoshi] max-w-[400px] mx-auto lg:mx-0 pb-5">
          Test your knowledge from sports to finance, put your opinion in
          skill-based prediction challenges and earn money.
        </p>

        {/* Yes / No bar */}
        <div
          className="mt-3 lg:mt-12 flex  items-end justify-between gap-4 w-full max-w-[480px] p-[16px]  lg:py-[24px] rounded-xl mx-auto lg:mx-0 shadow-sm border border-[#3F3F3F]/10"
          style={{
            background: `linear-gradient(to bottom right, 
                      rgba(126, 86, 218, 0.1) 0%, 
                      rgba(255, 255, 255, 0.1) 54%, 
                      rgba(255, 52, 193, 0.1) 100%)`,
          }}
        >
          {" "}
          {/* YES Button */}
          <div className=" flex items-center p-[16px] justify-center bg-[#7e5bff] font-satoshi text-white text-[16px] lg:text-[20px] font-bold rounded-lg">
            YES
          </div>
          {/* Percentage Bar */}
          {/* Gradient Fill */}
          <div className=" w-full flex flex-col">
            {/* Gradient Bar */}
            <div className="h-2 w-full rounded-md flex overflow-hidden">
              <div className="bg-[#7E56DA]" style={{ width: "30%" }}></div>
              <div className="bg-[#FF34C1] flex-1"></div>
            </div>

            {/* Percent Labels */}
            <div className=" flex  justify-between mt-1 text-[12px] lg:text-[16px] text-[#3F3F3F]/70 Font-bold ">
              <span className="">30%</span>
              <span className="">70%</span>
            </div>
          </div>
          {/* Left Percentage */}
          {/* NO Button */}
          <div className=" flex items-center p-[16px] font-satoshi justify-center bg-[#FF34C1] text-white text-[16px] lg:text-[20px] font-bold rounded-lg">
            NO
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex-1 flex justify-center items-start relative top-0 md:top-10 xl:top-[90px]">
        <img
          src={PhoneImage}
          alt="phone"
          className="w-full max-w-[320px] sm:max-w-full object-contain block"
        />
      </div>
    </div>
  );
}
