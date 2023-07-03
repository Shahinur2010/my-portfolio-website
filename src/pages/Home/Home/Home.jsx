import Banner from "./Banner/Banner";
import '../Home/Home.css'
import { useContext } from "react";
import { ThemeContext } from "../../../providers/ThemeProvider";
// import { FaAffiliatetheme, FaThemeisle } from "react-icons/fa";
import useTitle from "../../../hooks/useTitle";
import MyProjects from "./MyProjects/MyProjects";
import Skills from "./Skills/Skills";

const Home = () => {
    const { theme } = useContext(ThemeContext);
    useTitle('Home')
    return (
        <div id="home">
            <div className={`home ${theme}`}>
                <div>
                    <div className="ms-12">
                        {/* <button className="btn btn-outline my-4 ms-10" onClick={toggleTheme}>
                        {theme === 'light' ? <FaAffiliatetheme /> : <FaThemeisle />}
                    </button> */}
                    </div>
                    <Banner></Banner>
                    <Skills />
                    <MyProjects></MyProjects>
                </div>
            </div>
        </div>
    );
};

export default Home;