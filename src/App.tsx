
import "./index.css";
import Hero1 from "./Hero1/Hero1";
import ContactUs from "./Contact/Contact";
import About from "./About/About";
import Header from './Header/Fixed-Navbar';
import FaqSection from "./Faq/faq";
import Footer from "./footer/footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  Workflows from "./services/services";
import MeetTheVisionaries from "./Founders/founders";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true,     // animate only once per scroll
      easing: 'ease-out-cubic', // nice easing
      offset: 100,    // how far before it triggers
    });
  }, []);
  return (

    <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip ">
      {/* <StickyNavbar /> */}
      <Header />
      <Hero1 />
      <About></About>
      <Workflows/>
      <MeetTheVisionaries />
      <FaqSection />
      <ContactUs />
      <Footer />
  
    </div>


  );
}

export default App;
