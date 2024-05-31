import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Todo from '../todo/Todo';

const Todos = () => {
    const data = useLoaderData()
    return (
        <div>
            <h2 className='text-3xl text-center'>Todos: {data.length}</h2>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 text-center'>
                {
                    data.map((todo,indx)=><Todo key={indx} todo={todo}></Todo>)
                }
            </div>
        </div>
    );
};

export default Todos;