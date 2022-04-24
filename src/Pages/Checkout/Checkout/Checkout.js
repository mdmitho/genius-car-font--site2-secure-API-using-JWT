import React from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../Hooks/useServiceDetail';

const Checkout = () => {
    const {serviceId} = useParams()
    const [service ] = useServiceDetail(serviceId)
    return (
        <div>
            <h1>Please Order : {service.name} </h1>
            <form action="">
                <input type="text" name="name" placeholder='name' required />
            </form>
        </div>
    );
};

export default Checkout;