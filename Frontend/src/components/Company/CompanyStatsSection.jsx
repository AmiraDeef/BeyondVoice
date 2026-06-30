import SectionCard from "../ui/SectionCard";
import ProfileInput from "../ui/ProfileInput";

function CompanyStatsSection({ register,errors,serverErrors }){

    return(

        <SectionCard title="Company Statistics">
{serverErrors.companySize && (
          <p className="text-red-500 text-sm">
            {serverErrors.companySize}
          </p>
        )}
            <div className="grid md:grid-cols-2 gap-5">

                <ProfileInput

                    type="number"
                    label="Company Size"
                    name="companySize"
                   {...register("companySize")} 
                   
                />
                

                <ProfileInput

                    type="number"
                    label="Employees with Disabilities"
                    name="PWD"
                     {...register("PWD")}
                    
                />
                  {serverErrors.PWD && (
          <p className="text-red-500 text-sm">
            {serverErrors.PWD}
          </p>
        )}


            </div>

        </SectionCard>

    )

}

export default CompanyStatsSection;