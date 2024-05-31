import React from 'react';
import { TbPhotoDown } from 'react-icons/tb';

const Todo = ({todo}) => {
    const {completed,title,id}=todo
    return (
        <div className='border-2'>
            <h2 className='text-2xl'>ID: {id}</h2>
            <p>Title: {title}</p>
            <p>Completed: {completed?"Ture":"False"}</p>
        </div>
    );
};

export default Todo;