import { useForm } from "react-hook-form";
import SectionCard from "../../components/ui/SectionCard";
import PersonalInfoSection from "../../components/Candidate/Profile/PersonalInfoSection";
import SkillsSection from "../../components/Candidate/Profile/SkillsSection";
import ExperienceSection from "../../components/Candidate/Profile/ExperienceSection";
import EducationSection from "../../components/Candidate/Profile/EducationSection";
import LinksSection from "../../components/Candidate/Profile/LinksSection";

function CandidateProfilePage() {
  const { register, control, handleSubmit, setValue } = useForm();

  const onSubmit = async (data) => {
    console.log(data);

    // axios.put(...)
  };

  return (
    <>
      <div className="max-w-6xl mx-auto p-6 bg-[var(--light-gray)] rounded-xl shadow-md ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <SectionCard title="Personal Information">
            <PersonalInfoSection register={register} />
          </SectionCard>

          <SectionCard title="Skills">
            <SkillsSection setValue={setValue} skills={[]} />
          </SectionCard>

          <SectionCard title="Experience">
            <ExperienceSection register={register} control={control} />
          </SectionCard>

          <SectionCard title="Education">
            <EducationSection register={register} control={control} />
          </SectionCard>

          <SectionCard title="Links">
            <LinksSection register={register} />
          </SectionCard>

          <button
            type="submit"
            className="
                    bg-[var(--main-color)]
                    text-white
                    px-6
                    py-3
                    rounded-xl
                    mt-4
                "
          >
            Save Profile
          </button>
        </form>
      </div>
    </>
  );
}

export default CandidateProfilePage;
