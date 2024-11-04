import React, { useEffect, useState } from 'react';
import Categories from './Categories';
import ProductCards from './ProductCards';

const Products = ({data}) => {
    const [allProduct, setAllProduct] = useState([]);
    const [productCategory, setProductCategory] = useState([])

    useEffect(()=>{
        fetch('/public/fake.json')
        .then(res => res.json())
        .then(data => {setAllProduct(data)
            setProductCategory(data)
        })
    },[])

    const handleCategory = (categoryName) =>{
        const categoryProduct = allProduct.filter(product => product.category === categoryName)
        setProductCategory(categoryProduct)
    };
    // console.log(productCategory)

    return (
        <div className='max-w-screen-lg mx-auto'>
            <h2 className='text-center text-3xl font-bold mb-10'>
                show all products here
            </h2>

            <div className='md:flex gap-4'>
                <div>
                    {
                        data.map(category => <Categories category={category} handleCategory={handleCategory} key={category.id}></Categories>)
                    }
                </div>

                {/* <div className='grid grid-cols-3 gap-4'>
                    {
                        productCategory? 
                            productCategory.map(product => <ProductCards product={product} key={product.product_id}></ProductCards>)
                         : 
                            allProduct.map(product => <ProductCards product={product} key={product.product_id}></ProductCards>)
                        
                    }
                </div> */}

<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
    { (productCategory?.length || allProduct?.length) ? 
        (productCategory || allProduct).map(product => (
            <ProductCards product={product} key={product.product_id} />
        )) :
        <p>No products available.</p>
    }
</div>

            </div>
        </div>
    );
};

export default Products;