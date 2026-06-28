import CompanyProfileForm from "../../components/Company/CompanyProfileForm";

function CompanyProfilePage() {
  return (
    <div className="max-w-6xl mx-auto py-8">
      <h2 className="text-4xl text-[var(--main-color)]">Profile</h2>
      <CompanyProfileForm />
    </div>
  );
}

export default CompanyProfilePage;