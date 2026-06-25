import { useFieldArray } from "react-hook-form";
import ProfileInput from "../../ui/ProfileInput"; 
import TextArea from "../../ui/TextArea";

function EducationSection({
    control,
    register
}) {

    const { fields, append, remove } =
        useFieldArray({
            control,
            name: "education"
        });

    return (
        <div>

            {fields.map((field, index) => (

                <div
                    key={field.id}
                    className="
                    border
                    rounded-xl
                    p-5
                    mb-5
                "
                >

                    <div className="grid md:grid-cols-2 gap-4">

                        <ProfileInput
                            label="Institution"
                            {...register(
                                `education.${index}.institution`
                            )}
                        />

                        <ProfileInput
                            label="Degree"
                            {...register(
                                `education.${index}.degree`
                            )}
                        />

                        <ProfileInput
                            label="Field of Study"
                            {...register(
                                `education.${index}.fieldOfStudy`
                            )}
                        />

                        <ProfileInput
                            type="number"
                            label="Graduation Year"
                            {...register(
                                `education.${index}.graduationYear`
                            )}
                        />

                    </div>

                </div>

            ))}

            <button
                type="button"
                onClick={() =>
                    append({
                        institution: "",
                        degree: "",
                        fieldOfStudy: "",
                        graduationYear: ""
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
                           