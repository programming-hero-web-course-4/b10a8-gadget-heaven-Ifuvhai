import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const CartCard = ({ card, handleDelete }) => {


    return (
        <div className=' max-w-screen-lg mx-auto mb-10'>
            

            <div className='flex border p-4 justify-between items-center rounded-lg'>
                <div className='flex gap-5'>
                    <img className='w-40' src={card.product_image} alt="" />
                    <div>
                        <h2 className='text-2xl font-bold'>{card.product_title}</h2>
                        <p className='text-lg font-medium'>{card.description}</p>
                        <p className='text-lg font-medium'>Price: {card.price}</p>
                    </div>
                </div>
                <div onClick={() => handleDelete(card.product_id)}><FaTrashAlt></FaTrashAlt></div>
            </div>
        </div>
    );
};

export default CartCard;