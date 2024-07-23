// import AboutMe from "../AboutMe";
// import ContactMe from "../ContactMe";
// import Footer from "../Footer";
// import HeroSection from "../HeroSection";
// import MyPortfolio from "../MyPortfolio";
// import MySkills from "../MySkills";
// import Testimonial from "../Testimonials";

import HeroSection from "../../comp/Herosection";
import Projects from "../../comp/Projects";
import Skills from "../../comp/Skills";

export default function Home() {
  return (
    <>
      {/* <HeroSection />
      <MySkills />
      <AboutMe />
      <MyPortfolio />
      <Testimonial /> */}
      {/* <ContactMe /> */}
          {/* <Footer /> */}
          <HeroSection />
          <Skills />
          <Projects />
          <Skills/>
    </>
  );
}
