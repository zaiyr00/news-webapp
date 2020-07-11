import {articlesAPI, categoriesAPI, usersAPI} from "../../api/api";
import {getArticlesThunkCreator} from "./client-reducer";

const SET_OPEN_MODAL = "admin/SET_OPEN_ARTICLE_MODAL";
const SET_CLOSE_MODAL = "admin/SET_CLOSE_MODAL";

const SET_CATEGORIES = "admin/SET_CATEGORIES";
const SET_EDIT_CATEGORY = "admin/SET_EDIT_CATEGORY";
const SET_CATEGORY = "admin/SET_CATEGORY";

const SET_USERS = "admin/SET_USERS";
const SET_USER = "admin/SET_USER";
const SET_EDIT_USER = "admin/SET_EDIT_USER";

const SET_ARTICLE = "admin/SET_ARTICLE";
const SET_EDIT_ARTICLE = "admin/SET_EDIT_ARTICLE";
const SET_SELECT_VALUE = "client/SET_SELECT_VALUE";

let rand = function() {
    return Math.random().toString(36).substr(2); // remove `0.`
};

let token = function() {
    return rand() + rand(); // to make it longer
};

let initialState = {
    users: [],
    categories: [],

    article: "",
    category: "",
    user: "",
    select: ""
}

const adminPanelReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CATEGORIES:
            return {
                ...state,
                categories: action.categories
            }

        case SET_ARTICLE:
            return {
                ...state,
                article: action.article
            }

        case SET_USER:
            return {
                ...state,
                user: action.user
            }
        case SET_EDIT_USER:
            return {
                ...state,
                user: {...state.user, [action.nameField]: action.value}
            }
        case SET_CATEGORY:
            return {
                ...state,
                category: action.category
            }
        case SET_EDIT_CATEGORY:
            return {
                ...state,
                category: {...state.category, title: action.title}
            }
        case SET_OPEN_MODAL:
            return {
                ...state,
                [action.nameField]: action.payload
            }
        case SET_CLOSE_MODAL:
            return {
                ...state,
                [action.nameField]: ""
            }
        case SET_EDIT_ARTICLE:
            return {
                ...state,
                article: {...state.article, [action.nameField]: action.value}
            }
        case SET_SELECT_VALUE:
            return {
                ...state,
                select: action.value
            }
        default:
            return state;
    }
}

// All users
export const getUsersThunkCreator = () => async (dispatch) => {
    const response = await usersAPI.getUsers();
    dispatch(setUsersActionCreator(response.data))
}
const setUsersActionCreator = (users) => ({type: SET_USERS, users})

// All Categories
export const getCategoriesThunkCreator = () => async (dispatch) => {
    const response = await categoriesAPI.getCategories();
    dispatch(setCategoriesActionCreator(response.data))
}
const setCategoriesActionCreator = (categories) => ({type: SET_CATEGORIES, categories})

//Modal Window
export const setOpenModalActionCreator = (payload, nameField) => ({type: SET_OPEN_MODAL, payload, nameField})
export const closeModalHandlerActionCreator = (nameField, values) => ({type: SET_CLOSE_MODAL, nameField, values})

// User
export const deleteUserThunkCreator = () => async (dispatch, getState) => {
    let { user } = getState().adminPage;
    if((localStorage.getItem("user")) === JSON.stringify(user)){
        return alert("Ошибка! Вы не можете удалить самого себя.")
    }
    const response = await usersAPI.deleteUser(user.id);
    dispatch(setUserActionCreator(response.data))
    dispatch(closeModalHandlerActionCreator());
    dispatch(getUsersThunkCreator());
}
const setUserActionCreator = (user) => ({type: SET_USER, user})
export const editUserHandlerActionCreator = (nameField, value) => ({type: SET_EDIT_USER, nameField, value })
export const updateUserThunkCreator = () => async (dispatch, getState) => {
    const { user } = getState().adminPage;
    await usersAPI.updateUser(user.id, user);
    dispatch(getUsersThunkCreator());
}
export const createUserThunkCreator = () => async (dispatch, getState) => {
    let { user } = getState().adminPage;
    await usersAPI.createUser(user);
    dispatch(getUsersThunkCreator());
    user.username = ""
    user.password = ""
}

// Category
export const editCategoryActionCreator = (title) => ({type: SET_EDIT_CATEGORY, title })
export const createCategoryThunkCreator = () => async (dispatch, getState) => {
    const { category } = getState().adminPage;
    const cat = {
        ...category,
        parent_id: token()
    }
    await categoriesAPI.createCategory(cat);
    dispatch(getCategoriesThunkCreator());
    getState().adminPage.category.title = "";
}
export const updateCategoryThunkCreator = () => async (dispatch, getState) => {
    const { category } = getState().adminPage;
    await categoriesAPI.updateCategory(category.id, category);
    dispatch(getCategoriesThunkCreator());
}
export const deleteCategoryThunkCreator = () => async (dispatch, getState) => {
    let { category } = getState().adminPage;
    const response = await categoriesAPI.deleteCategory(category.id);
    dispatch(setCategoryActionCreator(response.data));
    dispatch(closeModalHandlerActionCreator());
    dispatch(getCategoriesThunkCreator());
}
const setCategoryActionCreator = (category) => ({type: SET_CATEGORY, category})

// Article
export const editArticleActionCreator = (nameField, value) => ({type: SET_EDIT_ARTICLE, nameField, value })
export const createArticleThunkCreator = () => async (dispatch, getState) => {
    const { categories } = getState().newsPage;
    let { article, select } = getState().adminPage;
    let { parent_id } = categories.find(category => (category.title === select) ? category.parent_id : null);

    const { id } = JSON.parse(localStorage.getItem("user"));
    let obj = {
        ...article,
        user_id: id,
        category_id: parent_id
    }
    await articlesAPI.createArticle(obj);
    dispatch(getArticlesThunkCreator());
    article.title = "";
    article.image = "";
    article.description = "";
}
export const updateArticleThunkCreator = () => async (dispatch, getState) => {
    const { article } = getState().adminPage;
    await articlesAPI.updateArticle(article.id, article);
    dispatch(getArticlesThunkCreator());
}
export const deleteArticleThunkCreator = () => async (dispatch, getState) => {
    let { article } = getState().adminPage;
    const response = await articlesAPI.deleteArticle(article.id);
    dispatch(setArticleActionCreator(response.data));
    dispatch(closeModalHandlerActionCreator());
    dispatch(getArticlesThunkCreator());
}
const setArticleActionCreator = (article) => ({type: SET_ARTICLE, article})
export const changeSelectionActionCreator = (value) => ({type: SET_SELECT_VALUE, value})

export default adminPanelReducer;