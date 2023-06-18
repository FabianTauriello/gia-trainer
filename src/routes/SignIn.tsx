import { useSignInMutation, useSignUpMutation } from "domain/slices/apislice";
import { setCredentials } from "domain/slices/authSlice";
import { useAppDispatch, useAppSelector } from "hooks/useAppSelector";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CustomButton } from "components/CustomButton";
import logo from "../assets/svgs/logo.svg";
import { Utils } from "utils/Utils";

export function SignIn() {
  const auth = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [signIn, { isLoading: isLoadingSignIn, isError: isSignInError, error: signInError, reset: resetSignIn }] = useSignInMutation();
  const [signUp, { isLoading: isLoadingSignUp, isError: isSignUpError, error: signUpError, reset: resetSignUp }] = useSignUpMutation();

  const [inputFields, setInputFields] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [createAccountView, setCreateAccountView] = useState(false);
  const [signUpSuccessMessage, setSignUpSuccessMessage] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (createAccountView) {
      handleSignUp();
    } else {
      handleSignIn();
    }
  }

  async function handleSignUp() {
    try {
      await signUp({
        email: inputFields.email,
        password: inputFields.password,
        firstName: inputFields.firstName,
        lastName: inputFields.lastName,
      }).unwrap();
      toggleView();
      setSignUpSuccessMessage(true);
    } catch (error) {
      console.log("Failed to sign up");
    }
  }

  async function handleSignIn() {
    try {
      const res = await signIn({ email: inputFields.email, password: inputFields.password }).unwrap();
      dispatch(setCredentials(res.data!));
      navigate("/dashboard");
    } catch (error) {
      console.log("Failed to sign in");
    }
  }

  function handleInputChange(prop: "email" | "password" | "firstName" | "lastName", newValue: string) {
    setInputFields({
      ...inputFields,
      [prop]: newValue,
    });
    setSignUpSuccessMessage(false);
  }

  function toggleView() {
    setCreateAccountView(!createAccountView);
    setInputFields({ ...inputFields, password: "" });
    setSignUpSuccessMessage(false);
    if (createAccountView) {
      resetSignUp();
    } else {
      resetSignIn();
    }
  }

  return (
    <div className="mx-auto flex h-screen flex-col items-center justify-center bg-image-light bg-cover bg-center bg-no-repeat px-6 py-8 text-black dark:bg-image-dark dark:text-white">
      {false && (
        <div>
          <div>email: {inputFields.email}</div>
          <div>pass: {inputFields.password}</div>
          <div>first name: {inputFields.firstName}</div>
          <div>last name: {inputFields.lastName}</div>
          <div>isLoadingSignIn: {isLoadingSignIn.toString()}</div>
          <div>isSignInError: {isSignInError.toString()}</div>
          <div>signInError: {JSON.stringify(signInError)}</div>
          <div>isLoadingSignUp: {isLoadingSignUp.toString()}</div>
          <div>isSignUpError: {isSignUpError.toString()}</div>
          <div>signUpError: {JSON.stringify(signUpError)}</div>
          {/* <div>isFetchBaseQueryError: {JSON.stringify(isFetchBaseQueryError(error))}</div> */}
          {/* <div>isErrorWithMessage: {JSON.stringify(isErrorWithMessage(error))}</div> */}
        </div>
      )}
      <div className="mb-6 flex items-center text-2xl font-semibold">
        <img className="mr-2 h-8 w-8" src={logo} alt="logo" />
        GIA Trainer
      </div>
      <div className="w-full rounded-lg bg-slate-100 shadow dark:bg-slate-900 sm:max-w-md">
        <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
          <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
            {createAccountView ? "Create an account" : "Sign in to your account"}
          </h1>
          <form className="" action="#" onSubmit={handleSubmit}>
            {createAccountView && (
              <div className="flex flex-col md:gap-2 md:flex-row">
                <div className="flex-1">
                  <label htmlFor="firstName" className="mb-3 block text-sm font-medium">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    required
                    disabled={isLoadingSignUp}
                    className={`block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400 sm:text-sm ${
                      isLoadingSignUp ? "opacity-50" : "opacity-100"
                    }`}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                  />
                </div>
                <div className="flex-1 mt-4 md:mt-0">
                  <label htmlFor="lastName" className="mb-3 block text-sm font-medium">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    required
                    disabled={isLoadingSignUp}
                    className={`block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400 sm:text-sm ${
                      isLoadingSignUp ? "opacity-50" : "opacity-100"
                    }`}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                  />
                </div>
              </div>
            )}
            <div className="mt-4">
              <label htmlFor="email" className="mb-3 block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                disabled={isLoadingSignIn || isLoadingSignUp}
                className={`block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400 sm:text-sm ${
                  isLoadingSignIn || isLoadingSignUp ? "opacity-50" : "opacity-100"
                }`}
                onChange={(e) => handleInputChange("email", e.target.value)}
              />
            </div>
            <div className="mt-4">
              <label htmlFor="password" className="mb-3 block text-sm font-medium">
                Password
              </label>
              <div className="relative">
                <input
                  value={inputFields.password}
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  required
                  disabled={isLoadingSignIn || isLoadingSignUp}
                  className={`block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400 sm:text-sm ${
                    isLoadingSignIn || isLoadingSignUp ? "opacity-50" : "opacity-100"
                  }`}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                />
                {/* TODO fix mobile button press hightlight (highlight box doesn't seem right) */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="tooltip absolute inset-y-0 right-4 flex items-center pl-3"
                >
                  <i className={showPassword ? "fa fa-eye-slash" : "fa fa-eye"} />
                </button>
              </div>
            </div>
            {(isSignUpError || signInError) && (
              <div className="rounded-lg border border-red-500 p-3 text-sm text-red-500">
                {Utils.getErrorMessage(createAccountView ? signUpError : signInError)}
              </div>
            )}
            {signUpSuccessMessage && (
              <div className="rounded-lg border border-green-500 p-3 text-sm text-green-500">Successfully created a new user</div>
            )}
            <CustomButton loading={isLoadingSignIn || isLoadingSignUp} customCss="mt-4">
              Sign {createAccountView ? "up" : "in"}
            </CustomButton>
            {/* TODO CHANGE TO BUTTON? */}
            <p className="cursor-pointer text-sm font-light text-gray-500 dark:text-gray-400">
              {createAccountView ? "Already" : "Don't"} have an account yet?
              <a onClick={toggleView} className="text-primary-600 ml-2 font-medium hover:underline">
                {createAccountView ? "Sign In" : "Sign up"}
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
