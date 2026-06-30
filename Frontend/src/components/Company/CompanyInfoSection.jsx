import SectionCard from "../ui/SectionCard";
import ProfileInput from "../ui/ProfileInput";
import TextArea from "../ui/TextArea";

function CompanyInfoSection({ register, errors, serverErrors }) {



    return (

        <SectionCard title="Company Information">

            <div className="grid md:grid-cols-2 gap-5">
                <div>
                    <ProfileInput
                        label="Company Name"
                        name="companyName"
                        {...register("companyName")}

                    />
                    {serverErrors.companyName && (
                        <p className="text-red-500 text-sm">
                            {serverErrors.companyName}
                        </p>
                    )}</div>

                <div><ProfileInput
                    label="Industry"
                    name="industry"
                    {...register("industry")}

                />
                    {serverErrors.industry && (
                        <p className="text-red-500 text-sm">
                            {serverErrors.industry}
                        </p>
                    )}</div>

                <div><ProfileInput
                    label="City"
                    name="city"
                    {...register("city")}

                />
                    {serverErrors.city && (
                        <p className="text-red-500 text-sm">
                            {serverErrors.city}
                        </p>
                    )}
                </div>

                <div> <ProfileInput
                    label="Country"
                    name="country"
                    {...register("country")}
                />
                    {serverErrors.country && (
                        <p className="text-red-500 text-sm">
                            {serverErrors.country}
                        </p>
                    )}</div>

            </div>

            <div className="mt-6">

                <TextArea
                    label="About Company"
                    name="desc"
                    rows={5}
                    {...register("desc")}
                />
                {serverErrors.desc && (
                    <p className="text-red-500 text-sm">
                        {serverErrors.desc}
                    </p>
                )}

            </div>

        </SectionCard>

    );

}

export default CompanyInfoSection;