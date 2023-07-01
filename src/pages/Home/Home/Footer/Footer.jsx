import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-neutral text-white rounded">
            <div className="mt-2 p-6">
                
            {/* <div className="grid grid-flow-row md:grid-flow-col gap-4">
                <Link to="/about" className="link link-hover">About Me</Link>
                <Link to="/contact" className="link link-hover">Contact</Link>
            </div> */}
                <img className="w-20 h-20 rounded-full" src="https://i.ibb.co/wN2X5gt/How-to-make-portfolio-for-design-admission.jpg" />
                <p className="font-extrabold text-xl my-2">
                    shahinurmony4@gmail.com
                </p>
                <p className="font-bold my-2">Dhaka, Bangladesh</p>
            <div>
                <div className="grid grid-flow-col gap-4">
                    <p>Stay Connected:</p>
                    <Link to="https://www.linkedin.com/in/mst-shahinur-akter-b31590280/"><FaLinkedin className="w-6 h-6"></FaLinkedin></Link>
                    <Link to="https://github.com/Shahinur2010"><FaGithub className="w-6 h-6"></FaGithub></Link>
                    <Link to="https://www.facebook.com/profile.php?id=100086002981039"><FaFacebook className="w-6 h-6"></FaFacebook></Link>
                </div>
            </div>
                <p className="mt-4">Copyright © 2023 - All right reserved</p>
            </div>
            {/* <div className="grid grid-flow-row md:grid-flow-col gap-4">
                <Link to="/about" className="link link-hover">About Me</Link>
                <Link to="/contact" className="link link-hover">Contact</Link>
            </div> */}
            {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 my-0">
                    <Link to='/about' className="link link-hover">About us</Link>
                    <Link to='/contact' className="link link-hover">Contact</Link>
                </div> */}
           
        </footer>
    );
};

export default Footer;