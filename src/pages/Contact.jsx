import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import ToTheTop from "../components/ToTheTop";
import ContactSection from "../components/contact/ContactSection";

export const Contact = () => {
    return (
        <>
            <ToTheTop />
            <div className="flex justify-center">
                <Navbar bg='bg-background' linkColor='text-primaryBrown' logo='img/logo.png' />
            </div>
            <Banner title='Contact us' link='Contact' />
            <ContactSection />
            <Footer />
        </>
    )
};