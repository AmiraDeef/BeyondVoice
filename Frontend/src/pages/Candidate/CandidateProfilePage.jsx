import { useForm } from "react-hook-form";
import ProfileForm from "../../components/Candidate/Profile/ProfileForm";

function CandidateProfilePage() {


  return (
    <>
      <div className="max-w-6xl mx-auto p-6 bg-[var(--light-gray)] rounded-xl shadow-md ">
      <h2 className="text-4xl text-[var(--main-color)]">Profile</h2>

      <ProfileForm/>


  </div>
  </>
  );
}

export default CandidateProfilePage;
