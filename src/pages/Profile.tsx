import React from 'react';
import { IonToolbar, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonImg, IonButton, IonFooter } from '@ionic/react';
import './Profile.css';
import { useHistory } from 'react-router';

const Profile: React.FC = () => {
  const history = useHistory();
  const handleToDoClick = () => {
    history.push('/todo');
  };

  const handleCalendarClick = () => {
    history.push('/calendar');
  };

  return (
    <>

      <IonContent>
        <div className="profile-container">
          <div className="profile-content">
            <div className="profile-frame">
              <IonCard className="profile-card">
                <IonImg src="./profile-placeholder.png" className="profile-picture"></IonImg>
                <IonCardHeader>
                  <IonCardTitle>Username</IonCardTitle>
                  <IonCardSubtitle>Website</IonCardSubtitle>
                  <IonCardSubtitle>Bio</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                  Profile Details
                </IonCardContent>
              </IonCard>
            </div>
          </div>
        </div>
        <IonFooter>
  <IonToolbar>
    <div className="footer-buttons">
      <IonButton onClick={handleToDoClick}>ToDo</IonButton>
      <IonButton onClick={() => history.push('/profile')}>Profile</IonButton>
      <IonButton onClick={handleCalendarClick}>Calendar</IonButton>
    </div>
  </IonToolbar>
</IonFooter>
      </IonContent>
    </>
    
  );
};

export default Profile;