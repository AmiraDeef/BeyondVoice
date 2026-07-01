import InterviewCard from "./InterviewCard";
import ProfileProgress from "./ProfileProgress";


function RightSidebar({

    interview,
    profile

}) {

    return (

        <div className="space-y-5">

            <InterviewCard interview={interview}/>

            <ProfileProgress percentage={profile}/>

        </div>

    );

}

export default RightSidebar;