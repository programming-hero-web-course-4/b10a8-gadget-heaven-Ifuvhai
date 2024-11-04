import React, { useEffect, useState } from 'react';
import NavBar from '../navbar/NavBar';
import Footer from '../footer/Footer';
import { getAllCart, getAllWish, removeCart } from '../utilities';
import CartCard from './CartCard';
import WishList from './WishList';

const Dashboard = () => {
    const [product, setProduct] = useState([]);
    const [wishList, setWishList] = useState([])

    const [activeTab, setActiveTab] = useState("Cart");

    const toggleTab = (tabName) => {
        setActiveTab(tabName);
    };

    useEffect(()=>{
        const cart = getAllCart()
        setProduct(cart);
        const wish = getAllWish()
        setWishList(wish);
    },[])

    const handleDelete = (id) =>{
        removeCart(id);
        const cart = getAllCart()
        setProduct(cart);
    }
    return (
        
        <div>
        <NavBar></NavBar>
        <div className="hero bg-purple-700 text-white">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-3xl font-bold">Product Details</h1>
                    <p className="py-6">
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                    </p>
                    
                    {/* <div role="tablist" className="tabs tabs-boxed">
                        <a role="tab" className="tab tab-active">Cart</a>
                        <a role="tab" className="tab ">Wish List</a>
                        
                    </div> */}
                     <div role="tablist" className="tabs tabs-boxed">
            <a
                role="tab"
                className={`tab ${activeTab === "Cart" ? "tab-active" : ""}`}
                onClick={() => toggleTab("Cart")}
            >
                Cart
            </a>
            <a
                role="tab"
                className={`tab ${activeTab === "Wish List" ? "tab-active" : ""}`}
                onClick={() => toggleTab("Wish List")}
            >
                Wish List
            </a>
        </div>

                </div>
            </div>

        </div>

        <div className='flex justify-between max-w-screen-lg mx-auto'>
                <h2>Cart</h2>
                <div className='flex gap-4'>
                    <h2>Total Cost: 888</h2>
                    <button className='btn btn-outline rounded-full'>Sort By Price</button>
                    <button className='btn btn-outline rounded-full'>Purchase</button>
                </div>
            </div>

        {
           activeTab === "Cart" ?  product.map(card => <CartCard key={card.product_id} card={card} handleDelete={handleDelete}></CartCard>): wishList.map(wish => <WishList wish={wish} key={wish.product_id}></WishList>)
        }
        <Footer></Footer>
    </div>
    );
};

export default Dashboard;