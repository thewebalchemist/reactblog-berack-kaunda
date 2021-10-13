import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return(
                    <footer className="footer bg-gray-600 h-auto  w-full pb-10">
                        <div className=" text-white text-center pt-5 pb-10 md:pt-10 ">
                            <h1 className="text-3xl m-2" >Learn about building products as a developer</h1>
                            <p className="text-sm m-4">
                                Get a once-per-month email with my latest article and additional details about my launches, products, and experiments ✨
                            </p>
                        </div>
                        <div className="text-center md:flex md:justify-center m-2 ">
                            <form action="">
                                <input className=" border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent rounded pl-4 md:pr-64 md:pl-4 pt-2 pb-2" type="text" placeholder="Your email adrress"/>
                                <button className="border rounded m-2 md:m-0 md:p-2 p-2 pl-14 pr-14 bg-blue-600 text-white font-bold focus:outline-none cursor-pointer">
                                Get Updates
                                </button>
                            </form>      
                    
                        </div>
                    </footer>



        )
    }
}
export default Footer