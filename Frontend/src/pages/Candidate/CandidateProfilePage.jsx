import { useForm } from "react-hook-form";
import ProfileForm from "../../components/Candidate/Profile/ProfileForm";
import { api } from "../../api/axios";
import { useEffect } from "react";
import { useState } from "react";
function CandidateProfilePage() {

  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
const [error, setError] = useState("");

  useEffect(() => {
    const getProfile = async () => {
      try {
        const res = await api.get("/candidate/profile");
        console.log(res.data.canProfile.workTpe);
        setProfile(res.data.canProfile);
      } catch (err) {
        console.log(err.response?.data);
      const message = err.response?.data?.message;

      if (Array.isArray(message)) {
        setError(message[0]);
      } else {
        setError(message);
      }
      } finally {
        setLoading(false)
      }
    }
    getProfile()

  }, []);
  if (loading) return <p>Loading...</p>

  return (
    <>
      <div className=" mx-auto p-6">
        <h2 className="text-4xl text-[var(--main-color)]">Profile</h2>

        
          <ProfileForm profile={profile} />
        


      </div>
    </>
  );
}

export default CandidateProfilePage;
