import { useState } from "react";
import { login } from "../../services/users.js";
import "./LoginModal.css";

export default function LoginModal({
  setShowLoginModal,
  setShowCreateAccountModal,
  setUser,
}) {
  const [form, setForm] = useState({
    username: "",
    password: "",
    isError: false,
    errorMsg: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log('LoginModal--user: ', user); // FOR TESTING
    // // login user
    try {
      const user = await login(form);
      setUser(user);
      setShowLoginModal(false);
    } catch (error) {
      console.error(error);
      setForm({
        username: "",
        password: "",
        isError: true,
        errorMsg: "Invalid Credentials",
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClickCancel = (e) => {
    setShowLoginModal(false);
  };

  const handleClickCreateAccount = (e) => {
    setShowLoginModal(false);
    setShowCreateAccountModal(true);
  };

  return (
    <div className="login-modal">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={form.username}
          onChange={handleChange}
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />

        <button type="submit">Login</button>
      </form>
      <button onClick={handleClickCancel}>Cancel</button>
      <p>Not registered?</p>
      <button onClick={handleClickCreateAccount}>Create Account</button>
    </div>
  );
}
