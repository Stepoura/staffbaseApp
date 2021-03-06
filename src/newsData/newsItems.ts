export interface SingleNews {
    fromName: string;
    subject: string;
    date: string;
    id: number;
  }
  
  const news: SingleNews[] = [
    {
      fromName: 'Staffbase Admin',
      subject: 'News #1',
      date: '2:32 AM',
      id: 0
    },
    {
      fromName: 'Staffbase Admin',
      subject: 'We got some exciting news for you!',
      date: '11:12 AM',
      id: 1
    }

  ];
  
  export const getAllNews = () => news;
  
  export const getNews = (id: number) => news.find(m => m.id === id);