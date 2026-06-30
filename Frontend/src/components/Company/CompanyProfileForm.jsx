import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import CompanyInfoSection from "./CompanyInfoSection";
import CompanyStatsSection from "./CompanyStatsSection";
import CompanyLinksSection from "./CompanyLinksSection";
import { api } from "../../api/axios";
function CompanyProfileForm({ profile }) {
    console.log(profile);
    const { register,
        control,
        handleSubmit,
        reset,
        setValue,
        formState: { errors }
    } = useForm({});
    useEffect(() => {
        if (profile) {
            reset(profile);
        }
    }, [profile, reset]);
    const [serverErrors, setServerErrors] = useState({});

    const onSubmit = async (data) => {
        setServerErrors({})
        console.log(data);
        try {
            if (profile) {
                await api.put("/company/profile", data);
            } else {
                await api.post("/company/profile", data);
            }

            alert("Profile saved successfully");

        } catch (err) {
            console.log(err.response?.data);

            const messages = Array.isArray(err.response?.data?.message) ? err.response.data.message : [err.response?.data?.message]; const serverErr = {}
           console.log(messages); 
           messages.forEach((msg) => {
                if (!msg) return;

                const text = msg.toLowerCase();

                if (text.includes("name"))
                    serverErr.companyName = msg;

                else if (text.includes("website"))
                    serverErr.websiteUrl = msg;

                else if (text.includes("size"))
                    serverErr.companySize = msg;

                else if (text.includes("pwd"))
                    serverErr.PWD = msg;

                else if (text.includes("industry"))
                    serverErr.industry = msg;

                else if (text.includes("city"))
                    serverErr.city = msg;

                else if (text.includes("country"))
                    serverErr.country = msg;

                else if (text.includes("desc"))
                    serverErr.desc = msg;
            }); console.log(serverErr);

            setServerErrors(serverErr);
        }
    }

    return (
        <>
            <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>

                <CompanyInfoSection
                    register={register}
                    errors={errors}
                    serverErrors={serverErrors}

                />

                <CompanyStatsSection
                    register={register}
                    errors={errors}
                    serverErrors={serverErrors}
                />

                <CompanyLinksSection
                    register={register}
                    errors={errors}
                    serverErrors={serverErrors}

                />

                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="bg-[var(--main-color)] text-white px-8 py-3 rounded-xl"
                    >
                        Save Changes
                    </button>
                </div>

            </form>
        </>


    );
}

export default CompanyProfileForm;