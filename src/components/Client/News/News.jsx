import React from 'react';

import Card from "../Card/Card";
import Preloader from "../../../Common/Preloader/Preloader";

const News = ({ articles }) => {

    if (!articles) return <Preloader />

    return (
        <div className="container">
            <div className="row justify-content-md-start">
                {articles.map(article => (
                    <Card article={article} key={article.id}/>
                ))}
            </div>
        </div>
    )
};

export default News;