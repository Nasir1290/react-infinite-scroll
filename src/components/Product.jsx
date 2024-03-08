import React from "react";

const Product = ({title,thumbnail,price}) => {
  return (
    <div className="w-full max-w-sm bg-slate-300 border border-gray-200 rounded-lg shadow ">
      <a href="#">
        <img
          className="p-8 rounded-t-lg"
          src={thumbnail}
          alt="product image"
        />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">
            {title}
          </h5>
        </a>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 ">
            ${price}
          </span>
          <a
            href="#"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default Product;
