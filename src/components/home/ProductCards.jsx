import React from 'react';
import { Link } from 'react-router-dom';

const ProductCards = ({ product }) => {
    console.log(product)
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{product.product_title}</h2>
                    <p>Price: {product.price}</p>
                    <div className="card-actions">
                        <Link to={`/product_details/${product.product_id}`}><button className="btn btn-outline rounded-full">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCards;