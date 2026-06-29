import { Link } from "react-router-dom";
import Input from "../ui/Input";

import {
    faEnvelope,
    faLock,
    faUser,
} from "@fortawesome/free-solid-svg-icons";

function AuthForm({ type, form, onSubmit, error }) {
    const isRegister = type === "register";

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = form;

    const role = watch("role");

    return (
        <div className="flex h-screen flex-col justify-center px-6 py-12 bg-white">
            <div className="w-full max-w-sm mx-auto">

                <h2 className="text-3xl font-bold text-[var(--main-color)]">
                    {isRegister ? "Create your account" : "Welcome Back"}
                </h2>

                <p className="text-sm text-[var(--grey-color)] mt-2">
                    {isRegister
                        ? "Join the inclusive hiring revolution."
                        : "Sign in to continue your journey."}
                </p>


                {error && (
                    <div className="mb-4 rounded-lg border border-red-300 bg-red-50 my-6 p-3 text-sm text-red-600">
                        {error}
                    </div>
                )}


                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-5 mt-8"
                >
                    {isRegister && (
                        <Input
                            label="Full Name"
                            name="fullName"
                            placeholder="Enter your full name"
                            icon={faUser}
                            register={register}
                            error={errors.fullName}
                            rules={{
                                required: "Full name is required",
                            }}
                        />
                    )}

                    <Input
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        icon={faEnvelope}
                        register={register}
                        error={errors.email}
                        rules={{
                            required: "Email is required",
                        }}
                    />

                    <Input
                        label="Password"
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        icon={faLock}
                        register={register}
                        error={errors.password}
                        rules={{
                            required: "Password is required",
                            minLength: {
                                value: 6,
                                message: "Minimum 6 characters",
                            },
                        }}
                    />


                    {isRegister && (
                        <>
                            <label className="block font-semibold text-[var(--main-color)]">

                                I am a

                            </label>

                            <div className="grid grid-cols-2 gap-4">

                                <button
                                    type="button"
                                    onClick={() => setValue("role", "candidate")}
                                    className={`border rounded-xl p-4 transition

                  ${role === "candidate"
                                            ? "border-teal-600 bg-teal-50"
                                            : "border-gray-200"
                                        }`}
                                >
                                    <h3 className="border-[var(--secondary-color)] font-bold text-[var(--main-color)]">
                                        Candidate
                                    </h3>

                                    <p className="text-xs text-gray-500">
                                        Looking for jobs
                                    </p>
                                </button>

                                <button
                                    type="button"
                                    onClick={() => setValue("role", "company")}
                                    className={`border rounded-xl p-4 transition

                  ${role === "company"
                                            ? "border-[var(--secondary-color)] bg-teal-50"
                                            : "border-gray-200"
                                        }`}
                                >
                                    <h3 className="font-bold text-[var(--main-color)]">
                                        Company
                                    </h3>

                                    <p className="text-xs text-gray-500">
                                        Hiring Talent
                                    </p>
                                </button>

                            </div>
                        </>
                    )}

                    <button
                        className="w-full py-3 rounded-lg bg-[var(--main-color)] text-white hover:bg-[#18395a]"
                    >
                        {isRegister ? "Create Account" : "Sign In"}
                    </button>

                </form>

                <p className="text-center mt-5 text-[var(--grey-color)]">

                    {isRegister
                        ? "Already have an account?"
                        : "Don't have an account?"}

                    <Link
                        className="ml-1 text-[var(--secondary-color)] font-semibold"
                        to={isRegister ? "/login" : "/register"}
                    >
                        {isRegister ? "Login" : "Register"}
                    </Link>

                </p>

            </div>
        </div>
    );
}

export default AuthForm;