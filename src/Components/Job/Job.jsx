import PropTypes from 'prop-types';
import { IoLocationOutline } from "react-icons/io5";
import { BiDollarCircle } from "react-icons/bi";



const Job = ({ job }) => {
    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div>
            <div className="card card-compact  bg-base-100 shadow-xl">
                <figure><img className="w-40 h-24 p-4" src={logo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{job_title}</h2>
                    <p>{company_name}</p>
                    <div>
                        <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">{remote_or_onsite}</button>
                        <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">{job_type}</button>
                    </div>
                    <div className="my-3 flex">
                        <h2 className="text-gray-500 flex items-center mr-4"><IoLocationOutline className="text-2xl mr-2" />{location}</h2>
                        <h2 className="text-gray-500 flex items-center"><BiDollarCircle className="text-2xl mr-2 font-light" />{salary}</h2>
                    </div>
                    <div className="card-actions">
                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Job.propTypes = {
    job: PropTypes.object
};

export default Job;