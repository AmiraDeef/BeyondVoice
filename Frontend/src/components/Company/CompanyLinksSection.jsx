import SectionCard from "../ui/SectionCard";
import ProfileInput from "../ui/ProfileInput";

function CompanyLinksSection(){

    return(

        <SectionCard title="Links">

            <ProfileInput

               label={<><i className="fa-solid fa-earth-americas mr-2"></i> Website</>}
                name="websiteUrl"

            />

        </SectionCard>

    )

}

export default CompanyLinksSection;