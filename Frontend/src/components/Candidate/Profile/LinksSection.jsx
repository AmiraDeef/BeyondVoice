import ProfileInput from "../../ui/ProfileInput";

function LinksSection({ register }) {
  return (
    <>
      <div className="grid md:grid-cols-3 gap-4">
        <ProfileInput label="Github" {...register("githubUrl")} />

        <ProfileInput label="LinkedIn" {...register("linkedinUrl")} />

        <ProfileInput label="Portfolio" {...register("portfolioUrl")} />
      </div>
    </>
  );
}
export default LinksSection;
