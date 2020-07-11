import React from 'react';

const AddUser = ({ username, password, editUserHandler, createUserHandler }) => {
    return (
        <div className="row mb-2 d-flex justify-content-center">
            <div className="col-sm-6">
                <form>
                    <div className="form-row mb-2">
                        <div className="col">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Имя пользователя"
                                name="username"
                                minLength="6"
                                value={username || ''}
                                onChange={(e) => editUserHandler(e.target.name, e.target.value)}
                            />
                        </div>
                        <div className="col">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Пароль"
                                name="password"
                                minLength="6"
                                value={password || ''}
                                onChange={(e) => editUserHandler(e.target.name, e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col">
                            <button type="submit" disabled={!(username && password && (username.length >=6 && password.length >= 6))} className="btn btn-primary btn-block" onClick={createUserHandler}>Создать пользователя</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddUser;