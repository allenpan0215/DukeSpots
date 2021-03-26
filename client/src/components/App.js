import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer";
import Fitzpatrick from "./views/Pages/Fitzpatrick";
import BrainScience from './views/Pages/BrainScience'
import Colab from './views/Pages/Colab'
import Edens from './views/Pages/Edens'
import Edge from './views/Pages/Edge'
import FFSC from './views/Pages/FFSC'
import Fleishman from './views/Pages/Fleishman'
import Grainger from './views/Pages/Grainger'
import GrossHall from './views/Pages/GrossHall'
import Keohane from './views/Pages/Keohane'
import Lilly from './views/Pages/Lilly'
import McClendon from './views/Pages/McClendon'
import Perkins from './views/Pages/Perkins'
import Rubenstein from './views/Pages/Rubenstein'
import Ruby from './views/Pages/Ruby'
import Vonder from './views/Pages/Vonder'
import Wilkinson from './views/Pages/Wilkinson'

//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/The-Fitzpatrick-Center" component={Auth(Fitzpatrick, null)} />
          <Route exact path="/Fleishman-Common" component={Auth(Fleishman, null)} />
          <Route exact path="/Lilly-Library" component={Auth(Lilly, null)} />
          <Route exact path="/Von-der-Heyden" component={Auth(Vonder, null)} />
          <Route exact path="/Bostock" component={Auth(Edge, null)} />
          <Route exact path="/Perkins" component={Auth(Perkins, null)} />
          <Route exact path="/Keohane-Atrium" component={Auth(Keohane, null)} />
          <Route exact path="/Grainger-Hall" component={Auth(Grainger, null)} />
          <Route exact path="/Wilkinson" component={Auth(Wilkinson, null)} />
          <Route exact path="/Innovation-CoLab" component={Auth(Colab, null)} />
          <Route exact path="/Rubenstein" component={Auth(Rubenstein, null)} />
          <Route exact path="/Ruby" component={Auth(Ruby, null)} />
          <Route exact path="/Institute-for-Brain-Science" component={Auth(BrainScience, null)} />
          <Route exact path="/Edens" component={Auth(Edens, null)} />
          <Route exact path="/McClendon" component={Auth(McClendon, null)} />
          <Route exact path="/Gross-Hall" component={Auth(GrossHall, null)} />
          <Route exact path="/FFSC" component={Auth(FFSC, null)} />
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
