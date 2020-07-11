import React, {Component} from 'react';
import { withRouter } from "react-router-dom";
import {compose} from "redux";
import {connect} from "react-redux";

import Login from "./Login";
import {getUsersThunkCreator } from "../../redux/reducers/admin-panel-reducer";
import {setLoginInfoActionCreator} from "../../redux/reducers/auth-reducer";

class LoginContainer extends Component {

    componentDidMount() {
        this.props.getUsers();
    }

    submitHandler = (e) => {
        e.preventDefault();
        let users = this.props.users;
        let username = this.props.username;
        let password = this.props.password;
        users.filter(user => {
            if(user.username === username && user.password === password){
                localStorage.setItem("user", JSON.stringify(user))
                this.props.history.push("/admin");
            }
            return false;
        })
    }


    changeHandler = event => {
        const nameField = event.target.name;
        const value = event.target.value;
        this.props.setLoginInfo(nameField, value)
    }

    render() {
        return (
            <div>
                <Login
                    username={this.props.username}
                    password={this.props.password}
                    submitHandler={this.submitHandler}
                    changeHandler={this.changeHandler}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    username: state.authPage.username,
    password: state.authPage.password,
    users: state.adminPage.users
})

const mapDispatchToProps = (dispatch) => {
    return {
        setLoginInfo: (nameField, value) => {
            dispatch(setLoginInfoActionCreator(nameField, value))
        },
        getUsers: () => {
            dispatch(getUsersThunkCreator())
        }
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withRouter)(LoginContainer);