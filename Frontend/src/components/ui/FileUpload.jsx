function FileUpload({
    label,
    accept,
    register
}) {

    return (
        <div className="space-y-3">

            <label className="block font-medium">
                {label}
            </label>

            <input
                type="file"
                accept={accept}
                {...register}
                className="
                    w-full
                    border-2
                    border-dashed
                    border-slate-300
                    rounded-xl
                    p-4
                "
            />

        </div>
    );
}

export default FileUpload;