import React, { useState } from 'react';
import { IonContent, IonPage, IonInput, IonButton, IonText } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './SignIn.css';

const SignIn: React.FC = () => {
  const history = useHistory();
  const [error, setError] = useState<string>('');

  const handleSignUpClick = () => {
    history.push('/signup'); // Navigate to the SignUp page
  };

  const handleForgotPasswordClick = () => {
    history.push('/forgotpass'); // Navigate to the ForgotPass page
  };

  const handleSignInClick = () => {
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;
    
    if (!email || !password) {
      setError('Please fill in all details');
      return;
    }

    history.push('/todo'); // Navigate to the ToDo page
  };

  return (
    <IonPage>
      <IonContent>
        <div className="signIn-container">
          <div className="signIn-form">
            <h1>Sign In</h1>
            <form>
              <div className="form-group">
                <label>Email</label>
                <IonInput id="email" className="signIn-input" placeholder="Email" type="email" />
              </div>
              <div className="form-group">
                <label>Password</label>
                <IonInput id="password" className="signIn-input" placeholder="Password" type="password" />
              </div>
              {error && <IonText color="danger">{error}</IonText>}
              <IonButton className="signIn-button" expand="block" onClick={handleSignInClick}>Sign In</IonButton>
            </form>
            <div className="signIn-links">
              <a className="forgot-password" onClick={handleForgotPasswordClick}>Forgot Password?</a>
              <a className="sign-up" onClick={handleSignUpClick}>Sign Up</a>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SignIn;