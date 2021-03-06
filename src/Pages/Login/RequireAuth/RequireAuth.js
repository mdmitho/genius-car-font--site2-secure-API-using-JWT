import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast,ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';


const RequireAuth = ({children}) => {
    const [user,loading] = useAuthState(auth);
    const location =useLocation()

    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);

    if(loading){

        return <Loading></Loading>
    }
    if(!user){
        return <Navigate to='/login' state={{from: location}} replace/>
    }
    if(user.providerData[0]?.providerId==='password' && !user.emailVerified){
        return <div className="container w-50 mt-5">
            <h3 className='text-danger'>Your Email is not verified</h3>
            <h5 className='text-success'>Please Verify Your email address</h5>
            <button className='btn btn-info'
        onClick={async () => {
          await sendEmailVerification();
          toast('Sent email');
        }}
      >
       Send Verify email
      </button>
      <ToastContainer></ToastContainer>
        </div>
    }
    return children
};

export default RequireAuth;