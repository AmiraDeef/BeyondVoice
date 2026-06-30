import ProfileProgress from "../../components/Candidate/Dashboard/ProfileProgress";

function Dashboard(){
    return(<>


    <div className="flex ">
{/* static untill i pass using db */}
    <ProfileProgress score="40" />

    </div>
    </>)
}

export default Dashboard;