import Banner from "../components/Banner";
import ReviewCard from "../components/projectDetails/ReviewCard";
import ReviewForm from "../components/projectDetails/ReviewForm";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import ToTheTop from "../components/ToTheTop";
import { motion } from 'framer-motion';
import ProjectText from "../components/projectDetails/ProjectText";
import ProjectInfo from "../components/projectDetails/ProjectInfo";

export const ProjectDetails = () => {

    const projectInfo = {
        trainerName: "George Mathews",
        price: 230,
        availableSeats: 15,
        schedule: "2.00 pm to 4.00 pm"
    };

    const objectivesContent = `
    When you enter into any new area of science, you almost always find yourself with a baffling new language of technical terms to learn before you can converse with the experts. This is certainly true in astronomy both in terms of terms that refer to the cosmos and terms that describe the tools of the trade, the most prevalent being the telescope.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
  `;

    const eligibilityContent = `
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. 
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
  `;

    const reviews = [
        {
            imgSrc: "img/blog/c1.jpg",
            reviewerName: "Emilly Blunt",
            reviewText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
            stars: 3
        },
        {
            imgSrc: "img/blog/c2.jpg",
            reviewerName: "Elsie Cunningham",
            reviewText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
            stars: 3
        },
        {
            imgSrc: "img/blog/c3.jpg",
            reviewerName: "Maria Luna",
            reviewText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
            stars: 3
        }
    ];

    return (
        <>
            <ToTheTop />
            <Navbar bg='bg-background' linkColor='text-primaryBrown' logo='img/logo2.png' />
            <Banner title='Project Details' link='Projects Details' />
            <div className="flex py-32 px-28 gap-9">
                <div>
                    <motion.img
                        src="./images/citron.jpg"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                    />
                    <div>
                        <ProjectText title="Objectives" content={objectivesContent} />
                        <ProjectText title="Eligibility" content={eligibilityContent} />
                    </div>
                </div>
                <div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                        <ProjectInfo {...projectInfo} />
                        <a href="#" className="block text-center border border-secondary bg-secondary hover:bg-transparent text-white hover:text-secondary text-xs font-semibold py-4 mb-8">
                            INVEST
                        </a>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                        <ReviewForm />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                        {reviews.map((review, index) => (
                            <ReviewCard key={index} {...review} />
                        ))}
                    </motion.div>
                </div>
            </div>
            <Footer />
        </>
    )
};