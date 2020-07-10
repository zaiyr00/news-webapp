import React, {Component} from 'react';
import {connect} from "react-redux";

import Modal from "./Modal";
import {
    changeSelectionActionCreator,
    closeModalHandlerActionCreator, deleteArticleThunkCreator, deleteCategoryThunkCreator,
    deleteUserThunkCreator, editArticleActionCreator, editCategoryActionCreator,
    editUserHandlerActionCreator,
    updateArticleThunkCreator, updateCategoryThunkCreator,
    updateUserThunkCreator
} from "../../../redux/reducers/admin-panel-reducer";

class ModalContainer extends Component {

    state = {
        isEdit: false
    }

    openEditorHandler = () => {
        this.setState({isEdit: true})
    }

    closeEditorHandler = () => {
        this.setState({isEdit: false})
    }

    render() {
        return (
            <div>
                <Modal
                    article={this.props.article}
                    deleteArticleHandler={this.props.deleteArticleHandler}
                    editArticleHandler={this.props.editArticleHandler}
                    updateArticleHandler={this.props.updateArticleHandler}

                    closeModalHandler={this.props.closeModalHandler}
                    isEdit={this.state.isEdit}
                    openEditorHandler={this.openEditorHandler}
                    closeEditorHandler={this.closeEditorHandler}

                    user={this.props.user}
                    deleteUserHandler={this.props.deleteUserHandler}
                    editUserHandler={this.props.editUserHandler}
                    updateUserHandler={this.props.updateUserHandler}

                    category={this.props.category}
                    deleteCategoryHandler={this.props.deleteCategoryHandler}
                    editCategoryHandler={this.props.editCategoryHandler}
                    updateCategoryHandler={this.props.updateCategoryHandler}

                    select={this.props.select}
                    changeSelectionHandler={this.props.changeSelectionHandler}
                    categories={this.props.categories}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    article: state.adminPage.article,
    user: state.adminPage.user,
    category: state.adminPage.category,
    select: state.adminPage.select,
    categories: state.newsPage.categories
})

const mapDispatchToProps = (dispatch) => {
    return {
        deleteArticleHandler: () => {
            dispatch(deleteArticleThunkCreator())
        },
        editArticleHandler: (nameField, value) => {
            dispatch(editArticleActionCreator(nameField, value))
        },
        updateArticleHandler: () => {
            dispatch(updateArticleThunkCreator())
        },

        closeModalHandler: (nameField) => {
            dispatch(closeModalHandlerActionCreator(nameField))
        },

        deleteUserHandler: () => {
            dispatch(deleteUserThunkCreator())
        },
        editUserHandler: (nameField, value) => {
            dispatch(editUserHandlerActionCreator(nameField, value))
        },
        updateUserHandler: () => {
            dispatch(updateUserThunkCreator())
        },

        deleteCategoryHandler: () => {
            dispatch(deleteCategoryThunkCreator())
        },
        editCategoryHandler: (title) => {
            dispatch(editCategoryActionCreator(title))
        },
        updateCategoryHandler: () => {
            dispatch(updateCategoryThunkCreator())
        },

        changeSelectionHandler: (value) => {
            dispatch(changeSelectionActionCreator(value))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);
