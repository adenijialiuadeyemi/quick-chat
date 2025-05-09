import React, { useState } from "react";
import RightSidebar from "../components/RightSidebar";
import assets from "../assets/assets";

const Login = () => {
  const [state, setState] = useState("Sign Up");

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [isDataSubmitted, setIsDataSubmitted] = useState(false);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (state == "Sign Up" && !isDataSubmitted) {
      setIsDataSubmitted(true);
      return;
    }
  };
  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center gap-8 sm:justify-evenly max-sm:flex-col backdrop-blur-2xl ">
      {/*  Left section */}
      <img src={assets.logo_big} className="w-[min(30vw,250px)]" />

      {/* Right Section */}
      <form
        onSubmit={onSubmitHandler}
        className="border-2 bg-white/8 text-white border-gray-500 p-6 flex flex-col gap-6 rounded-lg shadow-lg"
      >
        <h2 className="font-medium text-2xl flex justify-between items-center">
          {state}
          {isDataSubmitted && (
            <img
              src={assets.arrow_icon}
              className="w-5 cursor-pointer"
              onClick={() => setIsDataSubmitted(false)}
            />
          )}
        </h2>
        {state === "Sign Up" && !isDataSubmitted && (
          <input
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
            type="text"
            placeholder="Full Name"
            required
            className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        )}

        {!isDataSubmitted && (
          <>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Email Address"
              required
              className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Password"
              required
              className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </>
        )}

        {state === "Sign Up" && isDataSubmitted && (
          <textarea
            onChange={(e) => setBio(e.target.value)}
            value={bio}
            rows={4}
            placeholder="Provide a short bio..."
            className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        )}

        <button
          type="submit"
          className="bg-[#8185B2] text-white p-2 rounded-md font-medium"
        >
          {state === "Sign Up" ? "Create Account" : "Login Now"}
        </button>

        <div className="flex items-center gap-2 text-sm text-gray-500">
          <input type="checkbox" />
          <p>Agree to the terms of use & privacy policy</p>
        </div>

        <div className="flex flex-col gap-2">
          {state === "Sign Up" ? (
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <span
                onClick={() => {
                  setState("Login");
                  setIsDataSubmitted(false);
                }}
                className="font-medium text-violet-500 cursor-pointer"
              >
                Login here
              </span>
            </p>
          ) : (
            <p className="text-sm text-gray-600">
              Create an account?{" "}
              <span
                onClick={() => setState("Sign Up")}
                className="font-medium text-violet-500 cursor-pointer"
              >
                Click here
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
