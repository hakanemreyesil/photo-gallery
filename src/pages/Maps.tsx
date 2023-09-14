import ExploreContainer from '../components/ExploreContainer';
import React, { useEffect, useState } from 'react'; 
import './Maps.css';
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
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api'; 

  const containerStyle = {
    width: '100%',
    height: '70%',
  };
  
  const Maps: React.FC = () => {
    const [currentLocation, setCurrentLocation] = useState({
    lat: 0, // Varsayılan değerler
    lng: 0,
  });
    useEffect(() => {
      if (navigator.geolocation) {
          navigator.geolocation.watchPosition(position => {
              setCurrentLocation({
                  lat: position.coords.latitude,
                  lng: position.coords.longitude
              });
          }, error => {
              console.error("Konum alınamadı", error);
          }, {
              enableHighAccuracy: true
          });
      } else {
          console.error("Geolocation desteklenmiyor");
      }
      
  }, []);
  return (
  <IonPage>
  <IonHeader>
  <IonToolbar>
  <IonTitle>Harita</IonTitle>
  </IonToolbar>
  </IonHeader>
  <IonContent>
  <LoadScript googleMapsApiKey="AIzaSyB6y0Dwf4etPc-3bjF4pL300JCXTx52AYQ">
    <GoogleMap
  mapContainerStyle={containerStyle}
  center={currentLocation}
  zoom={19}
  >
    <Marker 
              position={currentLocation} 
              title="Sabit Konum"
            />

  </GoogleMap>
  </LoadScript>
  </IonContent>
  </IonPage>
  );
  }

export default Maps;
