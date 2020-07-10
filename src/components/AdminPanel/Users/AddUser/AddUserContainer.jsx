import React, {Component} from 'react';
import {connect} from "react-redux";

import AddUser from "./AddUser";
import {createUserThunkCreator, editUserHandlerActionCreator } from "../../../../redux/reducers/admin-panel-reducer";

class AddUserContainer extends Component {

    createUserHandler = (e) => {
        e.preventDefault();
        this.props.createUserHandler();
    }

    render() {
        return <AddUser
            user={this.props.user}
            editUserHandler={this.props.editUserHandler}
            createUserHandler={this.createUserHandler}
        />
    }
}

const mapStateToProps = (state) => ({
    user: state.adminPage.user
})

const mapDispatchToProps = (dispatch) => {
    return {
        editUserHandler: (nameField, value) => {
            dispatch(editUserHandlerActionCreator(nameField, value))
        },
        createUserHandler: () => {
            dispatch(createUserThunkCreator())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddUserContainer);