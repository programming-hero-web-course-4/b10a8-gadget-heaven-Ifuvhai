import React, { useEffect, useState } from 'react';
import { CiShoppingCart } from 'react-icons/ci';
import { FaRegHeart } from 'react-icons/fa';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToCart, addToWish, getAllWish } from './utilities';


const ProductDetails = () => {
    const [isWish, setIsWish] = useState(false);

    useEffect(()=>{
        const wish = getAllWish()
        const isExist = wish.find(item => item.product_id ===product.product_id)
        if(isExist){
            setIsWish(true)
        }
    },[])

    const data = useLoaderData()
    const {id} = useParams()
    const product = data.find(product => product.product_id === id);
    console.log(product)

    const handleCart =(product)=>{
        addToCart(product);
        setIsWish(true)
    }
    return (
        <div>
            <div className="hero bg-purple-700 text-white">
                <div className="hero-content text-center pb-40">
                    <div className="max-w-md">
                        <h1 className="text-3xl font-bold">Product Details</h1>
                        <p className="py-6">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>

                    </div>
                </div>
            </div>

            <div className="hero bg-base-200 max-w-screen-md mx-auto -mt-44 mb-10 rounded-lg">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-2xl font-bold">{product.product_title}</h1>
                        <p>Price: $ {product.price}</p>
                        <button className='btn btn-info bg-green-200 rounded-full'>In Stock</button>
                        <p>
                            {product.description}
                        </p>
                        <h2>Specification:</h2>
                        {
                            product.specification.map(quote => <li> { quote}</li>)
                        }
                        

                        <h2>Rating: {product.rating}</h2>
                        <button onClick={()=> addToCart(product)} className="btn btn-primary rounded-full">Add To Cart <CiShoppingCart></CiShoppingCart></button>
                        <button disabled={isWish} onClick={()=> addToWish(product)} className='ml-4'><FaRegHeart></FaRegHeart></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;