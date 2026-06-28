import { useForm } from "react-hook-form";
import SectionCard from "../../ui/SectionCard";
import PersonalInfoSection from "./PersonalInfoSection";
import SkillsSection from "./SkillsSection";
import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";
import LinksSection from "./LinksSection";


function ProfileForm() {

    const { register, control, handleSubmit, setValue } = useForm();

    const onSubmit = async (data) => {
        console.log(data);

        // axios.put(...)
    };
    return (<>
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




    </>
    )
}


export default ProfileForm;