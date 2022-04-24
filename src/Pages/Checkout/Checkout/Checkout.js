import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../Hooks/useServiceDetail';

const Checkout = () => {
    const {serviceId} = useParams()
    const [service ] = useServiceDetail(serviceId)
    const [user, setUser] = useState({
        name:'Akbar The Great',
        email : "akbar@momo.com",
        address : 'Tajmohol Rwad md.boom',
        phone:'012365489'
    })
    const handleAddressChange = event =>{
        console.log(event.target.value);
        const {address, ...rest} = user
        const newAddress = event.target.value
        const newUser = {address : newAddress, ...rest}
        console.log(newUser);
        setUser(newUser)
    }
    return (
        <div className='w-50 mx-auto'>
            <h1>Please Order : {service.name} </h1>
            <form action="" className=''>
                <input className='w-100 mb-2' value={user.name} type="text" name="name" placeholder='name' required /> <br />
                <input className='w-100 mb-2' value={user.email}  type="email" name="email" placeholder='email' required /> <br />
                <input className='w-100 mb-2' value={service.name} type="text" name="service" placeholder='service' required /> <br />
                <input className='w-100 mb-2' onChange={handleAddressChange} value={user.address} type="text" name="address" placeholder='address' required /> <br />
                <input className='w-100 mb-2' value={user.phone} type="text" name="phone" placeholder='phone' required /> <br />
                <input className='btn btn-primary' type="submit" value="Place Order"></input>
            </form>
        </div>
    );
};

export default Checkout;