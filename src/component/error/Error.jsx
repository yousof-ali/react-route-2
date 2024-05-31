
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError()
    console.log(error);
    return (
        <div className='text-center'>
            <h1 className='text-3xl'>Ooops!!!!!</h1>
            <p>{error.status}</p>
            <h2>Error</h2>
        </div>
    );
};

export default Error;