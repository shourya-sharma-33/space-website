import React, { useEffect } from "react";
import bgvideo from "./assets/earth-bg.mp4";
import Navbar from "./components/Navbar/navbar";
import Hero from "./components/Hero/hero";
import Services from "./components/Services/services";
import Banner from "./components/Banner/banner";
import Banner2 from "./components/Banner/banner2";
import Footer from "./components/Footer/footer";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  // ✅ Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true,     // whether animation should happen only once
    });
  }, []);

  return (
    <div className="relative">
      {/* ✅ Video Background */}
      <video
        autoPlay
        loop
        muted
        className="fixed top-0 left-0 w-full h-screen object-cover z-[-1]"
      >
        <source src={bgvideo} type="video/mp4" />
      </video>

      {/* ✅ Navbar + Hero section on top of video */}
      <div className="relative z-10">
        <Navbar />
        <section className="min-h-screen flex items-center justify-center">
          <Hero />
        </section>
      </div>

      {/* ✅ Black Background starts after Hero */}
      <section className="bg-black">
        <Services />
        <div className="mx-10 sm:mx-20">
          <Banner />
        </div>
        <div className="mx-10 sm:mx-20">
          <Banner2 />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
