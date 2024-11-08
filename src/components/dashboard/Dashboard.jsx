import React, { useEffect, useState } from 'react';
import NavBar from '../navbar/NavBar';
import Footer from '../footer/Footer';
import { getAllCart, getAllWish, removeCart, removeWish } from '../utilities';
import CartCard from './CartCard';
import WishList from './WishList';
import { useNavigate } from 'react-router-dom';
import { RiEqualizerLine } from 'react-icons/ri';

const Dashboard = () => {
    

    const [product, setProduct] = useState([]);
    const [wishList, setWishList] = useState([])
    const [totalCost, setTotalCost] = useState([])
    const [activeTab, setActiveTab] = useState("Cart");
    const navigate = useNavigate();


    const toggleTab = (tabName) => {
        setActiveTab(tabName);
    };

    useEffect(() => {
        const cart = getAllCart()
        setProduct(cart);
        const wish = getAllWish()
        setWishList(wish);
    }, [])

    const handleDelete = (id) => {
        removeCart(id);
        const cart = getAllCart()
        setProduct(cart);
    }
    const handleWishRemove = (id) => {
        removeWish(id);
        const wish = getAllWish()
        setWishList(wish);
    }

    const handleSort = () => {
        const sorted = [...product].sort((a, b) => b.price - a.price);
        setProduct(sorted);
    };

    const calculateTotalCost = () => {
        return product.reduce((total, item) => total + item.price, 0);
      
    };

    const handlePurchase = () => {
        document.getElementById('my_modal_5').showModal();
        // setProduct([]);
        localStorage.removeItem('cart');
    };

    const handleModalClose = () => {
        document.getElementById('my_modal_5').close();
        navigate('/');
    };

    return (

        <div>
            <NavBar></NavBar>
            <div className="hero bg-purple-700 text-white">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-3xl font-bold">Dashboard</h1>
                        <p className="py-6">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>

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
                <h2 className='text-xl font-bold my-4'>{activeTab === "Cart" ? "Cart" : "Wish List"}</h2>
                {activeTab === "Cart" && (
                    <div className="flex items-center gap-4 my-4">
                        <h2 className='text-lg font-bold'>Total Cost: ${calculateTotalCost()}</h2>
                        <button onClick={handleSort} className="btn btn-outline rounded-full text-purp">
                            Sort By Price
                            <span><RiEqualizerLine></RiEqualizerLine></span>
                        </button>
                        <button onClick={handlePurchase}
                            disabled={!product.length}
                            className="btn btn-outline rounded-full bg-purple-500 text-white">Purchase</button>
                    </div>
                )}
            </div>

            {
                activeTab === "Cart" ? product.map(card => <CartCard key={card.product_id} card={card} handleDelete={handleDelete}></CartCard>) : wishList.map(wish => <WishList wish={wish} key={wish.product_id} handleWishRemove={handleWishRemove}></WishList>)
            }

            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box text-center">
                    <div className='flex justify-center'>
                    <img className='' src="https://i.ibb.co.com/2P6ZQtP/Group.png" alt="" />
                    </div>
                    <h3 className="font-bold text-3xl">Payment Successfully!</h3>
                    <p className="py-4">Thanks for purchasing!</p>
                    <p className='text-2xl font-bold'>Total: $ {calculateTotalCost()}</p>
                    <div className="">
                        <button className="btn w-full" onClick={handleModalClose}>
                            Close
                        </button>
                    </div>
                </div>
            </dialog>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;