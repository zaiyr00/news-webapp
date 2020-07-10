import React from 'react';
import {Link, NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-info" >
            <img style={{height: "50px", marginRight: "15px"}} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2Facademic-disciplines-color-sticker%2F64%2Fcurrent-events-512.png&f=1&nofb=1" alt="news"/>
            <Link className="navbar-brand" to="/news/">Новостной портал</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto">
                    <NavLink className="nav-item nav-link active" to="/news/">Домашняя страница<span className="sr-only">(current)</span></NavLink>
                    <NavLink className="nav-item nav-link" to="/login">Вход</NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;