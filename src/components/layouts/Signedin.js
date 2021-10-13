import React from 'react'
import { NavLink } from 'react-router-dom'
import favicon from '../../images/favicon.jpg'
import ReactModal from 'react-modal';



const Signedin = () => {
    return(

                <div className="  lg:block">
                <div className='dropdown relative block float-right m-4 '>                
                    <img className=" profilePic whenLoggedIn cursor-pointer h-12 rounded-full" src={ favicon } alt="" />
                    <div className='absolute z-50 bg-yellow-400'>
                        <a className='  text-black p-2 no-underline block hover:bg-gray-900 ' href="#">Link 1 hrveggegege</a>
                        <a className=' text-black p-2 no-underline block hover:bg-gray-900 ' href="#">Link 2</a>
                        <a className=' text-black p-2 no-underline block hover:bg-gray-900 ' href="#">Link 3</a>
                    </div>
                </div>
                <div>
                    <div>
                    <button  className="createPost whenLoggedIn  float-right m-4 border-0 focus:outline-none rounded-md p-3 bg-blue-600 text-white font-bold cursor-pointer"><NavLink to='/create'>Create Post</NavLink>                            
                        </button>
                    </div>

                            <div> 
                                <button 
                        className="logout whenLoggedIn  float-right m-4 border-0 focus:outline-none rounded-md p-3 bg-blue-600 text-white font-bold cursor-pointer">
                                    Logout
                                </button>
                            </div>
                </div>

                </div>

    )
}
export default Signedin