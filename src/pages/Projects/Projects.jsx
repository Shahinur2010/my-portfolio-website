import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import { useEffect, useState } from "react";
import SingleProject from "./SingleProject";


const Projects = () => {
    // eslint-disable-next-line no-unused-vars
    const myProjects = useLoaderData();
    // console.log(myProjects)
    useTitle('Projects')
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    return (
        <div id="projects">
            {/* <h2 className="font-bold text-center text-3xl my-10">Project Details</h2> */}
            <h2 className="font-bold my-20 text-center text-3xl ">Project Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-8 my-5">
                {
                    items.map(item => <SingleProject key={item.id} item={item}></SingleProject>)
                }
            </div>
        </div>
    );
};

export default Projects;