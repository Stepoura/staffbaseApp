import React , { useState }from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, useIonViewWillEnter} from '@ionic/react';
import './News.css';
import NewsListItem from '../components/NewsListItem';
import { getAllNews, SingleNews } from '../newsData/newsItems';

const News: React.FC = () => {

  const [news, setNews] = useState<SingleNews[]>([]);

  useIonViewWillEnter(() => {
    const msgs = getAllNews();
    setNews(msgs);
  });


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>News</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">News</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          {news.map(m => <NewsListItem key={Date.now() + m.id} news={m} />)}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default News;
