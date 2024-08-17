import Banner from "../components/Banner";
import Features from "../components/features/Features";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import ToTheTop from "../components/ToTheTop";
import PopularProject from "../components/project/PopularProject";

export const Project = () => {
  return (
    <>
      <ToTheTop />
      <div className="flex justify-center">
        <Navbar bg='bg-background' linkColor='text-primaryBrown' logo='img/logo.png' />
      </div>
      <Banner title='Projects' link='Projects' />
      <PopularProject bg='bg-background' textColor='text-secondaryGreen' />
      <Features />
      <Footer />
    </>
  )
};