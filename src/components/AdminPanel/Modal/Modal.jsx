import React from 'react';

const Modal = (props) => {

    let {
        article, deleteArticleHandler,editArticleHandler, updateArticleHandler,
        closeModalHandler, isEdit, openEditorHandler, closeEditorHandler,
        user, editUserHandler, deleteUserHandler, updateUserHandler,
        category, editCategoryHandler, updateCategoryHandler, deleteCategoryHandler,
        select, changeSelectionHandler, categories
        } = props;

    let articleModal = () => (
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">{article.title}</h5>
                <button type="button" className="close" data-dismiss="modal" onClick={() => closeModalHandler("article")} aria-label="Close" >
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <div className="embed-responsive embed-responsive-4by3">
                    <img src={article.image} className="card-img-top embed-responsive-item" alt="article"/>
                </div>
                <div className="text-center">{article.description}</div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={deleteArticleHandler}>Удалить</button>
                <button type="button" className="btn btn-secondary" onClick={openEditorHandler}>Изменить</button>
                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => closeModalHandler("article")}>Закрыть</button>
            </div>
        </div>
    )

    let editArticleModal = () => (
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Внесите изменения</h5>
                <button type="button" className="close" aria-label="Close" onClick={closeEditorHandler}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <form>
                    <div className="form-group">
                        <label htmlFor="recipient-name" className="col-form-label">Титульное название:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="recipient-name"
                            value={article.title}
                            name="title"
                            onChange={(e) => editArticleHandler(e.target.name, e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="recipient-name" className="col-form-label">Ссылка на картинку:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="recipient-name"
                            value={article.image}
                            name="image"
                            onChange={(e) => editArticleHandler(e.target.name, e.target.value)}
                        />
                    </div>
                    <div className="form-row">
                        <div className="input-group">
                            <select value={select} onChange={(e) => changeSelectionHandler(e.target.value)} className="custom-select" id="inputGroupSelect04"
                                    aria-label="Example select with button addon">
                                {categories.map(category => (category.parent_id === article.category_id) ?
                                    <option value>{category.title}</option> : ""
                                )}
                                {categories.map(category => (
                                    <option key={category.id} value={category.title}>{category.title}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message-text" className="col-form-label">Описание:</label>
                        <textarea
                            className="form-control"
                            id="message-text"
                            value={article.description}
                            name="description"
                            onChange={(e) => editArticleHandler(e.target.name, e.target.value)}
                        />
                    </div>
                </form>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={closeEditorHandler}>Закрыть</button>
                <button type="button" className="btn btn-primary" onClick={updateArticleHandler}>Сохранить</button>
            </div>
        </div>
    )

    let userModal = () => (
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title text-center" id="exampleModalLongTitle">Имя пользователя: {user.username} <br/>Пароль: {user.password}</h5>
                <button type="button" className="close" data-dismiss="modal" onClick={() => closeModalHandler("user")} aria-label="Close" >
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <div className="embed-responsive embed-responsive-1by1">
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2Fgreen-shopper%2F1068%2Fuser.png&f=1&nofb=1" className="card-img-top embed-responsive-item" alt="article"/>
                </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={deleteUserHandler}>Удалить</button>
                <button type="button" className="btn btn-secondary" onClick={openEditorHandler}>Изменить</button>
                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => closeModalHandler("user")}>Закрыть</button>
            </div>
        </div>
    )

    let editUserModal = () => (
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Внесите изменения</h5>
                <button type="button" className="close" aria-label="Close" onClick={closeEditorHandler}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <form>
                    <div className="form-group">
                        <label htmlFor="recipient-name" className="col-form-label">Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="recipient-name"
                            value={user.username}
                            name="username"
                            onChange={(e) => editUserHandler(e.target.name, e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="recipient-name" className="col-form-label">Password:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="recipient-name"
                            value={user.password}
                            name="password"
                            onChange={(e) => editUserHandler(e.target.name, e.target.value)}
                        />
                    </div>
                </form>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={closeEditorHandler}>Закрыть</button>
                <button type="button" className="btn btn-primary" onClick={updateUserHandler}>Сохранить</button>
            </div>
        </div>
    )

    let categoryModal = () => (
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title text-center" id="exampleModalLongTitle">Категория: {category.title}</h5>
                <button type="button" className="close" data-dismiss="modal" onClick={() => closeModalHandler("category")} aria-label="Close" >
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <div className="embed-responsive embed-responsive-1by1">
                    <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.roofscreen.com%2Fmediafiles%2Fproduct_category_icons%2F34_strong-chain-icon.png&f=1&nofb=1" className="card-img-top embed-responsive-item" alt="article"/>
                </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={deleteCategoryHandler}>Удалить</button>
                <button type="button" className="btn btn-secondary" onClick={openEditorHandler}>Изменить</button>
                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => closeModalHandler("category", category)}>Закрыть</button>
            </div>
        </div>
    )

    let editCategoryModal = () => (
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Внесите изменения</h5>
                <button type="button" className="close" aria-label="Close" onClick={closeEditorHandler}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <form>
                    <div className="form-group">
                        <label htmlFor="recipient-name" className="col-form-label">Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="recipient-name"
                            value={category.title}
                            onChange={(e) => editCategoryHandler(e.target.value)}
                        />
                    </div>
                </form>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={closeEditorHandler}>Закрыть</button>
                <button type="button" className="btn btn-primary" onClick={updateCategoryHandler}>Сохранить</button>
            </div>
        </div>
    )

    let sectionChecker = () => {
        if(category.title !== undefined && !isEdit && ((user.username === undefined || user.username === '') && (article.title === undefined || article.title === ''))) return categoryModal();
        if(user.username !== undefined && !isEdit && ((category.title === undefined || category.title === '') && (article.title === undefined || article.title === ''))) return userModal();
        if(article.title !== undefined && !isEdit && ((category.title === undefined || category.title === '') && (user.username === undefined || user.username === ''))) return articleModal();
        debugger
        if(isEdit && category) return editCategoryModal();
        if(isEdit && user) return editUserModal();
        if(isEdit && article) return editArticleModal();
    }

    return (
        <div className="modal hide fade in" id="exampleModalCenter" tabIndex="-1" role="dialog" data-keyboard="false" data-backdrop="static"
             aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                {sectionChecker()}
            </div>
        </div>
    ) ;
};

export default Modal;