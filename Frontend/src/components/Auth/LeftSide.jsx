import React from "react";
import logoImg from "../../assets/logoBeyondVoice.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faEnvelope, faCircleUser } from "@fortawesome/free-solid-svg-icons";
function LeftSide({ type }) {
  const isRegister = type === "register";
  return (
    <>
      <div className="bg-[var(--bg-color)] hidden md:flex flex-col min-h-screen w-full overflow-hidden">
        <div className="p-6 md:p-10 flex flex-col justify-start gap-12 flex-1 w-full max-w-2xl mx-auto">
          <div className="w-full">
            <img
              src={logoImg}
              alt="Logo"
              className="w-48 md:w-56 object-contain"
            />
          </div>
          <div className="flex flex-col md:w-md">
            <h2 className="text-[var(--main-color)] text-3xl font-bold  ">
              {isRegister
                ? '"Every voice deserves to be heard—in the way that works best."'
                : '"Talent has no barriers. Neither should hiring."'}
            </h2>
            <div className="text-lg text-[var(--grey-color)] font-normal py-6 md:text-2xl">
              <p>
                {isRegister
                  ? "Create your account and experience hiring without barriers. Whether you're seeking your next opportunity or building an inclusive team, BeyondVoice makes it accessible, transparent, and human."
                  : "Join thousands of Deaf and Hard of Hearing professionals finding meaningful careers through text-first, accessible interviews. Or help your company build a truly inclusive workforce."}
              </p>
            </div>
          </div>
          {isRegister ? (
            <div className="grid grid-cols-3 w-full max-w-md">
              <div class="flex flex-col  text-center">
                <span class="text-2xl md:text-3xl font-bold text-[var(--secondary-color)]  ">
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
          ) : (
            <div className="flex flex-col gap-4 w-full max-w-md">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-600 border border-teal-100">
                  <FontAwesomeIcon icon={faEnvelope}  className="text-base" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-[var(--main-color)]">
                    100% Text-Based
                  </span>
                  <span className="text-xs text-[var(--grey-color)]">
                    No phone calls, ever
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-600 border border-teal-100">
                  <FontAwesomeIcon icon={faCircleUser}  className="text-base" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-[var(--main-color)]">
                    Built by the community
                  </span>
                  <span className="text-xs text-[var(--grey-color)]">
                    For the community
                  </span>
                </div>
              </div>
            </div>
          )}

          <div className="text-sm text-[var(--grey-color)] mt-10">
            © 2026 BeyondVoice. Empowering inclusive hiring.
          </div>
        </div>
      </div>
    </>
  );
}
export default LeftSide;
