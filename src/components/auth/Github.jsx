import icon from "../../assets/icons/github.png";
import { useAuth } from "../../context/AuthProvider";

export const Gihub = () => {
  const { signInWithGithub } = useAuth();

  const handleSignIn = async () => {
    try {
      await signInWithGithub();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div
      onClick={handleSignIn}
      className="w-[55px] h-[55px] rounded-full grid place-content-center bg-[#f5f5f8] cursor-pointer"
    >
      <img className="w-8 h-8 object-cover rounded-full" src={icon} alt="" />
    </div>
  );
};
