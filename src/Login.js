import { Button } from '@mui/material';
import React from 'react'
import "./Login.css"

// import {auth,provider} from "./firebase"
 

function Login() {
    const signIn =()=>{
// auth
// .signInWithPopup(provider)
// .then((result)=>{
//     console.log(result);
// })
// .catch((error)=>alert(error.message));
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
