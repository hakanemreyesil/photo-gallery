import { IonBadge, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonLabel, IonList, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


const CardDetail: React.FC = () => {  
  const { cardId } = useParams<{ cardId: string }>();
  const [selectedCard, setSelectedCard] = useState<any>(null); // API'den gelen veriyi saklayacak state

  useEffect(() => {
    // API'den veriyi çekme
    fetch(`https://dummyjson.com/products/${cardId}`)
      .then((response) => {
        if (!response.ok) {
          console.log("API isteği başarısız oldu");
          throw new Error("API isteği başarısız oldu");
        }
        return response.json();
      })
      .then((jsonData) => {
        // API'den gelen veriyi state'e kaydetme
        setSelectedCard(jsonData);
      })
      .catch((error) => {
        // Hata durumunda işlemler
        console.error("API isteği başarısız oldu:", error);
      });
  }, [cardId]);
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
          <IonText>description: {selectedCard.description}</IonText>
        </>
      )}
    </IonContent>
  </IonPage>
  );
};
export default CardDetail;
