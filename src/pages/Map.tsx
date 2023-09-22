import { IonButton, IonChip, IonContent, IonIcon, IonInput, IonLabel, IonPage } from "@ionic/react";
import {
  DirectionsRenderer,
  GoogleMap,
  LoadScript,
  Marker,
} from "@react-google-maps/api";
import React, { useEffect, useRef, useState } from "react";

declare var google: any;

const Map: React.FC = () => {
  const map = useRef<google.maps.Map | null>(null);
  const [destination, setDestination] = useState<string>("");
  const [origin, setOrigin] = useState({
    lat: 0,
    lng: 0,
  });
  const [markerPosition, setMarkerPosition] =
    useState<google.maps.LatLng | null>(null);
  const [directionsRenderer, setDirectionsRenderer] = useState<any>(null);
  const [distance, setDistance] = useState<string>(""); // Eklenen satır

  useEffect(() => {
    const watchPositionInterval = setInterval(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setOrigin({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          (error) => {
            console.error("Konum alınamadı", error);
          },
          {
            enableHighAccuracy: true,
          }
        );
      } else {
        console.error("Geolocation desteklenmiyor");
      }
    }, 10000); 
    return () => {
      clearInterval(watchPositionInterval); 
    };
  }, [origin]);

  const handleMapClick = (e: google.maps.MapMouseEvent) => {
    if (e.latLng) {
      setMarkerPosition(e.latLng);
      setDestination(`${e.latLng.lat()}, ${e.latLng.lng()}`);
      calculateRoute();
    }
  };

  const calculateRoute = () => {
    if (!origin || !destination) {
      console.error("Başlangıç veya varış adresi eksik.");
      return;
    }

    const directionsService = new window.google.maps.DirectionsService();

    const request = {
      origin,
      destination,
      travelMode: window.google.maps.TravelMode.DRIVING,
    };

    directionsService.route(request, (result: any, status: any) => {
      console.log("Rota Hesaplama Durumu:", status);
      if (status === "OK") {
        if (directionsRenderer) {
          directionsRenderer.setMap(null);
        }

        const newDirectionsRenderer = new window.google.maps.DirectionsRenderer(
          {
            map: map.current,
          }
        );
        newDirectionsRenderer.setDirections(result);

        setDirectionsRenderer(newDirectionsRenderer);

        const distanceMatrixService = new google.maps.DistanceMatrixService();
        const distanceRequest = {
          origins: [origin],
          destinations: [destination],
          travelMode: google.maps.TravelMode.DRIVING,
        };
        distanceMatrixService.getDistanceMatrix(
          distanceRequest,
          (response: any, status: any) => {
            if (
              status === "OK" &&
              response.rows[0].elements[0].status === "OK"
            ) {
              const distanceText = response.rows[0].elements[0].distance.text;
              setDistance(distanceText);
            } else {
              console.error("Mesafe hesaplanamadı", status);
            }
          }
        );
      } else {
        console.error("Yol bulunamadı", status);
      }
    });
  };

  return (
    <IonPage>
      <IonContent>
        <IonInput
          placeholder="Varış Adresi"
          onIonChange={(e) => setDestination(e.detail.value!)}
        ></IonInput>
        <IonButton onClick={calculateRoute}>Rotayı Çiz</IonButton>
        {distance &&
        <IonChip color="warning">
          <IonIcon name="pin" color="primary"></IonIcon>
          <IonLabel>  <p>İki nokta arasındaki mesafe: {distance}</p></IonLabel>
        
        </IonChip>
        }
        <LoadScript googleMapsApiKey="AIzaSyB6y0Dwf4etPc-3bjF4pL300JCXTx52AYQ">
          <GoogleMap
            mapContainerStyle={{ width: "100%", height: "90%" }}
            center={origin}
            zoom={17}
            onClick={handleMapClick}
          >
            {markerPosition && (
              <Marker
                position={markerPosition}
                draggable={true}
                onDrag={handleMapClick}
                onDragEnd={handleMapClick}
              />
            )}
            {directionsRenderer && (
              <DirectionsRenderer  directions={directionsRenderer.directions} />
            )}
          </GoogleMap>
        </LoadScript>
      </IonContent>
    </IonPage>
  );
};

export default Map;
