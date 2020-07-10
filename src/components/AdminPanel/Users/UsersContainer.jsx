import React, {Component} from 'react';
import {connect} from "react-redux";

import Users from "./Users";
import {
    getUsersThunkCreator,
    setOpenModalActionCreator
} from "../../../redux/reducers/admin-panel-reducer";

class UsersContainer extends Component {

    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        return <Users
            users={this.props.users}
            onOpenModal={this.props.setOpenModal}
        />;
    }
}

const mapStateToProps = (state) => ({
    users: state.adminPage.users
})

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: () => {
            dispatch(getUsersThunkCreator())
        },
        setOpenModal: (payload, nameField) => {
            dispatch(setOpenModalActionCreator(payload, nameField))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);