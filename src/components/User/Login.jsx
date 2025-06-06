import toast, { Toaster } from "react-hot-toast";
import googleImg from "/public/google.png";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../../config/firebase.config";
import { validateUserJWTToken } from "../../api/authService";

const notify = () => toast.success("Here is your toast.");
const notifyError = () => toast.error("Here is your toast.");

const Login = () => {
  // const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const loginWithHandler = async () => {
    await signInWithPopup(firebaseAuth, provider).then((userCred) => {
      firebaseAuth.onAuthStateChanged((cred) => {
        if (cred) {
          cred?.getIdToken().then((token) => {
            // console.log("token " + token);
            validateUserJWTToken(token).then((data) => {
              console.log("data " + JSON.stringify(data, null, 2));
            });
          });
        }
      });
    });
  };

  return (
    <div className="flex-1 justify-center  items-center flex">
      <div className="flex flex-col p-3 border m-2">
        <h2 className="self-center font-bold text-xl underline">Login</h2>
        <div className="gap-5 flex m-2">
          <button onClick={notify} className="button">
            LogIn
          </button>
          <button onClick={notifyError} className="button">
            Sign Up
          </button>
        </div>
        <div className="flex items-center">
          <div className="h-0.5 w-[50%] bg-gray-400"></div>
          <div className="px-2">Or</div>
          <div className="h-0.5 w-[50%] bg-gray-400"></div>
        </div>
        <button className="button1 self-center" onClick={loginWithHandler}>
          <img src={googleImg} alt="google icon" width={25} height={25} />
        </button>
      </div>
      <Toaster />
    </div>
  );
};

export default Login;
