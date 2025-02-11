import React from "react";
import SideBar from "./SideBar";
import { Input } from "../../Components/UsedInputs";

function Password() {
  return (
    <SideBar>
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-bold">Change Password</h2>

        <div className="w-full">
          <Input
            label="Password"
            placeholder="******"
            type="password"
            bg={true}
            name="password"
          />
        </div>

        <div className="w-full">
          <Input
            label=" New Password"
            placeholder="******"
            type="password"
            bg={true}
            name="password"
          />
        </div>

        <div className="w-full">
          <Input
            label=" Confirm Password"
            placeholder="******"
            type="password"
            bg={true}
            name="password"
          />
        </div>
        <div className="flex justify-end items-center my-4">
          <button className="bg-main font-medium transitions hover:bg-subMain border border-subMain text-white py-3 px-6 rounded w-full sm:w-auto">
            Change Password
          </button>
        </div>
      </div>
    </SideBar>
  );
}

export default Password;
