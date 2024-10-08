import Banner from "../components/Banner";
import ReviewCard from "../components/projectDetails/ReviewCard";
import ReviewForm from "../components/projectDetails/ReviewForm";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import ToTheTop from "../components/ToTheTop";
import { motion } from 'framer-motion';
import ProjectText from "../components/projectDetails/ProjectText";
import ProjectInfo from "../components/projectDetails/ProjectInfo";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const url="192.168.0.xxx:5173/login"
export const ProjectDetails = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const bearerToken = import.meta.env.VITE_BEARER_TOKEN;
    const apiUrl = import.meta.env.VITE_API_URL;

    useEffect(() => {
        axios.get(`${apiUrl}/projects/${id}`, {
            headers: {
                Authorization: `Bearer ${bearerToken}`
            }
        })
            .then(response => {
                setProject(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, [id]);

    console.log(project);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading project details.</p>;
    if (!project) return <p>No project found.</p>;

    const { user, title, description, price, status, creation_datetime, end_datetime, start_datetime } = project;

    return (
        <>
            <ToTheTop />
            <div className="flex justify-center">
                <Navbar bg='bg-background' linkColor='text-primaryBrown' logo='img/logo.png' />
            </div>
            <Banner title='Project Details' link='Projects Details' />
            <div className="flex lg:flex-row flex-col py-32 lg:px-28 justify-center justify-around items-center overflow-hidden gap-10">
                <div className="lg:px-0 px-10">
                    <motion.img
                        src="./images/carotte.jpg"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                    />
                    <div className="">
                        <ProjectText title="Title" content={project.title} />
                        <ProjectText title="Description" content={project.description} />
                    </div>
                </div>
                <div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                        <ProjectInfo {...project} />
                        <a href={url} className="block text-center border border-secondary bg-secondary hover:bg-transparent text-white hover:text-secondary text-xs font-semibold py-4 mb-8">
                            INVEST
                        </a>
                    </motion.div>
                </div>
            </div>
            <Footer />
        </>
    )
};