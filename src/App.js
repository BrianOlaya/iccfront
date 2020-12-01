import React from "react";
import "./App.css";
import Home from "./pages";
import tokenAuth from "./config/token";
import AlertaState from "./components/context/alertas/alertaState";
import AuthState from "./components/context/autenticacion/authState";
import IntegrantesState from "./components/context/integrantes/integranteState";
import DevocionalesState from "./components/context/devocionales/devocionalState";
import NuevoState from "./components/context/nuevos/nuevoState";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./pages/login";
import IwantPage from "./pages/iwant";
import AboutPage from "./pages/about";
import ActivitiesPage from "./pages/activities";
import DevotionalPage from "./pages/devotional";
import ContactPage from "./pages/contact";
import DashboardPage from "./pages/dashboard";
import RutaPrivada from "./components/rutas/RutaPrivada";

const token = localStorage.getItem("token");
if (token) {
  tokenAuth(token);
}

function App() {
  return (
    <AlertaState>
      <AuthState>
        <IntegrantesState>
          <DevocionalesState>
            <NuevoState>
              <Router>
                <Switch>
                  <Route path="/" component={Home} exact />
                  <Route path="/login" component={LoginPage} exact />
                  <Route path="/quiero" component={IwantPage} exact />
                  <Route path="/nosotros" component={AboutPage} exact />
                  <Route path="/actividades" component={ActivitiesPage} exact />
                  <Route path="/devocionales" component={DevotionalPage} exact/>
                  <Route path="/contacto" component={ContactPage} exact />
                  <RutaPrivada path="/dashboard" component={DashboardPage} exact/>
                </Switch>
              </Router>
            </NuevoState>
          </DevocionalesState>
        </IntegrantesState>
      </AuthState>
    </AlertaState>
  );
}

export default App;
