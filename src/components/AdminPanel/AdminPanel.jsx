import React from 'react';
import {Route, Switch} from "react-router-dom";

import NavbarAdmin from "../Navbar/NavbarAdmin";
import UsersContainer from "./Users/UsersContainer";
import CategoriesContainer from "./Categories/CategoriesContainer";
import ArticlesContainer from "./Articles/ArticlesContainer";

const AdminPanel = () => {
    return (
        <>
            <div className="container">
                <NavbarAdmin />
                <Switch>
                    <Route exact path="/admin/users" component={UsersContainer}/>
                    <Route exact path="/admin/categories" component={CategoriesContainer}/>
                    <Route exact path="/admin/articles" component={ArticlesContainer}/>
                    <Route exact path="/admin" >
                        <h1 className="text-center m-3">Добро пожаловать в панель администратора, {JSON.parse(localStorage.getItem("user")).username}!</h1>
                        <h3 className="text-center">В навигационной панели вы можете переключаться между вкладками и изменять их содержимое.</h3>
                    </Route>
                </Switch>
            </div>
        </>
    );
};

export default AdminPanel;