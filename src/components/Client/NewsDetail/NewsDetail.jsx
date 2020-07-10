import React from 'react';
import {Link} from "react-router-dom";

import Preloader from "../../../Common/Preloader/Preloader";

const NewsDetail = ({ article }) => {

    if (!article) return <Preloader />

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-10 mt-5">
                    <h2 className="text-center">{article.title}</h2>
                    <div><img src={article.image} alt="article" style={{width: "100%"}}/></div>
                    <p style={{marginTop: "20px", fontSize: "18px"}}>{article.description}</p>
                    <Link className="btn btn-primary mt-auto mb-4" to="/news">Вернуться на главную</Link>
                </div>
            </div>
        </div>
    );
};

export default NewsDetail;