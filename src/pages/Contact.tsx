import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg, IonButton  } from '@ionic/react';
import './Contact.css';

const Contact: React.FC = () => {

  const submitMessage = async () => {
    alert("Can't reach server!");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Contact</IonTitle>
          <IonImg className="logo-img-staffbase" src="https://s15952.pcdn.co/wp-content/themes/staffbase-theme/img/staffbase_logo.png"></IonImg>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="contact-container">
          <form action="someBackendEndpoint">
            <label htmlFor="fname">First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your first name"></input>
            <label htmlFor="lname">Last Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name"></input>
            <label htmlFor="subject">Subject</label>
            <textarea id="subject" name="subject" placeholder="Your subject"></textarea>
            <IonButton onClick={() => submitMessage()} className="btn-submit">Submit</IonButton>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Contact;
