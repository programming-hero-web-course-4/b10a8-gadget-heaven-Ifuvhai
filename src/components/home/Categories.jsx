import React from 'react';
import { Link } from 'react-router-dom';

const Categories = ({category, handleCategory}) => {
    // console.log(category)
    return (
        <>
            <button onClick={()=>handleCategory(category.category)} className='btn btn-primary m-2'>{category.category}</button>
        </>
       
    );
};

export default Categories;