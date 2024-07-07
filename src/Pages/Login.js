import React from "react";
import Layout from "../Layout/Layout";
import { Input } from "../Components/UsedInputs";
import { Link } from "react-router-dom";

function Login() {
  return (
    <Layout>
      <div className="container mx-auto px-2 my-24 flex-colo">
        <div className="w-full 2xl:w-2/5 gap-8 flex-colo p-8 sm:p-14 md:w-3/5 bg-dry  rounded-lg border border-border">
          <img
            src="/images/logo.png"
            alt="logo"
            className="w-full h-12 object-contain"
          />
          <Input
            label="Email"
            placeholder="infinitytv@group14.com"
            type="email"
            bg={true}
            name="email"
          />
          <Input
            label="Password"
            placeholder="******"
            type="password"
            bg={true}
            name="password"
          />

          <Link
            to="/dashboard"
            className="bg-subMain transitions hover:bg-main flex-rows gap-4 text-white p-4 rounded-lg w-full"
          >
            Sign In
          </Link>
          <p className="text-center text-border">
            Don't have an account?{" "}
            <Link to="/register" className="text-dryGray font-semibold ml-2">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
