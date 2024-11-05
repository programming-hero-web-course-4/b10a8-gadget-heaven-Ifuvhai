import React from 'react';
import { Link } from 'react-router-dom';

const Categories = ({category, handleCategory}) => {
    // console.log(category)
    return (
        <div className=''>
            <button onClick={()=>handleCategory(category.category)} className='btn btn-square px-4  border-none m-2 w-full rounded-full'>{category.category}</button>
        </div>
       
    );
};

export default Categories;