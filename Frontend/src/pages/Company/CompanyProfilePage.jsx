import CompanyProfileForm from "../../components/Company/CompanyProfileForm";
import { useEffect, useState } from "react";
import { api } from "../../api/axios";
function CompanyProfilePage() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {

    const getProfile = async () => {
      try {
        const res = await api.get("/company/profile");
         console.log(res);
        //in db backend data named campProfile
        setProfile(res.data.campProfile);

      } catch (err) {
        console.log(err.response?.data);
        if (err.response?.data.status === 400) { setServerErrors(err.response.data.errors); }


      } finally {

        setLoading(false);

      }
    }

    getProfile();

  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="max-w-6xl mx-auto py-8">
      <h2 className="text-4xl text-[var(--main-color)]">Profile</h2>
      <CompanyProfileForm profile={profile} />
    </div>
  );
}

export default CompanyProfilePage;