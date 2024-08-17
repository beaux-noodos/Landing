import AboutSection from "../components/about/AboutSection";
import Banner from "../components/Banner";
import ToTheTop from "../components/ToTheTop";
import Features from "../components/features/Features";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import TestimonialsSection from "../components/testimonial/TestimonialsSection";

export const About = () => {
  return (
    <>
      <ToTheTop />
      <Navbar bg='bg-background' linkColor='text-primaryBrown' logo='img/logo2.png' />
      <Banner title='About us' link='About-us' />
      <AboutSection />
      <Features bg='bg-primaryGreen' titleColor='text-white'/>
      <TestimonialsSection />
      <Footer />
    </>
  )
};