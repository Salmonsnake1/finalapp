import React, { useState } from 'react';
import { IonContent, IonPage, IonInput, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './ForgotPass.css';


const ForgotPass: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const history = useHistory();

  const handleBack = () => {
    history.goBack(); // Navigate back to the previous page
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Here you can handle the form submission, for now, we'll just show the message
    setMessage('You should receive an email within five minutes to reset your password');
  };

  return (
    <IonPage>
      <IonContent>
        <div className="forgotPass-container">
          <div className="forgotPass-form">
          <button className="forgotPass-back-button" onClick={handleBack}>Back</button> {/* Back button */}   
            <h1>Forgot Password</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Email</label>
                <IonInput
                  className="forgotPass-input"
                  placeholder="Email"
                  type="email"
                  value={email}
                  onIonChange={(e) => setEmail(e.detail.value!)}
                  required
                />
              </div>
              <IonButton className="forgotPass-button" expand="block" type="submit">Submit</IonButton>
            </form>
            {message && <div className="forgotPass-message">{message}</div>}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ForgotPass;