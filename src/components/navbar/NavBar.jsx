import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { CiShoppingCart } from "react-icons/ci";
import { FaRegHeart } from 'react-icons/fa';
import { getAllCart, getAllWish } from '../utilities';


const NavBar = () => {
    const {pathname}=useLocation()
    const [product, setProduct] = useState([])
    const [wishList, setWishList] = useState([])
console.log(pathname)

    useEffect(()=>{
        const cart = getAllCart()
        setProduct(cart)
        const wish = getAllWish()
        setWishList(wish)
    },[])

    return (
        <div className={` navbar ${pathname === '/dashboard'? 'bg-slate-400': 'bg-purple-500'}  text-white `}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">

                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-sky-400 rounded-lg" : ""
                            }
                        >
                            <li><a>Home</a></li>
                        </NavLink>
                        <NavLink
                            to="/statistics"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-sky-400 rounded-lg" : ""
                            }
                        >
                            <li><a>Statistics</a></li>
                        </NavLink>
                        <NavLink
                            to="/dashboard"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-sky-400 rounded-lg" : ""
                            }
                        >
                            <li><a>Dashboard</a></li>
                        </NavLink>

                    </ul>
                </div>
                <a className="font-bold text-xl md:text-2xl">Gadget Heaven</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-sky-400 rounded-lg" : ""
                        }
                    >
                        <li><a>Home</a></li>
                    </NavLink>
                    <NavLink
                        to="/statistics"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-sky-400 rounded-lg" : ""
                        }
                    >
                        <li><a>Statistics</a></li>
                    </NavLink>
                    <NavLink
                        to="/dashboard"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-sky-400 rounded-lg" : ""
                        }
                    >
                        <li><a>Dashboard</a></li>
                    </NavLink>
                </ul>
            </div>
            <div className="navbar-end">
                <CiShoppingCart />
                <button className="">
                    {/* <FaRegHeart className='ml-4'></FaRegHeart> */}
                    <div className="mb-4">{product.length}</div>
                </button>
                <FaRegHeart className='ml-4'></FaRegHeart>
                <button className="">
                    {/* <FaRegHeart className='ml-4'></FaRegHeart> */}
                    <div className="mb-4">{wishList.length}</div>
                </button>
            </div>
        </div>
    );
};

export default NavBar;