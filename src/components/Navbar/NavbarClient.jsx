import React from 'react';
import {Link} from "react-router-dom";

const NavbarClient = ({ categories, categoryIdHandler }) => {

    return (
        <nav className="mb-4 navbar navbar-expand-lg indigo">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    {categories.map(category => (
                        <li key={category.id} className="nav-item">
                            <Link className="nav-link waves-effect waves-light" to={`/news/${category.id}`} onClick={() => categoryIdHandler(category.parent_id)}>{category.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default NavbarClient;