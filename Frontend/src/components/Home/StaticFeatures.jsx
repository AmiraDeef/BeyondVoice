import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faCrosshairs, faScaleBalanced } from '@fortawesome/free-solid-svg-icons';

function StaticFeatures() {

    const features = [
        {
            title: "Text-Only Interviews",
            icon: faComments,
            info: "No phone calls. Ever. Every interview is conducted via our built-in text chat room."

        }, {
            title: "Accessibility Matching",
            icon: faCrosshairs,
            info: "Jobs ranked by how well they match your communication needs, not just your skills."

        }, {
            title: "Compliance Tracker",
            icon: faScaleBalanced,
            info: "Companies track PWD quota progress in real time — transparent and accountable."

        }
    ]
    const steps = [
        {
            title: "Create your profile",
            id: 1,
            info: "Set your communication preferences once."

        }, {
            title: "Get matched",
            id: 2,
            info: "Roles ranked by accessibility fit."

        }, {
            title: "Interview via text",
            id: 3,
            info: "No calls — structured text rooms."

        }, {
            title: "Accept your offer",
            id: 4,
            info: "Track every stage in real time."

        }
    ]

    return (
        <>
            <section className="bg-white my-15">
                <div className="text-center my-15">
                    <h2 className="text-[var(--main-color)] mb-5 font-semibold text-1xl md:text-2xl">Everything you need, built for accessibility.</h2>
                    <p className="text-[var(--grey-color)] ">Designed from the ground up for DHH professionals and the employers who value them.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {
                        features.map((ele, index) =>

                            <div key={index} className="w-full h-full bg-white shrink-0 border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-md hover:border-[var(--secondary-color)] transition-all duration-300 flex flex-col items-start text-left">

                                <div className="w-12 h-12 bg-[var(--bg-color)] p-4 rounded-xl border border-[var(--light-gray)] flex items-center justify-center mb-6 text-[var(--secondary-color)]">
                                    <FontAwesomeIcon icon={ele.icon} className="w-6 h-6" /></div>
                                <h3 className='text-xl font-bold text-[var(--main-color)] mb-3'>  {ele.title} </h3>
                                <p className='text-[var(--grey-color)] text-sm md:text-base leading-relaxed'> {ele.info}  </p>

                            </div>
                        )}
                </div>
            </section>

            <section className="bg-[var(--light-gray)] my-20">
                <h2 className="text-[var(--main-color)] mb-5 font-bold text-1xl md:text-2xl text-center pt-20">How it works</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto'>
                    {steps.map((step, index) =>

                        <div key={index} className="w-full h-full p-8 rounded-2xl flex flex-col items-center text-center mb-15">

                            <div className="w-12 h-12 bg-[var(--secondary-color)] text-center rounded-full border  flex items-center justify-center mb-6 text-white">
                                <h4 className="font-bold" >{step.id}</h4> </div>
                            <h3 className='text-xl font-bold text-[var(--main-color)] mb-3'>  {step.title} </h3>
                            <p className='text-[var(--grey-color)] text-sm md:text-base'> {step.info}  </p>

                        </div>
                    )}
                </div>
            </section>
        </>
    )
}
export default StaticFeatures