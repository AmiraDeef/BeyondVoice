function StatCard({

    title,
    value,
    subtitle,
    icon,
    progress

}) {

    return (

        <div className="bg-white rounded-xl shadow p-5">

            <div className="flex justify-between">

                <div>

                    <p>{title}</p>

                    <h2>{value}</h2>

                    {
                        subtitle &&
                        <p>{subtitle}</p>
                    }

                </div>

                <i className={icon}></i>

            </div>

            {
                progress &&
                <div className="w-full h-2 bg-gray-200 rounded-full mt-4">

                    <div
                        style={{width:`${progress}%`}}
                        className="bg-teal-600 h-full rounded-full"
                    />

                </div>
            }

        </div>

    );

}

export default StatCard;