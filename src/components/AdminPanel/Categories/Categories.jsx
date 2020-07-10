import React from 'react';

import AddCategoryContainer from "./AddCategory/AddCategoryContainer";
import Preloader from "../../../Common/Preloader/Preloader";

const Categories = ({ categories, onOpenModal }) => {

    if (!categories) return <Preloader />

    return (
        <>
            <AddCategoryContainer />
            <div className="row justify-content-start">
                {categories.map(category => (
                    <div className="col-md-4 mt-3 d-flex align-items-stretch" key={category.id}>
                        <div className="card" style={{width: "15rem"}}>
                            <div className="embed-responsive embed-responsive-1by1">
                                <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.roofscreen.com%2Fmediafiles%2Fproduct_category_icons%2F34_strong-chain-icon.png&f=1&nofb=1" className="card-img-top embed-responsive-item" alt="article"/>
                            </div>
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title text-center">{category.title}</h5>
                                <div className="d-flex justify-content-between mt-auto">
                                    <button className="btn btn-primary m-auto" data-toggle="modal" data-target="#exampleModalCenter" onClick={() => onOpenModal(category, "category")}>Подробнее</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Categories;