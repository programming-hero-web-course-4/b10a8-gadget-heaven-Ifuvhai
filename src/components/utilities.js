import toast from "react-hot-toast";

 
 const getAllCart = () =>{
    const all = localStorage.getItem('cart')
    if(all){
        const favorites = JSON.parse(all)
        return favorites;
    }
    else{
        return [];
    }
 }
 const getAllWish = () =>{
    const all = localStorage.getItem('wish')
    if(all){
        const favorites = JSON.parse(all)
        return favorites;
    }
    else{
        return [];
    }
 }

 const addToCart = (product)=>{
    const cart = getAllCart();
    const isExist = cart.find(item => item.product_id ===product.product_id)
    if(isExist){
        return toast.error('Already Exist')
    }
    cart.push(product)
    // console.log(cart)
    localStorage.setItem('cart', JSON.stringify(cart))
    toast.success('Added cart Successfully!')
}
 const addToWish = (product)=>{
    const wish = getAllWish();
    const isExist = wish.find(item => item.product_id ===product.product_id)
    if(isExist){
        return toast.error('Already Exist')
    }
    wish.push(product)
    // console.log(cart)
    localStorage.setItem('wish', JSON.stringify(wish))
    toast.success('Added Wish List Successfully!')
}

const removeCart = (id)=>{
    const items = getAllCart();
    const remaining = items.filter(item=> item.product_id !== id)
    localStorage.setItem('cart', JSON.stringify(remaining))
    toast.success('Remove From Cart Successfully!')
}
const removeWish = (id)=>{
    const items = getAllWish();
    const remaining = items.filter(item=> item.product_id !== id)
    localStorage.setItem('wish', JSON.stringify(remaining))
    toast.success('Remove From Wish List Successfully!')
}

export {addToCart, getAllCart, removeCart, addToWish,getAllWish,removeWish}