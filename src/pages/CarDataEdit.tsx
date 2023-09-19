import React, { useEffect, useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonButton,
  IonInput,
  IonItem,
} from "@ionic/react";
import { useParams } from "react-router-dom";

const EditCard: React.FC = () => {
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
  const [editedTitle, setEditedTitle] = useState(selectedCard?.title || "");
  const [editedDescription, setEditedDescription] = useState(
    selectedCard?.description || ""
  );
  const handleSaveClick = () => {
    if (selectedCard) {
      selectedCard.title = editedTitle;
      selectedCard.description = editedDescription;
      
    }
    console.log(selectedCard)
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Edit Card</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {selectedCard && (
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>{selectedCard.title}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonItem>
                <IonInput
                  placeholder="Edit Title"
                  value={selectedCard.title}
                  onIonChange={(e) => setEditedTitle(e.detail.value || "")}
                />
              </IonItem>
              <IonItem>
                <IonInput
                  placeholder="Edit Content"
                  value={selectedCard.description}
                  onIonChange={(e) => setEditedDescription(e.detail.value || "")}
                />
              </IonItem>
            </IonCardContent>
          </IonCard>
        )}
        
        <IonButton expand="block" color="primary" onClick={handleSaveClick}>
          Save
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default EditCard;
