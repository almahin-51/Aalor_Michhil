import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.config";
import { FaGoogle } from "react-icons/fa";
const GoogleLogin = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);

  return (
    <div>
      <button
        onClick={() => signInWithGoogle()}
        className="flex flex-col justify-center items-center w-full rounded-lg"
      >
        <FaGoogle className="text-2xl" />
        Google Login
      </button>
    </div>
  );
};

export default GoogleLogin;
