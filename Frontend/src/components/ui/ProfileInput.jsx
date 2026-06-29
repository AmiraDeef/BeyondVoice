function ProfileInput({
  label,
...props
}) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-[var(--main-color)]">
        {label}
      </label>

      <input

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
         {...props}
      />
    </div>
  );
}

export default ProfileInput;