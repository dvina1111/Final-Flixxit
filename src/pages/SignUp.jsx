import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BackgroundImage from '../components/BackgroundImage';
import Header from '../components/Header';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'; // Import Firebase authentication methods
import { firebaseAuth } from '../utils/firebase-config'; // firebase-config.js file exporting Firebase authentication instance
import { Link, useNavigate } from 'react-router-dom';

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });

  const handleSignIn = async () => {
    try {
      const { email, password } = formValues;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.error('Error creating user:', error); // Log the entire error object for better debugging
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) {
        navigate('/Flixxit');
      }
    });

    return () => {
      unsubscribe(); // Unsubscribe from the auth state listener when the component unmounts
    };
  }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <Container $showPassword={showPassword}>
      <Link to="/login">Already have an account? Login</Link>
      <Link to="/Flixxit">Go to home</Link>
      {/* Your other JSX elements */}
      <BackgroundImage />
        <div className="content">
          <Header login />
          <div className="body flex column a-center j-center">
            <div className="text flex column">
              <h1>Unlimited movies, TV shows and more.</h1>
              <h4>Watch anywhere. Cancel anytime.</h4>
              <h6>
                Ready to watch? Enter your email to create or restart membership.
              </h6>
            </div>
      <div className="form">
        <input
          type="email"
          placeholder="Email address"
          name="email"
          autoComplete="username" // Use 'username' for email fields
          value={formValues.email}
          onChange={handleInputChange}
        />
        {showPassword && (
          <input
            type="password"
            placeholder="Password"
            name="password"
            autoComplete="current-password" // Use 'current-password' for password fields
            value={formValues.password}
            onChange={handleInputChange}
          />
        )}
        {!showPassword && (
          <button onClick={() => setShowPassword(true)}>Get Started</button>
        )}
      </div>
      {showPassword && <button onClick={handleSignIn}>Sign Up</button>}
      </div>
      </div>
    </Container>
  );
}


const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;
    .body {
      gap: 1rem;
      .text {
        gap: 1rem;
        text-align: center;
        font-size: 2rem;
        h1 {
          padding: 0 25rem;
        }
      }
      .form {
        display: grid;
        width: 60%;
        input {
          color: black;
          border: none;
          padding: 1.5rem;
          font-size: 1.2rem;
          border: 1px solid black;
          &:focus {
            outline: none;
          }
        }
        button {
          padding: 0.5rem 1rem;
          background-color: #e50914;
          border: none;
          cursor: pointer;
          color: white;
          font-weight: bolder;
          font-size: 1.05rem;
        }
      }
      button {
        padding: 0.5rem 1rem;
        background-color: #e50914;
        border: none;
        cursor: pointer;
        color: white;
        border-radius: 0.2rem;
        font-weight: bolder;
        font-size: 1.05rem;
      }
    }
  }
`;
      
