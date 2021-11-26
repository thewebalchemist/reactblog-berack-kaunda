import React, { useState } from 'react'
import Bloglist from '../projects/Bloglist'
import Recents from '../dashboard/Recents'
import Blogsummary from '../dashboard/Blogsummary'
import pingImage from '../../images/ping.png'

const Home = ( { posts }) =>{
        return(
            
            <section className=' '>
                <div className="grid md:grid-cols-3 md:gap-4 md:m-10 ">
                    <div className="col-span-3 md:col-span-2 md:border border-gray-400 rounded overflow-hidden">
                        <div className='  m-4'>
                            <div className='md:flex text-sm italic text-white font-bold'>
                                <h1 className='p-2'>
                                    Filter By Category: 
                                    
                                </h1> 
                                <div className=" grid grid-cols-2 gap-2  md:flex md:space-x-3 md:justify-center text-sm "  name="category">
                                    <button  className=" border border-white bg-transparent p-2 rounded  text-gray-200 hover:bg-white hover:text-gray-900" value="development">All Posts</button>
                                    <button  className="border border-white bg-transparent p-2 rounded text-gray-200 hover:bg-white hover:text-gray-900" value="development">Development</button>
                                    <button  className="border border-white bg-transparent p-2 rounded  text-gray-200 hover:bg-white hover:text-gray-900" value="career">Career</button>
                                    <button className="border border-white bg-transparent p-2 rounded  text-gray-200 hover:bg-white hover:text-gray-900" value="marketing">Marketing</button>
                                    
                                </div>
                            </div>
                        </div>
                        <div>
                        <Bloglist />
                        </div>                        
                    </div>
                    <div class="hidden md:block col overflow-hidden border border-gray-400 rounded text-white">
                        <div className=' flex m-4'>
                        <h1 className='text-lg font-bold'>
                        Recent Activities 
                        </h1>
                        <img className=' h-3 animate-ping' src= { pingImage } alt="" />
                        </div>

                    
                        <Recents />
                        <Recents />
                        <Recents />
                        <Recents />
                    </div>
                </div> 

            </section>


        )

    }
    
export default Home