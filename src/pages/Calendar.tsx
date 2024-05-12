import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonGrid, IonRow, IonCol, IonButton, IonFooter, IonToolbar } from '@ionic/react';
import './Calendar.css';
import { useHistory } from 'react-router';

const Calendar: React.FC = () => {

  const history = useHistory();
  const handleToDoClick = () => {
    history.push('/todo');
  };

  const handleProfileClick = () => {
    history.push('/profile');
  };
  // Dummy data for days of the week and weeks in month
  const daysInWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const weeksInMonth = [
    [1, 2, 3, 4, 5, 6, 7],
    [8, 9, 10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19, 20, 21],
    [22, 23, 24, 25, 26, 27, 28],
    [29, 30, 31]
  ];

  return (
    <div className="calendar-container">
    <IonCard className="calendar-card">
      <IonCardHeader>
        <IonCardTitle>Calendar</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonGrid className="calendar-grid">
          <IonRow className="weekdays-row">
            {daysInWeek.map((day, index) => (
              <IonCol size="1" key={index}>
                <div className="day">{day}</div>
              </IonCol>
            ))}
          </IonRow>
          {weeksInMonth.map((week, index) => (
            <IonRow key={index}>
              {week.map((day, dayIndex) => (
                <IonCol size="1" key={dayIndex}>
                  <div className="day">{day}</div>
                </IonCol>
              ))}
            </IonRow>
          ))}
        </IonGrid>
      </IonCardContent>
    </IonCard>
    <IonFooter>
    <IonToolbar>
    <div className="footer-buttons">
      <IonButton onClick={handleToDoClick}>ToDo</IonButton>
      <IonButton onClick={handleProfileClick}>Profile</IonButton>
      <IonButton onClick={() => history.push('/calendar')}>Calendar</IonButton>
    </div>
  </IonToolbar>
</IonFooter>
    </div>
      
  );
};

export default Calendar;