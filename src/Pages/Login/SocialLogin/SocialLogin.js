import React from "react";
import google from '../../../images/google logo.png'
import facebook from '../../../images/facebook logo.png'
import git from '../../../images/GitH logo.png'
import {useSignInWithGithub,useSignInWithGoogle} from 'react-firebase-hooks/auth'
import auth from '../../../firebase.init'
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  const location = useLocation()

let from = location.state?.from?.pathname || "/"

  let errorElement;
  if(loading || loading1){
    return <Loading></Loading>
  }
  if (error || error1) {

    errorElement =
        <p className="text-danger">Error: {error?.message} {error1?.message}</p>
      

  }
  if(user || user1){
   Navigate(from,{replace:true})
  }
  return (
    <div className="">
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
       
      </div>
      {errorElement}
      <button onClick={()=> signInWithGoogle()} className="btn btn-info d-block  mx-auto w-50 my-3" >
        <img style={{width: '30px'}} src={google} alt=''/>
         <span className="px-2">  Google Sing IN</span>
      </button>
      <button className="btn btn-info d-block  mx-auto w-50 my-3" >
        <img style={{width: '35px'}} src={facebook} alt=''/>
         <span className="px-2">  Facebook Sing IN</span>
      </button>
      <button onClick={()=>signInWithGithub()} className="btn btn-info d-block  mx-auto w-50 my-3" >
        <img style={{width: '30px'}} src={git} alt=''/>
         <span className="px-2">  Github Sing IN</span>
      </button>
    </div>
  );
};

export default SocialLogin;
