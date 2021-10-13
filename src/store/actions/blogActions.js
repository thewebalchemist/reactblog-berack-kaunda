import db from '../../configs/fbConfig'
import  {  ref, onValue, set, push, update, child } from 'firebase/database'

//Redux action types
export const ADD_POST = 'ADD_POST'
export const GET_POSTS = 'GET_POSTS'
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
export const GET_POSTS_FAILURE= 'GET_POSTS_FAILURE'

//Action creators that return an action

export const addPost = (project) => ({
    type: ADD_POST,
    payload: project,
})
        export function createProject(title, body, image, author) {
            return async ( dispatch) => {
                        // A post entry.
                            set(ref(db, 'posts/'), {
                                title   : title,
                                body : body,
                                image : image,
                                author : author
                            }).then(() =>{
                                dispatch (addPost())
                            })
                            
                        }
                        
                }

export const getPosts = () => ({
    type: GET_POSTS
})

export const getPostsSuccess = (posts) => ({
    type: GET_POSTS_SUCCESS,
    payload: posts,
    
})


export const getPostsFailure = () => ({
    type: GET_POSTS_FAILURE
})

            //Combining  the functions in an asychronous thunk
            export function fetchPosts () {
                return async ( dispatch ) => {
                    dispatch( getPosts() )
                    try{

                    const postData = ref(db, 'posts/');
                    onValue(postData, (snapshot) => {
                    const data = snapshot.val();
                    console.log(data)
                    dispatch( getPostsSuccess(data))

                    })

                        // const response = await fetch('https://jsonplaceholder.typicode.com/posts')
                        // const data = await response.json()

                        
                    } catch (error) {
                        dispatch(getPostsFailure())
                    }
                }
            }
