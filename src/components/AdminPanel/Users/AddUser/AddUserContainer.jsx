import React, {Component} from 'react';
import {connect} from "react-redux";

import AddUser from "./AddUser";
import {
    createUserThunkCreator,
    editUserHandlerActionCreator
} from "../../../../redux/reducers/admin-panel-reducer";

class AddUserContainer extends Component {

    createUserHandler = (e) => {
        e.preventDefault();
        this.props.createUserHandler();
    }

    render() {
        return <AddUser
            username={this.props.username}
            password={this.props.password}
            editUserHandler={this.props.editUserHandler}
            createUserHandler={this.createUserHandler}
        />
    }
}

const mapStateToProps = (state) => ({
    username: state.adminPage.user.username,
    password: state.adminPage.user.password
})

const mapDispatchToProps = (dispatch) => {
    return {
        editUserHandler: (nameField, value) => {
            dispatch(editUserHandlerActionCreator(nameField, value))
        },
        createUserHandler: () => {
            dispatch(createUserThunkCreator())
        },
        // getUsers: () => {
        //     dispatch(getUsersThunkCreator())
        // }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddUserContainer);