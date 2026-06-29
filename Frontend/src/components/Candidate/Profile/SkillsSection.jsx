import { useState, useEffect } from "react";
import { X } from "lucide-react";

function SkillsSection({ skills = [], setValue }) {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [inputValue, setInputValue] = useState("");


  useEffect(() => {
    setSelectedSkills(skills);
  }, [skills]);

    useEffect(() => {
    setValue("skills", selectedSkills);
  }, [selectedSkills, setValue]);

  const addSkill = () => {
    const value = inputValue.trim();

    if (!value) return;

    const exists = selectedSkills.find(
      (skill) => skill.toLowerCase() === value.toLowerCase()
    );

    if (exists) {
      setInputValue("");
      return;
    }

    setSelectedSkills([
      ...selectedSkills,
      value,
      
    ]);

    setInputValue("");
  };

  const removeSkill = (name) => {
    setSelectedSkills(
      selectedSkills.filter((skill) => skill !== name)
    );
  };

  return (
    <div className="w-full text-left">
      <label className="block text-sm font-semibold text-[#1B3A5C] mb-2">
        Technical Skills
      </label>

      <div className="w-full min-h-[48px] p-2 bg-white border border-gray-200 rounded-xl flex flex-wrap items-center gap-2">

        {selectedSkills.map((skill,index) => (
          <div
            key={index}
            className="flex items-center gap-1.5 bg-[#EBF5F5] text-[var(--secondary-color)] px-3 py-1 rounded-full text-sm font-medium border border-[#D1EAEA]"
          >
            <span>{skill}</span>

            <button
              type="button"
              onClick={() => removeSkill(skill)}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}

        <input
          type="text"
          value={inputValue}
          placeholder="Type a skill then press Enter..."
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              addSkill();
            }
          }}
          className="flex-1 min-w-[150px] border-none outline-none"
        />
      </div>
    </div>
  );
}

export default SkillsSection;