import {
  IonBadge,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonDatetime,
  IonGrid,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";
import { useState } from "react";

const Home: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState();
  const handleSaveClick = () => {
    // Kaydetme işlemi tamamlandığında bir mesajı konsola yazdırın
    console.log("Kart başarıyla kaydedildi:", selectedDate);

    // İstediğiniz yönlendirmeyi burada yapabilirsiniz
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton routerLink="/login">Login</IonButton>
        <IonButton routerLink="/register">Register</IonButton>
        <IonList>
          <IonItem id="open-modal">
            <IonLabel>Date Time : {selectedDate}</IonLabel>
          </IonItem>
        </IonList>

        <IonModal trigger="open-modal">
          <IonDatetime
            presentation="date"
            min="1989-06-04"
            value={selectedDate}
            onIonChange={(e) => setSelectedDate(e.detail.value || "")}
          ></IonDatetime>
        </IonModal>
        <IonButton expand="block" color="primary" onClick={handleSaveClick}>
          Save
        </IonButton>
      </IonContent>
    </IonPage>
  );
};
export default Home;
