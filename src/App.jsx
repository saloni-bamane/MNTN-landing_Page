import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import BgImage from "./components/BgImage";
import Section from "./components/Section";
import Section1 from "./components/Section1";
import BackgroundImage from "./BackgroundImage";

function App() {
  return (
    <>
      <div className="relative -z-20 h-full bg-backgroundColor text-neutral-50">
        {/* <BgImage /> */}

        <Navbar />
        {/* <BackgroundImage /> */}
        <Hero />
        <div className="px-[14rem]">
          <Section1 />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
