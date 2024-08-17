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
      <div className="flex justify-center">
        <Navbar bg='bg-background' linkColor='text-primaryBrown' logo='img/logo.png' />
      </div>
      <HomeBanner />
      <Features bg='bg-background' titleColor='text-secondaryGreen' />
      <PopularProject bg='bg-primaryGreen' textColor='text-background' />
      <TestimonialsSection />
      <Footer />
    </>
  )
};