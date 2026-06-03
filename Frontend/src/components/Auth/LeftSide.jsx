import React from 'react'

function LeftSide() {
    return (
        <>
            <div className='bg-[#EAF4F6] flex flex-col min-h-screen w-full'>
                <div className="md:p-12 flex  grow-3 justify-between flex-col flex-1">

                    <h1 className='text-[#1B3A5C] text-2xl font-bold '>BeyondVoice</h1>

                    <div className="flex flex-col w-md">
                        <h2 className='text-[#1B3A5C] text-3xl font-bold  '>"Every voice deserves to be heard—in the way that works best."</h2>
                        <div className="text-lg text-[#6B7280] font-normal py-6 md:text-2xl mx-3">
                            <p>Create your account and experience hiring without barriers. Whether you're seeking your next opportunity or building an inclusive team, BeyondVoice makes it accessible, transparent, and human.</p>

                        </div>
                    </div>

                    <div className="grid grid-cols-3 w-md">
                        <div class="flex flex-col  text-center">
                            <span class="text-2xl md:text-3xl font-bold text-teal-700  ">12K+</span>
                            <span class="text-xs md:text-sm text-[#6b7280] mt-1">Active candidates</span>
                        </div>
                        <div class="flex flex-col text-center">
                            <span class="text-2xl md:text-3xl font-bold text-teal-700 ">850+</span>
                            <span class="text-xs md:text-sm text-slate-500 mt-1">Companies hiring</span>
                        </div>
                        <div class="flex flex-col text-center">
                            <span class="text-2xl md:text-3xl font-bold text-teal-700 ">94%</span>
                            <span class="text-xs md:text-sm text-slate-500 mt-1">Success rate</span>
                        </div>
                    </div>

                    <div className="text-sm text-[#6b7280]">
                        © 2026 BeyondVoice. Empowering inclusive hiring.
                    </div>

                </div>

            </div>


        </>
    )
}
export default LeftSide