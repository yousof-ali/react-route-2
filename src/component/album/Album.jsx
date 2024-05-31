
import React from 'react';

const Album = ({album}) => {
    const{id,title}=album
    return (
        <div className='border-2 rounded-md p-4'>
            <h2 className='text-2xl'>ID: {id}</h2>
            <p>title: {title}</p>
        </div>
    );
};

export default Album;