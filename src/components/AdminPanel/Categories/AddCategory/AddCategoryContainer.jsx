import React, {Component} from 'react';
import {connect} from "react-redux";

import AddCategory from "./AddCategory";
import {
    createCategoryThunkCreator,
    editCategoryActionCreator,
} from "../../../../redux/reducers/admin-panel-reducer";

class AddCategoryContainer extends Component {

    createCategoryHandler = (e) => {
        e.preventDefault();
        this.props.createCategoryHandler();
    }

    render() {
        return <AddCategory
            category={this.props.category}
            editCategoryHandler={this.props.editCategoryHandler}
            createCategoryHandler={this.createCategoryHandler}
        />
    }
}

const mapStateToProps = (state) => ({
    category: state.adminPage.category
})

const mapDispatchToProps = (dispatch) => {
    return {
        editCategoryHandler: (title) => {
            dispatch(editCategoryActionCreator(title))
        },
        createCategoryHandler: () => {
            dispatch(createCategoryThunkCreator())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCategoryContainer);