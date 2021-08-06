import React,{useState} from 'react'
import './style.css'
import { createFeedBack } from '../../Actions/feedback';
import {useDispatch} from 'react-redux'
import {useHistory} from "react-router-dom";

const Form =()=>{
       const history = useHistory()
       const dispatch = useDispatch()
      
     //store form data in state
     const [feedBack,setFeedBack]=useState({name:'',email:'',feedback:''})

     //handling form submiting function
     const handleSubmit=(e)=>{
           e.preventDefault()
             dispatch(createFeedBack(feedBack));
             history.push("/feedbackuser")
     }
    return(
      <div className="container mt-5">
           <div className="row">
                  <div className="col-sm-5 col-md-8 col-12 pb-4 offset-md-2 mt-5" >
                        <form form id = "algin-form" onSubmit = {handleSubmit} >
                           <h4 className="p-2 text-center">Your Review for PYT</h4>
                              <div className="form-group mt-1">
                                 <label htmlFor="email">Name</label>
                                 <input type="text" className="form-control" placeholder="Your Name" onChange={(e)=>setFeedBack({...feedBack,name:e.target.value})} />
                              </div>
                              <div className="form-group mt-1">
                                 <label htmlFor="email">Email address</label>
                                 <input type="email" className="form-control" placeholder="Your Email" onChange={(e)=>setFeedBack({...feedBack,email:e.target.value})} />
                              </div>
                              <div className="form-group mt-2">
                                 <label htmlFor="feedback">Feedback</label>
                                 <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Your Feedback" onChange={(e)=>setFeedBack({...feedBack,feedback:e.target.value})}></textarea>
                              </div>
                              <button type="submit" className="btn btn-dark" style={{marginTop:'20px',marginLeft:'35%',marginRight:'auto'}}>Complete your Feedback</button>
                        </form>
                  </div>
            </div>
      </div>
    )
}
export default Form
