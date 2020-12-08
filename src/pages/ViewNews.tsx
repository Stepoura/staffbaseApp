import React, { useState } from 'react';
import { SingleNews, getNews } from '../newsData/newsItems';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonNote,
  IonPage,
  IonToolbar,
  useIonViewWillEnter
} from '@ionic/react';
import { personCircle } from 'ionicons/icons';
import { RouteComponentProps } from 'react-router';
import './ViewNews.css';

interface ViewNewsProps extends RouteComponentProps<{ id: string; }> { }

const ViewNews: React.FC<ViewNewsProps> = ({ match }) => {

  const [news, setNews] = useState<SingleNews>();

  useIonViewWillEnter(() => {
    const msg = getNews(parseInt(match.params.id, 10));
    setNews(msg);
  });

  return (
    <IonPage id="view-news-page">
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons>
            <IonBackButton text="News" defaultHref="/home"></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {news ? (
          <>
            <IonItem>
              <IonIcon icon={personCircle} color="primary"></IonIcon>
              <IonLabel className="ion-text-wrap">
                <h2> 
                  {news.fromName}
                  <span className="date">
                    <IonNote>{news.date}</IonNote>
                  </span>
                </h2>
              </IonLabel>
            </IonItem>

            <div className="ion-padding">
              <h1>{news.subject}</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </>
        ) : <div>News not found</div>}
      </IonContent>
    </IonPage>
  );
};

export default ViewNews;
