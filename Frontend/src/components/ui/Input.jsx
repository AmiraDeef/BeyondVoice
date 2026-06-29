// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// function Input({ placeholder, icon,type="text" }) {
//     const placeholderTexts = {
//     fullName: "Your full name",
//     email: "you@example.com",
//     password: "Create a strong password"
//   };
//     return (<>


//         <div className="w-full">
//             <div className="flex items-center gap-3 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 focus-within:border-[var(--main-color)] focus-within:ring-2 focus-within:ring-blue-100 transition-all">
//              {icon && (
//           <FontAwesomeIcon icon={icon} className="text-[var(--grey-color)] text-lg flex-shrink-0" />
//         )}

//                 <input id={placeholder}
//                     type={type}
//                     name={placeholder} required
//                     placeholder={placeholderTexts[placeholder] || placeholder}
//                     autoComplete={placeholder}
//                     className="block w-full text-base rounded-md bg-transparent border-none placeholder:text-[var(--grey-color)]  focus-ring-0 outline-none "/>
//             </div>

//         </div>


//     </>)
// }

// export default Input;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Input({
  label,
  name,
  type = "text",
  placeholder,
  icon,
  register,
  rules,
  error,
}) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-[var(--main-color)]">
        {label}
      </label>

      <div className="relative">
        {icon && (
          <FontAwesomeIcon
            icon={icon}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />
        )}

        <input
          type={type}
          placeholder={placeholder}
          {...register(name, rules)}
          className={`w-full rounded-xl border py-3 pl-11 pr-4 outline-none transition
          ${
            error
              ? "border-red-500"
              : "border-gray-300 focus:border-[var(--secondary-color)]"
          }`}
        />
      </div>

      {error && (
        <p className="text-red-500 text-sm mt-1">
          {error.message}
        </p>
      )}
    </div>
  );
}

export default Input;