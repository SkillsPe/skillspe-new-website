import PhoneImage from '../assets/mobile-image.svg';

export default function Section2() {
  return (
    <div className="w-full flex flex-col lg:flex-row items-start justify-between bg-[#f4efff] px-5 sm:px-8 md:px-10 lg:px-20 xl:px-24 2xl:px-32 py-12 gap-10 overflow-hidden">
      {/* Left Panel */}
      <div className="flex-1 font-[sora] text-center lg:text-left relative top-0 md:top-10 xl:top-[90px]">
        <h1 className="text-[26px] sm:text-[28px] md:text-[36px] lg:text-[42px] xl:text-[52px] font-bold text-[#1b184f] leading-tight">
          Jo Socha Wahi <br /> Sach Nikla?
        </h1>

        <h2 className="text-[20px] sm:text-[22px] md:text-[24px] xl:text-[32px] text-[#7e56da] font-bold mt-4 tracking-wide leading-[120%]">
          Predict Like a Pro.
        </h2>

        <p className="mt-2 text-[14px] sm:text-[16px] md:text-[17px] xl:text-[27px] text-[#3f3f3f] font-[satoshi] max-w-[400px] mx-auto lg:mx-0">
          Test your knowledge from sports to finance, put your opinion in skill-based prediction challenges and earn money.
        </p>

        {/* Yes / No bar */}
        <div className="mt-6 sm:mt-8 flex items-center gap-4 sm:gap-6 w-full max-w-[480px] bg-[#e5daff] sm:bg-transparent p-4 sm:p-0 rounded-xl mx-auto lg:mx-0">
          <div className="px-3 py-2 sm:px-5 sm:py-2.5 bg-[#7e5bff] text-white text-xs sm:text-sm font-bold rounded-lg">
            YES
          </div>

          <div className="relative flex-1 h-[6px] sm:h-[8px] rounded-full" style={{
            background: "linear-gradient(to right, #7e5bff 30%, #ff5fa2 70%)"
          }}>
            <div className="absolute left-[2%] top-[-18px] sm:top-[-22px] text-[11px] sm:text-[12px] text-[#444]">30%</div>
            <div className="absolute right-[2%] top-[-18px] sm:top-[-22px] text-[11px] sm:text-[12px] text-[#444]">70%</div>
          </div>

          <div className="px-3 py-2 sm:px-5 sm:py-2.5 bg-[#ff5fa2] text-white text-xs sm:text-sm font-bold rounded-lg">
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
