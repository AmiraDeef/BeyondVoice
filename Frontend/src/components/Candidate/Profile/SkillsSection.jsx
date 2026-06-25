import { useState } from 'react';
import { X } from 'lucide-react'; 

const AVAILABLE_SKILLS = [
  { _id: "1", name: "React" },
  { _id: "2", name: "Tailwind CSS" },
  { _id: "3", name: "Figma" },
  { _id: "4", name: "Node.js" },
  { _id: "5", name: "TypeScript" },
  { _id: "6", name: "Python" },
  { _id: "7", name: "Laravel" },
  { _id: "8", name: "Next.js" },
  { _id: "9", name: "PostgreSQL" },
  { _id: "10", name: "Docker" },
  { _id: "11", name: "AWS" }
];

function SkillsSection() {
   
    const [selectedIds, setSelectedIds] = useState(["1", "2", "3"]);
    const [inputValue, setInputValue] = useState("");

    const toggleSkill = (skillId) => {
        if (selectedIds.includes(skillId)) {
            setSelectedIds(selectedIds.filter(id => id !== skillId));
        } else {
            setSelectedIds([...selectedIds, skillId]);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && inputValue.trim() !== '') {
            e.preventDefault();
            
            const found = AVAILABLE_SKILLS.find(s => s.name.toLowerCase() === inputValue.trim().toLowerCase());
            
            if (found) {
                if (!selectedIds.includes(found._id)) {
                    setSelectedIds([...selectedIds, found._id]);
                }
            } else {
                const newId = Date.now().toString();
                AVAILABLE_SKILLS.push({ _id: newId, name: inputValue.trim() });
                setSelectedIds([...selectedIds, newId]);
            }
            setInputValue("");
        }
    };

    return (
        <div className="w-full text-left">
            <label className="block text-sm font-semibold text-[#1B3A5C] mb-2">
                Technical Skills
            </label>

         
            <div className="w-full min-h-[48px] p-2 bg-white border border-gray-200 rounded-xl flex flex-wrap items-center gap-2 focus-within:border-teal-500 focus-within:ring-1 focus-within:ring-teal-500 transition-all mb-3">
                
                {AVAILABLE_SKILLS.filter(s => selectedIds.includes(s._id)).map(skill => (
                    <div 
                        key={skill._id} 
                        className="flex items-center gap-1.5 bg-[#EBF5F5] text-[var(--secondary-color)] px-3 py-1 rounded-full text-sm font-medium border border-[#D1EAEA]"
                    >
                        <span>{skill.name}</span>
                        <button
                            type="button"
                            onClick={() => toggleSkill(skill._id)}
                            className="hover:bg-[#D1EAEA] rounded-full p-0.5 transition-colors text-[var(--secondary-color)]"
                        >
                            <X className="w-3.5 h-3.5" />
                        </button>
                    </div>
                ))}
                
               
                <input 
                    type="text" 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type a skill and press Enter..." 
                    className="flex-1 min-w-[150px] border-none outline-none text-sm text-gray-700 px-2 py-1 bg-transparent focus:ring-0 focus:outline-none"
                />
            </div>


            <div className="flex flex-wrap gap-2">
                {AVAILABLE_SKILLS.map(skill => {
                    const isSelected = selectedIds.includes(skill._id);
                    return (
                        <button
                            type="button"
                            key={skill._id}
                            onClick={() => toggleSkill(skill._id)}
                            className={`
                                px-3 py-1.5 rounded-full border text-xs md:text-sm font-medium transition-all
                                ${isSelected 
                                    ? "bg-[var(--secondary-color)] text-white border-[var(--secondary-color)] shadow-sm opacity-40 cursor-default" 
                                    : "bg-white text-[var(--secondary-color)] border-gray-200 hover:border-[var(--secondary-color)] hover:text-[var(--secondary-color)]"
                                }
                            `}
                        >
                            + {skill.name}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

export default SkillsSection;