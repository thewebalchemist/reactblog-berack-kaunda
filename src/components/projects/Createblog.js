import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/blogActions'


const Createblog = ()  => {


    const [state, setState] = useState({
        title : '',
        body : '',
        image : '',
        author : ''
    });
    const HandleInputChange = (event)=> {
        setState({
            title : event.target.value,
            body : event.target.value,
            image : event.target.value,
            author : event.target.value
        })
        console.log(state)

                //adding the current date
                var monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"
                    ];
                    var currentTime = new Date();
                    var date = currentTime.getDate()+' '+ monthNames[currentTime.getMonth()]+' '+currentTime.getFullYear();
                    // this._currentTime.value = date;
                    //checking the readtime
                window.calcRT = (ev) => {
                    const wordsPerMinute = 200; // Average case.
                    let result = "";
                    
                    let textLength = ev.value.split(" ").length; // Split by words
                    if(textLength > 0){
                        let value = Math.ceil(textLength / wordsPerMinute);
                        result = `${value} min read`;
                    }
                    // this._readTime.value = result;
                    };
        }  


        const HandleSubmitForm = (event)=> {
            event.preventDefault();
            createProject(state)
            console.log(state)
            
        }          
        
        return (
            <div className="">
                <div className=" border rounded p-1 m-2 md:ml-16 md:mr-16 border-white ">
                    <div className=" md:p-8 md:text-2xl">
                        <form className=" inline " onSubmit={HandleSubmitForm} >
                            <div className="m-4  text-white">
                                <h1 className="text-white m-3">Select Category</h1>
                                <select className=" border border-white bg-transparent rounded p-2 "  name="category">
                                    <option className="text-gray-600" value="development">Development</option>
                                    <option className="text-gray-600" value="career">Career</option>
                                    <option className="text-gray-600" value="marketing">Marketing</option>
                                </select>
                            </div>

                            <div className="m-4 text-white">
                                <h1 className="text-white m-3">Blog title</h1>
                                <textarea id="title" onChange={HandleInputChange} className="p-4 w-full resize text-gray-600 bg-transparent border border-white focus:outline-none rounded"  type="text" required rows="3"></textarea>
                            </div>
                            <div className="m-4 text-white">
                                <h1 className="text-white m-3">Blog body</h1>
                                <textarea id="body" onKeyUp={HandleInputChange} className=" w-full p-4 resize text-gray-600 bg-transparent border border-white focus:outline-none rounded" rows="7" required  type="text"></textarea>
                            </div>
                            <div className="m-4 text-white">
                                <h1 className="text-white m-3">Input Image Link</h1>
                                <input id="image" onChange={HandleInputChange} className="p-4 text-gray-600 bg-transparent border border-white focus:outline-none rounded-md" required type="url"/>
                            </div>
                            <div className="m-4 text-white">
                                <h1 className="text-white m-3">Author name</h1>
                                <input id="author" onChange={HandleInputChange} className="p-4 text-gray-600 bg-transparent border border-white focus:outline-none rounded-md" required type="text"/>
                            </div>
                            <div className="m-4 text-white">
                                <h1 className="text-white m-3">Read Time</h1>
                                <input onKeyUp={HandleInputChange} className="p-4 text-gray-600 bg-transparent border border-white focus:outline-none rounded-md" readOnly name="readTime" id="readTime" type="text"/>
                            </div>
                            <div className="m-4 text-white">
                                <h1 className="text-white m-3">Current Time</h1>
                                <input onKeyUp={HandleInputChange} className="p-4 text-gray-600 bg-transparent border border-white focus:outline-none rounded-md" required name="currentTime" readOnly id="currentTime" type="text"/>
                            </div>
                            <div className=" text-white">
                                <button id="upload" className="border border-white rounded-md p-2 text-white m-3 hover:bg-blue-600 focus:outline-none">Share Post 🚀</button>

                            </div>
                        </form>
                        <a href=""><button className="border border-white rounded-md p-2 text-white m-3 hover:bg-blue-600 focus:outline-none">
                            Home
                        </button></a>
                    </div>
        </div>

            </div>
        )
    }


const mapDispatchToProps = ( dispatch ) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}


export default connect(mapDispatchToProps)(Createblog)
