import React from 'react';
import { TbPhotoDown } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const Todo = ({todo}) => {
    const {completed,title,id}=todo
    return (
        <div className='border-2'>
            <h2 className='text-2xl'>ID: {id}</h2>
            <p>Title: {title}</p>
            <p>Completed: {completed?"Ture":"False"}</p>
            <Link to={`/todo/${id}`}><button className="btn btn-primary">see more</button></Link>
        </div>
    );
};

export default Todo;