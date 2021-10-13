//Importing all actions
import * as actions from '../actions/blogActions'



export const initialState = {
    posts: [],
    loading: false,
    hasErrors: false,
}

export default function BlogReducer( state = initialState, action){
    switch (action.type) {
        case actions.ADD_POST:
            return { 
                ...state,
                project: action.payload
            }
        case actions.GET_POSTS:
            return { 
                ...state, loading: true
            }
        case actions.GET_POSTS_SUCCESS:
            return {
                posts: action.payload,
                loading: false,
                hasErrors: false
            }
        case actions.GET_POSTS_FAILURE:
            return { 
                ...state,
                loading: false,
                hasErrors: true
            }

        default:
            return state;
    }
}