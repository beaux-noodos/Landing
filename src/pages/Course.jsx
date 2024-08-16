import Banner from "../components/Banner";
import PopularCourses from "../components/course/PopularCourse";
import Features from "../components/features/Features";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import RegistrationArea from "../components/registration/RegistrationArea";
import ToTheTop from "../components/ToTheTop";

export const Course = () => {
  return (
    <>
      <ToTheTop />
      <Navbar bg='bg-background' linkColor='text-primaryBrown' logo='img/logo2.png' />
      <Banner title='Courses' link='Courses' />
      <PopularCourses />
      <Features />
      <Footer />
    </>
  )
};