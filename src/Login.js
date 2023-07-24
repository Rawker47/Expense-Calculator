import { Button } from '@mui/material';
import React from 'react'
import "./Login.css"
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import {useStateValue} from './StateProvider';
import {actionTypes} from './reducer';
import {auth} from "./fb";
 
function Login() {
  // eslint-disable-next-line no-unused-vars
  const [state,dispatch]=useStateValue();
    
  const signIn =()=>{
      const provider = new GoogleAuthProvider();
    signInWithPopup(auth,provider)
   .then((result)=>{
    dispatch({
      type:actionTypes.SET_USER,
      user:result.user,
    });
    console.log(result.user);
})
.catch((error)=>alert(error.message));
    };

  return (
    <div className="login">
        <div className="login__logo">
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1200px-Facebook_f_logo_%282021%29.svg.png" alt="" />
        <img src="https://hindubabynames.info/downloads/wp-content/themes/hbn_download/download/social-media/facebook-logo.png" alt="" />
        </div>
       <Button type="submit" onClick={signIn}>
        sign In
       </Button>
      
    </div>
  )
}

export default Login







