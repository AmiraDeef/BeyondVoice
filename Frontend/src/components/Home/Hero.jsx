import landig from '../../assets/landig.svg'
function Hero() {
    return (
        <>

<section className="w-full bg-[var(--bg-color)] py-16 md:py-24">
            <div className="container mx-auto px-6 ">
                <div className="flex justify-between items-center flex-col md:flex-row gap-10 py-20">
                    <div className="flex flex-col gap-6 md:gap-10 max-w-lg">
                        <h1 className="text-4xl md:text-5xl font-bold text-center text-[var(--main-color)] mb-6">
                            Empowering Inclusive Hiring with AI-Driven Conversations
                        </h1>
                        <p className=" text-lg text-[var(--grey-color)] mb-10 font-medium text-lg">
                            Join the revolution in inclusive hiring. Connect, converse, and conquer with BeyondVoice.
                        </p>
                    </div>


                    <div className="flex justify-center items-center w-full max-w-2xl">
                        <img src={landig} alt="Landing" className="w-full max-w-2xl" />
                    </div>
                </div>


            </div>


</section>

        </>


    )
}
export default Hero
