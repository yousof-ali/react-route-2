import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const TodoDetails = () => {
    const data = useLoaderData()
    const {id,title}=data
    return (
        <div className='text-center'>
            <p>ID : {id}</p>
            <p>title: {title}</p>
            <Link to={"/todos"}><button className='btn btn-primary'>Go Back</button></Link>
            
        </div>
    );
};

export default TodoDetails;