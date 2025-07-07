import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Footer from "./components/Footer";

function App() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDuo, setIsDuo] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowHeader(false); // Scrolling down
      } else {
        setShowHeader(true); // Scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <Header visible={showHeader} />
      <div className="pt-[80px]">
        <Section1 />

        <div id="how-it-works" className="scroll-mt-[100px]">
          <Section2 />
        </div>

        <Section3 />
        <Section4 isDuo={isDuo} setIsDuo={setIsDuo}/>
        <Section5 isDuo={isDuo}/>

        <div id="features" className="scroll-mt-[100px]">
          <Section6 />
        </div>

        <div id="mobile-app" className="scroll-mt-[100px]">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
