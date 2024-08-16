import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import ToTheTop from "../components/ToTheTop";
import Features from "../components/features/Features";
import HomeBanner from "../components/home/HomeBanner";
import PopularProject from "../components/project/PopularProject";
import TestimonialsSection from "../components/testimonial/TestimonialsSection";

export const Home = () => {
  return (
    <>
      <ToTheTop />
      <Navbar bg='bg-background' linkColor='text-primaryBrown' logo='img/logo.png' />
      <HomeBanner />
      <Features bg='bg-background' titleColor='text-secondaryGreen'/>
      <PopularProject />
      <TestimonialsSection />
      <Footer />
    </>
  )
};