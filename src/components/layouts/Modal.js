import React from 'react'


const Modal = () => {

    return(           

            <div className={`md:hidden transition duration-3000  rounded-md h-auto  left-0 z-10 fixed bg-gray-300 overflow-hidden opacity-95`}>
                <div className="relative">
                    <ul className="float-left text-gray-900 p-12 cursor-pointer uppercase text-sm ">
                        <li className="openLoginModal hover:underline m-3">Login</li>
                        <li className="openSignUpModal hover:underline m-3">Sign Up</li>
                        <li  className="logout hover:underline m-3">Log Out</li>
                        <a href="./create.html"><li className="hover:underline m-3">create Post</li></a>
                    </ul>
                </div>
            </div>

    )
}
export default Modal