import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";

import clientReducer from '../reducers/client-reducer'
import adminPanelReducer from "../reducers/admin-panel-reducer";
import authReducer from "../reducers/auth-reducer";

let reducers = combineReducers({
    newsPage: clientReducer,
    adminPage: adminPanelReducer,
    authPage: authReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
