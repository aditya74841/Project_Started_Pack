"use client";
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { showMessage, showPermanentMessage } from "@/app/utils/Message";
import { sendForgetPasswordMail } from "../auth/store";
const ForgetPassowrd = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleForgetPassword = (e) => {
    e.preventDefault();
    const payload = {
      email,
    };
    dispatch(
      sendForgetPasswordMail(payload, (error, response) => {
        if (error) {
          showPermanentMessage(error.response.data.message, "error");
        } else {
          showPermanentMessage(response.message);
        }
      })
    );
  };

  return (
    <section className="2">
      <div className="flex items-center justify-center bg-white px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <h2 className="text-2xl font-bold leading-tight text-black">
            Enter Email To Reset Password
          </h2>

          <form onSubmit={handleForgetPassword} className="mt-8">
            <div className="space-y-5">
              <div>
                <label
                  htmlFor=""
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  Email address{" "}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                >
                  Send Mail
                  <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgetPassowrd;
