import { useFieldArray } from "react-hook-form";
import ProfileInput from "../../ui/ProfileInput";

function EducationSection({
  control,
  register,
  serverErrors,
}) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "education",
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

            <div>
              <ProfileInput
                label="Institution"
                {...register(`education.${index}.institution`)}
              />

              {serverErrors?.education?.[index]?.institution && (
                <p className="text-red-500 text-sm">
                  {serverErrors.education[index].institution
                    .split(".")
                    .pop()
                    .split('"')}
                </p>
              )}
            </div>

            <div>
              <ProfileInput
                label="Degree"
                {...register(`education.${index}.degree`)}
              />

              {serverErrors?.education?.[index]?.degree && (
                <p className="text-red-500 text-sm">
                  {serverErrors.education[index].degree
                    .split(".")
                    .pop()
                    .split('"')}
                </p>
              )}
            </div>

            <div>
              <ProfileInput
                label="Field of Study"
                {...register(`education.${index}.fieldOfStudy`)}
              />

              {serverErrors?.education?.[index]?.fieldOfStudy && (
                <p className="text-red-500 text-sm">
                  {serverErrors.education[index].fieldOfStudy
                    .split(".")
                    .pop()
                    .split('"')}
                </p>
              )}
            </div>

            <div>
              <ProfileInput
                type="number"
                label="Graduation Year"
                {...register(`education.${index}.graduationYear`)}
              />

              {serverErrors?.education?.[index]?.graduationYear && (
                <p className="text-red-500 text-sm">
                  {serverErrors.education[index].graduationYear
                    .split(".")
                    .pop()
                    .split('"')}
                </p>
              )}
            </div>

          </div>

          <button
            type="button"
            onClick={() => remove(index)}
            className="
              mt-4
              text-red-500
              hover:bg-red-500
              hover:text-white
              outline-1
              outline-red-500
              px-4
              py-2
              rounded-xl
              bg-transparent
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
            institution: "",
            degree: "",
            fieldOfStudy: "",
            graduationYear: "",
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
        Add Education
      </button>
    </div>
  );
}

export default EducationSection;