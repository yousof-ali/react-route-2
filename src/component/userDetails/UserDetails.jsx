import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const data = useLoaderData()
    const {id,name}=data
    return (
        <div className='text-center'>
            <p>ID: {id}</p>
            <p>Name: {name}</p>
            <Link to={'/users'}><button className='btn btn-primary'>Go Back</button></Link>
        </div>
    );
};

export default UserDetails;