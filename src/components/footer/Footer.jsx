import React from 'react';

const Footer = () => {
    return (
        <div className='bg-base-200'>
            <div className='text-center pt-4'>
                <h2 className='text-4xl font-bold pb-4'>Gadget Haven</h2>
                <p>Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <footer className="footer text-base-content place-items-center p-10">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Product Support</a>
                    <a className="link link-hover">Order Tracking</a>
                    <a className="link link-hover">Shipping</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            
        </div>
    );
};

export default Footer;