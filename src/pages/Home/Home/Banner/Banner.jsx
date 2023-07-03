import { FaDownload } from "react-icons/fa";
import WebDeveloper from "./WebDeveloper";

const Banner = () => {
    return (
        <div className="text-center font-semibold mb-8 p-20 py-32">
            <h2 className="text-xl mb-5">Hello! I am </h2>
            <h4 className="text-4xl font-bold italic">Mst. Shahinur Akter</h4>
            <h3 className="text-xl mt-6"><WebDeveloper></WebDeveloper></h3>
            {/* <progress className="progress progress-info w-56 my-6" value="100" max="100"></progress> */}
                <div className="my-6">
                    <a href="/public/Resume for WD.pdf" className="btn btn-primary my-2" download="/public/Resume for WD.pdf">Download Resume <FaDownload></FaDownload></a>
                </div>
            {/* <p className="text-lg my-2">Using the MERN stack with popular combination of technologies build dynamic and interactive web applications.</p> */}
        </div>
    );
};

export default Banner;