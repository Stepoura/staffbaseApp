export interface Message {
    fromName: string;
    subject: string;
    date: string;
    id: number;
  }
  
  const messages: Message[] = [
    {
      fromName: 'Nils Wendler',
      subject: 'Hi, my Name is Nils',
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
  
  export const getMessages = () => messages;
  
  export const getMessage = (id: number) => messages.find(m => m.id === id);