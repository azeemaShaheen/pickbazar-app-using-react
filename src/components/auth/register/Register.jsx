import React from "react";
import PickBazar from "../../../assets/logo.webp";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const registerSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

const Register = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const registerUser = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-white">
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col items-center">
          <img src={PickBazar} alt="Pick Bazar Logo" className="h-10 w-auto" />

          <p className="mt-6 text-center text-sm text-gray-600">
            By signing up, you agree to our{" "}
            <a href="#" className="text-[#0b9376] underline">
              terms
            </a>{" "}
            &{" "}
            <a href="#" className="text-[#0b9376] underline">
              policy
            </a>
            .
          </p>
        </div>

        <form onSubmit={handleSubmit(registerUser)} className="mt-8 space-y-5">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-black">
              Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                type="text"
                autoComplete="name"
                {...register("name")}
                className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-black placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#0b9376]"
              />
              <p className="mt-1 text-sm text-red-600">{errors?.name?.message}</p>
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-black">
              Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                type="email"
                autoComplete="email"
                {...register("email")}
                className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-black placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#0b9376]"
              />
              <p className="mt-1 text-sm text-red-600">{errors?.email?.message}</p>
            </div>
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-black">
              Password
            </label>
            <div className="mt-2 relative">
              <input
                id="password"
                type="password"
                autoComplete="new-password"
                {...register("password")}
                className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 pr-10 text-sm text-black placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#0b9376]"
              />

              {/* eye icon (only UI like screenshot) */}
              <button
                type="button"
                className="absolute inset-y-0 right-2 flex items-center text-gray-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.8"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1 1 0 0 1 0-.644C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.577 3.01 9.964 7.178.07.207.07.437 0 .644C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.577-3.01-9.964-7.178Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </button>

              <p className="mt-1 text-sm text-red-600">{errors?.password?.message}</p>
            </div>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="mt-2 w-full rounded-md bg-[#0b9376] py-3 text-sm font-semibold text-white hover:opacity-90"
          >
            Register
          </button>
        </form>

        {/* Divider */}
        <div className="my-7 flex items-center gap-4">
          <div className="h-px w-full bg-gray-200" />
          <span className="text-sm text-gray-500">Or</span>
          <div className="h-px w-full bg-gray-200" />
        </div>

        {/* Bottom text */}
        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="font-semibold text-[#0b9376] underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;