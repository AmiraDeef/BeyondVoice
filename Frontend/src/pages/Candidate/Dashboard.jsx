import ProfileProgress from "../../components/Candidate/Dashboard/ProfileProgress";
import InterviewCard from "../../components/Candidate/Dashboard/InterviewCard";
import StatsCards from "../../components/Candidate/Dashboard/StateCard";
import RecommendedJobs from "../../components/Candidate/Dashboard/RecommendedJobs";
import RightSidebar from "../../components/Candidate/Dashboard/RightSide";
import { stats, jobs, interview } from "./data";
function Dashboard() {
    return (
    <>

    <div className="grid grid-cols-12 gap-6">

      <div className="col-span-9">

        <StatsCards stats={stats} />

        <RecommendedJobs jobs={jobs} />

      </div>

      <div className="col-span-3">

        <RightSidebar
          interview={interview}
          profile={78}
        />

      </div>

    </div>


    </>)
}

export default Dashboard;