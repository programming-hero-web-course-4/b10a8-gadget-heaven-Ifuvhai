import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');
    }
    return (
        <div className='max-w-screen-md mx-auto border p-4 text-center'>

            
            <div className=''>
                <img className='rounded-xl' src="https://i.ibb.co.com/JxkDqGC/custom-error-pages.png" alt="" />
                <p className='text-3xl font-extrabold'>404 Page Not Found</p>
                <p className='text-2xl'>The page you are looking for does not exist.</p>
                <button onClick={handleGoHome} className='btn btn-secondary rounded-full'>Go To Home Page</button>
            </div>
        </div>
    );
};

export default ErrorPage;