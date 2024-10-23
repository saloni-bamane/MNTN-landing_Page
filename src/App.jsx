import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Section1 from "./components/Section1";
import BgImage from "./components/BgImage";

function App() {
  return (
    <>
      <div className="h-full bg-backgroundColor text-neutral-50">
        <Navbar />
        <BgImage />
        <Hero />
        <div className="md:px-8 lg:px-24 xl:px-[14rem]">
          <Section1 />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
