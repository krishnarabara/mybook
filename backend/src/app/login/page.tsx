"use client";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Login = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  // const session = useSession();
  const { data: session, status: sessionStatus } = useSession();
                                                                                                     
  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.replace("/dashboard");
    }
  }, [sessionStatus, router]);

  const isValidEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  }; 

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    if (!isValidEmail(email)) {
      setError("Email is invalid");
      return;
    }

    if (!password || password.length < 8) {
      setError("Password is invalid");
      return;
    }

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    console.log("🚀 ~ file: page.tsx:44 ~ handleSubmit ~ res:", res)

    if (res?.error) {
      setError("Invalid email or password");
      if (res?.url) router.replace("/dashboard");
    } else {
      setError("");
    }
  };

  if (sessionStatus === "loading") {
    return <h1>Loading...</h1>;
  }

  return (
    sessionStatus !== "authenticated" && (
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="bg-[#212121] p-8 rounded shadow-md w-96">
          <h1 className="text-4xl text-center font-semibold mb-8">Login</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="w-full border border-pink-950 text-black rounded px-4 py-3 mb-5 focus:outline-double focus:border-green-950 focus:text-orange-700"
              placeholder="Email"
              required
            />
            <input
            type="image"
            src="/home/webclues/Desktop/mybook/backend/public/mybooklogo.svg"  
            alt="Icon"
            className="w-12 h-12 rounded-full mb-7"
          />
            
            <input
              type="password"
              className="w-full border border-pink-950 text-black rounded px-4 py-3 mb-5 focus:outline-double focus:border-green-950 focus:text-orange-700"
              placeholder="Password"
              required
            />
            <button
              type="submit"
              className="max-w-full bg-indigo-200 text-red-800 py-3 rounded hover:bg-emerald-300"
            >
              {" "}
              Sign In
            </button>
            <p className="text-gray-700 text-[16px] mb-5">{error && error}</p>
          </form>
          <button
            className="w-full bg-orange-900 text-teal-200 py-2 rounded hover:bg-orange-500"
            onClick={() => {
              signIn("github");
            }}
          >
          Don't have an account? Sign up
          </button>
          <div className="text-center text-indigo-400 mt-5">- OR -</div>
          <Link
            className="block text-center text-teal-300 hover:underline mt-2"
            href="/register"
          >
            Login Here
          </Link>
        </div>
      </div>
    )
  );
};

export default Login;