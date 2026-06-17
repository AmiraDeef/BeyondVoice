import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Input from "../ui/Input";
import { api } from "../../api/axios"
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
function RightSide({ type }) {
  const isRegister = type === "register";
  const [role, setRole] = useState("candidate");


  return (
    <>
      <div className="flex h-screen flex-col justify-center px-6 py-12 lg:px-4 bg-white overflow-hidden w-full">
        <div className="w-full sm:mx-auto sm:max-w-sm flex flex-col justify-center flex-1">
          <div className="mt-6">
            <h2 className="text-3xl font-bold text-[var(--main-color)] my-1">
              {isRegister ? "Create your account" : "Welcome back"}
            </h2>
            <p className="text-[var(--grey-color)] text-sm">
              {isRegister
                ? "Join the inclusive hiring revolution"
                : "Sign in to continue your journey"}
            </p>
          </div>

          <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
            <form action="#" method="POST" className="space-y-6">
              {isRegister && (
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-[var(--main-color)] mb-1"
                  >
                    Full Name
                  </label>
                  <Input placeholder="fullName" icon={faUser} />
                </div>
              )}
              <div>
                <label
                  for="email"
                  className="block text-sm/6 font-medium text-[var(--main-color)]"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <Input placeholder="email" type="email" icon={faEnvelope} />
                </div>
              </div>

              <div>
                <label
                  for="password"
                  className="block text-sm/6 font-medium text-[var(--main-color)]"
                >
                  Password
                </label>
                <div>
                  <Input placeholder="password" type="password" icon={faLock} />
                </div>
              </div>
              {isRegister && (
                <div>
                  <label className="block text-sm font-semibold text-[#1B3A5C] mb-2">
                    I am a
                  </label>

                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setRole("candidate")}
                      className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all text-center cursor-pointer ${
                        role === "candidate"
                          ? "border-teal-600 bg-teal-50/40 text-[var(--secondary-color)]"
                          : "border-gray-200 bg-white text-[var(--grey-color)] hover:border-[var(--grey-color)]"
                      }`}
                    >
                      <span className="font-bold text-sm text-[var(--main-color)]">
                        Candidate
                      </span>
                      <span className="text-xs text-[var(--grey-color)] mt-0.5">
                        Looking for jobs
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setRole("hr")}
                      className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all text-center cursor-pointer ${
                        role === "hr"
                          ? "border-teal-600 bg-teal-50/40 text-[var(--secondary-color)]"
                          : "border-gray-200 bg-white text-[var(--grey-color)] hover:border-[var(--grey-color)]"
                      }`}
                    >
                      <span className="font-bold text-sm text-[var(--main-color)]">
                        HR Manager
                      </span>
                      <span className="text-xs text-[var(--grey-color)] mt-0.5">
                        Hiring talent
                      </span>
                    </button>
                  </div>
                </div>
              )}

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-[var(--main-color)]  py-3  font-semibold text-white  focus-visible:outline-2  hover:bg-[#152e48] active:scale-[0.97] text-text-base/7"
                >
                  {isRegister ? "Create Account →" : "Sign In →"}
                </button>
              </div>
            </form>

            <p className="mt-4 text-center text-sm text-[var(--grey-color)]">
              {isRegister
                ? "Already have an account?"
                : "Don't have an account?"}
              <Link
                to={isRegister ? "/login" : "/register"}
                className="font-semibold text-[var(--secondary-color)] ml-1 hover:underline"
              >
                {isRegister ? "Sign in" : "Create one now"}
              </Link>
            </p>
            <div className="border-t border-[var(--grey-color)] py-4 mt-8 text-center">
              <Link
                to="/"
                className="text-[var(--grey-color)] text-sm hover:text-gray-600 transition-colors"
              >
                ← Back to home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default RightSide;
