import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageTitle from "../../Shared/PageTitle/PageTitle";
import axios from "axios";

const Login = () =>{ 
    const emailRef= useRef('') 
    const passwordRef = useRef('')
    const navigate = useNavigate()
    const location =useLocation()
    let from = location.state?.from?.pathname || "/"

    let errorElement;
    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
      auth
    );
    if(loading || sending){
      return <Loading></Loading>
    }
if(user){
  // navigate(from, {replace:true})
}
if (error) {

  errorElement =  <div>
      <p className="text-danger">Error: {error?.message}</p>
    </div>

}
const handleSubmit = async event =>{
    event.preventDefault()
    const email = emailRef.current.value
    const password = passwordRef.current.value
    // console.log(email, password);
   await signInWithEmailAndPassword(email, password)
   const {data }= await axios.post('http://localhost:5000/login',{email})
  //  console.log(data);
  localStorage.setItem('accessToken',data.accessToken)
  navigate(from, {replace:true})
}
const navigateRegister = (event) =>{
    Navigate('/register')
}
const resetPassword =async ()=>{
  const email = emailRef.current.value
if(email){
  await sendPasswordResetEmail(email);
  toast('Sent email');
}
else{
  toast('please enter your email')
}
}

  return (
    
    <div className="container w-50 mx-auto">
      <PageTitle title={"Login"}></PageTitle>
      <h1 className="text-primary text-center">Please login</h1>
      <div className="mt-3">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
          </Form.Group>
          <Button variant="primary w-50 mx-auto d-block mb-3" type="submit">
            Login
          </Button>
        </Form>
        {errorElement}
        <p>New to Genius Car ? <Link to="/register" className="text-primary pe-auto text-decoration-none" onClick={navigateRegister}>Please Register</Link></p>
        <p>Forget Password ? <button  className="text-primary pe-auto text-decoration-none btn btn-link" onClick={resetPassword}>Reset Password</button></p>
        <SocialLogin></SocialLogin>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
