import React, { useState } from "react";
import PickBazar from "../../../assets/logo.webp";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../../config/firebase";

const forgotSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
});

const ForgotPassword = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [firebaseError, setFirebaseError] = useState("");

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(forgotSchema),
  });

  const handleForgotPassword = async (data) => {
    try {
      setSuccessMessage("");
      setFirebaseError("");

      await sendPasswordResetEmail(auth, data.email);

      setSuccessMessage("Password reset email has been sent successfully.");
    } catch (error) {
      console.error(error.message);
      setFirebaseError(error.message);
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          src={PickBazar}
          alt="Pick Bazar Logo"
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-black">
          Forgot your password?
        </h2>
        <p className="mt-2 text-center text-sm text-gray-500">
          Enter your email and we will send you a reset link.
        </p>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          onSubmit={handleSubmit(handleForgotPassword)}
          className="space-y-6"
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm/6 font-medium text-black"
            >
              Email address
            </label>

            <div className="mt-2">
              <input
                id="email"
                type="email"
                autoComplete="email"
                {...register("email")}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#0b9376] sm:text-sm/6"
              />
              <p className="text-red-600">{errors?.email?.message}</p>
            </div>
          </div>

          {successMessage && (
            <p className="text-sm text-green-600">{successMessage}</p>
          )}

          {firebaseError && (
            <p className="text-sm text-red-600">{firebaseError}</p>
          )}

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#0B9376] px-3 py-1.5 text-sm/6 font-semibold text-white hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B9376]"
            >
              Send Reset Link
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm/6 text-gray-600">
          Remember your password?{" "}
          <Link
            to="/login"
            className="font-semibold text-[#0B9376] hover:opacity-80"
          >
            Back to Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;