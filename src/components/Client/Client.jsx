import React from 'react';
import {Route, Switch} from "react-router-dom";

import NavbarClientContainer from "../Navbar/NavbarClientContainer";
import NewsCategoriesContainer from "./NewsCategories/NewsCategoriesContainer";
import NewsContainer from "./News/NewsContainer";

const Client = () => {
    return (
        <div className="container">
            <NavbarClientContainer />
            <Switch>
                <Route exact path="/news/:id" render={(props) => (
                        <NewsCategoriesContainer key={props.match.params.id} />)}/>
                <Route exact path="/news/" component={NewsContainer}/>
            </Switch>
        </div>
    );
};

export default Client;