import Image from "../../assets/images/login/login.svg";
import InputField from "../../components/InputField/InputField";
import ButtonSubmit from "../../components/Buttons/ButtonSubmit";
import SignInProviders from "../../components/auth/SignInProviders";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthProvider";
const SignUp = () => {
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [lading, setLoading] = useState(false);

  const { signUpWithEmail, verifyEmail } = useAuth();

  const navigate = useNavigate();

  let timeout;

  useEffect(() => {
    return () => clearTimeout(timeout);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const getValue = (name) => e.target[name].value;

    const name = getValue("name");
    const email = getValue("email");
    const password = getValue("password");
    const confirmPassword = getValue("confirmPassword");

    if (name === "") {
      setError("Please Enter Name");
      return;
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (password !== confirmPassword && password !== "") {
      setError("Password must be same");
      return;
    }

    try {
      setError("");
      setLoading(true);
      const { user } = await signUpWithEmail(email, password);
      await verifyEmail(user);
      setMessage("Check your email to verify account");
      timeout = setTimeout(() => {
        navigate("/");
      }, [3000]);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 flex gap-10 flex-col md:flex-row p-8">
      <div className="flex-1 hidden md:flex p-8">
        <img src={Image} alt="" />
      </div>
      <div className="flex-1 border border-[#D0D0D0] rounded-md px-16 py-10  h-fit">
        <h2 className="text-[#444444] font-semibold text-4xl text-center mb-8">
          Sign Up
        </h2>
        {error && (
          <div className="mt[-20px] mb-4 p-2 rounded-md bg-indigo-100 text-sm font-medium">
            {error}
          </div>
        )}
        {message && (
          <div className="mt[-20px] mb-4 p-2 rounded-md bg-teal-300 text-sm font-medium">
            {message}
          </div>
        )}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <InputField
            title={"Name"}
            placeholder={"Your name"}
            type={"text"}
            name={"name"}
          />
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
          <InputField
            title={"Confirm Password"}
            placeholder={"Your Password"}
            type={"password"}
            name={"confirmPassword"}
          />
          <ButtonSubmit disabled={lading} title={"Sign Up"} />
        </form>
        <SignInProviders />
        <div className="text-base font-medium text-[#737373] text-center">
          Already have an account?{" "}
          <Link to={"/signin"} className="font-bold text-[#FF3811]">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
