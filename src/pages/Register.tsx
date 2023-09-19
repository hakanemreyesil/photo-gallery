
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
} from '@ionic/react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Register: React.FC = () => {
  const [userName, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [cpassword, setCPassword] = useState<string>('');
    function registerUser(): void {
        console.log(userName,password,cpassword)
    }

return (
<IonPage>
<IonHeader>
<IonToolbar>
<IonTitle>Register</IonTitle>
</IonToolbar>
</IonHeader>
<IonContent className='ion-padding'>
<IonInput 
placeholder='UserName?' 
onIonChange={(e:any )=>setUsername(e.target.value)}/>
<IonInput 
placeholder='Password?'
type='password'
onIonChange={(e:any )=>setPassword(e.target.value)}/>
<IonInput 
placeholder='Confirm Password?'
type='password'
onIonChange={(e:any )=>setCPassword(e.target.value)}/>
<IonButton onClick={registerUser}>Register</IonButton>
<p>Already have an account <Link to="/login">Login</Link></p>
</IonContent>
</IonPage>
);
}

export default Register;