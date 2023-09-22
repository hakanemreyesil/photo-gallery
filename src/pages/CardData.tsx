import React, { useEffect, useState } from 'react';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

const Card: React.FC = () => {
  const [cardData, setCardData] = useState<{ id: string; title: string; description: string }[]>([]);


  useEffect(() => {
    // Fetch API ile GET isteği gönderme
    fetch('https://dummyjson.com/products')
      .then((response) => {
        if (!response.ok) {
          console.log('API isteği başarısız oldu');
        }
        return response.json();
      })
      .then((jsonData) => {
        // API'den gelen JSON veriyi alın
        setCardData(jsonData.products);
      })
      .catch((error) => {
        // Hata durumunda işlemler
        console.error('API isteği başarısız oldu:', error);
      });
  }, []);

  const handleDeleteClick = (cardId: string) => {
    console.log(`Delete button clicked for card with ID: ${cardId}`);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Card</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          {cardData.map((card) => (
            <IonItem key={card.id}>
              <IonLabel>{card.id}</IonLabel>
              <IonLabel>{card.title}</IonLabel>
              <IonLabel>{card.description}</IonLabel>
              <IonButton
                expand="block"
                color="primary"
                routerLink={`/cardedit/${card.id}`}
              >
                Edit
              </IonButton>
              <IonButton
                expand="block"
                color="primary"
                routerLink={`/carddetail/${card.id}`}
              >
                Detail
              </IonButton>
              <IonButton
                expand="block"
                color="danger"
                onClick={() => handleDeleteClick(card.id)}
              >
                Delete
              </IonButton>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Card;
