import React from "react";
import SkillsPeLogo from "../assets/logo.svg";
import WarningIcon from "../assets/warning-icon.svg";

const Disclaimer = () => {
  return (
    <section
      className="
    flex bg-[#f5f1fa] p-[60px] rounded-[30px] font-['Sora'] text-[#444]
    border border-[#a8a8a8] hidden md:flex min-h-[300px]
  "
    >
      {/* Logo */}
      <div className="flex-1 min-w-[200px] flex items-stretch justify-center mb-5 md:mb-0">
        <img
          src={SkillsPeLogo}
          alt="SkillsPe Logo"
          className="w-auto object-contain"
        />
      </div>

      {/* Content */}
      <div className="flex-3 md:pl-[40px] w-[746px]">
        <div className="flex flex-col gap-4">
          <div className="flex  gap-2  items-end ">
            <img
              src={WarningIcon}
              alt="Warning"
              className="w-[28px] mb-1"
            />
            <h2 className="text-[#7b2cbf]  text-[28px] font-semibold">
              Disclaimer
            </h2>
          </div>

          <p className="text-[14.5px] leading-[1.9] text-[#666] ">
            Several deceptive emails, websites, blogs etc. claiming to be from
            or associated with Us may be circulated or are circulating on the
            Internet (“Deceptive Communication”). Such Deceptive Communication
            may include our logo, photos, links, content or other information.
            Some Deceptive Communication may call the User requesting the User
            to provide Mobile Number, OTP etc. or any other information and
            inform the User that the User has won a prize/ gift or provide a
            method to commit an illegal/ unauthorized act or deed or request
            detailed Personal Information or a payment of any sort. The sources
            and contents of these Deceptive Communications and accompanying
            materials are in no way associated with Us.
          </p>

          <p className="text-[14.5px] leading-[1.9] text-[#666] ">
            For your own protection, we strongly recommend to not respond to
            such Deceptive Communication. You agree that we shall not be liable
            for any direct or indirect, consequential or inconsequential loss,
            damage and/or harm that you may suffer by relying and/or acting upon
            such Deceptive Communications. Except, as provided for the purpose
            of verification, as set out under the Terms and Conditions, We
            and/or Our employees will not contact you to divulge your SPDI
            (Sensitive Personal Data and Information).
          </p>
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;
