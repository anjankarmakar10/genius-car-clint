import React from "react";
import { Google } from "./Google";
import { Gihub } from "./Github";

const SignInProviders = () => {
  return (
    <div className="mt-7 mb-8">
      <h3 className="font-medium text-[#444444] text-base mb-6 text-center">
        Or Sign Up with
      </h3>
      <div className="flex gap-4 items-center justify-center">
        <Google />
        <Gihub />
      </div>
    </div>
  );
};

export default SignInProviders;
