import landig from '../../assets/landig.svg'
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function Hero() {
    const { user } = useAuth();
    const navigate = useNavigate();
    console.log(user);
    const users = {
        candidate: [{
            text: "Browse Jobs",
            action: () => navigate(`${user.role}/jobs`),
            primary: true
        },
        {
            text: "my Applications",
            action: () => navigate(`${user.role}/applications`),
            primary: false

        }],
        company: [{
            text: "Post a Job",
            action: () => navigate(`${user.role}/jobs`),
            primary: true
        }, {
            text: "my Applicants",
            action: () => navigate(`${user.role}/applicants`),
            primary: false

        }],
        guest: [{
            text: "find Job",
            action: () => navigate(`/register`),
            primary: true
        }, {
            text: "Hire Inclusively",
            action: () => navigate(`/register`),
            primary: false

        }], admin: [{
            text: "Dashboard",
            action: () => navigate("/admin"),
            primary: true,
        },
        {
            text: "Review Companies",
            action: () => navigate("/admin/companies"),
            primary: false,
        }]

    }
    const buttons = users[user?.role || "guest"];

    return (
        <>

            <section className="w-full bg-[var(--bg-color)] py-16 md:py-24 ">
                <div className="container mx-auto px-4 md:px-6  ">
                    <div className="space-y-6">
                        <div className="flex justify-between items-center flex-col md:flex-row gap-10 py-6">
                            <div className="flex flex-col gap-6 md:gap-10 max-w-lg">
                                <h1 className="text-5xl md:text-6xl font-bold text-[var(--main-color)]">
                                    Hiring Without{' '}
                                    <span className="text-[var(--secondary-color)]">
                                        Barriers.
                                    </span>
                                </h1>
                                <p className=" text-xl text-[var(--grey-color)] mb-2 font-medium text-lg">
                                    Join the revolution in inclusive hiring. Connect, converse, and conquer with BeyondVoice.
                                </p>

                                <div className="flex gap-4 font-semibold">
                                    {buttons.map((btn) => (
                                        <button
                                            key={btn.text}
                                            onClick={btn.action}
                                            className={
                                                btn.primary
                                                    ? "bg-[var(--main-color)] text-white px-6 py-3 rounded-xl"
                                                    : "border border-[var(--main-color)] text-[var(--main-color)] px-6 py-3 rounded-xl"
                                            }
                                        >
                                            {btn.text}
                                        </button>
                                    ))}
                                </div>
                                <div className="grid grid-cols-3 w-full max-w-md">
                                    <div class="flex flex-col text-center">
                                        <span class="text-2xl md:text-3xl font-bold text-[var(--secondary-color)] ">
                                            12K+
                                        </span>
                                        <span class="text-xs md:text-sm text-[var(--grey-color)] mt-1">
                                            Active candidates
                                        </span>
                                    </div>
                                    <div class="flex flex-col text-center">
                                        <span class="text-2xl md:text-3xl font-bold text-[var(--secondary-color)] ">
                                            850+
                                        </span>
                                        <span class="text-xs md:text-sm text-[var(--grey-color)] mt-1">
                                            Companies hiring
                                        </span>
                                    </div>
                                    <div class="flex flex-col text-center">
                                        <span class="text-2xl md:text-3xl font-bold text-[var(--secondary-color)] ">
                                            94%
                                        </span>
                                        <span class="text-xs md:text-sm text-[var(--grey-color)] mt-1">
                                            Success rate
                                        </span>
                                    </div>
                                </div>
                            </div>


                            <div className="flex justify-center items-center w-full max-w-2xl">
                                <img src={landig} alt="Landing" className="w-full max-w-2xl" />
                            </div>
                        </div>


                    </div>
                </div>

            </section>

        </>


    )
}
export default Hero
