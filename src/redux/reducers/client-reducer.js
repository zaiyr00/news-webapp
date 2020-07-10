import {articlesAPI, categoriesAPI} from "../../api/api";

const SET_ARTICLES = 'client/SET_ARTICLES';
const SET_ARTICLE_DETAILED_INFORMATION = 'client/SET_ARTICLE_DETAILED_INFORMATION';
const SET_CATEGORIES = "client/SET_CATEGORIES";
const SET_CATEGORY_ID = "client/SET_CATEGORY_ID";

let initialState = {
    articles: [],
    articleDetailedInformation: null,

    categories: [],

    categoryId: ""
}

const clientReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_ARTICLE_DETAILED_INFORMATION:
            return {
                ...state,
                articleDetailedInformation: action.articleDetailedInformation
            }
        case SET_ARTICLES:
            return {
                ...state,
                articles: action.articles
            }
        case SET_CATEGORY_ID:
            return {
                ...state,
                categoryId: action.id
            }
        case SET_CATEGORIES:
            return {
                ...state,
                categories: action.categories
            }
        default:
            return state;

    }
}

export const getArticlesThunkCreator = () => async (dispatch) => {
    const response = await articlesAPI.getArticles();
    await Promise.all([
        dispatch(setArticlesActionCreator(response.data)),
        dispatch(getCategoriesThunkCreator())
    ])
}
const setArticlesActionCreator = (articles) => ({type: SET_ARTICLES, articles})

export const getInformationArticleThunkCreator = (id) => async (dispatch) => {
    const response = await articlesAPI.getInformationArticle(id);
    dispatch(setInformationArticleActionCreator(response.data))
}
const setInformationArticleActionCreator = (articleDetailedInformation) => ({type: SET_ARTICLE_DETAILED_INFORMATION, articleDetailedInformation})

const getCategoriesThunkCreator = () => async (dispatch) => {
    const response = await categoriesAPI.getCategories();
    dispatch(setCategoriesActionCreator(response.data))
}
const setCategoriesActionCreator = (categories) => ({type: SET_CATEGORIES, categories})

export const categoryIdActionCreator = (id) => ({type: SET_CATEGORY_ID, id})

export const getArticlesByCategoryIdThunkCreator = () => async (dispatch, getState) => {
    const { categoryId } = getState().newsPage;
    const response = await articlesAPI.getArticlesByCategoryId(categoryId);
    dispatch(setArticlesActionCreator(response.data))
}
export default clientReducer;