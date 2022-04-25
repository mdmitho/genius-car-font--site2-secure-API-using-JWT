import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useAuthState} from 'react-firebase-hooks/auth'
import auth from '../../../firebase.init'

const Order = () => {
    const [orders,setOrders] = useState([])
    const [user] = useAuthState(auth)
    
useEffect(()=>{
    const getOrders = async()=>{
        const email = user.email
        const url = `http://localhost:5000/order?email=${email}`
        const {data} = await axios.get(url)
        setOrders(data)
    }
    getOrders();
},[])

    return (
        <div>
            <h1>Your order : {orders.length}</h1>
        </div>
    );
};

export default Order;