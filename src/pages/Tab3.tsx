import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import { camera, trash, close } from 'ionicons/icons';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFab,
  IonFabButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonActionSheet,
} from '@ionic/react';
import { usePhotoGallery } from '../hooks/usePhotoGallery';
const Tab3: React.FC = () => {
  const { photos, takePhoto } = usePhotoGallery();

  return (
    <IonPage>
  <IonHeader>
    <IonToolbar>
    <IonTitle>Tab3</IonTitle>
    </IonToolbar>
  </IonHeader>
  <IonContent>
  <IonTitle size='large'>Tab3</IonTitle>
</IonContent>
</IonPage>
  );
};

export default Tab3;