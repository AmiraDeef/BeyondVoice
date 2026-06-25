function TextArea({
    label,
    error,
    ...props
}) {
    return (
        <div className="space-y-2">

            <label className="block text-sm font-medium text-[var(--main-color)]">
                {label}
            </label>

            <textarea
                {...props}
                rows={5}
                className="
                    w-full
                    rounded-xl
                    border
                    border-slate-300
                    px-4
                    py-3
                    outline-none
                    resize-none
                    focus:border-[var(--main-color)]
                "
            />

            {error && (
                <p className="text-red-500 text-sm">
                    {error}
                </p>
            )}

        </div>
    );
}

export default TextArea;