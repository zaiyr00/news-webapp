const SET_LOGIN_INFO = "admin/SET_LOGIN_INFO";

let initialState = {
    username: "",
    password: "",
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOGIN_INFO:
            return {
                ...state,
                [action.nameField]: action.value
            }
        default:
            return state
    }
}

export const setLoginInfoActionCreator = (nameField, value) => ({type: SET_LOGIN_INFO, nameField, value});

export default authReducer;