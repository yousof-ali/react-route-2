import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const PostBetail = () => {
    const data = useLoaderData()
    const {id,title}=data
    return (
        <div className='text-center'>
           <p>ID: {id}</p>
           <p>Title: {title}</p>
           <Link to={'/posts'}><button className='btn btn-primary'>Go Back</button></Link>
        </div>
    );
};

export default PostBetail;