import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = (props) => {
  const { img, name, seller, ratings, price } = props.product;
  const handleAddToCart = props.handleAddToCart;

  return (
    // <div className='product card py-4 border'>
    //     <img className='w-full' src={img} alt="" />
    //     <div className='product-info'>
    //         <h6 className='product-name'>{name}</h6>
    //         <p>Price: ${price}</p>
    //         <p>Manufacturer: {seller}</p>
    //         <p>Rating: {ratings} Stars</p>
    //     </div>
    //     <button  onClick={() => handleAddToCart(props.product)} className='btn bg-orange-200'>
    //         Add to Cart
    //         <FontAwesomeIcon icon={faShoppingCart} />
    //         </button>
    // </div>

    <div className="card p-2 w-full bg-base-100 shadow-xl">
      <figure className="px-2 pt-4">
        <img
          src={img}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body p-2 items-center text-center">
      <h6 className=''>{name}</h6>
        <p>Price: ${price}</p>
        <p>Manufacturer: {seller}</p>
        <p>Rating: {ratings} Stars</p>
        <div className="card-actions">
        <button  onClick={() => handleAddToCart(props.product)} className='btn w-full bg-orange-200'>
             Add to Cart
             <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
