import React from 'react';

import Card from "../Card/Card";

const NewsCategories = ({ articles }) => {

    return (
        <div>
            <div className="container">
                <div className="row justify-content-start">
                    {articles.map(article => (
                        <Card article={article} key={article.id}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NewsCategories;