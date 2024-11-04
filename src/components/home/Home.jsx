import React from 'react';
import Banner from '../Banner/Banner';
import Products from './Products';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const category = useLoaderData()
    const data = category[0].categories;
    // console.log(data)
    return (
        <div>
            <Banner></Banner>
            <Products data={data}></Products>
        </div>
    );
};

export default Home;