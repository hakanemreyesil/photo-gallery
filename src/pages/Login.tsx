import './Login.css';
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
  IonInput,
  IonButton,
  IonAlert,
} from '@ionic/react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  const [userName, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showSuccessAlert, setShowSuccessAlert] = useState<boolean>(false);
  const [showErrorAlert, setShowErrorAlert] = useState<boolean>(false);

  function loginUser(): void {
    if (userName === "hakan" && password === "123") {
      setShowSuccessAlert(true);
    } else {
      setShowErrorAlert(true);
    }
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <IonInput
          placeholder='UserName?'
          onIonChange={(e: any) => setUsername(e.target.value)}
        />
        <IonInput
          placeholder='Password?'
          type='password'
          onIonChange={(e: any) => setPassword(e.target.value)}
        />
        <IonButton onClick={loginUser}>Login</IonButton>
        <p>
          Dont have an account <Link to="/register">Register</Link>
        </p>
        <IonAlert
          isOpen={showSuccessAlert}
          onDidDismiss={() => setShowSuccessAlert(false)}
          header={'Success'}
          message={'Login Successful!'}
          buttons={['OK']}
        />
        <IonAlert
          isOpen={showErrorAlert}
          onDidDismiss={() => setShowErrorAlert(false)}
          header={'Error'}
          message={'Incorrect username or password.'}
          buttons={['OK']}
        />
      </IonContent>
    </IonPage>
  );
}

export default Login;
