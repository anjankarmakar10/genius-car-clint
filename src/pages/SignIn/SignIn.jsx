import Image from "../../assets/images/login/login.svg";
import InputField from "../../components/InputField/InputField";
import ButtonSubmit from "../../components/Buttons/ButtonSubmit";
import SignInProviders from "../../components/auth/SignInProviders";
import { Link } from "react-router-dom";
const SignIn = () => {
  return (
    <div className="container mx-auto px-4 flex gap-10 flex-col md:flex-row p-8">
      <div className="flex-1 hidden md:flex p-8">
        <img src={Image} alt="" />
      </div>
      <div className="flex-1 border border-[#D0D0D0] rounded-md px-16 py-10  h-fit">
        <h2 className="text-[#444444] font-semibold text-4xl text-center mb-8">
          Login
        </h2>
        <form className="flex flex-col gap-6">
          <InputField
            title={"Email"}
            placeholder={"Your email"}
            type={"email"}
            name={"email"}
          />
          <InputField
            title={"Password"}
            placeholder={"Your Password"}
            type={"password"}
            name={"password"}
          />

          <ButtonSubmit title={"Sign In"} />
        </form>
        <SignInProviders />
        <div className="text-base font-medium text-[#737373] text-center">
          Create an account?{" "}
          <Link to={"/signup"} className="font-bold text-[#FF3811]">
            SignUp
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
