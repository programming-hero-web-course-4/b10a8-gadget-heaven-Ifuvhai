import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const WishList = ({wish, handleWishRemove}) => {
    return (
        <div className=' max-w-screen-lg mx-auto'>
            

            <div className='flex border p-4 justify-between items-center'>
                <div className='flex gap-5'>
                    <img src="" alt="" />
                    <div>
                        <h2>{wish.product_title}</h2>
                        <p>{wish.description}</p>
                        <p>Price: {wish.price}</p>
                    </div>
                </div>
                <div onClick={() => handleWishRemove(wish.product_id)}><FaTrashAlt></FaTrashAlt></div>
            </div>
        </div>
    );
};

export default WishList;