import React from 'react'
import { useDispatch } from 'react-redux';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useHistory } from 'react-router-dom';
import Logo from '../images/googlenew.png';
import {GoogleLogin} from 'react-google-login'
import './HomeStyle.css'
const   Home =()=>{
       const dispatch = useDispatch();
       const history = useHistory();
       const googleSuccess=async(res)=>{
       const result = res?.profileObj;
       const token = res?.tokenId;

    try {
      dispatch({ type: 'AUTH', data: { result, token } });
      history.push('/feedbackform');
    } catch (error) {
      console.log(error);
    }
}
const googleFailure = (error) => {
   console.log(error)
}
    return(
    
      <div class="card mb-3" style={{maxWidth: "450px",display:'flex',padding:'30px',justifyContent: 'center',alignItems: 'center',zIndex:'auto',marginLeft:'auto',marginRight:'auto',marginTop:'100px',background: "rgba(0, 0, 0, 0)"}}>
      <div class="row g-0">
        <div class="col-md-4">
          <img src={Logo} class="img-fluid rounded-start" style={{marginTop:'20px'}} alt="Google"/>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title" style={{color:'#4285f4'}}>Login in with Google</h5>
            <GoogleLogin 
                     clientId = "621341383182-2op9iqlfobh8qpthemo759poapevri6e.apps.googleusercontent.com"
                      render={(renderProps)=>{
                       return  <button className="btn " style={{backgroundColor:'#ea4335',color:'#fff',fontWeight:'bold',padding:'8px',marginTop:'20px',marginBottom:'30px'}} onClick={renderProps.onClick} disabled={renderProps.disabled}>Sign in with Google</button>
                           }}
                        onSuccess={googleSuccess}
                         onFailure={googleFailure}
                         cookiePolicy="single_host_origin"
                         />
            <p class="card-text"><small class="text-muted">Copyright PYT 2021</small></p>
          </div>
        </div>
      </div>
    </div>
    
      
    )
}
export default Home
