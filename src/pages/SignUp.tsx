import React from 'react';
import {
  IonContent,
  IonPage,
  IonInput,
  IonButton,
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './SignUp.css'; 

const SignUp: React.FC = () => {
  const history = useHistory();

  const handleBack = () => {
    history.goBack(); 
  };

  const handleSignInRedirect = () => {
    history.push('/signin'); 
  };

  return (
    <IonPage>
      <IonContent>
        <div className="signUp-container">
          <div className="signUp-form">
            <button className="signUp-back-button" onClick={handleBack}>Back</button>
            <h1>Sign Up</h1>
            <form>
              <div className="form-group">
                <label>First Name</label>
                <IonInput className="signUp-input" placeholder="First Name" />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <IonInput className="signUp-input" placeholder="Last Name" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <IonInput className="signUp-input" placeholder="Email" type="email" />
              </div>
              <div className="form-group">
                <label>Password</label>
                <IonInput className="signUp-input" placeholder="Password" type="password" />
              </div>
              <div className="form-group">
                <label>Re-enter Password</label>
                <IonInput className="signUp-input" placeholder="Re-enter Password" type="password" />
              </div>
              <IonButton className="signUp-button" expand="block" type="button" onClick={handleSignInRedirect}>Sign Up</IonButton>
            </form>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SignUp;