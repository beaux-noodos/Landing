import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import ContactSection from "../components/contact/ContactSection";

export const Contact = () => {
    return (
        <>
            <Navbar bg='bg-secondary' linkColor='text-white' logo='img/logo2.png' />
            <Banner title='Contact us' link='Contact' />
            <ContactSection />
            <Footer />
        </>
    )
};