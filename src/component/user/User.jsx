import React from 'react';

const User = ({user}) => {
    const {name,email,address}=user
    return (
        <div className='border-2 p-4 rounded-xl'>
            <h2 className='text-2xl'>Name: {name}</h2>
            <p>Email: {email}</p>
            <p>City: {address.city}</p>
        </div>
    );
};

export default User;