import React from 'react'
import Bloglist from '../projects/Bloglist'
import Recents from '../dashboard/Recents'
import Blogsummary from '../dashboard/Blogsummary'
import pingImage from '../../images/ping.png'

const Home = ( { posts }) =>{

    const DevelopmentOption = () => {}
    const CareerOption = () => {
        return  <Bloglist />
    }
    const Option = (event) => {
        if (event.target.value === 'career'){
            return CareerOption();
        }else if(event.target.value === 'development'){
            return posts.map((post) =>
        <Blogsummary key={post.id} post={post} />)
        }  
    }
        return(
            
            <blogs>
                <div className="grid md:grid-cols-3 md:gap-4 md:m-10">
                    <div className="col-span-3 md:col-span-2 md:border border-gray-400 rounded overflow-hidden">
                        <div className=' grid grid-cols-2 m-4'>
                            <div  className=' float-left '>
                                <h1 className='text-lg italic text-white font-bol'>
                                All posts
                                </h1>
                            </div>
                            <div className='flex text-lg italic text-white font-bold'>
                                <h1 className='p-2'>
                                    Filter By Category: 
                                    
                                </h1> 
                                <select onChange={(event) => Option(event)}className=" border border-white bg-transparent rounded p-2 "  name="category">
                                    <option className="text-gray-600" value="development">Development</option>
                                    <option className="text-gray-600" value="career">Career</option>
                                    <option className="text-gray-600" value="marketing">Marketing</option>
                                </select>
                            </div>
                        </div>
                        <div>
                           {Option()}
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

            </blogs>


        )

    }
    
export default Home