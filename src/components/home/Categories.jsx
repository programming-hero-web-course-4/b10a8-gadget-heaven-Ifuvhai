import React from 'react';
import { Link } from 'react-router-dom';

const Categories = ({category, handleCategory}) => {
    // console.log(category)
    return (
        <div className='mb-2'>
            {/* <Link to={`/category/${category.category}`}>{category.category}</Link> */}
            <button onClick={()=>handleCategory(category.category)} className='btn btn-primary'>{category.category}</button>
        </div>
    );
};

export default Categories;