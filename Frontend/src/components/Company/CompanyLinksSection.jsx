import SectionCard from "../ui/SectionCard";
import ProfileInput from "../ui/ProfileInput";

function CompanyLinksSection({ register,errors,serverErrors }){

    return(

        <SectionCard title="Links">

            <ProfileInput

               label={<><i className="fa-solid fa-earth-americas mr-2"></i> Website</>}
                name="websiteUrl"
                  {...register("websiteUrl") } 



            />
             {serverErrors.websiteUrl && (
          <p className="text-red-500 text-sm">
            {serverErrors.websiteUrl}
          </p>
        )}

        </SectionCard>

    )

}

export default CompanyLinksSection;