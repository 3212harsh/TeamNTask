import React, { useState } from 'react';
import Login_Left from '../components/Login/Login_Left';
import Login_right from '../components/Login/Login_right';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    // Add login logic here
  };

  const handleGoogleLogin = () => {
    console.log('Login with Google');
    // Add Google OAuth logic here
  };

  const handleFacebookLogin = () => {
    console.log('Login with Facebook');
    // Add Facebook OAuth logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex w-3/4 max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden ">
        <Login_Left/>
        <Login_right username={username} setUsername={setUsername} password={password} setPassword={setPassword} handleLogin={handleLogin} handleGoogleLogin={handleGoogleLogin} handleFacebookLogin={handleFacebookLogin} />
      </div>
    </div>
  );
};

export default Login;
