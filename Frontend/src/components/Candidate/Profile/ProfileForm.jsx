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
    } = useForm({
        defaultValues: {
            experience: [],
            education: [],
            skills: []
        }
    });


    useEffect(() => {
        if (profile) {
            console.log(profile);
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
  const messages = Array.isArray(err.response?.data?.message)
    ? err.response.data.message
    : [err.response?.data?.message];

  const serverErr = {
    experience: [],
    education: [],
  };

  messages.forEach((msg) => {
    if (!msg) return;

    const text = msg.toLowerCase();

    // ---------------- Personal ----------------
    if (text.includes("title")) {
      serverErr.title = msg;
      return;
    }

    if (text.includes("industry")) {
      serverErr.industry = msg;
      return;
    }

    if (text.includes("bio")) {
      serverErr.bio = msg;
      return;
    }

    if (text.includes("worktype") || text.includes("work type")) {
      serverErr.workType = msg;
      return;
    }

    // ---------------- Links ----------------
    if (text.includes("githuburl")) {
      serverErr.githubUrl = msg;
      return;
    }

    if (text.includes("linkedinurl")) {
      serverErr.linkedinUrl = msg;
      return;
    }

    if (text.includes("portfoliourl")) {
      serverErr.portfolioUrl = msg;
      return;
    }

    // ---------------- Skills ----------------
    if (text.includes("skill")) {
      serverErr.skills = msg;
      return;
    }

    // ---------------- Experience ----------------
    if (text.includes("experience")) {

      const match = msg.match(/\[(\d+)\]/);

      if (!match) return;

      const index = Number(match[1]);

      if (!serverErr.experience[index]) {
        serverErr.experience[index] = {};
      }

      if (text.includes("companyname"))
        serverErr.experience[index].companyName = msg;

      if (text.includes("role"))
        serverErr.experience[index].role = msg;

      if (text.includes("startdate"))
        serverErr.experience[index].startDate = msg;

      if (text.includes("enddate"))
        serverErr.experience[index].endDate = msg;

      if (text.includes("description"))
        serverErr.experience[index].description = msg;

      return;
    }

    // ---------------- Education ----------------
    if (text.includes("education")) {

      const match = msg.match(/\[(\d+)\]/);

      if (!match) return;

      const index = Number(match[1]);

      if (!serverErr.education[index]) {
        serverErr.education[index] = {};
      }

      if (text.includes("institution"))
        serverErr.education[index].institution = msg;

      if (text.includes("degree"))
        serverErr.education[index].degree = msg;

      if (text.includes("fieldofstudy"))
        serverErr.education[index].fieldOfStudy = msg;

      if (text.includes("graduationyear"))
        serverErr.education[index].graduationYear = msg;
    }
  });

  console.log(serverErr);

  setServerErrors(serverErr);
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
                    serverErrors={serverErrors}
                />
            </SectionCard>

            <SectionCard title="Experience">
                <ExperienceSection register={register} control={control} errors={errors} serverErrors={serverErrors} />
            </SectionCard>

            <SectionCard title="Education">
                <EducationSection register={register} control={control} errors={errors} serverErrors={serverErrors} />
            </SectionCard>

            <SectionCard title="Links">
                <LinksSection register={register} serverErrors={serverErrors} />
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