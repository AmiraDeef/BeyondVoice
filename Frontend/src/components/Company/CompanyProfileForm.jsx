import CompanyInfoSection from "./CompanyInfoSection";
import CompanyStatsSection from "./CompanyStatsSection";
import CompanyLinksSection from "./CompanyLinksSection";

function CompanyProfileForm() {

    return (

        <form className="space-y-8">

            <CompanyInfoSection />

            <CompanyStatsSection />

            <CompanyLinksSection />

            <div className="flex justify-end">
                <button
                    type="submit"
                    className="bg-[var(--main-color)] text-white px-8 py-3 rounded-xl"
                >
                    Save Changes
                </button>
            </div>

        </form>

    );
}

export default CompanyProfileForm;