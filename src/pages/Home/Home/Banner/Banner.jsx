import WebDeveloper from "./WebDeveloper";

const Banner = () => {
    return (
        <div className="text-center font-semibold mb-12 mt-2 p-20">
            <h2 className="text-xl mb-5">Hello! I am </h2>
            <h4 className="text-5xl font-bold italic">Mst. Shahinur Akter</h4>
            <h3 className="text-2xl mt-6"><WebDeveloper></WebDeveloper></h3>
        </div>
    );
};

export default Banner;