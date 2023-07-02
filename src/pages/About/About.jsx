import { FaFacebook, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaRegEnvelope, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";


const About = () => {
    return (<>
        <h2 className='text-center font-bold text-3xl my-4'>About Me</h2>
        <div className="flex flex-col md:flex-row justify-around">
            <div className="text-start my-6">
                <h1 className="my-1"><span className="font-bold text-lg">Education:</span> M.S(Thesis) in Botany from Jahangirnagar University</h1>
                <h1 className="my-1"><span className="font-bold text-lg">Achievements:</span> Complete the Web Development Course with Jhankar Mahbub (Certificate)</h1>
                <h1 className="my-1"><span className="font-bold text-lg">Language Proficiency:</span> Bangla (native), Comfortable in English, Familiar to Arabic
                </h1>
                <h1 className="my-1"><span className="font-bold text-lg">Interpersonal Skills:</span>
                    <li>Good communication skills</li>	
                    <li>Fluent in Team-work</li>
                </h1>
            </div>
            <div className='text-start'>
                <h2 className='font-semibold text-lg my-3 inline-flex gap-2'><FaPhoneAlt /> Phone: +8801737304718</h2>
                <h2 className='font-semibold text-lg mb-3 flex gap-2'><FaWhatsapp  /> Whatsapp: +8801737304718</h2>
                <h2 className='font-semibold text-lg mb-3 flex gap-2'><FaRegEnvelope/> Email: shahinurmony4@gmail.com</h2>
                <h2 className='font-semibold text-lg flex gap-2'><FaMapMarkerAlt/>Dhaka, Bangladesh</h2>
                <div className="grid grid-flow-col">
                    <p className="my-2 font-bold text-blue-600">Stay Connected with:</p>
                    <div  className='font-semibold text-lg my-3 flex gap-2'> 
                    <Link to="https://www.linkedin.com/in/mst-shahinur-akter-b31590280/"><FaLinkedin className="w-4 h-4"></FaLinkedin></Link>
                    <Link to="https://github.com/Shahinur2010"><FaGithub className="w-4 h-4"></FaGithub></Link>
                    <Link to="https://www.facebook.com/profile.php?id=100086002981039"><FaFacebook className="w-4 h-4"></FaFacebook></Link>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};

export default About;


// "https://i.ibb.co/St2BywS/Screenshot-4.png",
// "https://i.ibb.co/xjKgJVh/Screenshot-5.png",,
// "https://i.ibb.co/82Q7kg9/Screenshot-7.png",
// "https://i.ibb.co/T23CqkM/Screenshot-8.png",
// "https://i.ibb.co/ygJtx8L/Screenshot-9.png",
            // "https://i.ibb.co/pZ15BM3/17.png",
            // "https://i.ibb.co/ZWP31sp/18.png",
            // "https://i.ibb.co/8xXTRMf/19.png"
            // "https://i.ibb.co/80Jgrjp/13.png",
            // "https://i.ibb.co/vsyTspZ/14.png",
            // "https://i.ibb.co/4PVDcSv/25.png",
            // "https://i.ibb.co/qMWNNqD/26.png",
            // "https://i.ibb.co/hV1xpqv/27.png",
            // "https://i.ibb.co/Tc5pyK4/28.png",
            // "https://i.ibb.co/8xB2YBn/29.png"