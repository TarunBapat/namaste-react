import { signInWithGoogle, auth } from "../../utils/firebase";
import { signOut } from "firebase/auth";
const SignIn = () => {
  return (
    <>
      <h1>SignIn Page</h1>
      <button className="login__btn login__google" onClick={signInWithGoogle}>
        Login with Google
      </button>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  );
};

export default SignIn;
