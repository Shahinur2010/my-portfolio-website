import { Link } from 'react-router-dom';
import ss1 from '../../../../assets/Screenshot-1.png';
import ss2 from '../../../../assets/11.png';
import ss3 from '../../../../assets/21.png';
// import { addToDb } from '../../../../utilities/fakedb';

const MyProjects = () => {
    
    return (
        <div className="p-10">
            <h2 className="font-bold my-12 text-center text-3xl border-double border-4 border-blue-500 rounded-lg">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto">
                <div className="mx-auto my-12">
                    <div className="card w-96 bg-blue-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={ss1} alt="Shoes" className="rounded-xl h-48" />
                        </figure>
                        <p className='text-center mt-4 font-bold text-lg'>Drawing School</p>
                        <div className="card-body items-center text-center">
                            <div className="card-actions">
                                <Link to="/projects"><button className="btn btn-primary">See More</button></Link>
                                {/* <Link to='/projects'><button onClick={()=>addToDb(data)} className='btn btn-primary rounded-md p-2 my-1'>See More</button></Link> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mx-auto my-12">
                    <div className="card w-96 bg-blue-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={ss2} alt="Shoes" className="rounded-xl h-48" />
                        </figure>
                        <p className='text-center mt-4 font-bold text-lg'>Toys Hub</p>
                        <div className="card-body items-center text-center">
                            <div className="card-actions">
                                <Link to="/projects"><button className="btn btn-primary">See More</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mx-auto my-12">
                    <div className="card w-96 bg-blue-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={ss3} alt="Shoes" className="rounded-xl h-48" />
                        </figure>
                        <p className='text-center mt-4 font-bold text-lg'>Job Circular</p>
                        <div className="card-body items-center text-center">
                            <div className="card-actions">
                                <Link to="/projects"><button className="btn btn-primary">See More</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProjects;