import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../user/User';

const Users = () => {
    const data = useLoaderData()
    return (
        <div>
            <h2 className='text-center text-3xl'>Users: {data.length}</h2>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 text-center '>
               {
                data.map((user,indx)=><User key={indx} user={user}></User>)
               }
            </div>
        </div>
    );
};

export default Users;