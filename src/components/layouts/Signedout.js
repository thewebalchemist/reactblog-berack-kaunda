import React from 'react'
import { useState } from 'react'
import Signup from '../auth/Signup'
import Login from '../auth/Login'


const Signedout = () => {

const [modalIsOpen, setmodalIsOpen] = useState(false);
const [modalIsOpen2, setmodalIsOpen2] = useState(false);
const handleChange = () => {
    setmodalIsOpen2(false).then( () => 
    setmodalIsOpen(true))
    
}

    return(
            
                <div className="  lg:block">

                        <div>
                            <button onClick={() => setmodalIsOpen(true) } className="openSignUpModal whenLoggedOut  float-right m-4 border-0 focus:outline-none rounded-md p-3 bg-blue-600 text-white font-bold cursor-pointer">Sign Up
                            </button>
                            <Signup modalIsOpen={modalIsOpen} setmodalIsOpen={setmodalIsOpen} />
                        </div>        

                        <div>
                            <button onClick={() => setmodalIsOpen2(true) } className="openLoginModal whenLoggedOut  float-right m-4 border-0 focus:outline-none rounded-md p-3 bg-blue-600 text-white font-bold cursor-pointer">Login                            
                            </button>
                            <Login modalIsOpen2={modalIsOpen2} setmodalIsOpen2={setmodalIsOpen2} handleChange={handleChange}/>
                            
                </div>

                </div>

    )
}
export default Signedout