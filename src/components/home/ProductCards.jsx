import React from 'react';
import { Link } from 'react-router-dom';

const ProductCards = ({ product }) => {
    // console.log(product)
    return (
        <div>
            <div className="card border lg:h-[450px] bg-base-100 shadow-xl">
                <figure className="p-2">
                    <img
                        src={product.product_image}
                        alt="gadget"
                        className="rounded-xl h-48" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">{product.product_title}</h2>
                    <p className='text-lg font-medium'>Price: {product.price}</p>
                    <div className="card-actions">
                        <Link to={`/product_details/${product.product_id}`}><button className="btn btn-outline rounded-full text-purple-500 border-purple-400">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCards;