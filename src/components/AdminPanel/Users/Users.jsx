import React from 'react';

import Preloader from "../../../Common/Preloader/Preloader";

const Users = ({ users, onOpenModal }) => {

    if (!users) return <Preloader />

    return (
        <div className="row justify-content-md-start">
            {users.map(user => (
                <div className="col-md-4 mt-3 d-flex align-items-stretch justify-content-center" key={user.id}>
                    <div className="card" style={{width: "15rem"}}>
                        <div className="embed-responsive embed-responsive-1by1">
                            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2Fgreen-shopper%2F1068%2Fuser.png&f=1&nofb=1" className="card-img-top embed-responsive-item" alt="article"/>
                        </div>
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title text-center">{user.username}</h5>
                            <div className="d-flex justify-content-between mt-auto">
                                <button className="btn btn-primary m-auto" data-toggle="modal" data-target="#exampleModalCenter" onClick={() => onOpenModal(user, "user")}>Подробнее</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Users;