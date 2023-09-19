import { IonBadge, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonLabel, IonList, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { useParams } from 'react-router-dom';

const cardData = [
    {id:'1', title: 'Card 1', content: 'Content for Card 1' },
    {id:'2', title: 'Card 2', content: 'Content for Card 2' },
    {id:'3', title: 'Card 3', content: 'Content for Card 3' },
    {id:'4', title: 'Card 4', content: 'Content for Card 4' },
    {id:'5', title: 'Card 5', content: 'Content for Card 5' },
    {id:'6', title: 'Card 6', content: 'Content for Card 6' },
    {id:'7', title: 'Card 7', content: 'Content for Card 7' },
    {id:'8', title: 'Card 8', content: 'Content for Card 8' },
    {id:'9', title: 'Card 9', content: 'Content for Card 9' },
  ];
const CardDetail: React.FC = () => {  
    const { cardId } = useParams<{ cardId: string }>();
    const selectedCard = cardData.find((card) => card.id === cardId);
  return (
    <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>{ cardId } detay</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className='ion-padding'>
      <IonText>Kart ID: {cardId}</IonText>
      {selectedCard && (
        <>
          <IonText>Title: {selectedCard.title}</IonText>
          <IonText>Content: {selectedCard.content}</IonText>
        </>
      )}
    </IonContent>
  </IonPage>
  );
};
export default CardDetail;
