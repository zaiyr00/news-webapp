import React from 'react';

import Preloader from "../../../Common/Preloader/Preloader";

const Articles = ({ articles, onOpenModal }) => {

    if (!articles) return <Preloader />

    return (
        <div className="row justify-content-md-start">
            {articles.map(article => (
                <div className="col-md-4  mt-3 d-flex align-items-stretch justify-content-center" key={article.id}>
                    <div className="card" style={{width: "20rem"}}>
                        <div className="embed-responsive embed-responsive-4by3">
                            <img src={article.image} className="card-img-top embed-responsive-item" alt="article"/>
                        </div>
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">{article.title}</h5>
                            <p className="card-text">{article.description.split(/\s+/).slice(0,7).join(" ")}...</p>
                            {/*<p className="card-text">{article.description}...</p>*/}
                            <div className="d-flex justify-content-between mt-auto">
                                <button className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter" onClick={() => onOpenModal(article, "article")}>Подробнее</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Articles;