import React from 'react'
import Input from '../ui/Input'

function RightSide() {
  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm ">

          <h2 className=" text-3xl font-bold text-[var(--main-color)] my-3">Create your account</h2>
          <p className='text-[#6B7280]'>Join the inclusive hiring revolution</p>
        </div>

        <div className="my-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label for="fullName" className="block text-sm/6 font-medium text-[var(--main-color)]">Full Name</label>
              <div className="mt-2">
                <Input placeholder="fullname" icon="fa-user"/>
              </div>
            </div>
            <div>
              <label for="email" className="block text-sm/6 font-medium text-[var(--main-color)]">Email address</label>
              <div className="mt-2">
                <input id="email" type="email" name="email" required autocomplete="email" className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label for="password" className="block text-sm/6 font-medium text-[var(--main-color)]">Password</label>
              </div>
              <div className="mt-2">
                <input id="password" type="password" name="password" required autocomplete="current-password" className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
              </div>
            </div>

            <div>
              <button type="submit" className="flex w-full justify-center rounded-md bg-[var(--main-color)]  py-3  font-semibold text-white  focus-visible:outline-2  hover:bg-[#152e48] active:scale-[0.97] text-text-base/7">Sign in</button>
            </div>
          </form>

          <p className="mt-10 text-center text-base text-[var(--grey-color)]">
            Already have an account?
            <a href="#" className="font-semibold text-[var(--secondary-color)] "> Sign up </a>
          </p> 
          <div className="border-t border-[var(--grey-color)] py-4 mt-8 text-center">
            <a href="/" className="text-[var(--grey-color)] text-base">← Back to home</a>
          </div>
        </div>
       
      </div>
    </>
  )
}
export default RightSide