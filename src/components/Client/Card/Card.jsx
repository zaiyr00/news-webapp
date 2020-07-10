import React from 'react';
import {Link} from "react-router-dom";

const Card = ({ article }) => {

    return (
        <div className="col-md-4 mt-2 d-flex align-items-stretch mb-4">
            <div className="card" style={{width: "20rem"}}>
                <div className="embed-responsive embed-responsive-4by3">
                    <img src={article.image} className="card-img-top embed-responsive-item" alt="article"/>
                </div>
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{article.title}</h5>
                    <p className="card-text">{article.description.split(/\s+/).slice(0,7).join(" ")}...</p>
                    <Link to={`/article/${article.id}`} className="btn btn-primary mt-auto">Читать подробнее</Link>
                </div>
            </div>
        </div>
    );
};

export default Card;