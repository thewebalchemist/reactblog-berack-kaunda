import React, { Component } from 'react'
import ReactModal from 'react-modal';
ReactModal.setAppElement('#root');

class Login extends Component {

    constructor (props) {
        super(props);
    }


    state = {
        Username : '',
        email : '',
        password : ''
    }

    handleSubmitForm = (event)=> {
        event.preventDefault();
        console.log(this.state)
    }
    handleInputChange = (event)=> {
        this.setState({
            [event.target.id] : event.target.value
        })
    }

    render() {
        return (
            <ReactModal contentLabel="modal" isOpen={this.props.modalIsOpen2}  onRequestClose={() => this.props.setmodalIsOpen2()} className="fixed w-full">
                <div className=" absolute top-16 left-32 right-32 overflow-auto p-4 rounded md:rounded-lg bg-gray-700 md:bg-gray-900 ">
                <div className="md:p-4">
                    <h1 className="float-left text-md md:text-center text-white md:font-bold md:text-4xl">
                        Login In To Your Account
                    </h1>
                    <span onClick={() => this.props.setmodalIsOpen2(false) } className="closeModal float-right text-xl text-white font-bold md:text-4xl cursor-pointer hover:text-red-700">&times;</span>
                </div>
        <div className="md:border-4 border-white md:m-10  md:text-2xl text-center">
            <form id="loginForm" className=" inline" onSubmit={this.handleSubmitForm} >
                <div className="">
                    <input onChange={this.handleInputChange} className="text-gray-900 m-4 md:m-6 p-3 md:w-96 border-none rounded focus:outline-none" type="email" placeholder="email" required/> 
                </div>
                <div className="">
                    <input id="loginPassword" onChange={this.handleInputChange} className="text-gray-900 m-4 md:m-6 p-3 md:w-96 border-none rounded focus:outline-none" type="password" placeholder="password"/> 
                </div>
                <div>
                    <h1 className=" text-white ">
                        Don't have an account <a onClick={() => this.props.setmodalIsOpen2(false), this.props.handleChange} className=" text-blue-800 " href="">Sign Up</a>
                    </h1>
                </div>
                <div className="m-4">
                    <button id="closeLoginModal" className="text-white border border-white p-2  pr-7 pl-7 rounded hover:text-gray-900 hover:bg-white hover:border-none">
                        Log In
                    </button>
                </div>
            </form>
            </div>
            </div>
            </ReactModal>
        )
    }
}

export default Login
