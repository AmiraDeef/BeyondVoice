import SmartCard from "../../ui/SmallCard";

function ProfileProgress({ score }) {
    return (
        <>
        <SmartCard title={"Profile Tips"} childern={
            <div className="w-full bg-gray-200 h-2 rounded-full my-4">

                    <div
                        style={{ width: `${score}%` }}
                        className="bg-[var(--secondary-color)] h-full rounded-full"
                    />

                </div>
                // {/* skills also static until i integrate */}
                <p className="text-[var(--grey-color)]">

                    Add your skills to improve matches

                </p>

        }/>

            <div className="bg-white rounded-xl shadow p-5">

                <h3 className="text-lg font-semibold text-[var(--main-color)]">

                    Profile Tips

                </h3>

                <div className="w-full bg-gray-200 h-2 rounded-full my-4">

                    <div
                        style={{ width: `${score}%` }}
                        className="bg-[var(--secondary-color)] h-full rounded-full"
                    />

                </div>
                {/* skills also static until i integrate */}
                <p className="text-[var(--grey-color)]">

                    Add your skills to improve matches

                </p>

            </div>

        </>
    )
}

export default ProfileProgress;