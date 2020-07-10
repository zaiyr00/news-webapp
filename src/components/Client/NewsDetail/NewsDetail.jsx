import React from 'react';

import Preloader from "../../../Common/Preloader/Preloader";

const NewsDetail = ({ article }) => {

    if (!article) return <Preloader />

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-10 mt-5">
                    <h2>{article.title}</h2>
                    <div><img src={article.image} alt="article" style={{width: "100%"}}/></div>
                    <p>{article.description}</p>
                </div>
            </div>
        </div>
    );
};

export default NewsDetail;