import React from 'react';

const Banner = () => {
    return (
        <>
            <div className="hero bg-purple-500 text-white mb-60">
                <div className="hero-content text-center">
                    <div className="max-w-3xl mb-64">
                        <h1 className="text-3xl md:text-5xl font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                        <p className="py-6 max-w-xl mx-auto">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>
                        <button className="btn btn-primary font-bold bg-white text-purple-500 border-none">Shop Now</button>
                    </div>
                </div>
            <div className='p-4 border border-white w-1/2 mx-auto rounded-lg -mb-[500px]'>
                <img className=' rounded-lg ' src="https://i.ibb.co.com/brRspMK/banner.jpg" alt="" />
            </div>
            </div>

        </>

    );
};

export default Banner;