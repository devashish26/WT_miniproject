import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../Utils/AuthContext";

export default function ResetPassword() {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const { resetPassword } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await resetPassword(email);
      setStatus("Password Reset Email sent to your regstered email Id.");
    } catch (e) {
      setError(e.message);
      console.error(e);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1> Reset Password</h1>
        {error ? error : ""} <br />
        <label htmlFor="email">
          Email : <br />
          <input
            value={email}
            type="email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <input type="submit" value="Reset Password" />
        {status ? status : ""} <br />
        <Link to="/login">Login</Link>
      </form>
    </div>
  );
}
