import ProfileInput from "../../ui/ProfileInput";
import TextArea from "../../ui/TextArea";

function PersonalInfoSection({ register }) {
  return (
    <div className="grid gap-6">
      <ProfileInput label="Professional Title" {...register("title")} />

      <ProfileInput label="Industry" {...register("industry")} />
      <div className="workType flex flex-col"><h2 className="text-sm font-semibold mb-6 text-[var(--main-color)] ">
        Work Type
      </h2>
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
