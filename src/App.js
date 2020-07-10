import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";

import './App.css';
import Navbar from "./components/Navbar/Navbar";
import NewsDetailContainer from "./components/Client/NewsDetail/NewsDetailContainer";
import LoginContainer from "./components/Login/LoginContainer";
import Error from "./Common/Error/Error";
import ModalContainer from "./components/AdminPanel/Modal/ModalContainer";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import Footer from "./components/Footer/Footer";
import Client from "./components/Client/Client";

const App = () => {

  return (
    <div className="app-wrapper">
        <div className="app-wrapper-content">
            <Switch>
                <Route path="/login" component={LoginContainer}/>
                <Route component={DefaultContainer}/>
            </Switch>
            <ModalContainer />
        </div>
    </div>
  );
}

const DefaultContainer = () => (
    <>
        <Navbar />
        <Switch>
            <Route exact path="/" render={() => (<Redirect to="/news" />)} />
            <Route path="/news" component={Client}/>
            <Route path="/article/:id" exact component={NewsDetailContainer}/>
            {localStorage.getItem("user")
                ? <Route path="/admin" component={AdminPanel}/>
                : <Redirect to="/news" />
            }
            <Route path="*" component={Error}/>
        </Switch>
        <Footer />
    </>
)

export default App;
