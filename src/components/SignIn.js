import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
  logout,
} from "../../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  //   const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    // if (user) navigate("/");
  }, [user, loading]);
  return (
    <>
      <div className="flex justify-around h-screen w-screen">
        <form className="mt-8" onSubmit={(e) => e.preventDefault()}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-dark bg-white bg-clip-padding border border-solid border-gray rounded transition ease-in-out m-0 focus:text-gray-dark focus:bg-white focus:border-yellow focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail Address"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-dark bg-white bg-clip-padding border border-solid border-gray rounded transition ease-in-out m-0 focus:text-gray-dark focus:bg-white focus:border-yellow focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <button
            className="inline-block px-7 py-3 bg-yellow text-blue-dark font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-yellow hover:shadow-lg focus:bg-yellow focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-900 active:shadow-lg transition duration-150 ease-in-out w-full bg-green-500"
            onClick={() => logInWithEmailAndPassword(email, password)}
          >
            Login
          </button>
          <button
            className="inline-block px-7 py-3 bg-yellow-500 text-blue-dark font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-yellow hover:shadow-lg focus:bg-yellow focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow active:shadow-lg transition duration-150 ease-in-out w-full "
            onClick={signInWithGoogle}
          >
            Login with Google
          </button>
          <button onClick={() => logout()}>Logout</button>
          <div>
            <Link to="/reset">Forgot Password</Link>
          </div>
          <div>
            Don't have an account? <Link to="/register">Register</Link> now.
          </div>
        </form>
      </div>
    </>
  );
};

export default SignIn;
