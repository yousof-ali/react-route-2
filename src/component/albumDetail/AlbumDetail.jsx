import React from 'react';
import { Link, useLoaderData  } from 'react-router-dom';

const AlbumDetail = () => {
    const data = useLoaderData()
    const {id,title}=data
    

    return (
        <div className='text-center '>
            <p>this is album id : {id}</p>
            <p>Title: {title}</p>
            <Link to={"/albums"}><button className='btn btn-primary'>Go back</button></Link>
        </div>
    );
};

export default AlbumDetail;