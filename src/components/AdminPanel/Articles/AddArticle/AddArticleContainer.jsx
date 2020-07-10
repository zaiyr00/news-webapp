import React, {Component} from 'react';
import {connect} from "react-redux";

import AddArticle from "./AddArticle";
import {
    changeSelectionActionCreator,
    createArticleThunkCreator,
    editArticleActionCreator
} from "../../../../redux/reducers/admin-panel-reducer";

class AddArticleContainer extends Component {

    createArticleHandler = (e) => {
        e.preventDefault();
        this.props.createArticleHandler();
    }

    render() {
        return <AddArticle
            article={this.props.article}
            editArticleHandler={this.props.editArticleHandler}
            createArticleHandler={this.createArticleHandler}
            select={this.props.select}
            changeSelectionHandler={this.props.changeSelectionHandler}
            categories={this.props.categories}
        />
    }
}

const mapStateToProps = (state) => ({
    article: state.adminPage.article,
    select: state.adminPage.select,
    categories: state.newsPage.categories
})

const mapDispatchToProps = (dispatch) => {
    return {
        editArticleHandler: (nameField, value) => {
            dispatch(editArticleActionCreator(nameField, value))
        },
        createArticleHandler: () => {
            dispatch(createArticleThunkCreator())
        },
        changeSelectionHandler: (value) => {
            dispatch(changeSelectionActionCreator(value))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddArticleContainer);