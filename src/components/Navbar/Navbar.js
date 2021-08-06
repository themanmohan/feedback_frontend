import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavStyle';
import Logo from '../../images/pyt.png';
import {
Link,
  useHistory,
  useLocation
} from 'react-router-dom';
const Navbar =()=>{
    const dispatch = useDispatch();
    const location=useLocation()
    const history = useHistory();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    //checking admin
    const admin=user?.result.email==="kmanmohan030@gmail.com"
     const logout = () => {
    //dispatcing  for login
    dispatch({ type: 'LOGOUT' });
    history.push('/');
    setUser(null);
  };

    useEffect(() => {
    //storing user profile in localstoragge
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);
    return(
     
  
   
      <>
      <Nav>
        <NavLink to='/'>
        <img width="100px" height="auto" className="img-responsive" src={Logo}  alt="logo" />
        </NavLink>
        <Bars />
        <NavMenu>
         
        {admin?<NavLink  to="/feedback">AdminDashBoard</NavLink>:<NavLink to="/feedbackuser" style={{color:'white'  , textDecoration: 'none' ,fontWeight:'bold',marginLeft:'130px'}}>Recent Feedbacks</NavLink>}
        {user?<NavLink  to="/feedbackform" style={{color:'white' , textDecoration: 'none' ,fontWeight:'bold'}}>Your Feedback</NavLink>:''}
       

          
        </NavMenu>
        <NavBtn style={{color: 'white',fontWeight: 'bold',marginLeft:'200px'}}>{user?.result.name}</NavBtn>
        {user?<button className="btn btn-primary"  style={{height:"40px" , marginTop:"10px"}} onClick={logout}>LOGOUT</button>:''}

      </Nav>
    </>
    )
}
export default Navbar
