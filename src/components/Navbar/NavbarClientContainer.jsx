import React, {Component} from 'react';
import {connect} from "react-redux";

import NavbarClient from "./NavbarClient";
import {getCategoriesThunkCreator} from "../../redux/reducers/admin-panel-reducer";
import {categoryIdActionCreator} from "../../redux/reducers/client-reducer";

class NavbarClientContainer extends Component {

    componentDidMount() {
        this.props.getCategories();
    }

    render() {
        return <NavbarClient categories={this.props.categories} categoryIdHandler={this.props.categoryIdHandler} />
    }
}

const mapStateToProps = (state) => ({
    categories: state.adminPage.categories
})

const mapDispatchToProps = (dispatch) => {
    return {
        getCategories: () => {
            dispatch(getCategoriesThunkCreator())
        },
        categoryIdHandler: (id) => {
            dispatch(categoryIdActionCreator(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarClientContainer);