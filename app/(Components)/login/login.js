// components/LoginForm.js
import { useState } from 'react';
import { useRouter } from 'next/router';

const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (email === 'admin@gmail.com' && password === '12345678') {
      // Redirect to the home page on successful login
      router.push('/');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-form-container">
      <h2>Login</h2>
      <div className="input-container">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-container">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <p className="error-message">{error}</p>}
      <button onClick={handleLogin}>Log In</button>
      <style jsx>{`
        /* Your styles go here */
      `}</style>
    </div>
  );
};

export default LoginForm;
