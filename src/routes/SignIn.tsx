import { useSignInMutation } from "domain/slices/apislice";
import { setCredentials } from "domain/slices/authSlice";
import { useAppDispatch, useAppSelector } from "hooks/useAppSelector";
import { FormEventHandler, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/svgs/logo.svg";
import Navbar from "components/Navbar";

export function SignIn() {
  const auth = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [signIn, { isLoading }] = useSignInMutation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Code to submit the form data to your backend API
  }

  async function handleSignIn() {
    try {
      const res = await signIn({ email, password }).unwrap();
      if (res.data) {
        console.log("res: ", res);
        dispatch(setCredentials(res.data));
        navigate("/dashboard"); // TODO dashboard instead
      }
    } catch (error) {
      // TODO
    }
  }

  async function handleSignUp() {}

  return (
    <div className="mx-auto flex h-screen flex-col items-center justify-center bg-image-light bg-cover bg-center bg-no-repeat px-6 py-8 text-black dark:bg-image-dark dark:text-white">
      <div className="mb-6 flex items-center text-2xl font-semibold">
        <img className="mr-2 h-8 w-8" src={logo} alt="logo" />
        GIA Trainer
      </div>
      <div className="w-full rounded-lg bg-slate-100 shadow dark:bg-slate-900 sm:max-w-md">
        <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
          <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">Sign in to your account</h1>
          <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="focus:border-primary-600 focus:ring-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="mb-2 block text-sm font-medium">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="focus:border-primary-600 focus:ring-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex justify-end">
              <a href="#" className="text-sm font-medium hover:underline">
                Forgot password?
              </a>
            </div>
            <button
              onClick={handleSignIn}
              className="w-full rounded-lg bg-emerald-600 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4"
            >
              Sign in
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Don’t have an account yet?{" "}
              <a href="#" className="text-primary-600 ml-2 font-medium hover:underline">
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
