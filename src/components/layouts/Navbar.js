import React from 'react'
import { useState } from 'react'
import logo from '../../images/berack-kaunda-1.png'
import favicon from '../../images/favicon.jpg'
import Signedin from './Signedin'
import Signedout from './Signedout'
import Modal from './Modal'
import { Link } from 'react-router-dom'






const Navbar = () => {
    
    const [toggle, setToggle] = useState(false);
    const handleModal = () => {
        setToggle(!toggle)
    }

    return(
        <nav className= {` navbar sticky w-full bg-gray-200 top-0 right-0 left-0`}>
            <div className=" overflow-hidden ">
            <div  className="block">
                <div>
                    <Link to='/'><img className="h-10 mt-2 md:m-0 md:h-20 float-left md:p-1" src={ logo } alt="berack kaunda"></img></Link>
                </div>
                <div className="lg:hidden">
                    <i onClick={handleModal} className={`${toggle ? 'hidden' : ''}  cursor-pointer im im-menu float-right text-3xl m-2`} ></i>
                    <i onClick={handleModal} className={`${toggle ? '' : 'hidden'}  cursor-pointer  im im-x-mark float-right text-3xl m-2`}></i>  
                </div>
                <div>                
                    <img className="profilePic lg:hidden whenLoggedIn cursor-pointer float-right h-8 m-2 rounded-full " src={ favicon } alt=""></img>
                </div>
            </div>
            <div className='hidden lg:block'> 
            <Signedin />
            <Signedout />
            </div>

                </div>
                { toggle && <Modal />}


        </nav>

    )
}
export default Navbar