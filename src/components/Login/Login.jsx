import React from 'react';

import './Login.css';

const Login = ({ username, password, changeHandler, submitHandler }) => {

        return (
            <form className="form-signin text-center mt-5">
                <img className="mb-4" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2Facademic-disciplines-color-sticker%2F64%2Fcurrent-events-512.png&f=1&nofb=1" alt="news" width="72" height="72"/>
                <h1 className="h3 mb-3 font-weight-normal">Введите свои данные</h1>
                <label htmlFor="inputEmail" className="sr-only">Email address</label>
                <input
                    type="username"
                    id="inputEmail"
                    className="form-control"
                    name="username"
                    value={username}
                    placeholder="Имя пользователя"
                    required
                    autoFocus
                    onChange={changeHandler}
                />
                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input
                    type="password"
                    id="inputPassword"
                    className="form-control"
                    name="password"
                    value={password}
                    placeholder="Пароль"
                    required
                    onChange={changeHandler}
                />
                <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={submitHandler}>Войти</button>
                <p className="mt-5 mb-3 text-muted">&copy; 2020</p>
            </form>
        );
};

export default Login;