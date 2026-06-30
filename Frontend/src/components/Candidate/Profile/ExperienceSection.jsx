import { useFieldArray } from "react-hook-form";
import ProfileInput from "../../ui/ProfileInput";
import TextArea from "../../ui/TextArea";

function ExperienceSection({
    control,
    register, serverErrors
}) {

    const { fields, append, remove } =
        useFieldArray({
            control,
            name: "experience"
        });


    return (
        <div>

            {fields.map((field, index) => (

                <div
                    key={field.id}
                    className="
                    border border-[var(--main-color)]
                    rounded-xl
                    p-5
                    mb-5
                "
                >
                    <div className="grid md:grid-cols-2 gap-4">

                       <div> <ProfileInput
                            label="Company Name"
                            {...register(
                                `experience.${index}.companyName`
                            )}
                        />

                        {serverErrors?.experience?.[index]?.companyName && (
                            <p className="text-red-500 text-sm">
                                {serverErrors.experience[index].companyName.split(".")
                                    .pop()
                                    .split('"')}
                            </p>
                        )}</div>

                      <div>  <ProfileInput
                            label="Role"
                            {...register(
                                `experience.${index}.role`
                            )}
                        />
                        {serverErrors?.experience?.[index]?.role && (
                            <p className="text-red-500 text-sm">
                                {serverErrors.experience[index].role.split(".")
                                    .pop()
                                    .split('"')}
                            </p>
                        )}</div>

                      <div>  <ProfileInput
                            type="date"
                            label="Start Date"
                            {...register(
                                `experience.${index}.startDate`
                            )}
                        />
                        {serverErrors?.experience?.[index]?.startDate && (
                            <p className="text-red-500 text-sm">
                                {serverErrors.experience[index].startDate.split(".")
                                    .pop()
                                    .split('"')}
                            </p>)}</div>

                       <div> <ProfileInput
                            type="date"
                            label="End Date"
                            {...register(
                                `experience.${index}.endDate`
                            )}
                        />{serverErrors?.experience?.[index]?.endDate && (
                            <p className="text-red-500 text-sm">
                                {serverErrors.experience[index].endDate.split(".")
                                    .pop()
                                    .split('"')}
                            </p>
                        )}</div>

                    </div>

                    <div className="mt-4">

                        <TextArea
                            label="Description"
                            {...register(
                                `experience.${index}.description`
                            )}
                        />{serverErrors?.experience?.[index]?.description && (
                            <p className="text-red-500 text-sm">
                                {serverErrors.experience[index].description.split(".")
                                    .pop()
                                    .split('"')}
                            </p>
                        )}

                    </div>

                    <button
                        type="button"
                        onClick={() => remove(index)}
                        className="
                         mt-4
                        text-red-500 hover:bg-red-500
                        hover:text-white
                        outline-1 outline-red-500
                        px-4 py-2 rounded
                        bg-transparent
                        rounded-xl
                    "
                    >
                        Remove
                    </button>

                </div>

            ))}

            <button
                type="button"
                onClick={() =>
                    append({
                        companyName: "",
                        role: "",
                        startDate: "",
                        endDate: "",
                        description: ""
                    })
                }
                className="
                  bg-[var(--secondary-color)]
                    text-white
                    px-4
                    py-2
                    rounded-xl
                "
            >
                Add Experience
            </button>

        </div>
    );
}

export default ExperienceSection;