import Banner from "../components/Banner";
import PopularCourses from "../components/course/PopularCourse";
import Features from "../components/features/Features";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import RegistrationArea from "../components/registration/RegistrationArea";

export const Course = () => {
  return (
    <>
      <Navbar bg='bg-secondary' linkColor='text-white' logo='img/logo2.png' />
      <Banner title='Courses' link='Courses' />
      <div className="pt-32">
        <PopularCourses />
      </div>
      <RegistrationArea />
      <Features />
      <Footer />
    </>
  )
};