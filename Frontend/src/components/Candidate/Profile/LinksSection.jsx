import ProfileInput from "../../ui/ProfileInput";

function LinksSection({ register, serverErrors, error }) {
  return (
    <>
      <div className="grid md:grid-cols-3 gap-4"><div>   <ProfileInput label={<><i className="fa-brands fa-github mr-2"></i> Github</>} {...register("githubUrl")} />
        {serverErrors?.githubUrl && (
          <p className="text-red-500 text-sm">
            {serverErrors?.githubUrl}
          </p>
        )}</div>

        <div><ProfileInput label={<><i className="fa-brands fa-linkedin mr-2"></i> LinkedIn</>} {...register("linkedinUrl")} />
        {serverErrors?.linkedinUrl && (
          <p className="text-red-500 text-sm">
            {serverErrors.linkedinUrl}
          </p>
        )}</div>
       <div> <ProfileInput label={<><i className="fa-solid fa-portrait mr-2"></i> Portfolio</>} {...register("portfolioUrl")} />
        {serverErrors.portfolioUrl && (
          <p className="text-red-500 text-sm">
            {serverErrors.portfolioUrl}
          </p>
        )}</div>
      </div>
    </>
  );
}
export default LinksSection;
