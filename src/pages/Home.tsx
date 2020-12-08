import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import './Home.css';
const Home: React.FC = () => {

  return (
    <IonPage id="home-page">
    <IonHeader>
      <IonToolbar>
        <IonTitle>Home</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">
            Home
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <div className="home-main">
        <div className="home-main-header">
          <h2>Welcome to the Staffbase Bootcamp App</h2>
        </div>
        <div className="home-main-content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Nam consectetur dolor sem, sed ultrices metus sodales eget.
             Sed consequat porta cursus. In lobortis lobortis massa quis efficitur.
             Pellentesque ut ultricies ipsum, a dictum quam. Praesent malesuada porttitor dapibus.
             Ut nec nulla quis justo hendrerit dictum nec id sapien. Sed luctus eleifend hendrerit.
             Praesent at feugiat lacus, sit amet suscipit nisi.</p>
          <p>
            Praesent pulvinar, felis vel suscipit convallis, ex orci eleifend tortor,
            volutpat dignissim dolor ligula in risus. Nulla at lectus ex.
            Maecenas lacinia euismod justo ut pharetra. Integer vehicula massa vitae
            enim laoreet, at laoreet urna aliquam. Donec fringilla, risus at viverra
            eleifend, turpis velit varius lorem, a placerat sapien est vel est.
            Aliquam euismod tortor non pulvinar rhoncus. Integer rutrum aliquet mi a mollis.
            Nulla consequat erat elit, sagittis porta lectus suscipit non. Sed fermentum non orci faucibus rutrum.
            Etiam dignissim posuere sodales. Nam commodo, metus id tristique ullamcorper,
            odio elit consectetur risus, id feugiat diam ex faucibus diam.
            Donec non felis in nibh blandit fermentum a ac magna. Aenean eget massa lobortis,
            pellentesque risus at, dictum erat. Mauris nulla nisi, semper quis mauris eget, auctor hendrerit neque.
          </p>
        </div>
      </div>

    </IonContent>
  </IonPage>
  );
};

export default Home;
