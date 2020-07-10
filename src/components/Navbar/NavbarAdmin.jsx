import React from 'react';
import {NavLink} from "react-router-dom";

const NavbarAdmin = () => {

    return (
        <nav className="mb-4 navbar navbar-expand-lg indigo">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink activeClassName="active" className="nav-link waves-effect waves-light" to="/admin/articles">Статьи</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="active" className="nav-link waves-effect waves-light" to="/admin/categories">Категории</NavLink>
                    </li>
                    <li className="nav-item active">
                        <NavLink activeClassName="active" className="nav-link waves-effect waves-light" to="/admin/users">Пользователи</NavLink>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link waves-effect waves-light" onClick={() =>{ if (window.confirm('Вы уверены, что хотите выйти ?')) localStorage.removeItem("user") && this.history.push("/news/") }} href="/news/" >Выйти</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavbarAdmin;