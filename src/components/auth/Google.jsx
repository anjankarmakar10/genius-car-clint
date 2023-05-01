import icon from "../../assets/icons/google.png";
import { useAuth } from "../../context/AuthProvider";

export const Google = () => {
  const { signInWithGoogle } = useAuth();

  const handleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div
      onClick={handleSignIn}
      className="w-[55px] h-[55px] rounded-full grid place-content-center bg-[#f5f5f8] cursor-pointer"
    >
      <img className="w-5" src={icon} alt="" />
    </div>
  );
};
