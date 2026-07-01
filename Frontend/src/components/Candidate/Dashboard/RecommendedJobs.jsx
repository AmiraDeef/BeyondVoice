import JobCard from "./JobCard";

function RecommendedJobs({ jobs }) {

    return (

        <>

            <h2 className="text-3xl font-bold mb-5">
                Recommended for you
            </h2>

            <div className="space-y-5">

                {

                    jobs.map(job=>(

                        <JobCard
                            key={job.id}
                            job={job}
                        />

                    ))

                }

            </div>

        </>

    );

}

export default RecommendedJobs;