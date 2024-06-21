"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";

import store from "./store";
import { useEffect } from "react";
import { getProfile } from "./(auth)/auth/store";
import { useRouter } from "next/navigation";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const router = useRouter();
  useEffect(() => {
    store.dispatch(
      getProfile((error, response) => {
        if (error) {
          router.push("/auth");
          console.error("Get Profile Error:", error);
        } else {
          // router.push("/");

          console.log("Profile Data:", response);
        }
      })
    );
  }, []);

  return (
    <Provider store={store}>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </Provider>
  );
}
