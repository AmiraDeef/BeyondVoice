import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import SectionCard from "../../ui/SectionCard";
import PersonalInfoSection from "./PersonalInfoSection";
import SkillsSection from "./SkillsSection";
import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";
import LinksSection from "./LinksSection";
import { api } from "../../../api/axios";

function ProfileForm({ profile }) {
    console.log(profile);
    const {
        register,
        control,
        handleSubmit,
        reset,
        setValue,
        formState: { errors }
    } = useForm({defaultValues: {
        experience: [],
        education: [],
        skills: []}
    });


    useEffect(() => {
        if (profile) {
            reset(profile);
        }
    }, [profile, reset]);
    const [serverErrors, setServerErrors] = useState({});

    const onSubmit = async (data) => {
        setServerErrors({});
        console.log(data);
        try {

            if (profile) {
                await api.put("/candidate/profile", data);
            } else {
                await api.post("/candidate/profile", data);
            }

            alert("Profile saved successfully");

        } catch (err) {
            console.log(err.response?.data);
            if (err.response?.data.status === 400) { setServerErrors(err.response.data.errors); }
        }

    };
    return (<>
        <form onSubmit={handleSubmit(onSubmit)}>
            <SectionCard title="Personal Information">
                <PersonalInfoSection register={register} errors={errors} serverErrors={serverErrors} />
            </SectionCard>

            <SectionCard title="Skills">
                <SkillsSection
                    skills={profile?.skills || []}
                    setValue={setValue}
                />
            </SectionCard>

            <SectionCard title="Experience">
                <ExperienceSection register={register} control={control} errors={errors} serverErrors={serverErrors} />
            </SectionCard>

            <SectionCard title="Education">
                <EducationSection register={register} control={control} errors={errors} serverErrors={serverErrors} />
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