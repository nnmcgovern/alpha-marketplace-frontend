import { useState } from "react";

export default function CreateAccountModal({ setShowCreateAccountModal }) {
  const [newUser, setNewUser] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newUser.password === passwordConfirm) {
      setStatus("Passwords do not match");
    } else {
      setStatus("");
      console.log("CreateAccountModal--newUser: ", newUser); // FOR TESTING
      console.log("CreateAccountModal--passwordConfirm: ", passwordConfirm); // FOR TESTING
      // create new user
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "passwordConfirm") {
      setPasswordConfirm(value);
    } else {
      setNewUser((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleClickCancel = (e) => {
    setShowCreateAccountModal(false);
  };

  return (
    <div>
      <h1>Create an Account</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={newUser.email}
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Username"
          name="username"
          value={newUser.username}
          onChange={handleChange}
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          value={newUser.password}
          onChange={handleChange}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          name="passwordConfirm"
          value={passwordConfirm}
          onChange={handleChange}
        />

        <button type="submit">Create Account</button>
      </form>
      <p>{status}</p>
      <button onClick={handleClickCancel}>Cancel</button>
    </div>
  );
}
