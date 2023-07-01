
import useTitle from "../../hooks/useTitle";

const Resume = () => {
    useTitle('Resume')
    return (
        <div>
            <section className="text-center">
            <h2 className="font-bold text-center underline text-3xl my-10">Resume</h2>
            <a href="/public/Resume for WD.pdf" className="btn btn-link ">Resume</a>
            </section>
        </div>
    );
};

export default Resume;