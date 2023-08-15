import { useEffect, useState } from "react";
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

  useEffect(() => {
    document.body.classList.add("modal-open"); // add css to disable body scrolling
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // login user
    try {
      const user = await login(form);
      setUser(user);
      localStorage.setItem("user", JSON.stringify(user));
      setShowLoginModal(false);
      document.body.classList.remove("modal-open");
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
    document.body.classList.remove("modal-open");
  };

  const handleClickCreateAccount = (e) => {
    setShowLoginModal(false);
    setShowCreateAccountModal(true);
  };

  return (
    <div className="login-modal-overlay">
      <div className="login-modal">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={form.username}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <div className="login-modal-form-buttons">
            <button type="button" onClick={handleClickCancel}>
              Cancel
            </button>
            <button type="submit">Login</button>
          </div>
        </form>
        <div className="login-modal-create-acc">
          <p>Not registered?</p>
          <button onClick={handleClickCreateAccount}>Create Account</button>
        </div>
      </div>
    </div>
  );
}
