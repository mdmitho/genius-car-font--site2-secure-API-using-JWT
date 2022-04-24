import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css'
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
    const [agree, setAgree] = useState(false)
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);


    const navigate = useNavigate()

    const navigateLogin =()=>{
        navigate('/login')
    }
    if(loading || updating){
        return <Loading></Loading>
      }
    if(user){
     console.log(user);
    }
    const handleRegister =async (event)=>{
        event.preventDefault()
        // console.log(event.target.email)
        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value
        // const agree = event.target.terms.checked
     
            createUserWithEmailAndPassword(email, password,name)
            await updateProfile({ displayName:name });
           console.log('Updated profile');
            navigate('/home')
      }
    return (
        <div className='register-form'>
            <h1 className='text-center mt-3 mb-3 text-primary'>Please register</h1>
            <form onSubmit={handleRegister}>
                <input type="text" name='name' id='' placeholder='Your name' />
                <input type="email" id='' name='email' placeholder='Email Address' required/> 
                <input type="password" name='password' id='' placeholder='Password' required />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                {/* <label className={agree ? 'ps-2 text-primary': 'text-danger ps-2'} htmlFor="terms">Accept Genius Car Terms and Conditions</label> */}
                <label className={`ps-2 ${agree ? '': 'text-danger'}`} htmlFor="terms">Accept Genius Car Terms and Conditions</label>
                <input 
                disabled={!agree}
                className='w-50 mx-auto btn btn-primary mt-3' 
                type="submit" 
                value='Register' />
            </form>
            <p>Already have an account ? <Link to="/login" className="text-primary pe-auto text-decoration-none" onClick={navigateLogin}>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;