import SectionCard from "../ui/SectionCard";
import ProfileInput from "../ui/ProfileInput";

function CompanyStatsSection(){

    return(

        <SectionCard title="Company Statistics">

            <div className="grid md:grid-cols-2 gap-5">

                <ProfileInput

                    type="number"
                    label="Company Size"
                    name="companySize"

                />

                <ProfileInput

                    type="number"
                    label="Employees with Disabilities"
                    name="PWD"

                />

            </div>

        </SectionCard>

    )

}

export default CompanyStatsSection;