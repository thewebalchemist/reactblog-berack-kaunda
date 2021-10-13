import React from 'react'
import dashboardBg from '../../images/dashboard-bg.jpg'
import favicon from '../../images/favicon.jpg'

const Blogsummary = ({post}) => {
        return(

            <div className='grid grid-cols-1'>
                <div className=" col overflow-hidden border border-gray-400 rounded cursor-pointer md:p-3">
                        <div className="p-1">
                            <img className="md:rounded object-cover image" src={ dashboardBg } alt="please input a correct image link"/>
                        </div>            
                <div className="p-3">
                    <span className="text-blue-500 uppercase"></span>
                    <h2 className="md:text-2xl text-white font-medium mt-3">
                    {post.title}
                    </h2>
                    <p className="text-gray-500 truncate mt-3">
                    {post.body}
                    </p>
                        <div className="m-2 flex text-gray-500"> 
                            <img className="h-8 rounded-full mr-4" src={ favicon } alt=""/>
                            <span> Kaunda Berack</span>
                        </div>
                <div className=" text-xs text-white text-start lg:flex">
                    <span className="mr-2 block"> 02/08/2022</span>
                    <span className="hidden md:block mr-2">•</span>
                    <span> 1 min read time</span>
                </div>
                </div>
            </div>
            <hr className="border-top mr-0 border-gray-500 mt-5 md:mt-10 md:mb-10"></hr>
            </div>

        )

    }

    export default Blogsummary

