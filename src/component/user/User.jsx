import React from 'react';
import { Link } from 'react-router-dom';

const User = ({user}) => {
    const {id, name,email,address}=user
    return (
        <div className='border-2 p-4 rounded-xl'>
            <h2 className='text-2xl'>Name: {name}</h2>
            <p>Email: {email}</p>
            <p>City: {address.city}</p>
            <Link to={`/user/${id}`}><button className='btn btn-primary'>see more</button></Link>
        </div>
    );
};

export default User;