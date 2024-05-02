import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css'; // Import CSS file for styling

const Profile = () => {
  const history = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerFirstName, setRegisterFirstName] = useState('');
  const [registerLastName, setRegisterLastName] = useState('');
  const [registerResidence, setRegisterResidence] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerPasswordConfirmation, setRegisterPasswordConfirmation] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Simulate login success
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
      history.push('/home');
    }, 2000);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    // Simulate registration success
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
      history.push('/home');
    }, 2000);
  };

  return (
    <div className="profile-container">
      <h2>{isLogin ? 'Login' : 'Register'}</h2>
      {isLogin ? (
        <form onSubmit={handleLoginSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} required />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      ) : (
        <form onSubmit={handleRegisterSubmit}>
          <div className="form-group">
            <label>First Name:</label>
            <input type="text" value={registerFirstName} onChange={(e) => setRegisterFirstName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Last Name:</label>
            <input type="text" value={registerLastName} onChange={(e) => setRegisterLastName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Residence:</label>
            <input type="text" value={registerResidence} onChange={(e) => setRegisterResidence(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" value={registerEmail} onChange={(e) => setRegisterEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Confirm Password:</label>
            <input type="password" value={registerPasswordConfirmation} onChange={(e) => setRegisterPasswordConfirmation(e.target.value)} required />
          </div>
          <button type="submit" className="btn btn-primary">Register</button>
        </form>
      )}
      <p>{isLogin ? "Don't have an account? " : "Already have an account? "}
        <button onClick={toggleForm} className="btn btn-secondary">{isLogin ? 'Sign up' : 'Login'}</button>
      </p>
      {showSuccessMessage && <div className="success-message">Success! Redirecting to home...</div>}
    </div>
  );
};

export default Profile;
