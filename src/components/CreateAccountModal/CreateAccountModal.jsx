import { useState } from "react";
import { signUp } from "../../services/users";
import "./CreateAccountModal.css";

export default function CreateAccountModal({
  setShowCreateAccountModal,
  setShowLoginModal,
  setUser,
}) {
  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
    passwordConfirm: "",
    isError: false,
    errorMsg: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ISSUE: if, else not working as intended currently
    if (!form.password === form.passwordConfirm) {
      setStatus("Passwords do not match");
    } else {
      setStatus("");

      // create new user
      try {
        const user = await signUp(form);
        setUser(user);
        setShowCreateAccountModal(false);
        document.body.classList.remove("modal-open");
      } catch (err) {
        setForm({
          username: "",
          email: "",
          password: "",
          passwordConfirm: "",
          isError: true,
          errorMsg: "Sign Up Details Invalid",
        });
      }
      console.log("CreateAccountModal--afterPost: ", form); // FOR TESTING
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
    setShowCreateAccountModal(false);
    document.body.classList.remove("modal-open");
  };

  const handleClickLogin = (e) => {
    setShowCreateAccountModal(false);
    setShowLoginModal(true);
  };

  return (
    <div className="create-account-overlay">
      <div className="create-account-modal">
        <h1>Create an Account</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />

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

          <input
            type="password"
            placeholder="Confirm Password"
            name="passwordConfirm"
            value={form.passwordConfirm}
            onChange={handleChange}
            required
          />

          <button type="button" onClick={handleClickCancel}>
            Cancel
          </button>
          <button type="submit">Create Account</button>
        </form>
        <p>{status}</p>
        <div className="create-account-modal-login">
          <p>Already have an account?</p>
          <button onClick={handleClickLogin}>Login</button>
        </div>
      </div>
    </div>
  );
}
