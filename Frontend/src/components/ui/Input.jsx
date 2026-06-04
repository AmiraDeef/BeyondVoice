import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Input({ placeholder, icon,type="text" }) {
    const placeholderTexts = {
    fullName: "Your full name",
    email: "you@example.com",
    password: "Create a strong password"
  };
    return (<>


        <div className="w-full">
            <div className="flex items-center gap-3 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 focus-within:border-[var(--main-color)] focus-within:ring-2 focus-within:ring-blue-100 transition-all">
             {icon && (
          <FontAwesomeIcon icon={icon} className="text-[var(--grey-color)] text-lg flex-shrink-0" />
        )}

                <input id={placeholder}
                    type={type}
                    name={placeholder} required
                    placeholder={placeholderTexts[placeholder] || placeholder}
                    autocomplete={placeholder}
                    className="block w-full text-base rounded-md bg-transparent border-none placeholder:text-[var(--grey-color)]  focus-ring-0 outline-none "/>
            </div>

        </div>


    </>)
}

export default Input;