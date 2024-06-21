"use client";
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { showMessage, showPermanentMessage } from "@/app/utils/Message";
import { changeCurrentPassword, sendForgetPasswordMail } from "../auth/store";
const ChangePassword = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChangeCurrentPassword = (e) => {
    e.preventDefault();
    const payload = {
      oldPassword,
      newPassword,
    };
    dispatch(
      changeCurrentPassword(payload, (error, response) => {
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
            Reset Your Password
          </h2>

          <form onSubmit={handleChangeCurrentPassword} className="mt-8">
            <div className="space-y-5">
              <div>
                <label
                  htmlFor=""
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  Old Password{" "}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter Old Password"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                  ></input>
                </div>
              </div>

              <div>
                <label
                  htmlFor=""
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  New Password{" "}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter New Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  ></input>
                </div>
              </div>
              <div className="flex items-center ">
                <div className="">
                  <input
                    className=""
                    defaultValue={showPassword}
                    type="checkbox"
                    onClick={handleShowPassword}
                    // placeholder="Enter New Password"
                    // value={newPassword}
                    // onChange={(e) => setNewPassword(e.target.value)}
                  ></input>
                </div>
                <label
                  htmlFor=""
                  className="text-base font-medium text-gray-900 ml-4"
                >
                  {" "}
                  Show Password{" "}
                </label>
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                >
                  Change Password <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ChangePassword;
