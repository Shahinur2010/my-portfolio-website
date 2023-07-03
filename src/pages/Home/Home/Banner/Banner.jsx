import { FaDownload } from "react-icons/fa";
import WebDeveloper from "./WebDeveloper";
import resume from '../../../../assets/Resume with portfolio.pdf'

const Banner = () => {
    return (
        <div className="text-center font-semibold mb-8 p-20 py-32">
            <h2 className="text-xl mb-5">Hello! I am </h2>
            <h4 className="text-4xl font-bold italic">Mst. Shahinur Akter</h4>
            <h3 className="text-xl mt-6"><WebDeveloper></WebDeveloper></h3>
                <div className="my-6">
                    <a href={resume} className="btn btn-primary my-2" download={resume}>Download Resume <FaDownload></FaDownload></a>
                </div>
        </div>
    );
};

export default Banner;