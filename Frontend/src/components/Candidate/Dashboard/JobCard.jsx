import SmartCard from "../../ui/SmallCard";

function JobCard({ job }) {

    return (
        <>
        <SmartCard title={job.title} childern={




        }/>
        
        </>

        // <div className="bg-white rounded-xl shadow p-6">

        //     <div className="flex justify-between">

        //         <div>

        //             <h3>{job.title}</h3>

        //             <p>

        //                 {job.company}

        //                 •

        //                 {job.location}

        //             </p>

        //         </div>

        //         <span>

        //             {job.match}% Match

        //         </span>

        //     </div>

        //     <div className="flex gap-2 my-4">

        //         {

        //             job.tags.map(tag=>(

        //                 <span key={tag}>
        //                     {tag}
        //                 </span>

        //             ))

        //         }

        //     </div>

        //     <p>

        //         {job.description}

        //     </p>

        //     <div className="mt-5 flex gap-3">

        //         <button>

        //             View Details

        //         </button>

        //         <button>

        //             Apply

        //         </button>

        //     </div>

        // </div>

    );

}

export default JobCard;