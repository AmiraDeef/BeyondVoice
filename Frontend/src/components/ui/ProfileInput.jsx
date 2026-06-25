function ProfileInput({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder
}) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-[var(--main-color)]">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
        w-full
        border
        border-slate-300
        rounded-xl
        px-4
        py-3
        outline-none
        focus:border-[var(--main-color)]
        "
      />
    </div>
  );
}

export default ProfileInput;