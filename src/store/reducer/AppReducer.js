import { combineReducers } from "redux";
import AuthReducer from './AuthReducer'
import BlogReducer from './BlogReducer'

const AppReducer = combineReducers({
    posts: BlogReducer,
    auths: AuthReducer
})

export default AppReducer
