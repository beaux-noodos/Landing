import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import ToTheTop from "../components/ToTheTop";
import PopularCourses from "../components/course/PopularCourse";
import EventsArea from "../components/event/EventsArea";
import Features from "../components/features/Features";
import HomeBanner from "../components/home/HomeBanner";
import RegistrationArea from "../components/registration/RegistrationArea";
import TestimonialsSection from "../components/testimonial/TestimonialsSection";
import TrainerArea from "../components/trainer/TrainerArea";

export const Home = () => {
  return (
    <>
      <ToTheTop />
      <Navbar bg='bg-background' linkColor='text-primaryBrown' logo='img/logo.png' />
      <HomeBanner />
      <Features bg='bg-background' titleColor='text-secondaryGreen'/>
      <PopularCourses />
      <EventsArea />
      <TestimonialsSection />
      <Footer />
    </>
  )
};