function InterviewCard({interview}){


    return(<>
    {
        
        <div className="bg-white rounded-xl shadow p-5">

            <h3 className="text-lg font-semibold text-[var(--main-color)]">

                Next Interview

            </h3>

            <p className="text-[var(--grey-color)]">

                {interview.title}

            </p>

            <p className="text-[var(--grey-color)]">

                {interview.company}

            </p>

            <p className="text-[var(--grey-color)]">

                {interview.date}

                •

                {interview.time}

            </p >

            <button>

                Join Room

            </button>

        </div>}
    

    </>)
}
export default InterviewCard