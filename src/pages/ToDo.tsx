import React, { useState } from 'react';
import { IonContent, IonPage, IonInput, IonButton, IonList, IonItem, IonLabel, IonCheckbox, IonIcon, IonFooter, IonToolbar, IonButtons, } from '@ionic/react';
import { trash } from 'ionicons/icons';
import { useHistory } from 'react-router';
import './ToDo.css';

const ToDo: React.FC = () => {
  const history = useHistory();
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask.trim()]);
      setNewTask('');
    }
  };

  const handleTaskToggle = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = tasks[index].startsWith('✅ ') ? tasks[index].substring(2) : `✅ ${tasks[index]}`;
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleProfileClick = () => {
    history.push('/profile');
  };

  const handleCalendarClick = () => {
    history.push('/calendar');
  };

  return (
    <IonPage>
      <IonContent>
        <div className="todo-container">
          <h1>To-Do List</h1>
          <IonInput
            className="todo-input"
            placeholder="Enter task"
            value={newTask}
            onIonChange={(e) => setNewTask(e.detail.value!)}
          />
          <IonButton className="add-button" expand="block" onClick={handleAddTask}>Add Task</IonButton>
          <IonList>
            {tasks.map((task, index) => (
              <IonItem key={index}>
                <IonCheckbox
                  slot="start"
                  checked={task.startsWith('✅ ')}
                  onIonChange={() => handleTaskToggle(index)}
                />
                <IonLabel className={task.startsWith('✅ ') ? 'completed-task' : ''}>{task}</IonLabel>
                <IonButton fill="clear" slot="end" onClick={() => handleDeleteTask(index)}>
                  <IonIcon icon={trash} />
                </IonButton>
              </IonItem>
            ))}
          </IonList>
        </div>
      </IonContent>
      <IonFooter>
  <IonToolbar>
    <div className="footer-buttons">
      <IonButton>ToDo</IonButton>
      <IonButton onClick={handleProfileClick}>Profile</IonButton>
      <IonButton onClick={handleCalendarClick}>Calendar</IonButton>
    </div>
  </IonToolbar>
</IonFooter>
    </IonPage>
  );
};

export default ToDo;