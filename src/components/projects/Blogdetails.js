import React from 'react'
import dashboardBg from '../../images/dashboard-bg.jpg'
import favicon from '../../images/favicon.jpg'
import Blogsummary from '../dashboard/Blogsummary'

const Blogdetails = () =>{
        return(           

            <div className=''>
                <div className="overflow-hidden md:p-5 ">
                    <img className=" object-cover md:rounded-md" src={ dashboardBg } alt="please input a correct image link"/>
                </div>
            <div className='grid grid-cols-3 gap-4 p-2 md:m-4'>
                <div className='col-span-3 md:col-span-2 md:border border-gray-400 rounded  overflow-hidden'>
                        <detail>
                        <div className=" m-8 ">
                            <span className="text-blue-500 text-lg uppercase">Marketing</span>
                            <h2 className=" text-lg md:text-6xl text-white font-medium">
                                Nldugryur trr uwet7w r7
                            </h2>
                            <hr className="border-top mr-0 border-gray-500 mt-10 mb-10"></hr>
                        <div className="m-2 md:text-lg flex text-gray-500"> 
                            <img className="h-8 rounded-full mr-4" src={ favicon } alt=""/>
                            <span>Kaunda Berack</span>
                        </div>

                        <div className="md:text-lg text-gray-500 pb-5 ">
                            <span className="mr-2">Published On 01/02/2020</span>
                            <span className=" block md: ">1 min read</span>
                        </div>    
                    </div> 

                                <div className="md:m-24">
                                    <p className="text-gray-500 md:text-2xl">
                                    ERuriptri i trweiorytweuio pepryew pweyroweitto ippptyewywtuopytt wa rawiryetyweritwyoiywo yrweitywrytruitruit  uytiorytiytiyritri
                                    </p>
                                </div>
                    </detail>
                </div>
        <div className='md:block col border border-gray-400 rounded text-white hidden'>

            <span className=' italic text-md m-4 text-blue-800 underline'>
                Read More
            </span>
        <Blogsummary />
        </div>
        </div>
        </div>
  



        )

    }
export default Blogdetails