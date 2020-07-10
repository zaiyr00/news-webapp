import * as axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "http://localhost:8000/"
})

// articles endpoint
export const articlesAPI = {
    getArticles() {
        return axiosInstance
            .get(
                'articles'
            )
    },
    getInformationArticle(id){
        return axiosInstance
            .get(
                `articles/${id}`
            )
    },
    createArticle(article) {
        return axiosInstance
            .post(
                'articles', article
            )
    },
    deleteArticle(id){
        return axiosInstance
            .delete(
                `articles/${id}`
            )
    },
    updateArticle(id, article){
        return axiosInstance
            .put(
                `articles/${id}`, article
            )
    },
    getArticlesByCategoryId(id) {
        return axiosInstance
            .get(
                `articles`, {
                    params: {
                        category_id: id
                    }
                }
            )
    }
}

// users endpoint
export const usersAPI = {
    getUsers() {
        return axiosInstance
            .get(
                'users'
            )
    },
    createUser(user) {
        return axiosInstance
            .post(
                'users', user
            )
    },
    deleteUser(id){
        return axiosInstance
            .delete(
                `users/${id}`
            )
    },
    updateUser(id, user){
        return axiosInstance
            .put(
                `users/${id}`, user
            )
    }
}

// categories endpoint
export const categoriesAPI = {
    getCategories() {
        return axiosInstance
            .get(
                'categories'
            )
    },
    createCategory(category) {
        return axiosInstance
            .post(
                'categories', category
            )
    },
    deleteCategory(id){
        return axiosInstance
            .delete(
                `categories/${id}`
            )
    },
    updateCategory(id, category){
        return axiosInstance
            .put(
                `categories/${id}`, category
            )
    }
}

