import React from 'react';
import {
  IonItem,
  IonLabel,
  IonNote
  } from '@ionic/react';
import { SingleNews } from '../newsData/newsItems';
import './NewsListItem.css';

interface NewsListItemProps {
  news: SingleNews;
}

const NewsListItem: React.FC<NewsListItemProps> = ({ news }) => {
  return (
    <IonItem routerLink={`/newsItems/${news.id}`} detail={false}>
      <div slot="start" className="dot dot-unread"></div>
      <IonLabel className="ion-text-wrap">
        <h2>
          {news.fromName}
          <span className="date">
            <IonNote>{news.date}</IonNote>
          </span>
        </h2>
        <h3>{news.subject}</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </IonLabel>
    </IonItem>
  );
};

export default NewsListItem;
