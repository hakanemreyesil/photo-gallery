import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { images, list, map, square, triangle } from "ionicons/icons";
import Maps from "./pages/Maps";
import Gallery from "./pages/Gallery";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Card from "./pages/CardData";
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import Register from "./pages/Register";
import CardDetail from "./pages/CardDetail";
import CarDataEdit from "./pages/CarDataEdit";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/Maps">
            <Maps />
          </Route>
          <Route exact path="/Gallery">
            <Gallery />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Register">
            <Register />
          </Route>
          <Route exact path="/">
            <Redirect to="/Home" />
            <Home />
          </Route>
          <Route exact path="/Home">
            <Redirect to="/Home" />
            <Home />
          </Route>
          <Route exact path="/Card">
            <Redirect to="/Card" />
            <Card />
          </Route>
          <Route exact path="/card/:cardId">
          <CardDetail />
        </Route>
        <Route exact path="/cardedit/:cardId">
          <CarDataEdit />
        </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="Home" href="/Home">
            <IonIcon aria-hidden="true" icon={square} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Maps" href="/Maps">
            <IonIcon aria-hidden="true" icon={map} />
            <IonLabel>Maps</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Gallery" href="/Gallery">
            <IonIcon icon={images} />
            <IonLabel>Photos</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Card" href="/Card">
            <IonIcon icon={list} />
            <IonLabel>Card</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
