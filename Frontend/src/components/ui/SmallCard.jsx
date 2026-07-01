function SmartCard({title,childern,className=""}) {
    return (<>
        <div className={`bg-white rounded-2xl border border-slate-100 shadow-sm p-5 flex flex-col justify-between h-full ${className}`}>

            <h3 className="text-lg font-semibold text-[var(--main-color)]">

                {title}

            </h3>

            <div className="w-full bg-gray-200 h-2 rounded-full my-4">

                {childern}
            </div>
        </div>

    </>)
}
export default SmartCard