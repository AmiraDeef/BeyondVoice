import ProfileInput from "../../ui/ProfileInput";
import TextArea from "../../ui/TextArea";

function PersonalInfoSection({ register,errors,serverErrors }) {
  return (
    <div className="grid gap-6">
      <ProfileInput label="Professional Title" {...register("title")} />
      {errors?.title && (
        <p className="text-red-500 text-sm">
          {errors.title}
        </p>
      )}
      <ProfileInput label="Industry" {...register("industry")} />

      {errors?.industry && (
        <p className="text-red-500 text-sm">
          {errors.industry}
        </p>
      )} <div className="workType flex flex-col"><h2 className="text-sm font-semibold mb-6 text-[var(--main-color)] ">
        Work Type
      </h2>
       {errors?.workType && (
        <p className="text-red-500 text-sm">
          {errors.workType}
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
    </div>
  );
}

export default PersonalInfoSection;
