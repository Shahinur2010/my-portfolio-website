import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// eslint-disable-next-line react/prop-types
const SingleProject = ({ item }) => {
    // eslint-disable-next-line react/prop-types
    const { name, features, images, link } = item;
    return (
        <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="card w-96 bg-slate-200 shadow-xl mx-auto">
                <figure className="px-10 pt-10">

                <Carousel>
                <div>
                    <img src={images[0]} />
                </div>
                <div>
                    <img src={images[1]} />
                </div>
                <div>
                    <img src={images[2]} />
                </div>
                <div>
                    <img src={images[3]} />
                </div>
            </Carousel>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title font-bold">{name}</h2>
                    <ul className="text-justify">
                        <li>1. {features?.a1}</li>
                        <li>2. {features?.b2}</li>
                        <li>3. {features?.c3}</li>
                        <li>4. {features?.d4}</li>
                        <li>5. {features?.e5}</li>
                        <li>6. {features?.f6}</li>
                        <li>7. {features?.g7}</li>
                        <li>8. {features?.h8}</li>
                        <li>9. {features?.i9}</li>
                        <li>10. {features?.j10}</li>
                    </ul>
                    <div className="inline-flex gap-4 border border-sky-900 p-2 rounded-lg my-6">
                        <a href={link?.client} className="text-blue-600 font-bold">Client</a>
                        <a href={link?.server} className="text-blue-600 font-bold">Server</a>
                        <a href={link?.liveSite} className="text-blue-600 font-bold">Live-Site</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProject;