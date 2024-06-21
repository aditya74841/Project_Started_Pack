"use client";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";
import { handleLogout } from "./(auth)/auth/store";
import { useDispatch } from "react-redux";
import { showMessage } from "./utils/Message";

export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch();
  // const handleGoogleLogin = async () => {
  //   try {
  //     const postData = {
  //       name: "Ranjan",
  //       email: "aditya@gmail.com",
  //       password: "123456",
  //       phoneNumber: 4589785555,
  //     };

  //     // const response = await axios.get(
  //     //   "http://localhost:8080/api/v1/users/google/callback",
  //     //   {
  //     //     withCredentials: true, // Ensure credentials are sent with the request
  //     //   }
  //     // );
  //     const response = await axios.post(
  //       "http://localhost:8080/api/v1/users/register",
  //       postData
  //     );

  //     console.log("Response from backend:", response);

  //     // Assuming backend sends a URL to redirect for Google login
  //     // if (response.data && response.data.loginUrl) {
  //     //   window.location.href = response.data.loginUrl; // Redirect to Google login
  //     // }
  //   } catch (error) {
  //     console.error("Error during Google login", error);
  //   }
  // };

  const handleUserLogout = () => {
    // Redirect to backend to initiate Google OAuth flow
    // window.location.href = "http://localhost:8080/api/v1/users/google";

    dispatch(
      handleLogout((error, response) => {
        if (error) {
          showMessage(error.response.data.message, "error");
        } else {
          showMessage(response.message);
          router.push("/auth");
        }
      })
    );
  };
  return (
    <>
      <button
        onClick={() => {
          handleUserLogout();
        }}
      >
        handleLogout
      </button>
    </>
  );
}
