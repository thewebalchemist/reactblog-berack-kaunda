import React, { useEffect} from 'react'
import { connect } from 'react-redux'
import Blogsummary from '../dashboard/Blogsummary'
import { fetchPosts } from '../../store/actions/blogActions'
import { Link } from 'react-router-dom'
import Home from '../layouts/Home'

const Bloglist = ({ dispatch, loading, posts, hasErrors }) =>{
    <Home posts={posts} />
    console.log(posts)
    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    const renderPosts = () => {
        if (loading) return <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-red-500 hover:bg-red-800 focus:border-red-500 active:bg-red-500 transition ease-in-out duration-150 cursor-not-allowed" disabled="">
        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Loading Posts...
      </button>
        if (hasErrors) return <p className='text-white font-bold'>Unable to display posts.</p>
        return  posts.map((post) =>
        <Link to={ '/posts/' + post.title}>
        <Blogsummary key={post.title} post={post} />
        </Link>
        )
    }


        return(
            
            <blogs>
                <div className="grid grid-cols-1 gap-8 m-6 md:grid-cols-2">
                    {renderPosts()}
                </div>

            </blogs>
        )
    }


    //Mapping redux state to a react component
const mapStateToProps = ( state ) => ({
    loading: state.posts.loading,
    posts: state.posts.posts,
    hasErrors: state.posts.hasErrors,
})

//Connecting Redux to react
export default connect(mapStateToProps)(Bloglist)