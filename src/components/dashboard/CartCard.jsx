import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const CartCard = ({ card, handleDelete }) => {


    return (
        <div className=' max-w-screen-lg mx-auto'>
            

            <div className='flex border p-4 justify-between items-center'>
                <div className='flex gap-5'>
                    <img src="" alt="" />
                    <div>
                        <h2>{card.product_title}</h2>
                        <p>{card.description}</p>
                        <p>Price: {card.price}</p>
                    </div>
                </div>
                <div onClick={() => handleDelete(card.product_id)}><FaTrashAlt></FaTrashAlt></div>
            </div>
        </div>
    );
};

export default CartCard;