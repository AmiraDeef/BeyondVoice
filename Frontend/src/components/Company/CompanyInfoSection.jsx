import SectionCard from "../ui/SectionCard";
import ProfileInput from "../ui/ProfileInput";
import TextArea from "../ui/TextArea";

function CompanyInfoSection() {

    return (

        <SectionCard title="Company Information">

            <div className="grid md:grid-cols-2 gap-5">

                <ProfileInput
                    label="Company Name"
                    name="companyName"
                />

                <ProfileInput
                    label="Industry"
                    name="industry"
                />

                <ProfileInput
                    label="City"
                    name="city"
                />

                <ProfileInput
                    label="Country"
                    name="country"
                />

            </div>

            <div className="mt-6">

                <TextArea
                    label="About Company"
                    name="desc"
                    rows={5}
                />

            </div>

        </SectionCard>

    );

}

export default CompanyInfoSection;