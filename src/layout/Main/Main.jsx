import { Outlet } from "react-router-dom";
import Navbar from "../../pages/Home/Home/Navbar/Navbar";
import Footer from "../../pages/Home/Home/Footer/Footer";
import Projects from "../../pages/Projects/Projects";
import About from "../../pages/About/About";
import Contact from "../../pages/Contact/Contact";
// import { HashLink as Link } from 'react-router-hash-link';

const Main = () => {
    return (
        <>
            <div>
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Projects></Projects>
                <About></About>
                <Contact></Contact>
                {/* <Link to="#projects" smooth><Projects></Projects></Link>
                <Link to="#about" smooth><About></About></Link>
                <Link to="#contact" smooth><Contact></Contact></Link> */}
                <Footer></Footer>
            </div>
        </>
    );
};

export default Main;