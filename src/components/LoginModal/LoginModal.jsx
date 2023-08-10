import { useState } from 'react';
import CreateAccountModal from '../CreateAccountModal/CreateAccountModal.jsx';

export default function LoginModal({
  setShowLoginModal,
  setShowCreateAccountModal,
}) {
  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('LoginModal--user: ', user); // FOR TESTING
    // login user
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prev) => ({
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
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Username'
          name='username'
          value={user.username}
          onChange={handleChange}
        />

        <input
          type='password'
          placeholder='Password'
          name='password'
          value={user.password}
          onChange={handleChange}
        />

        <button type='submit'>Login</button>
      </form>
      <button onClick={handleClickCancel}>Cancel</button>
      <p>Not registered?</p>
      <button onClick={handleClickCreateAccount}>Create Account</button>
    </div>
  );
}
