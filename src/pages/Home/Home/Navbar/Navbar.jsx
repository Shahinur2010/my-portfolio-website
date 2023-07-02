import { FaAffiliatetheme, FaDownload, FaThemeisle } from "react-icons/fa";
import ActiveLink from "../../../../shared/ActiveLink/ActiveLink";
import { useContext } from "react";
import { ThemeContext } from "../../../../providers/ThemeProvider";

const Navbar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className={`home ${theme}`}>
            <div className="navbar px-10 py-4 flex flex-col lg:flex-row  bg-blue-100">
                <div>
                    <img className="rounded-full w-16 h-16" src="https://i.ibb.co/wN2X5gt/How-to-make-portfolio-for-design-admission.jpg" alt="" />
                </div>
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-3xl font-bold">Shahinur</a>
                </div>
                <div className="flex flex-col lg:flex-row gap-8 font-semibold me-12">
                    <ActiveLink to='/'>Home</ActiveLink>
                    <ActiveLink to='/contact'>Contact</ActiveLink>
                    <ActiveLink to='/projects'>Projects</ActiveLink>
                    <ActiveLink to='/about'>About</ActiveLink>
                    <button className="btn btn-outline my-4 ms-10" onClick={toggleTheme}>
                        {theme === 'light' ? <FaAffiliatetheme /> : <FaThemeisle />}
                    </button>
                </div>
                <div>
                    <a href="/public/Resume for WD.pdf" className="btn btn-info my-2" download="/public/Resume for WD.pdf">Download Resume <FaDownload></FaDownload></a>
                </div>
            </div>
        </div>
    );
}


export default Navbar;