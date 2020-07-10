import React, {Component} from 'react';
import {connect} from "react-redux";

import Categories from "./Categories";
import {
    getCategoriesThunkCreator,
    setOpenModalActionCreator
} from "../../../redux/reducers/admin-panel-reducer";

class CategoriesContainer extends Component {

    componentDidMount() {
        this.props.getCategories();
    }

    render() {
        return <Categories
            categories={this.props.categories}
            onOpenModal={this.props.setOpenModal}
        />
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
        setOpenModal: (payload, nameField) => {
            dispatch(setOpenModalActionCreator(payload, nameField))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesContainer);
