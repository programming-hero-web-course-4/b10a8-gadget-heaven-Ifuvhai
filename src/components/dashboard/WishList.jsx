import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const WishList = ({wish, handleWishRemove}) => {
    return (
        <div className=' max-w-screen-lg mx-auto mb-10'>
            

            <div className='flex border p-4 justify-between items-center rounded-lg'>
                <div className='flex gap-5'>
                <img className='w-40' src={wish.product_image} alt="" />
                <div>
                        <h2 className='text-2xl font-medium'>{wish.product_title}</h2>
                        <p className='text-lg font-medium'>{wish.description}</p>
                        <p className='text-lg font-medium'>Price: {wish.price}</p>
                    </div>
                </div>
                <div onClick={() => handleWishRemove(wish.product_id)}><FaTrashAlt></FaTrashAlt></div>
            </div>
        </div>
    );
};

export default WishList;