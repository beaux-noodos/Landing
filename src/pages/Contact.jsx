import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import ToTheTop from "../components/ToTheTop";
import ContactSection from "../components/contact/ContactSection";

export const Contact = () => {
    return (
        <>
            <ToTheTop />
            <Navbar bg='bg-secondary' linkColor='text-white' logo='img/logo2.png' />
            <Banner title='Contact us' link='Contact' />
            <ContactSection />
            <Footer />
        </>
    )
};