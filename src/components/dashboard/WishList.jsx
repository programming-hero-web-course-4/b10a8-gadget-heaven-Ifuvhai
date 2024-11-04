import React from 'react';

const WishList = ({wish}) => {
    return (
        <div className=' max-w-screen-lg mx-auto'>
            

            <div className=' border p-4'>
                <div className='flex gap-5'>
                    <img src="" alt="" />
                    <div>
                        <h2>{wish.product_title}</h2>
                        <p>{wish.description}</p>
                        <p>Price: {wish.price}</p>
                    </div>
                </div>
                <button className='btn btn-primary rounded-full'>Add To Cart</button>
            </div>
        </div>
    );
};

export default WishList;