import ProfileInput from "../../ui/ProfileInput";

function LinksSection({ register }) {
  return (
    <>
      <div className="grid md:grid-cols-3 gap-4">
        <ProfileInput label={<><i className="fa-brands fa-github mr-2"></i> Github</>} {...register("githubUrl")} />

        <ProfileInput label={<><i className="fa-brands fa-linkedin mr-2"></i> LinkedIn</>} {...register("linkedinUrl")} />

        <ProfileInput label={<><i className="fa-solid fa-portrait mr-2"></i> Portfolio</>} {...register("portfolioUrl")} />
      </div>
    </>
  );
}
export default LinksSection;
