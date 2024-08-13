import Banner from "../components/Banner";
import CourseInfo from "../components/courseDetails/CourseInfo";
import CourseText from "../components/courseDetails/CourseText";
import Lesson from "../components/courseDetails/Lesson";
import ReviewCard from "../components/courseDetails/ReviewCard";
import ReviewForm from "../components/courseDetails/ReviewForm";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";

export const CourseDetails = () => {

    const courseInfo = {
        trainerName: "George Mathews",
        courseFee: 230,
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

    const courseOutline = [
        "Introduction Lesson",
        "Basics of HTML",
        "Getting Know about HTML",
        "Tags and Attributes",
        "Basics of CSS",
        "Getting Familiar with CSS",
        "Introduction to Bootstrap",
        "Responsive Design",
        "Canvas in HTML 5"
    ];

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
            <Navbar bg='bg-secondary' linkColor='text-white' logo='img/logo2.png' />
            <Banner title='Course Details' link='Courses Details' />
            <div className="flex py-32 px-28 gap-9">
                <div>
                    <img src="./img/courses/course-details.jpg" alt="" />
                    <div>
                        <CourseText title="Objectives" content={objectivesContent} />
                        <CourseText title="Eligibility" content={eligibilityContent} />
                    </div>
                    <div>
                        <h4 className="text-2xl font-semibold pb-2 mb-5 mt-10 text-secondary border-b">Course Outline</h4>
                        {courseOutline.map((lesson, index) => (
                            <Lesson key={index} title={lesson} />
                        ))}
                    </div>
                </div>
                <div>
                    <div>
                        <CourseInfo {...courseInfo} />
                        <a href="#" className="block text-center border border-secondary bg-secondary hover:bg-transparent text-white hover:text-secondary text-xs font-semibold py-4 mb-8">ENROLL THE COURSE</a>
                    </div>
                    <ReviewForm />
                    <div>
                        {reviews.map((review, index) => (
                            <ReviewCard key={index} {...review} />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
};