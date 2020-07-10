import React from 'react';
import {Link} from "react-router-dom";

import './Error.css';

const Error = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="error-template">
                        <h1>
                            Упс!</h1>
                        <h2>
                            Ошибка 404</h2>
                        <div className="error-details">
                            Извините, но данная Страница не найдена!
                        </div>
                        <div className="error-actions">
                            <Link to="/" className="btn btn-primary btn-lg"><span
                                className="glyphicon glyphicon-home"></span>
                                Вернуться на главную</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error;