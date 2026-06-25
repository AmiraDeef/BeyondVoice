import landig from '../../assets/landig.svg'
function Hero() {
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

                            <div className="flex flex-wrap gap-4 pt-2">
                                <button className="bg-[var(--main-color)] text-white px-6 py-3 rounded-xl font-medium  ">
                                    Find a Job 
                                </button>
                                <button className="border border-[var(--main-color)] text-[var(--main-color)] px-6 py-3 rounded-xl font-medium ">
                                    Hire Inclusively
                                </button>
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
