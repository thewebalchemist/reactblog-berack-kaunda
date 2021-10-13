import React, { Component } from 'react'
import dashboardBg from '../../images/dashboard-bg.jpg'
import favicon from '../../images/favicon.jpg'
import Recents from './Recents'
import Bloglist from '../projects/Bloglist'

class Dashboard extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return(            
            <div className='  bg-gray-900 h-auto w-full pb-10 pt-0'>
                <div className='md:relative md:border border-t-0 pb-12 md:mr-10 md:ml-10 border-gray-400 rounded rounded-t-none overflow-hidden'>
                    <div className=' mb-4 overflow-hidden '>
                        <img className=' object-cover h-32 w-full md:h-80 md:relative' src= {dashboardBg } alt="" />
                        <img className=' h-20 m-3 md:h-44 md:absolute md:left-32 rounded-full  border-4 border-white top-56' src={ favicon } alt="" />
                    </div>
                    <div className='md:flex justify-end md:m-10'>
                    <div className='text-center text-gray-400 m-4'>
                        <span className=' block font-bold text-2xl'>
                            Berack Kaunda
                        </span>
                        <span className='md:text-md block '>
                            Web Developer
                        </span>
                        <span className='text-sm md:text-md block'>
                            Specialized in JavaScript and Dart
                        </span>
                    </div>
                    <div className='m-4'>
                        <div className=' border border-gray-400 rounded '>
                            <div className='grid grid-cols-3 gap-1 p-2'>
                                <div className='col text-gray-400 '>
                                    <h3 className='italic md:text-lg text-center'>
                                        Posts
                                    </h3>
                                    <p className='text-center bold font-bold text-xl'>
                                        6
                                    </p>
                                </div>
                                <div className='col text-gray-400'>
                                    <h3 className='italic md:text-lg text-center'>
                                        Likes
                                    </h3>
                                    <p className='text-center bold font-bold text-xl'>
                                        6
                                    </p>
                                </div>
                                <div className='col text-gray-400'>
                                    <h3 className='italic md:text-lg text-center'>
                                        Following
                                    </h3>
                                    <p className='text-center bold font-bold text-xl'>
                                        6
                                    </p>
                                </div>
                            </div>


                        </div>

                    </div>
                    </div>

                </div>
                <div class="grid md:grid-cols-3 md:gap-4 md:m-10">
                    <div class="col-span-3 md:col-span-2 md:border border-gray-400 rounded overflow-hidden">
                    <h1 className='text-lg italic text-white font-bold m-4'>
                    All posts
                    </h1>
                    <Bloglist/>
                    </div>
                    <div class="hidden md:block col overflow-hidden border border-gray-400 rounded text-white">
                    <h1 className='text-lg font-bold m-4'>
                    Recent Activities
                    </h1>                       
                    <Recents />
                    <Recents />
                    <Recents />
                    <Recents />
                    </div>
                    </div> 
            </div>
        
        )
        
    }
}

export default  Dashboard