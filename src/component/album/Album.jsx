
import React from 'react';
import { Link } from 'react-router-dom';

const Album = ({album}) => {
    const{id,title}=album
    console.log(id)
    return (
        <div className='border-2 rounded-md p-4'>
            <h2 className='text-2xl'>ID: {id}</h2>
            <p>title: {title}</p>
            <Link to={`/album/${id}`}><button className='border-2 p-2 bg-blue-300 text-white'>see more</button></Link>
        </div>
    );
};

export default Album;