import ProfileInput from "../../ui/ProfileInput";
import TextArea from "../../ui/TextArea";

function PersonalInfoSection({ register, errors, serverErrors }) {
  return (
    <div className="grid gap-6">
      <ProfileInput
        label="Professional Title"
        {...register("title")}
      />

      {serverErrors.title && (
        <p className="text-red-500 text-sm">
          {serverErrors.title}
        </p>
      )}
      <ProfileInput label="Industry" {...register("industry")}  />
      {serverErrors.industry && (
        <p className="text-red-500 text-sm">
          {serverErrors.industry}
        </p>
      )}

      <div className="workType flex flex-col">
        <h2 className="text-sm font-semibold mb-6 text-[var(--main-color)] ">
          Work Type
        </h2>

        {serverErrors.workType && (
          <p className="text-red-500 text-sm">
            {serverErrors.workType}
          </p>
        )}
        <select
          {...register("workType")}
          className="border p-3 rounded-xl border-[var(--main-color)] text-[var(--main-color)] focus:outline-none focus:ring-1 focus:ring-[var(--main-color)]"
        >
          <option value="">Select Work Type</option>

          <option value="remote">Remote</option>

          <option value="onsite">Onsite</option>

          <option value="hybrid">Hybrid</option>
        </select></div>


      <TextArea label="Bio" {...register("bio")} />
       {serverErrors.bio && (
          <p className="text-red-500 text-sm">
            {serverErrors.bio}
          </p>
        )}
    </div>
  );
}

export default PersonalInfoSection;
