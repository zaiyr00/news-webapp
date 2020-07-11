import React from 'react';

const AddArticle = ({ article, editArticleHandler, createArticleHandler, select, changeSelectionHandler, categories }) => {

    return (
        <div className="row mb-2 d-flex justify-content-center">
            <div className="col-sm-6">
                <form>
                    <div className="form-row mb-2">
                        <div className="col">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Название статьи"
                                name="title"
                                value={article.title || ''}
                                onChange={(e) => editArticleHandler(e.target.name, e.target.value)}
                            />
                        </div>
                        <div className="col">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Ссылка на картинку статьи"
                                name="image"
                                value={article.image || ''}
                                onChange={(e) => editArticleHandler(e.target.name, e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="form-row mb-2">
                        <div className="input-group">
                            <select value={select} onChange={(e) => changeSelectionHandler(e.target.value)} className="custom-select" id="inputGroupSelect04"
                                    aria-label="Example select with button addon">
                                <option value>Выберите категорию</option>
                                {categories.map(category => (
                                    <option key={category.id} value={category.title}>{category.title}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="form-row mb-2">
                        <div className="col">
                            <textarea
                                type="textarea"
                                className="form-control"
                                placeholder="Описание статьи"
                                name="description"
                                value={article.description || ''}
                                onChange={(e) => editArticleHandler(e.target.name, e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col">
                            <button type="submit" disabled={!(article.description && article.image && article.title && select && (article.title.length > 10 && article.description.length > 20))}  className="btn btn-primary btn-block" onClick={createArticleHandler}>Опубликовать статью</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddArticle;