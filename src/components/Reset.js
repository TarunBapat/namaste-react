import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth, sendPasswordResetEmail } from "../../utils/firebase";
// import "./Reset.css";
function Reset() {
  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);
  //   const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
    // if (user) navigate("/dashboard");
  }, [user, loading]);
  return (
    <div className="flex justify-around h-screen w-screen">
      <div className="flex flex-col items-center p-8 bg-slate-500">
        <input
          type="text"
          className="p-3 mb-3 text-xs"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <button
          className="reset__btn"
          onClick={() => sendPasswordResetEmail(email)}
        >
          Send password reset email
        </button>
        <div>
          Don't have an account? <Link to="/register">Register</Link> now.
        </div>
      </div>
    </div>
  );
}
export default Reset;
