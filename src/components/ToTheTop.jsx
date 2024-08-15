import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ToTheTop = () => {
    const handleClick = (e) => {
        e.preventDefault();
        document.documentElement.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <a href="#" onClick={handleClick} className="fixed z-20 mt-[95vh] ml-[95vw] text-center bg-secondary text-primary rounded-full px-2 py-0.5 animate-bounce"><FontAwesomeIcon icon={faArrowUp} /></a>
    );
};

export default ToTheTop;
