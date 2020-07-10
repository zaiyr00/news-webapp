import React from 'react';

const AddCategory = ({ category, editCategoryHandler, createCategoryHandler }) => {
    return (
        <div className="row mb-2 d-flex justify-content-center">
            <div className="col-sm-6">
                <form>
                    <div className="form-row mb-2">
                        <div className="col">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Название категории"
                                name="username"
                                minLength="3"
                                value={category.title}
                                onChange={(e) => editCategoryHandler(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col">
                            <button type="submit" disabled={!(category.title && (category.title.length >= 3))} className="btn btn-primary btn-block" onClick={createCategoryHandler}>Создать категорию</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCategory;