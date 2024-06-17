"use client";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

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


  const handleGoogleLogin = () => {
    // Redirect to backend to initiate Google OAuth flow
    window.location.href = "http://localhost:8080/api/v1/users/google";
  };
  return (
    <>
      <button
        onClick={() => {
          handleGoogleLogin();
        }}
      >
        Google Login
      </button>
    </>
  );
}
